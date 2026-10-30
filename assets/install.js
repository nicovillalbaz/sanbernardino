(() => {
  const supportedOrigin = location.protocol === 'https:' || ['localhost', '127.0.0.1'].includes(location.hostname);
  if (!supportedOrigin) return;

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js', {scope: './'}).catch(() => {});
    });
  }

  const mobile = window.matchMedia('(max-width: 760px)');
  const standalone = window.matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  if (!mobile.matches || standalone) return;

  const localPreview = ['localhost', '127.0.0.1'].includes(location.hostname) && new URLSearchParams(location.search).has('preview-install');
  const ios = /iPad|iPhone|iPod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const android = /Android/i.test(navigator.userAgent);
  if (!ios && !android && !localPreview) return;

  const dismissKey = 'sanber-install-dismissed-until';
  const seenKey = 'sanber-install-seen-this-session';
  const read = (storage, key) => { try { return storage.getItem(key); } catch { return null; } };
  const save = (storage, key, value) => { try { storage.setItem(key, value); } catch {} };
  if (!localPreview && (Number(read(localStorage, dismissKey)) > Date.now() || read(sessionStorage, seenKey))) return;

  let installEvent = null;
  let banner = null;

  function dismiss(days = 14) {
    banner?.remove();
    banner = null;
    document.body.classList.remove('install-banner-open');
    save(localStorage, dismissKey, String(Date.now() + days * 86400000));
  }

  function showInvitation() {
    if (banner || !mobile.matches || window.matchMedia('(display-mode: standalone)').matches) return;
    banner = document.createElement('aside');
    banner.className = 'install-banner';
    banner.setAttribute('aria-label', 'Instalar la guía en el celular');
    banner.innerHTML = '<button class="install-banner-close" type="button" aria-label="Cerrar invitación">×</button><div class="install-banner-mark" aria-hidden="true">✳</div><div class="install-banner-copy"><strong>Llevá San Ber en tu celular</strong><p>Accedé rápido a la guía desde tu pantalla de inicio.</p><p class="install-banner-help" hidden></p></div><button class="install-banner-action" type="button">Agregar</button>';
    document.body.append(banner);
    document.body.classList.add('install-banner-open');
    save(sessionStorage, seenKey, '1');

    banner.querySelector('.install-banner-close').addEventListener('click', () => dismiss());
    const action = banner.querySelector('.install-banner-action');
    let helpOpen = false;
    action.addEventListener('click', async () => {
      if (helpOpen) { dismiss(); return; }
      if (installEvent) {
        const prompt = installEvent;
        installEvent = null;
        prompt.prompt();
        try { await prompt.userChoice; } catch {}
        dismiss(7);
        return;
      }
      const help = banner.querySelector('.install-banner-help');
      help.textContent = ios
        ? 'Tocá Compartir en el navegador y elegí “Agregar a pantalla de inicio”.'
        : 'Abrí el menú del navegador y elegí “Agregar a pantalla de inicio”.';
      help.hidden = false;
      helpOpen = true;
      action.textContent = 'Entendido';
    });
  }

  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    installEvent = event;
    window.setTimeout(showInvitation, 1800);
  });
  window.addEventListener('appinstalled', () => dismiss(365));

  if (localPreview) window.setTimeout(showInvitation, 600);
  else if (ios) window.setTimeout(showInvitation, 3000);
  else if (android) window.setTimeout(showInvitation, 4500);
})();

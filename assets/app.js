const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.getElementById('main-nav');
menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded',String(open));
  mainNav?.classList.toggle('open',open);
});
mainNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuToggle?.setAttribute('aria-expanded','false'); mainNav.classList.remove('open');
}));
document.getElementById('year')?.replaceChildren(String(new Date().getFullYear()));

// Cinco destinos persistentes al alcance del pulgar en pantallas pequeñas.
const currentPage = location.pathname.split('/').pop() || 'index.html';
const bottomLinks = [
  ['index.html','Inicio','<path d="m3 10 9-7 9 7v10H3z"/><path d="M9 20v-7h6v7"/>'],
  ['actividades.html','Actividades','<path d="M12 2 9 12l-6 2 8 1 1 7 3-9 6-2-8-1z"/>'],
  ['lugares.html','Lugares','<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>'],
  ['negocios.html','Negocios','<path d="M3 9h18l-2-5H5zM4 9v12h16V9M9 21v-7h6v7"/>'],
  ['mapa.html','Mapa','<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>']
];
const bottomNav = document.createElement('nav');
bottomNav.className = 'bottom-nav';
bottomNav.setAttribute('aria-label','Navegación principal móvil');
bottomLinks.forEach(([href,label,icon]) => {
  const link = document.createElement('a');
  link.href = href;
  if(href === currentPage || (currentPage === 'historia.html' && href === 'index.html')) link.setAttribute('aria-current','page');
  link.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${icon}</svg><span>${label}</span>`;
  bottomNav.append(link);
});
document.body.append(bottomNav);

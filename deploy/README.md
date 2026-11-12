# Despliegue de la guía en el VPS

**Estado al 12/11/2026:** el paquete público está en `/srv/sanber/releases/20261112-local1` y el enlace `/srv/sanber/current` apunta a esa versión. El Caddyfile activo importa `/etc/caddy/sanber.caddy`. El dominio raíz respondió por HTTPS con certificado válido; las siete páginas, imagen de portada, manifest, service worker, sitemap, robots y archivo de Search Console respondieron 200. HTTP redirige a HTTPS. Tras restaurar el A del dominio raíz y agregar el CNAME, `www.sanber.top` obtuvo certificado válido y respondió **301 hacia `https://sanber.top/`**. A la Cancha siguió respondiendo 200. Los DNS autoritativos de Spaceship y el resolutor público 1.1.1.1 devolvieron el A correcto. Durante el cambio, Caddy tuvo fallos de autorización de `www` por DNS incompleto y un límite temporal de Let's Encrypt; la emisión posterior salió bien. No quedó un problema de TLS pendiente.

## Dominio y activación

1. Probar la navegación en móvil real. Dar de alta `https://sanber.top/` en Search Console y enviar su sitemap. El contenedor GTM sigue siendo el mismo. La propiedad de Search Console de `pages.dev` no se traslada automáticamente.
2. Planificar qué hacer con la versión anterior en Pages: redirigirla al dominio principal o mantenerla como respaldo con canónicas consistentes. No hacer un push automático hasta decidirlo, porque cada push genera una publicación de Pages.

La copia del Caddyfile anterior está en `/etc/caddy/Caddyfile.before-sanber-20261112`. Si la nueva ruta causa un problema, restaurar ese archivo y recargar Caddy. La carpeta `/srv/sanber/releases/20261112-local1` y la publicación antigua de Pages sirven como fuentes de recuperación; ninguna necesita eliminarse durante el cambio.

## Siguientes versiones

Ejecutar `node scripts/configurar-seo.js https://sanber.top` si se regeneran metadatos. Crear un directorio nuevo con `node scripts/preparar-vps.js exports/<version>`; el script falla si ya existe para no pisar una versión anterior. Validarlo con `node scripts/validar-paquete-vps.js exports/<version>`, empaquetarlo y subirlo a una nueva carpeta bajo `/srv/sanber/releases/`. Tras comprobar los archivos, cambiar el enlace `current`. La configuración de Caddy no necesita cambiar para publicar nuevas versiones.

El sitio no necesita proceso Node ni PostgreSQL. Las bibliotecas Leaflet están en `assets/vendor/`; las teselas del mapa se consultan a OpenStreetMap durante la navegación y GTM consulta a Google. Los enlaces de las fichas llevan a servicios externos. La operación del VPS queda compartida con los demás sitios del servidor; mantener respaldos y vigilar disco, memoria y disponibilidad.

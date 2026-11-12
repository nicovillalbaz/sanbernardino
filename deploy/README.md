# Despliegue de la guía en el VPS

**Estado al 12/11/2026:** el paquete público está en `/srv/sanber/releases/20261112-local1` y el enlace `/srv/sanber/current` apunta a esa versión. El Caddyfile activo importa `/etc/caddy/sanber.caddy` y el dominio raíz `sanber.top` responde por HTTPS con certificado válido. Las siete páginas, imagen de portada, manifest, service worker, sitemap, robots y archivo de Search Console respondieron 200 desde el VPS; HTTP redirige a HTTPS. A la Cancha siguió respondiendo 200. Los resolutores públicos 1.1.1.1 y 8.8.8.8 ya devolvían la IP del VPS; el resolutor local del servidor todavía conservaba las IP antiguas por caché. `www.sanber.top` seguía sin CNAME y sin certificado válido.

## Dominio y activación

1. El registro A `@ → 40.160.139.5` ya fue guardado por Nico en Spaceship. Esperar a que caduquen las respuestas de DNS antiguas. Para `www`, crear `CNAME www → sanber.top` si se desea esa variante; Caddy ya tiene su redirección preparada, pero necesita DNS y certificado.
2. Probar la navegación en móvil real. Dar de alta `https://sanber.top/` en Search Console y enviar su sitemap. El contenedor GTM sigue siendo el mismo. La propiedad de Search Console de `pages.dev` no se traslada automáticamente.
3. Planificar qué hacer con la versión anterior en Pages: redirigirla al dominio principal o mantenerla como respaldo con canónicas consistentes. No hacer un push automático hasta decidirlo, porque cada push genera una publicación de Pages.

La copia del Caddyfile anterior está en `/etc/caddy/Caddyfile.before-sanber-20261112`. Si la nueva ruta causa un problema, restaurar ese archivo y recargar Caddy. La carpeta `/srv/sanber/releases/20261112-local1` y la publicación antigua de Pages sirven como fuentes de recuperación; ninguna necesita eliminarse durante el cambio.

## Siguientes versiones

Ejecutar `node scripts/configurar-seo.js https://sanber.top` si se regeneran metadatos. Crear un directorio nuevo con `node scripts/preparar-vps.js exports/<version>`; el script falla si ya existe para no pisar una versión anterior. Validarlo con `node scripts/validar-paquete-vps.js exports/<version>`, empaquetarlo y subirlo a una nueva carpeta bajo `/srv/sanber/releases/`. Tras comprobar los archivos, cambiar el enlace `current`. La configuración de Caddy no necesita cambiar para publicar nuevas versiones.

El sitio no necesita proceso Node ni PostgreSQL. Las bibliotecas Leaflet están en `assets/vendor/`; las teselas del mapa se consultan a OpenStreetMap durante la navegación y GTM consulta a Google. Los enlaces de las fichas llevan a servicios externos. La operación del VPS queda compartida con los demás sitios del servidor; mantener respaldos y vigilar disco, memoria y disponibilidad.

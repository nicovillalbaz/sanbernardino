# San Bernardino · guía local

Sitio estático, sin marca pública definitiva. Tiene portada, historia, lugares, actividades, agenda, directorio, mapa y créditos. El código está conectado a GitHub y tiene una publicación de prueba en `https://sanbernardino.pages.dev/`; no requiere compilación ni base de datos.

## Abrir en local

Desde esta carpeta:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:8080/`. Para subirlo, copiar el contenido de esta carpeta a `public_html`, `www` o la raíz pública configurada. `index.html` es la entrada y todas las rutas internas son relativas.

## Publicación y búsqueda

Cloudflare Pages toma la rama `main` del repositorio GitHub. La configuración es: sin framework, comando de compilación vacío, directorio de salida `.` y directorio raíz `/`. Cada cambio enviado a `main` crea una nueva publicación. La URL `pages.dev` es una prueba pública, no un piloto validado.

Las siete páginas tienen título, descripción, URL canónica, Open Graph y tarjeta social; Inicio incluye datos estructurados `WebSite`. `robots.txt` permite el rastreo y `sitemap.xml` enumera las siete páginas. Al cambiar de dominio, ejecutar `node scripts/configurar-seo.js https://nuevo-dominio.example` y revisar los enlaces antes de enviar los archivos. El contenedor Google Tag Manager `GTM-W6FRFP9K` está instalado en las siete páginas con los fragmentos de `head` y `body`; `node scripts/configurar-gtm.js GTM-W6FRFP9K` reproduce esa instalación. Su funcionamiento y las etiquetas publicadas dentro del contenedor requieren prueba con Tag Assistant. El archivo HTML de verificación de Search Console está en la raíz y debe permanecer allí; Nico verificó la propiedad en Search Console.

## Contenido

- `index.html`: portada, introducción histórica y accesos a las secciones principales.
- `historia.html`: fundación, inmigración alemana y suiza, identidad paraguaya y fuentes.
- `lugares.html`: lago, playas, miradores, patrimonio, anfiteatro, iglesias y capillas.
- `actividades.html`: aventura, deportes acuáticos, cinco espacios de clubes privados, cultura y agenda. La sede Lago Azul figura como anexo del Club Náutico.
- `negocios.html`: 511 fichas visibles en trece áreas, incluida Actividades y recreación, filtros por momento del día y rubro, contacto público disponible y enlace directo a Maps.
- `mapa.html`: mapa táctil de San Bernardino y alrededores cercanos, con zoom, agrupación de pines y filtros por rubro. No accede a la ubicación del visitante ni traza rutas. Se dibujan las 511 fichas activas de negocio con posición comprobada. Las posiciones adicionales viven en `assets/mapa-coordenadas.js`. Ver [alcance y límites](../docs/iniciativas/san-bernardino/21-mapa.md).
- `creditos.html`: procedencia de las imágenes locales y lista desplegable de fuentes de las 511 fichas visibles.
- `assets/catalogo-ampliado.js`, `assets/catalogo-revision.js`, `assets/catalogo-rubros.js` y `assets/catalogo-zonas.js`: fichas comerciales de las pasadas por rubro y territorio; `assets/negocios.js`: fichas iniciales, exclusiones justificadas y lógica del directorio.
- `assets/agenda.js`: datos de eventos y caducidad automática. Cada evento debe tener enlace a su convocatoria.

Al final de Inicio hay un botón hacia Créditos y fuentes. La navegación inferior de cinco destinos aparece en móviles. Profesionales independientes reúne contactos por oficio, con NAVZ primero en Tecnología. Emergencias permanece oculta en la interfaz.

## Instalar como app web

La guía incluye `manifest.webmanifest`, iconos propios y `service-worker.js`. En móvil aparece una invitación para agregarla a la pantalla de inicio: los navegadores que ofrecen instalación muestran su diálogo; en iPhone se indican los pasos desde Compartir. La invitación puede cerrarse y no se muestra dentro de la app ya instalada. La interfaz conserva la barra inferior.

Para que la instalación funcione en un host, publicar toda esta carpeta bajo **HTTPS**. El servidor local `127.0.0.1` sirve para pruebas; abrir el HTML directamente como `file://` no activa el service worker. El cache guarda las páginas y recursos básicos para una apertura sin conexión y almacena imágenes cuando se visitan; Google Maps y los contactos externos requieren red. Al actualizar código o contenido publicado, cambiar la versión `CACHE_NAME` en `service-worker.js` para retirar el cache anterior. La instalación y el aspecto en teléfonos reales siguen pendientes de prueba.

Para revisar la invitación desde una pantalla estrecha de escritorio, abrir `http://127.0.0.1:8080/?preview-install=1` con el servidor local activo. El parámetro sólo activa la vista previa en `localhost` o `127.0.0.1`.

La vista de Negocios fue revisada anteriormente en Chrome a 280, 320 y 390 px. Los accesos y filtros móviles se muestran en filas horizontales deslizables. Al tocar un filtro, la página desplaza la vista hasta los resultados. Las fichas sin fotografía usan una franja de rubro compacta; las fichas fotografiadas aparecen primero dentro de cada categoría. El [control de cobertura por ficha](../docs/iniciativas/san-bernardino/12-cobertura-fichas.md) registra el detalle; la auditoría actual cuenta 361 negocios con foto y 150 sin foto. Las 511 fichas activas tienen pin en el mapa. Los nuevos pines están validados por datos y quedan pendientes de comprobación visual en un teléfono real. La tabla se regenera con `node scripts/generar-cobertura.js`; `node scripts/validar-catalogo.js` comprueba archivos, metadatos y enlaces; `node scripts/auditar-cobertura-integral.js` cuenta fotos y pines sobre todas las fichas activas. Para cada ficha nueva, buscar y revisar una foto del mismo local en la misma pasada que se comprueba la ubicación.

## Estado editorial

Implementación local y publicación técnica de prueba en Cloudflare Pages; sin piloto validado. La [revisión territorial](../docs/iniciativas/san-bernardino/15-barrido-territorial.md) amplió la [pasada por rubros](../docs/iniciativas/san-bernardino/14-revision-por-rubros.md), corrigió enlaces heredados a puntos concretos de Maps y distinguió negocios de municipios próximos con la etiqueta «Cerca de San Ber». Se mantienen cierres temporales, que pueden ser estacionales, y se ocultan cierres permanentes. Los contactos son públicos en las fuentes indicadas. El directorio no acredita por sí solo apertura, horarios o disponibilidad. Los eventos caducan en el navegador al superar `expires`; para agregar uno, editar `assets/agenda.js` con fecha, sede, fuente y vencimiento.

Las imágenes locales provienen de Wikimedia Commons, Love San Bernardino, operadores, SENATUR, medios, un blog con licencia CC BY-SA, Booking.com, Realtor.com y fotos individuales de Google Maps. Todas tienen fuente en `creditos.html`; las de Maps también muestran atribución sobre la tarjeta. Antes de publicar, resolver el derecho de reutilización de las imágenes sin licencia abierta demostrada. La web no utiliza API de pago ni pide clave de Maps. Cada ficha conserva un enlace gratuito a Google Maps. Consultar [la estrategia de imágenes sin facturación](../docs/iniciativas/san-bernardino/11-fotos-google-maps.md) y [el plan de derechos](../docs/iniciativas/san-bernardino/04-imagenes-y-derechos.md).

La guía HTML aportada por Nico permanece como [inventario de investigación](../docs/iniciativas/san-bernardino/03-inventario-inicial.md). Las [siguientes tandas](../docs/iniciativas/san-bernardino/05-hoja-de-ruta.md) cubren ampliación, validación individual, imágenes por negocio, revisión visual móvil y preparación para publicación.





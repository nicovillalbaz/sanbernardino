// Fichas públicas consultadas en Google Maps entre el 29 y el 30/10/2026.
// Un enlace identifica una ficha encontrada, no confirma operación actual.
const businesses = [
  {name:'Comedor La Esperanza – Tatakua', category:'comer', type:'Comedor', area:'Ruta San Bernardino – Altos', phone:'0983 376511',photo:'assets/images/comedor-la-esperanza-maps.jpg',photoAlt:'Fachada del Copetín La Esperanza sobre la ruta San Bernardino–Altos',photoCredit:'Google Maps · Antonio Wu · mar 2024',photoSource:'https://www.google.com/maps?cid=8322566160149768390', maps:'https://www.google.com/maps/place/Comedor+La+Esperanza+-+Tatakua/data=!4m7!3m6!1s0x945db5e361bc8925:0x737fb1d3eb69e8c6!8m2!3d-25.3047362!4d-57.2948439!16s%2Fg%2F11c1v3jl13!19sChIJJYm8YeO1XZQRxuhp69Oxf3M'},
  {name:'Comedor y Lomitería Flia Koen', category:'comer', type:'Comedor y lomitería', area:'San Bernardino', phone:'0971 329816', photo:'assets/images/comedor-flia-koen-maps.jpg',photoAlt:'Plato de almuerzo servido en el Comedor y Lomitería Flia Koen',photoCredit:'Google Maps · Helenita · jul 2026',photoSource:'https://www.google.com/maps?cid=18369890038420865526', maps:'https://www.google.com/maps/place/Comedor+y+Lomiteria+Flia+Koen/data=!4m7!3m6!1s0x945db5e3598e0ffb:0xfeeef5a97f1001f6!8m2!3d-25.3040478!4d-57.2939596!16s%2Fg%2F11ggvd2zh6!19sChIJ-w-OWeO1XZQR9gEQf6n17v4'},
  {name:'Comedor Terraza Del Lago', category:'comer', type:'Comedor', area:'San Bernardino', maps:'https://www.google.com/maps/place/Comedor+Terraza+Del+Lago/data=!4m7!3m6!1s0x945dca7d09d87f79:0x5f0b7c9d4051008c!8m2!3d-25.3345921!4d-57.2733922!16s%2Fg%2F11g8x94yjw!19sChIJeX_YCX3KXZQRjABRQJ18C18'},
  {name:'Comedor Tío Caio', category:'comer', type:'Comedor', area:'San Bernardino', phone:'0981 202695', photo:'assets/images/comedor-tio-caio-maps.jpg',photoAlt:'Patio y entrada del Comedor Tío Caio',photoCredit:'Google Maps · Virginia Lacasa · may 2026',photoSource:'https://www.google.com/maps?cid=3920042026820443667', maps:'https://www.google.com/maps/place/Comedor+T%C3%ADo+caio/data=!4m7!3m6!1s0x945dcb1ce1e08417:0x3666c974413c1e13!8m2!3d-25.3046511!4d-57.277685!16s%2Fg%2F11sc1x6kfw!19sChIJF4Tg4RzLXZQREx48QXTJZjY'},
  {name:'Salón de Belleza Lucy', category:'belleza', type:'Salón de belleza', area:'Av. Guillermo Naumann', phone:'0983 456825', maps:'https://www.google.com/maps/place/Salon+De+Belleza+Lucy/data=!4m7!3m6!1s0x945db5e3e0830a59:0x27421f49ad7a8bf0!8m2!3d-25.3045998!4d-57.2985377!16s%2Fg%2F11g81tsw2k!19sChIJWQqD4OO1XZQR8It6rUkfQic'},
  {name:'Jennifer Gomez Studio', category:'belleza', type:'Centro de estética', area:'San Bernardino', maps:'https://www.google.com/maps/place/Jennifer+Gomez+Studio/data=!4m7!3m6!1s0x945db50016720cf3:0x1cfe5d042187fbc3!8m2!3d-25.3098737!4d-57.2983134!16s%2Fg%2F11mshq8f9j!19sChIJ8wxyFgC1XZQRw_uHIQRd_hw'},
  {name:'Rode Coiffure', category:'belleza', type:'Peluquería', area:'Ruta San Bernardino – Altos', phone:'0961 395166', maps:'https://www.google.com/maps/place/Rode+Coiffure%F0%9F%92%87/data=!4m7!3m6!1s0x945db5fce90fab91:0x553f989f21671986!8m2!3d-25.3035302!4d-57.292757!16s%2Fg%2F11gd30cpv3!19sChIJkasP6fy1XZQRhhlnIZ-YP1U'},
  {name:'SR Nails', category:'belleza', type:'Manicura', area:'Avenida Naumann', phone:'0974 928955', maps:'https://www.google.com/maps/place/SR+Nails/data=!4m7!3m6!1s0x945db5985a7ddb13:0x84bd91430bc26ebf!8m2!3d-25.3427693!4d-57.2743422!16s%2Fg%2F11sfdlgdmt!19sChIJE9t9Wpi1XZQRv27CC0ORvYQ'},
  {name:'Cabron Barber', category:'belleza', type:'Barbería', area:'San Bernardino', phone:'0991 256623', maps:'https://www.google.com/maps/place/Cabron+Barber/data=!4m7!3m6!1s0x945db71b142e5445:0x3295f17a1135df2a!8m2!3d-25.3006017!4d-57.2999233!16s%2Fg%2F11pxvylhtk!19sChIJRVQuFBu3XZQRKt81EXrxlTI'},
  {name:'San Cayetano Supermarket', category:'compras', type:'Supermercado', area:'Av. Guillermo Naumann', phone:'0972 227472', maps:'https://www.google.com/maps/place/San+Cayetano+Supermarket/data=!4m7!3m6!1s0x945dca7c12039a63:0xfa4f425d35a3ba88!8m2!3d-25.3322127!4d-57.2751383!16s%2Fg%2F11f5h59zbt!19sChIJY5oDEnzKXZQRiLqjNV1CT_o'},
  {name:'Tu Super, San Bernardino', category:'compras', type:'Supermercado', area:'Av. Santiago Schaerer', phone:'0512 232 414', maps:'https://www.google.com/maps/place/Tu+Super,+san+Bernardino/data=!4m7!3m6!1s0x945db5e4ff0f078f:0xa16d579fd491c056!8m2!3d-25.3073583!4d-57.2957755!16s%2Fg%2F11cn3v235p!19sChIJjwcP_-S1XZQRVsCR1J9XbaE'},
  {name:'Superseis San Bernardino', category:'compras', type:'Supermercado', area:'Ruta San Bernardino – Altos', phone:'(021) 414 1960', maps:'https://www.google.com/maps/place/Superseis+San+Bernardino/data=!4m7!3m6!1s0x945db506a0110843:0x3dbb614e1404000!8m2!3d-25.30497!4d-57.295627!16s%2Fg%2F11gslv79z9!19sChIJQwgRoAa1XZQRAEBA4RS22wM'},
  {name:'Farmacenter San Bernardino 1', category:'salud', type:'Farmacia', area:'Luis F. Vache esq. Hassler', phone:'(021) 262 6000', website:'https://www.farmacenter.com.py/', maps:'https://www.google.com/maps/place/Farmacenter+San+Bernardino+1/data=!4m7!3m6!1s0x945db5e5e118d42d:0x95c84960f0fceafa!8m2!3d-25.3099553!4d-57.2984087!16s%2Fg%2F11c66tjr79!19sChIJLdQY4eW1XZQR-ur88GBJyJU'},
  {name:'Farmacias Catedral, suc. San Bernardino', category:'salud', type:'Farmacia', area:'San Bernardino 995', phone:'0986 904854', website:'https://www.farmaciacatedral.com.py/', maps:'https://www.google.com/maps/place/Farmacias+Catedral+Suc.+San+Bernardino/data=!4m7!3m6!1s0x945db57c6ba5fd03:0x7ac52637e1b684b3!8m2!3d-25.3053844!4d-57.2954791!16s%2Fg%2F11l31qnqmg!19sChIJA_2la3y1XZQRs4S24TcmxXo'},
  {name:'Punto Farma', category:'salud', type:'Farmacia', area:'Av. Otto Schaerer y Luis F. Vache', phone:'(021) 616 1000', website:'https://www.puntofarma.com.py/', maps:'https://www.google.com/maps/place/Punto+Farma/data=!4m7!3m6!1s0x945db5ff7dd963b5:0xde2035b789730bcb!8m2!3d-25.3156523!4d-57.2892275!16s%2Fg%2F11f6dqfjj_!19sChIJtWPZff-1XZQRywtzibc1IN4'},
  {name:'Ferretería La Candelaria', category:'hogar', type:'Ferretería', area:'San Bernardino', phone:'0971 983765', maps:'https://www.google.com/maps/place/Ferreter%C3%ADa+La+Candelaria/data=!4m7!3m6!1s0x945dcb8925e0137b:0xb5d46e8c4e3c09ee!8m2!3d-25.3443227!4d-57.2729731!16s%2Fg%2F11jbj7wwsc!19sChIJexPgJYnLXZQR7gk8Toxu1LU'},
  {name:'Ferretería Dani', category:'hogar', type:'Ferretería', area:'Calle Prof. E. Bordón', phone:'0981 943862', maps:'https://www.google.com/maps/place/Ferreter%C3%ADa+Dani/data=!4m7!3m6!1s0x945dcb02ec09a783:0x3304fcce502e09ad!8m2!3d-25.3382014!4d-57.2725266!16s%2Fg%2F11k__36yrj!19sChIJg6cJ7ALLXZQRrQkuUM78BDM'},
  {name:'Electroferbasan, suc. Sanber', category:'hogar', type:'Ferretería', area:'Av. Guillermo Naumann', phone:'0512 232 371', maps:'https://www.google.com/maps/place/Electroferbasan+Suc.+Sanber/data=!4m7!3m6!1s0x945db5c0985baaff:0xd24b6999b5633222!8m2!3d-25.3209898!4d-57.2841847!16s%2Fg%2F11gzs3q85f!19sChIJ_6pbmMC1XZQRIjJjtZlpS9I'},
  {name:'La Lilia Café', category:'comer', type:'Cafetería', area:'15 de Agosto', phone:'0983 926131', maps:'https://www.google.com/maps/place/La+Lilia+Caf%C3%A9/data=!4m7!3m6!1s0x945db5afa1e2751f:0xbc79b87dd9957727!8m2!3d-25.3078647!4d-57.3024043!16s%2Fg%2F11kq9k152_!19sChIJH3Xioa-1XZQRJ3eV2X24ebw'},
  {name:'El Café Francés', category:'comer', type:'Cafetería y restaurante', area:'Bicentenario', phone:'0512 232 295', facebook:'https://www.facebook.com/Caf%C3%A9-Frances-262525353772271/', maps:'https://www.google.com/maps/place/El+Caf%C3%A9+Franc%C3%A9s/data=!4m7!3m6!1s0x945db5ef5fc5513f:0x9888b9c060db108f!8m2!3d-25.3109437!4d-57.2951009!16s%2Fg%2F11c4x042lv!19sChIJP1HFX--1XZQRjxDbYMC5iJg'},
  {name:'El Rey Gourmet', category:'comer', type:'Cafetería', area:'Tte. Weiler 401', phone:'0981 130931', photo:'assets/images/el-rey-gourmet-maps.jpg',photoAlt:'Terraza y fachada de El Rey Gourmet',photoCredit:'Google Maps · El Rey Gourmet · ene 2026',photoSource:'https://www.google.com/maps?cid=7468998993552834518', maps:'https://www.google.com/maps/place/El+Rey+Gourmet/data=!4m7!3m6!1s0x945db55cb646a13b:0x67a737031e777fd6!8m2!3d-25.3093682!4d-57.3017044!16s%2Fg%2F11wft9hc75!19sChIJO6FGtly1XZQR1n93HgM3p2c'},
  {name:'Oasis Dream Hotel & Spa', category:'dormir', type:'Hotel', area:'San Bernardino', phone:'0971 100669', website:'https://oasis-dream.com/', maps:'https://www.google.com/maps/place/Oasis+Dream+Hotel+%26+Spa/data=!4m10!3m9!1s0x945db5f99283d3b7:0xcdb1fe467fdb37b0!5m2!4m1!1i2!8m2!3d-25.3043201!4d-57.2961386!16s%2Fg%2F11qp471fnd!19sChIJt9ODkvm1XZQRsDfbf0b-sc0'},
  {name:'Karobé Posada Boutique', category:'dormir', type:'Posada', area:'San Bernardino', phone:'0986 453137', maps:'https://www.google.com/maps/place/Karob%C3%A9+Posada+Boutique,San+Bernardino%2FParaguay./data=!4m10!3m9!1s0x945dcbbd643f33cd:0xc791903641c3b3a0!5m2!4m1!1i2!8m2!3d-25.332248!4d-57.2620624!16s%2Fg%2F11n0czrx59!19sChIJzTM_ZL3LXZQRoLPDQTaQkcc'},
  {name:'Los Alpes Hotel', category:'dormir', type:'Hotel', area:'San Bernardino', phone:'0512 232 083', photo:'assets/images/los-alpes-love.jpg',photoAlt:'Piscina y exterior del Hotel Los Alpes en San Bernardino',photoCredit:'Foto publicada por Love San Bernardino',source:'https://lovesanbernardino.com/guia-local/los-alpes-hotel', maps:'https://www.google.com/maps/place/Los+Alpes+Hotel/data=!4m10!3m9!1s0x945dca79d0e5afc7:0x5289981cc03956a7!5m2!4m1!1i2!8m2!3d-25.3275191!4d-57.2784987!16s%2Fg%2F1tf_pd3h!19sChIJx6_l0HnKXZQRp1Y5wByYiVI'},
  {name:'BORA', category:'noche', type:'Discoteca', area:'Dr. Federico Chávez', phone:'0985 333501', instagram:'https://www.instagram.com/bora_sanber/', maps:'https://www.google.com/maps/place/BORA/data=!4m7!3m6!1s0x945db5002b396da9:0xc190fdf47a10e18a!8m2!3d-25.2994464!4d-57.2875294!16s%2Fg%2F11yv7h97rm!19sChIJqW05KwC1XZQRiuEQevT9kME'},
  {name:'New Mambo', category:'noche', type:'Club nocturno', area:'San Bernardino', maps:'https://www.google.com/maps/place/New+Mambo/data=!4m7!3m6!1s0x945db7002e3f457d:0x65c50ddbd9579b60!8m2!3d-25.2939968!4d-57.287343!16s%2Fg%2F11yv1d592h!19sChIJfUU_LgC3XZQRYJtX2dsNxWU'},
  {name:'La Terraza de Sanber', category:'noche', type:'Bar', area:'Av. Luis F. Vache',photo:'assets/images/la-terraza-sanber-maps.jpg',photoAlt:'Patio con mesas y puestos de La Terraza de Sanber',photoCredit:'Google Maps · Yamandú Sánchez · mar 2023',photoSource:'https://www.google.com/maps?cid=8227148652973505644',maps:'https://www.google.com/maps/place/La+Terraza+de+Sanber/data=!4m7!3m6!1s0x945db5be4df1dd55:0x722cb41c4ed1bc6c!8m2!3d-25.313443!4d-57.2935533!16s%2Fg%2F11ll8fh27z!19sChIJVd3xTb61XZQRbLzRThy0LHI'}
];

businesses.push(...catalogoAmpliado, ...catalogoRevision, ...catalogoRubros, ...catalogoZonas);
function publicBusinessText(value) {
  return String(value || '')
    .replace(/\ben la zona\s+[23456789CFGHJMPQRVWX]{3,4}(?:\+[23456789CFGHJMPQRVWX]{2,3})?\b/gi, 'en San Bernardino')
    .replace(/\bzona\s+[23456789CFGHJMPQRVWX]{3,4}(?:\+[23456789CFGHJMPQRVWX]{2,3})?\b/gi, 'San Bernardino');
}
const negociosOcultos = new Set([
  'Despensa Karina', 'Bodega Boutique San Bernardino',
  'Cangre Burger', 'Don Vito Original · Vaché', 'Yogurberry San Bernardino',
  'La Bodega del Mundo · San Bernardino'
]);
const negociosCercanos = {
  'Apart Hotel Il Faro':'Ypacaraí',
  'Biggie · Highlands':'Ypacaraí',
  'Clínica Cordillera · Altos–San Bernardino':'Altos',
  'Ferretería Carlitos · norte':'Altos',
  'Ferretería Dos Hermanos':'Altos',
  'Taller Mecánico y Tornería':'Altos',
  'Haras La Valtellina':'Altos'
};
for (const item of businesses) {
  const cid = enlacesMapsExactos[item.name];
  if (cid) item.maps = `https://www.google.com/maps?cid=${BigInt(cid).toString()}`;
  if (negociosOcultos.has(item.name)) item.inactive = true;
  if (negociosCercanos[item.name]) { item.nearby = true; item.area = `Cerca de San Ber · ${negociosCercanos[item.name]}`; }
  if (item.name === 'Tía Laura San Ber') { item.area = 'Avenida Guillermo Naumann'; item.phone = '0985 273222'; }
}
const fotosAmpliadas = {
  'Alto Corte San Bernardino': {photo:'alto-corte-maps.jpg',photoAlt:'Fachada nocturna y mesas de Alto Corte en la avenida Guillermo Naumann',photoCredit:'Google Maps · Jhonny Josué Cubero Ureña · dic 2024',photoSource:'https://www.google.com/maps?cid=5513953174239795257'},
  'La Vienesa Sanber': {photo:'la-vienesa-sanber-maps.jpg',photoAlt:'Entrada y mostrador de La Vienesa Sanber',photoCredit:'Google Maps · Hans-Joachim Koenig · ene 2026',photoSource:'https://www.google.com/maps?cid=16553728912786483118'},
  'Don Vito Original · Morínigo': {photo:'don-vito-morinigo-maps.jpg',photoAlt:'Fachada de Don Vito Original sobre la avenida Guillermo Naumann',photoCredit:'Google Maps · Paula Gimenez · nov 2021',photoSource:'https://www.google.com/maps?cid=13771523774881322180'},
  'Patio 1903': {photo:'patio-1903-maps.jpg',photoAlt:'Plato de pasta servido sobre un mantel de Patio 1903',photoCredit:'Google Maps · Sebastian Zubizarreta · ene 2025',photoSource:'https://www.google.com/maps?cid=9680871137147657473'},
  'Panadería San Miguel': {photo:'panaderia-san-miguel-maps.jpg',photoAlt:'Pan recién horneado de Panadería San Miguel',photoCredit:'Google Maps · Panaderia san miguel · mar 2021',photoSource:'https://www.google.com/maps?cid=8642765738969438291'},
  'Restaurante Oktoberfest · Lubos y Swetlana Kögler': {photo:'oktoberfest-restaurante-maps.jpg',photoAlt:'Salón de Restaurante Oktoberfest en la calle Emilio Hassler',photoCredit:'Google Maps · Restaurante Oktoberfest · jul 2025',photoSource:'https://www.google.com/maps?cid=4267873556868398043'},
  'Tía Laura San Ber': {photo:'tia-laura-sanber.webp',photoAlt:'Equipo de Tía Laura frente al letrero del local presentado en San Bernardino en 2020',photoCredit:'InfoNegocios · foto publicada en 2020',photoSource:'https://infonegocios.com.py/infogourmet/tia-laura-delicias-es-mucho-mas-que-una-pasteleria-ahora-tambien-en-san-ber'},
  'Adorei Mar y Tierra Resto Bar': {photo:'adorei-mar-y-tierra.webp',photoAlt:'Terraza con mesas y toldo azul de Adorei Mar y Tierra en San Bernardino',photoCredit:'InfoNegocios · foto publicada en 2026',photoSource:'https://infonegocios.com.py/infogourmet/gastronomia-con-identidad-y-alma-familiar-la-experiencia-adorei-mar-y-tierra-en-san-bernardino'},
  'Manguruyú San Bernardino': {photo:'manguruyu.webp',photoAlt:'Fachada y terraza de Manguruyú junto al lago Ypacaraí',photoCredit:'InfoNegocios · foto publicada en 2022',photoSource:'https://infonegocios.com.py/infogourmet/manguruyu-san-bernardino-un-restaurante-tematico-en-la-playa-que-encontro-su-lugar-a-orillas-del-ypacarai'},
  'PuraPinta Jardín Cervecero': {photo:'purapinta.webp',photoAlt:'Jardín cervecero PuraPinta en San Bernardino, publicado en 2020',photoCredit:'InfoNegocios · foto publicada en 2020',photoSource:'https://infonegocios.com.py/infogourmet/purapinta-el-nuevo-jardin-cervecero-de-la-ciudad-del-verano-hay-que-probar-la-cream-ale'},
  'San Beer Cervecería': {photo:'san-beer.webp',photoAlt:'Encuentro nocturno en San Beer de San Bernardino, fotografiado en 2022',photoCredit:'InfoNegocios · foto publicada en 2022',photoSource:'https://infonegocios.com.py/conosur/san-beer-trae-las-mejores-cervezas-artesanales-del-pais-durante-todo-el-ano-en-san-bernardino-proba-la-de-frutilla'},
  'Karobé Posada Boutique': {photo:'karobe-posada.webp',photoAlt:'Casona de Karobé Posada Boutique rodeada de árboles en San Bernardino',photoCredit:'InfoNegocios · foto publicada en 2022',photoSource:'https://infonegocios.com.py/infoviajes/karobe-posada-boutique-un-hospedaje-con-gastronomia-unica-en-san-bernardino-deliciosa-comida-a-lena'},
  'La Lilia Café': {photo:'la-lilia-cafe.webp',photoAlt:'Patio con mesas y plantas de La Lilia Café en San Bernardino',photoCredit:'InfoNegocios · foto publicada en 2022',photoSource:'https://infonegocios.com.py/infogourmet/la-lilia-cafe-un-lugar-con-encanto-unico-esta-en-san-bernardino'},
  'Juan Valdez Café San Bernardino': {photo:'juan-valdez-san-bernardino.webp',photoAlt:'Fachada y jardín del Juan Valdez Café de San Bernardino',photoCredit:'KompassPY · foto publicada en 2025',photoSource:'https://kompasspy.com/es/biz/juan-valdez-san-bernardino/'},
  'Oasis Dream Hotel & Spa': {photo:'oasis-dream-hotel.webp',photoAlt:'Piscina y fachada del hotel Oasis Dream en San Bernardino',photoCredit:'Oasis Dream · sitio oficial',photoSource:'https://www.oasis-dream.com/en/'},
  'Oasis Dream Spa': {photo:'oasis-dream-spa.webp',photoAlt:'Sala de masajes de Oasis Dream Spa',photoCredit:'Oasis Dream · sitio oficial',photoSource:'https://www.oasis-dream.com/en/le-spa-oasis-dream/'},
  'TAVA Glamping Cerro': {photo:'tava-glamping-cerro.webp',photoAlt:'Cabaña con piscina de TAVA Glamping Cerro',photoCredit:'TAVA Glamping · sitio oficial',photoSource:'https://tavaglamping.com/'},
  'TAVA Wellness': {photo:'tava-wellness.webp',photoAlt:'Zona de descanso del spa TAVA Wellness',photoCredit:'TAVA Glamping · sitio oficial',photoSource:'https://tavaglamping.com/wellness'},
  'Diablada': {photo:'diablada.webp',photoAlt:'Terraza de Diablada con vista al lago Ypacaraí',photoCredit:'Diablada · sitio oficial',photoSource:'https://www.diablada.com.py/'},
  'El Viejo Marino': {photo:'el-viejo-marino.webp',photoAlt:'Plato de mariscos mostrado en la ficha de El Viejo Marino',photoCredit:'SENATUR · Visit Paraguay',photoSource:'https://visitparaguay.travel/establishments/el-viejo-marino'},
  'La Casita Helados': {photo:'la-casita-helado.webp',photoAlt:'Fachada de La Casita Helado en San Bernardino',photoCredit:'SENATUR · Visit Paraguay',photoSource:'https://visitparaguay.travel/establishments/la-casita-helado'},
  'Ferretería Huguito': {photo:'ferreteria-huguito-maps.webp',photoAlt:'Fachada de Ferretería Huguito en una fotografía de 2019',photoCredit:'Google Maps · Edgar Pitta · 2019',photoSource:'https://www.google.com/maps/search/?api=1&query=Ferreteria%20Huguito%20San%20Bernardino%20Paraguay',photoPosition:'center 38%'},
  'Pizzería Avanti': {photo:'avanti-pizzeria-senatur.jpg',photoAlt:'Fachada de Pizzería y Lomitería Avanti en San Bernardino',photoCredit:'SENATUR · Visit Paraguay · fotografía de archivo',photoSource:'https://visitparaguay.travel/establishments/avanti-pizzeria'},
  'Cabañas Los Árboles': {photo:'cabanas-los-arboles-infonegocios.webp',photoAlt:'Cabaña de ladrillo y techo de tejas entre árboles nativos',photoCredit:'InfoNegocios Paraguay · fotografía publicada en 2022',photoSource:'https://infonegocios.com.py/infoviajes/los-arboles-cabanas-un-espacio-verde-y-acogedor-rodeado-de-arboles-nativos-en-san-bernardino'},
  'La Serafina · Cabañas Alpinas': {photo:'la-serafina-infonegocios.webp',photoAlt:'Cabañas alpinas La Serafina junto a la piscina en San Bernardino',photoCredit:'InfoNegocios Paraguay · fotografía publicada en 2021',photoSource:'https://infonegocios.com.py/infoviajes/conoce-en-san-bernardino-cabanas-alpinas-la-serafina-para-una-escapada-diferente'},
  'TAVA Glamping Lago': {photo:'tava-glamping-lago.jpg',photoAlt:'Interior y hamaca de una cabaña de TAVA Glamping Lago',photoCredit:'TAVA Glamping · sitio oficial',photoSource:'https://www.tavaglamping.com/tava-glamping-lago'},
  'Eco Posada Sanber': {photo:'eco-posada-sanber.jpg',photoAlt:'Habitación familiar de Eco Posada Sanber',photoCredit:'Hoteles.com · foto de la ficha de Eco Posada Sanber',photoSource:'https://www.hoteis.com/ho2977998016/eco-posada-sanber-san-bernardino-paraguai/'},
  'Quinta Dos Hermanas · San Ber': {photo:'quinta-dos-hermanas.jpg',photoAlt:'Jardín, piscina y área de descanso de Quinta Dos Hermanas',photoCredit:'Disfrutando Paraguay · foto de la ficha de Quinta Dos Hermanas',photoSource:'https://www.disfrutandoparaguay.com/guia-empresarial/hoteleria/alojamientos/quinta-dos-hermanas'},
  'Apart Hotel Il Faro': {photo:'apart-hotel-il-faro.jpg',photoAlt:'Cabaña alpina de Apart Hotel Il Faro en San Bernardino',photoCredit:'Tripadvisor · foto de la ficha de Apart Hotel Il Faro',photoSource:'https://www.tripadvisor.ch/Hotel_Review-g1635342-d14070515-Reviews-Apart_Hotel_il_Faro-San_Bernardino_Cordillera_Department.html'},
  'Posada Turística Keny': {photo:'posada-keny-laprensa.jpg',photoAlt:'Entrada arbolada y letrero de Posada Turística Keny',photoCredit:'La Prensa Paraguay · fotografía publicada en 2021',photoSource:'https://www.laprensaparaguay.com/2021/06/12/conexion-natural-en-el-corazon-de-san-bernardino/'},
  'Quinta Los Parra': {photo:'quinta-los-parra.jpg',photoAlt:'Piscina y patio de Quinta Los Parra en San Bernardino',photoCredit:'Disfrutando Paraguay · foto de la ficha de Quinta Los Parra',photoSource:'https://www.disfrutandoparaguay.com/guia-empresarial/hoteleria/alojamientos/quinta-los-parra'},
  'Quinta El Escondido': {photo:'quinta-el-escondido.jpg',photoAlt:'Comedor con vista a la piscina de Quinta El Escondido',photoCredit:'Fotografía publicada en Booking.com · Quinta El Escondido',photoSource:'https://www.booking.com/hotel/py/quinta-el-escondido.es.html'},
  'Superseis Express SanBer': {photo:'superseis-express-sanber-lanacion.jpg',photoAlt:'Fachada de Superseis Express inaugurado en San Bernardino en 2021',photoCredit:'La Nación · fotografía de apertura publicada en 2021',photoSource:'https://www.lanacion.com.py/negocios_edicion_impresa/2021/12/26/un-nuevo-superseis-llega-a-san-bernardino/'},
  'La Matilde Lodge': {photo:'la-matilde-lodge-infonegocios.webp',photoAlt:'Vista aérea de las canchas de pádel y cabañas de La Matilde Lodge',photoCredit:'InfoNegocios Paraguay · fotografía de archivo',photoSource:'https://infonegocios.com.py/infoviajes/la-matilde-lodge-un-concepto-diferente-de-san-ber-con-nueve-comodas-cabanas-y-dos-canchas-para-jugar-padel'},
  'Tu Super, San Bernardino': {photo:'tu-super-sanber-infonegocios.webp',photoAlt:'Fachada de Tu Super en San Bernardino',photoCredit:'InfoNegocios Paraguay · fotografía del local',photoSource:'https://infonegocios.com.py/plus/lo-que-necesites-en-la-ciudad-veraniega-lo-encontras-en-tu-super'},
  'Enex San Bernardino': {photo:'enex-san-bernardino-lanacion.jpeg',photoAlt:'Estación de servicio Enex de San Bernardino en su apertura',photoCredit:'La Nación · fotografía publicada en 2021',photoSource:'https://www.lanacion.com.py/negocios/2021/01/30/enex-y-su-tienda-upa-llegaron-a-san-bernardino/'},
  'Tienda upa!': {photo:'upa-san-bernardino-lanacion.jpeg',photoAlt:'Interior de la tienda Upa! en la estación Enex de San Bernardino',photoCredit:'La Nación · fotografía publicada en 2021',photoSource:'https://www.lanacion.com.py/negocios/2021/01/30/enex-y-su-tienda-upa-llegaron-a-san-bernardino/'},
  'Aqua Village': {photo:'aqua-village-raices.jpg',photoAlt:'Laguna y paseo de Aqua Village en Altos',photoCredit:'Raíces Real Estate · sitio oficial de Aqua Village',photoSource:'https://condominios.raices.com.py/aqua-village.php'},
  'Aquabrava': {photo:'aquabrava-abc.jpg',photoAlt:'Vista aérea de la laguna con olas de Aquabrava en Altos',photoCredit:'ABC Color · fotografía publicada en 2025',photoSource:'https://www.abc.com.py/negocios/2025/11/18/aquabrava-inaugura-la-primera-laguna-con-olas-artificiales-de-paraguay/'},
  'Condominio Terrazas del Lago': {photo:'terrazas-del-lago-infocasas.jpg',photoAlt:'Portería y cartel del Condominio Terrazas del Lago',photoCredit:'InfoCasas · foto de la ficha de Terrazas del Lago',photoSource:'https://www.infocasas.com.py/vendo-terreno-en-condominio-terrazas-del-lago-en-san-bernardino/190241283'},
  'Centro de Salud de San Bernardino': {photo:'centro-salud-san-bernardino-abc.jpg',photoAlt:'Fachada del Centro de Salud de San Bernardino',photoCredit:'ABC Color · fotografía publicada en 2024',photoSource:'https://www.abc.com.py/nacionales/2024/06/19/centro-de-salud-de-san-bernardino-carece-de-quirofano/'},
  'IPS · Puesto Sanitario San Bernardino': {photo:'ips-puesto-sanitario-san-bernardino.jpg',photoAlt:'Acceso al Puesto Sanitario de San Bernardino del IPS',photoCredit:'Instituto de Previsión Social · sitio oficial',photoSource:'https://portal.ips.gov.py/sistemas/ipsportal/noticia.php?cod=1999'},
  'Policlínico Municipal de San Bernardino': {photo:'policlinico-municipal-san-bernardino-abc.jpg',photoAlt:'Fachada del Policlínico Municipal de San Bernardino durante su reinauguración',photoCredit:'ABC Color · fotografía publicada en 2022',photoSource:'https://www.abc.com.py/nacionales/2022/11/03/refaccionan-policlinico-municipal-de-san-bernardino/'},
  'Condominio Puntasánber': {photo:'condominio-puntasanber-infocasas.jpg',photoAlt:'Entrada señalizada del Condominio Punta SanBer',photoCredit:'InfoCasas · foto de la ficha de Punta SanBer',photoSource:'https://www.infocasas.com.py/vendo-terreno-en-condominio-punta-sanber/193238676'},
  'Condominio Ayres de Sanber': {photo:'condominio-ayres-sanber-infocasas.jpg',photoAlt:'Portería señalizada del Condominio Ayres de Sanber',photoCredit:'InfoCasas · foto de la ficha de Ayres de Sanber',photoSource:'https://www.infocasas.com.py/vendo-terreno-en-condominio-ayres-de-sanber/192440520'},
  'Alta Pietra Barrio Privado': {photo:'alta-pietra-infocasas.jpg',photoAlt:'Acceso con cartel de Alta Pietra Barrio Privado',photoCredit:'InfoCasas · foto de la ficha de Alta Pietra',photoSource:'https://www.infocasas.com.py/vendo-amplio-terreno-en-condominio-alta-pietra/193315033'},
  'Condominio Petrohué': {photo:'petrohue-infocasas.jpg',photoAlt:'Edificio común y cancha del Condominio Petrohué',photoCredit:'InfoCasas · foto de la ficha de Petrohué',photoSource:'https://www.infocasas.com.py/terreno-en-condominio-petrohue-san-bernardino-lote-3/193167172'},
  'Asismed San Ber': {photo:'asismed-sanber-infonegocios.webp',photoAlt:'Centro médico estacional Asismed San Ber y ambulancia fotografiados en 2023',photoCredit:'InfoNegocios Paraguay · fotografía publicada en 2023',photoSource:'https://infonegocios.com.py/minuto-salud/verano-con-salud-centro-medico-asismed-san-ber-atendera-por-tercer-ano-consecutivo'},
  'Canarias San Ber': {photo:'posada-canarias-infonegocios.jpg',photoAlt:'Jardín y piscina de Posada Canarias en San Bernardino',photoCredit:'InfoNegocios Paraguay · foto de Posada Canarias',photoSource:'https://infonegocios.com.py/default/posada-canarias-un-lugar-para-disfrutar-a-plenitud-de-san-bernardino-muy-cerca-de-la-cuenca-del-lago-ypacarai'},
  'Hotel y Casa Quinta Nilza Rinaldi': {photo:'hotel-nilza-rinaldi-senatur.jpg',photoAlt:'Parque y piscina del Hotel Nilza Rinaldi en San Bernardino',photoCredit:'SENATUR · ficha del Hotel Nilza Rinaldi',photoSource:'https://visitparaguay.travel/accommodations/hotel-nilza-rinaldi-1536'},
  'Cabañas Las Lupitas': {photo:'cabanas-las-lupitas-ruta.jpg',photoAlt:'Piscina iluminada de Cabañas Las Lupitas',photoCredit:'Gabriela González Frias · Google Maps, vía Ruta Paraguaya',photoSource:'https://rutaparaguaya.com/lugar/cabanas-las-lupitas-4350/'},
  'Cabaña de la Cascada': {photo:'cabana-de-la-cascada-ruta.jpg',photoAlt:'Cabañas entre árboles de Cabaña de la Cascada',photoCredit:'Cabaña de la Cascada · Google Maps, vía Ruta Paraguaya',photoSource:'https://rutaparaguaya.com/lugar/cabana-de-la-cascada-4348/'},
  'Cabaña Susana': {photo:'cabana-susana-ruta.jpg',photoAlt:'Jardín de Cabaña Susana',photoCredit:'Miguel Ingles PestanA · Google Maps, vía Ruta Paraguaya',photoSource:'https://rutaparaguaya.com/lugar/cabana-susana-4346/'},
  'Rode Coiffure': {photo:'rode-coiffure-maps.jpg',photoAlt:'Interior y puestos de trabajo de Rode Coiffure en San Bernardino',photoCredit:'Rode Coiffure · Google Maps · feb 2022',photoSource:'https://www.google.com/maps/place/Rode+Coiffure%F0%9F%92%87/data=!4m7!3m6!1s0x945db5fce90fab91:0x553f989f21671986!8m2!3d-25.3035302!4d-57.292757!16s%2Fg%2F11gd30cpv3'},
  'Juan Valdez Café · S6': {photo:'juan-valdez-s6-maps.jpg',photoAlt:'Fachada de Juan Valdez Café junto a S6 en San Bernardino',photoCredit:'Ana Cabrera · Google Maps · jul 2024',photoSource:'https://www.google.com/maps?cid=8239997523657754047'},
  'La Carossa San Bernardino': {photo:'la-carossa-maps.jpg',photoAlt:'Comedor y cava de vinos de La Carossa en San Bernardino',photoCredit:'jack pinto · Google Maps · oct 2026',photoSource:'https://www.google.com/maps?cid=11886793529628302513'},
  'PAN Baviera Exclusiva': {photo:'pan-baviera-exclusiva-maps.jpg',photoAlt:'Canasta de panes y pretzels de PAN Baviera Exclusiva',photoCredit:'PAN Baviera Exclusiva · Google Maps · jul 2026',photoSource:'https://www.google.com/maps?cid=11051424773476889356'},
  'Villa Aurora Café Resto Bar': {photo:'villa-aurora-cafe-maps.jpg',photoAlt:'Mesas y patio de Villa Aurora Café Resto Bar',photoCredit:'Villa Aurora Cafe Resto Bar · Google Maps · jul 2026',photoSource:'https://www.google.com/maps?cid=1248478416334901541'},
  'San Cayetano Supermarket': {photo:'san-cayetano-supermarket-maps.jpg',photoAlt:'Fachada de San Cayetano Supermarket en la avenida Guillermo Naumann',photoCredit:'Denis Estigarribia · Google Maps · jul 2021',photoSource:'https://www.google.com/maps?cid=18036708000741440136'},
  'Superseis San Bernardino': {photo:'superseis-san-bernardino-maps.jpg',photoAlt:'Fachada y estacionamiento de Superseis San Bernardino',photoCredit:'Blasida Cuquejo · Google Maps · jun 2026',photoSource:'https://www.google.com/maps?cid=278016002808102912'},
  'Veterinaria Busy': {photo:'veterinaria-busy-maps.jpg',photoAlt:'Área de artículos para mascotas en Veterinaria Busy',photoCredit:'Belen Marmol · Google Maps · jul 2022',photoSource:'https://www.google.com/maps?cid=4758229939989205067'},
  'Vet Sanber': {photo:'vet-sanber-maps.jpg',photoAlt:'Fachada de Vet Sanber en Ciervo Cuá',photoCredit:'Vet Sanber · Google Maps · sept 2026',photoSource:'https://www.google.com/maps?cid=11761571838025201284'},
  'A Toda Huerta': {photo:'a-toda-huerta-maps.jpg',photoAlt:'Huerta y mesas al aire libre de A Toda Huerta',photoCredit:'Abdel Pérez · Google Maps · sept 2025',photoSource:'https://www.google.com/maps?cid=7124968286368465922'},
  'Braten Todo a la Parrilla': {photo:'braten-parrilla-maps.jpg',photoAlt:'Fachada y cartel de Braten Todo a la Parrilla',photoCredit:'Jovina Romero · Google Maps · ago 2024',photoSource:'https://www.google.com/maps?cid=7872919227881892147'},
  'Comedor Lago Azul': {photo:'comedor-lago-azul-maps.jpg',photoAlt:'Fachada con cartel de Comedor Lago Azul',photoCredit:'Jovina Romero · Google Maps · ago 2024',photoSource:'https://www.google.com/maps?cid=276632063558489514'},
  'Comedor Terraza Del Lago': {photo:'comedor-terraza-del-lago-maps.jpg',photoAlt:'Entrada de madera y piedra de Comedor Terraza Del Lago',photoCredit:'Beatriz Jacquet · Google Maps · jul 2019',photoSource:'https://www.google.com/maps?cid=6848704673177731212'},
  'Don Vito Original · Centro': {photo:'don-vito-centro-maps.png',photoAlt:'Productos de Don Vito Original mostrados por el negocio',photoCredit:'Don Vito ORIGINAL · Google Maps · jul 2019',photoSource:'https://www.google.com/maps?cid=9339697305701531080'},
  'Casa Austria · Sucursal Pirayú-i': {photo:'casa-austria-pirayui-maps.jpg',photoAlt:'Fachada iluminada de Casa Austria, sucursal Pirayú-i',photoCredit:'Rafael Benitez · Google Maps · nov 2021',photoSource:'https://www.google.com/maps?cid=5625815801837519625'},
  'Farmacenter San Bernardino 1': {photo:'farmacenter-san-bernardino-1-maps.jpg',photoAlt:'Fachada verde de Farmacenter San Bernardino 1',photoCredit:'Joacvaz · Google Maps · sept 2025',photoSource:'https://www.google.com/maps?cid=10792957187702188794'},
  'Farmacias Catedral, suc. San Bernardino': {photo:'farmacias-catedral-sanber-maps.jpg',photoAlt:'Fachada azul de Farmacias Catedral en San Bernardino',photoCredit:'Farmacia Catedral · Google Maps · oct 2023',photoSource:'https://www.google.com/maps?cid=8846519064491099315'},
  'Farmacenter San Bernardino 4': {photo:'farmacenter-san-bernardino-4-maps.jpg',photoAlt:'Fachada verde de Farmacenter San Bernardino 4 sobre Guillermo Naumann',photoCredit:'Farmacenter San Bernardino 4 · Google Maps · oct 2026',photoSource:'https://www.google.com/maps?cid=9507480355884004898'},
  'Farmacias Catedral · San Bernardino 3': {photo:'farmacias-catedral-sanber-3-maps.jpg',photoAlt:'Fachada azul y blanca de Farmacias Catedral San Bernardino 3',photoCredit:'Farmacias Catedral San Bernardino 3 · Google Maps · jun 2025',photoSource:'https://www.google.com/maps?cid=2805054072795234501'},
  'Punto Farma · Naumann y Rosa Amendola': {photo:'punto-farma-naumann-amendola-maps.jpg',photoAlt:'Fachada iluminada de Punto Farma en Guillermo Naumann y Rosa Amendola',photoCredit:'Noe Mar · Google Maps · mar 2026',photoSource:'https://www.google.com/maps?cid=3341990120374303693'},
  'Punto Farma · San Bernardino sur': {photo:'punto-farma-mp7h-maps.jpg',photoAlt:'Fachada de Punto Farma en San Bernardino',photoCredit:'El explorador · Google Maps · ene 2026',photoSource:'https://www.google.com/maps?cid=12789961892710106494'},
  'Quiksilver': {photo:'quiksilver-sanber-maps.jpg',photoAlt:'Fachada de la tienda Quiksilver sobre Luis F. Vaché',photoCredit:'Quiksilver · Google Maps · dic 2025',photoSource:'https://www.google.com/maps?cid=5683215573869935570'},
  '4Pets Park · San Bernardino': {photo:'4pets-park-sanber-maps.jpg',photoAlt:'Entrada señalizada de 4Pets Park en San Bernardino',photoCredit:'4Pets Park - San Bernardino · Google Maps · ene 2026',photoSource:'https://www.google.com/maps?cid=3734355461490204659'},
  'New Mambo': {photo:'new-mambo-maps.jpg',photoAlt:'Entrada iluminada de New Mambo durante la noche',photoCredit:'Mathias Zayas · Google Maps · sept 2026',photoSource:'https://www.google.com/maps?cid=7333282806138116960'},
  'Bolocos Açai': {photo:'bolocos-acai-maps.jpg',photoAlt:'Fachada iluminada de Bolocos Açai en San Bernardino',photoCredit:'Fabian Gonzalez · Google Maps · sept 2022',photoSource:'https://www.google.com/maps?cid=6068387132578040230'},
  'Häagen-Dazs San Bernardino': {photo:'haagen-dazs-sanber-maps.jpg',photoAlt:'Fachada blanca de Häagen-Dazs San Bernardino',photoCredit:'Häagen-Dazs San Bernardino · Google Maps · ene 2026',photoSource:'https://www.google.com/maps?cid=7147193129072533317'},
  'Las Delicias de Sady': {photo:'delicias-sady-maps.jpg',photoAlt:'Torta decorada de Las Delicias de Sady',photoCredit:'Sady Barrios · Google Maps · ene 2026',photoSource:'https://www.google.com/maps?cid=14837505208618709276'},
  'El Super Chivito Uruguayo': {photo:'super-chivito-uruguayo-maps.jpg',photoAlt:'Patio nocturno de El Super Chivito Uruguayo',photoCredit:'El Super Chivito Uruguayo San Bernardino · Google Maps · ago 2022',photoSource:'https://www.google.com/maps?cid=12138254580982722778'},
  'Superseis Express · San Bernardino 2': {photo:'superseis-express-sanber-2-maps.jpg',photoAlt:'Interior de Superseis Express San Bernardino 2',photoCredit:'Carlos Ramirez · Google Maps · dic 2022',photoSource:'https://www.google.com/maps?cid=15747709269441350364'},
  'Farmacia Catedral · San Bernardino 2': {photo:'farmacia-catedral-sanber-2-maps.jpg',photoAlt:'Fachada de Farmacia Catedral San Bernardino 2',photoCredit:'Farmacia Catedral Suc San Bernardino 2 · Google Maps · ene 2025',photoSource:'https://www.google.com/maps?cid=8967706199968506266'},
  'La Casita Helados · Naumann': {photo:'la-casita-helados-naumann-maps.jpg',photoAlt:'Terraza nocturna de La Casita Helados en la zona de Naumann',photoCredit:'VIVIAN GONZALEZ FRUTOS · Google Maps · ago 2025',photoSource:'https://www.google.com/maps?cid=2687581473451969676'},
  'Heladería París · S6': {photo:'heladeria-paris-s6-maps.jpg',photoAlt:'Mostrador y cartel de Heladería París junto a Superseis',photoCredit:'Bruno Benitez · Google Maps · ago 2021',photoSource:'https://www.google.com/maps?cid=16495325478332475016'},
  'Bodega Multitragos': {photo:'bodega-multitragos-maps.jpg',photoAlt:'Fachada de Bodega Multitragos sobre Luis F. Vaché',photoCredit:'Jovina Romero · Google Maps · may 2019',photoSource:'https://www.google.com/maps?cid=11962483207013776516'},
  'El Quijote': {photo:'el-quijote-libreria-maps.jpg',photoAlt:'Fachada de la librería El Quijote sobre Santiago Schaerer',photoCredit:'Araceli Britos · Google Maps · feb 2025',photoSource:'https://www.google.com/maps?cid=925294166508876942'},
  'La Pizzería La Italiana': {photo:'pizzeria-la-italiana-maps.jpg',photoAlt:'Fachada y cartel de La Pizzería La Italiana',photoCredit:'Virginia Lacasa · Google Maps · abr 2026',photoSource:'https://www.google.com/maps/place/La+Pizzeria+La+Italiana/data=!4m7!3m6!1s0x945db5f45cafc5dd:0xc0212377d99ee727!8m2!3d-25.3085969!4d-57.294581!16s%2Fg%2F11scysl65c'},
  'La Pizzería Ni Ahí Estoy': {photo:'pizzeria-ni-ahi-estoy-maps.jpg',photoAlt:'Fachada y mesas al aire libre de La Pizzería Ni Ahí Estoy',photoCredit:'Hugo Mosqueira · Google Maps · ene 2024',photoSource:'https://www.google.com/maps/place/Pizzer%C3%ADa+Ni+ahi+estoy/data=!4m7!3m6!1s0x945dca8ffffffffd:0x49eef70b1c421673!8m2!3d-25.3327164!4d-57.27491!16s%2Fg%2F11ckd18f77'},
  'Gelato Café Bar · La Rotonda': {photo:'gelato-cafe-bar-rotonda-maps.jpg',photoAlt:'Puesto de helados fotografiado en La Rotonda',photoCredit:'Mburucuyá Helados San Bernardino La Rotonda · Google Maps · ago 2026',photoSource:'https://www.google.com/maps/place/GelatoCafeBar+San+Bernardino+La+Rotonda/data=!4m7!3m6!1s0x945db500266b3b8f:0x73b501e6cc261a31!8m2!3d-25.3102619!4d-57.3023372!16s%2Fg%2F11mlk2b5yg'},
  'Quiero Fruta · San Bernardino': {photo:'quiero-fruta-sanber-maps.jpg',photoAlt:'Fachada y terraza de Quiero Fruta en San Bernardino',photoCredit:'Hugo Recalde · Google Maps · nov 2019',photoSource:'https://www.google.com/maps/place/Quiero+Fruta+-+San+Bernardino/data=!4m7!3m6!1s0x945db5e258093887:0x4a6306a758ec15d3!8m2!3d-25.3098797!4d-57.2999255!16s%2Fg%2F11gy3l194m'},
  'Dulces Margarita Peña': {photo:'dulces-margarita-pena-maps.jpg',photoAlt:'Cartel de dulces caseros y vivienda en la ficha de Dulces Margarita Peña',photoCredit:'Enrique Gomez de la Fuente · Google Maps · dic 2022',photoSource:'https://www.google.com/maps/place/Dulces+Margarita+Pe%C3%B1a/data=!4m7!3m6!1s0x945db516fabc965f:0xc5a42f5a60df6f75!8m2!3d-25.3023677!4d-57.3016948!16s%2Fg%2F11sdlgyypr'},
  'Confitería Nani': {photo:'confiteria-nani-maps.jpg',photoAlt:'Facturas de canela preparadas por Confitería Nani',photoCredit:'Confiteria Nani · Google Maps · ago 2021',photoSource:'https://www.google.com/maps/place/Confiteria+Nani/data=!4m7!3m6!1s0x945db57d9f7ea09f:0x5a1a80b0ae35f1a4!8m2!3d-25.3121355!4d-57.2898197!16s%2Fg%2F11rwmr33kq'},
  'Lomitería Golden': {photo:'lomiteria-golden-maps.jpg',photoAlt:'Fachada y mostrador de Lomitería Golden',photoCredit:'Lomiteria Golden · Google Maps · ene 2026',photoSource:'https://www.google.com/maps/place/Lomiteria+Golden/data=!4m7!3m6!1s0x945db58a4e94f9eb:0xc61a0b8d98ece7c7!8m2!3d-25.3195324!4d-57.2859043!16s%2Fg%2F11f38rd798'},
  'Lomitería Tía Elva': {photo:'lomiteria-tia-elva-maps.jpg',photoAlt:'Fachada y mesas de Lomitería Tía Elva',photoCredit:'José Manuel Franco Torres · Google Maps · ene 2025',photoSource:'https://www.google.com/maps/place/Lomiteria+T%C3%ADa+Elva/data=!4m7!3m6!1s0x945db55bf52e4297:0x85c12e7ed864f1f9!8m2!3d-25.3000414!4d-57.2956716!16s%2Fg%2F11s7k73q9b'},
  'Lomit Sanber': {photo:'lomit-sanber-maps.jpg',photoAlt:'Fachada nocturna de Lomit Sanber con su cartel',photoCredit:'Aracely A. Franco · Google Maps · sept 2020',photoSource:'https://www.google.com/maps/place/Lomit+Sanber/data=!4m7!3m6!1s0x945db57cb0ca3bed:0x4db338c7755e85ed!8m2!3d-25.2999436!4d-57.2963061!16s%2Fg%2F11kchtdl8f'},
  'Lomitería Kevin': {photo:'lomiteria-kevin-maps.jpg',photoAlt:'Mesas y mostrador de Lomitería Kevin',photoCredit:'Derlis Pinanez · Google Maps · feb 2023',photoSource:'https://www.google.com/maps/place/Lomiteria+Kevin/data=!4m7!3m6!1s0x945dca878d72c7c9:0x38b951482006d460!8m2!3d-25.3367294!4d-57.2722187!16s%2Fg%2F11csprk8np'},
  "Lomilito's Sanber": {photo:'lomilitos-sanber-maps.jpg',photoAlt:'Puesto móvil y mesas de Lomilito’s Sanber',photoCredit:'Mauro Stettler · Google Maps · dic 2020',photoSource:'https://www.google.com/maps/place/Lomilito%27s+Sanber/data=!4m7!3m6!1s0x945dcb051811e35f:0x9e992517f49c30c5!8m2!3d-25.3263892!4d-57.2804787!16s%2Fg%2F11j4mthp41'},
  'Snash Burger San Bernardino': {photo:'snash-burger-maps.jpg',photoAlt:'Puesto y mostrador de Snash Burger con su cartel',photoCredit:'Naxco Vega · Google Maps · ene 2025',photoSource:'https://www.google.com/maps/place/Snash+Burger+San+Bernardino/data=!4m7!3m6!1s0x945dcb4d811adf01:0xb28371497ae8ed28!8m2!3d-25.3282047!4d-57.2786696!16s%2Fg%2F11lz4r0_f9'},
  'La Zapiría': {photo:'la-zapiria-maps.jpg',photoAlt:'Pizza servida en La Zapiría',photoCredit:'Francisco Pino · Google Maps · ene 2025',photoSource:'https://www.google.com/maps/place/La+zapir%C3%ADa/data=!4m7!3m6!1s0x945dcb0043bca66f:0x5954d5b237ad11a8!8m2!3d-25.3319179!4d-57.2753911!16s%2Fg%2F11y2my871m'},
  'Fauna Açai': {photo:'fauna-acai-maps.jpg',photoAlt:'Puesto de Fauna Açai y mesas bajo los árboles',photoCredit:'Mili Berdejo · Google Maps · ene 2025',photoSource:'https://www.google.com/maps/place/Fauna+A%C3%A7ai/data=!4m7!3m6!1s0x945db5001f0eb437:0x876df58e4e689be!8m2!3d-25.3080698!4d-57.3001958!16s%2Fg%2F11ybhz6qmc'},
  'La Casita · Rotonda': {photo:'la-casita-rotonda-maps.jpg',photoAlt:'Cartel de La Casita Helados junto a La Rotonda',photoCredit:'Sandeep Shah · Google Maps · sept 2025',photoSource:'https://www.google.com/maps/place/La+Casita+-+Rotonda/data=!4m7!3m6!1s0x945dcb8973e89d17:0x65a599f366e3629a!8m2!3d-25.3104876!4d-57.3019271!16s%2Fg%2F11vwqf4m52'},
  'Comedor Alexander': {photo:'comedor-alexander-maps.jpg',photoAlt:'Fachada y cartel de Comedor Alexander',photoCredit:'Yonny Daniel Barrios Olimpero · Google Maps · nov 2018',photoSource:'https://www.google.com/maps/place/Comedor+Alexander/data=!4m7!3m6!1s0x945dc9c9ced18e25:0x8eafe88fdcbc8fcc!8m2!3d-25.2902549!4d-57.268488!16s%2Fg%2F11h1yh6r38'},
  'Quinta GardenLau': {photo:'quinta-gardenlau-maps.jpg',photoAlt:'Piscina de Quinta GardenLau al atardecer',photoCredit:'Quinta GardenLau San Bernardino · Google Maps · oct 2025',photoSource:'https://www.google.com/maps/place/Quinta+GardenLau+San+Bernardino/data=!4m7!3m6!1s0x945dcbc74328dd1d:0x3feedcc19e1f1229!8m2!3d-25.3604477!4d-57.2629088!16s%2Fg%2F11zjkt9579'},
  'Quinta Casaccia': {photo:'quinta-casaccia-maps.jpg',photoAlt:'Piscina y terraza de Quinta Casaccia',photoCredit:'Chelsea Servín · Google Maps · ene 2025',photoSource:'https://www.google.com/maps/place/Quinta+Casaccia/data=!4m7!3m6!1s0x945dcbd07d44f977:0xe9080d72eb49dbd8!8m2!3d-25.3192602!4d-57.2788947!16s%2Fg%2F11vlmsnj_8'},
  'Quinta Azul': {photo:'quinta-azul-maps.jpg',photoAlt:'Edificio azul y patio de Quinta Azul',photoCredit:'Cinthia Beatríz Cardozo · Google Maps · ene 2025',photoSource:'https://www.google.com/maps/place/Quinta+Azul/data=!4m7!3m6!1s0x945dcb272abfc99d:0x9e0722755983f023!8m2!3d-25.3218396!4d-57.2594647!16s%2Fg%2F11qm3nqwky'},
  'Quinta El Alba': {photo:'quinta-el-alba-maps.jpg',photoAlt:'Piscina y quincho de Quinta El Alba',photoCredit:'Carolina Meza · Google Maps · sept 2024',photoSource:'https://www.google.com/maps/place/Quinta+El+Alba/data=!4m7!3m6!1s0x945dcb0025a8f8a1:0x73c175c7fc8ff994!8m2!3d-25.3529917!4d-57.2630559!16s%2Fg%2F11lcpnt888'},
  'Quinta Rosso Casa Country': {photo:'quinta-rosso-maps.jpg',photoAlt:'Piscina y jardín de Quinta Rosso Casa Country',photoCredit:'Quinta Rosso Casa Country San Bernardino · Google Maps · oct 2026',photoSource:'https://www.google.com/maps/place/Quinta+Rosso+Casa+Country+San+Bernardino/data=!4m7!3m6!1s0x945dcb66609dc337:0x6226c2c860480ab2!8m2!3d-25.3583559!4d-57.2506839!16s%2Fg%2F11lm0jpw_3'},
  'Casa Quinta Galiano 2': {photo:'casa-quinta-galiano-2-maps.jpg',photoAlt:'Piscina y patio de Casa Quinta Galiano 2',photoCredit:'Hd muebles · Google Maps · ago 2026',photoSource:'https://www.google.com/maps/place/Casa+quinta+Galiano+2/data=!4m7!3m6!1s0x945dcb00545e1ad1:0xb7bdcb3fcc216bf9!8m2!3d-25.3564651!4d-57.280592!16s%2Fg%2F11nv0_p7sk'},
  'Quinta Florentín Giménez': {photo:'quinta-florentin-gimenez-maps.jpg',photoAlt:'Piscina y jardín de Quinta Florentín Giménez',photoCredit:'Micaela Paez · Google Maps · oct 2026',photoSource:'https://www.google.com/maps/place/Quinta+Florentin+Gimenez/data=!4m7!3m6!1s0x945dcb0032772c1b:0x18f57c717f30bb39!8m2!3d-25.3387751!4d-57.2672931!16s%2Fg%2F11yyx2vkl1'},
  'Quinta Los Parra I · Pucon': {photo:'quinta-los-parra-i-pucon-maps.jpg',photoAlt:'Entrada de Quinta Los Parra I · Pucon',photoCredit:'Quinta Los Parra I · Pucon · Google Maps · oct 2018',photoSource:'https://www.google.com/maps/place/QUINTA+LOS+PARRA+I+-+PUCON/data=!4m7!3m6!1s0x945dcbd43852bb49:0xe1ad96f1c09d4086!8m2!3d-25.3578565!4d-57.2506224!16s%2Fg%2F11fd6k0_r7'},
  'HETŪ Sunset Bar': {photo:'hetu-sunset-bar-maps.jpg',photoAlt:'Terraza y escalinata de HETŪ Sunset Bar',photoCredit:'Philip Schulz · Google Maps · mar 2026',photoSource:'https://www.google.com/maps/place/HET%C5%AA+SUNSET+BAR/data=!4m7!3m6!1s0x945dcb001ad0d915:0x5f84eb237b7c5493!8m2!3d-25.308351!4d-57.274174!16s%2Fg%2F11n3kgshjw'},
  'Bar La Doña': {photo:'bar-la-dona-maps.jpg',photoAlt:'Fachada y cartel de Bar La Doña',photoCredit:'Derlis Rivas · Google Maps · feb 2017',photoSource:'https://www.google.com/maps/place/Bar+La+Do%C3%B1a/data=!4m7!3m6!1s0x945dca8454edf23d:0xcf5bc4a854a7310a!8m2!3d-25.3440068!4d-57.2736004!16s%2Fg%2F11c5zy7zh0'},
  'Favela Boho': {photo:'favela-boho-maps.jpg',photoAlt:'Espacio nocturno de Favela Boho iluminado entre los árboles',photoCredit:'Fernando Santacruz · Google Maps · ene 2025',photoSource:'https://www.google.com/maps/place/Favela+Boho/data=!4m7!3m6!1s0x945dcb7c9647dd8b:0xc9d953d65c028c22!8m2!3d-25.3151766!4d-57.2668144!16s%2Fg%2F11tp6yvqw6'},
  'Braten': {photo:'braten-maps.jpg',photoAlt:'Frente iluminado del bar Braten',photoCredit:'Gustavo Villalba · Google Maps · dic 2023',photoSource:'https://www.google.com/maps/place/Braten/data=!4m7!3m6!1s0x945dcbd2fb5cc17b:0x919b5c79d16ee3d1!8m2!3d-25.3594139!4d-57.2726767!16s%2Fg%2F11vjtfmtrh'},
  'Carolina Zárate Spa Boutique': {photo:'carolina-zarate-spa-maps.jpg',photoAlt:'Sala de tratamientos de Carolina Zárate Spa Boutique',photoCredit:'Carolina Zárate Spa Boutique · Google Maps · ene 2023',photoSource:'https://www.google.com/maps/place/Carolina+Z%C3%A1rate+Spa+Boutique/data=!4m7!3m6!1s0x945db5af2506c88f:0x292875cd43aa8876!8m2!3d-25.3082914!4d-57.30227!16s%2Fg%2F11k9bpgm6w'},
  'CONSTANCE Barber Studio': {photo:'constance-barber-studio-maps.jpg',photoAlt:'Interior y sillón de CONSTANCE Barber Studio',photoCredit:'Gustavo Giménez · Google Maps · jun 2026',photoSource:'https://www.google.com/maps/place/CONSTANCE+BARBER+STUDIO/data=!4m7!3m6!1s0x945dcb00197a7fb3:0x417634bcafd772e8!8m2!3d-25.2964324!4d-57.2787807!16s%2Fg%2F11m_6vslnx'},
  'SR Nails': {photo:'sr-nails-maps.jpg',photoAlt:'Interior del salón de manicura SR Nails',photoCredit:'SR Nails · Google Maps · nov 2021',photoSource:'https://www.google.com/maps/place/SR+Nails/data=!4m7!3m6!1s0x945db5985a7ddb13:0x84bd91430bc26ebf!8m2!3d-25.3427693!4d-57.2743422!16s%2Fg%2F11sfdlgdmt'},
  'Cabron Barber': {photo:'cabron-barber-maps.jpg',photoAlt:'Jardín y fachada de Cabron Barber al atardecer',photoCredit:'Cabron Barber · Google Maps · oct 2025',photoSource:'https://www.google.com/maps/place/Cabron+Barber/data=!4m7!3m6!1s0x945db71b142e5445:0x3295f17a1135df2a!8m2!3d-25.3006017!4d-57.2999233!16s%2Fg%2F11pxvylhtk'},
  'Espacio Cultural Origen': {photo:'espacio-cultural-origen-maps.jpg',photoAlt:'Actuación de danza en Espacio Cultural Origen',photoCredit:'Espacio Cultural Origen · Google Maps · feb 2025',photoSource:'https://www.google.com/maps?cid=6952453208210711992'},
  'Es Vedrá San Bernardino': {photo:'es-vedra-san-bernardino.webp',photoAlt:'Capilla de Es Vedrá con el lago Ypacaraí al fondo',photoCredit:'InfoNegocios Paraguay · fotografía publicada en 2024',photoSource:'https://infonegocios.com.py/amp/y-ademas/el-lugar-del-momento-es-vedra-el-centro-de-eventos-mas-lujoso-del-paraguay-en-san-bernardino'},
  'Cavalava San Bernardino': {photo:'cavalava-sanber-maps.webp',photoAlt:'Fachada de Cavalava San Bernardino con letrero de Cavallaro Express',photoCredit:'Cavalava San Bernardino · Google Maps · jul 2026',photoSource:'https://www.google.com/maps?cid=15194842377453628335'},
  'Laundry San Bernardino': {photo:'laundry-san-bernardino-maps.jpg',photoAlt:'Fachada de Laundry San Bernardino con el cartel del local',photoCredit:'LAUNDRY SB · Google Maps · ago 2023',photoSource:'https://www.google.com/maps?cid=12449271638573459014'},
  'Lavandería AO Johei Sanber': {photo:'lavanderia-ao-johei-maps.webp',photoAlt:'Fachada de Lavandería AO Johei Sanber sobre Colonos Alemanes',photoCredit:'Lavandería AO Johei Sanber · Google Maps · may 2026',photoSource:'https://www.google.com/maps?cid=15099234920591849968'},
  'Lavandería San Valentín': {photo:'lavanderia-san-valentin-maps.jpg',photoAlt:'Equipo de Lavandería San Valentín frente al local',photoCredit:'San Valentín · Google Maps · jul 2021',photoSource:'https://www.google.com/maps?cid=10158678851054017903'},
  'Imprenta Sanber': {photo:'imprenta-sanber-maps.jpg',photoAlt:'Entrada y letrero de Imprenta Sanber e Imagen Corporativa',photoCredit:'Imagen corporativa · Google Maps · sept 2022',photoSource:'https://www.google.com/maps?cid=5203194381456459270'},
  'Servicio de Alquileres La Candelaria': {photo:'alquileres-la-candelaria-maps.jpg',photoAlt:'Salón preparado para un evento por Alquileres La Candelaria',photoCredit:'Servicio de Alquileres La Candelaria · Google Maps · dic 2020',photoSource:'https://www.google.com/maps?cid=13503153095289313361'},
  'Jennifer Gomez Studio': {photo:'jennifer-gomez-studio-maps.jpg',photoAlt:'Peinado realizado en Jennifer Gomez Studio',photoCredit:'Lorena Orraballi · Google Maps · sept 2026',photoSource:'https://www.google.com/maps?cid=2089209549470301123'},
  'Rikibarber Shop': {photo:'rikibarber-shop-maps.jpg',photoAlt:'Interior y silla de peluquería de Rikibarber Shop',photoCredit:'Ricardo Emilio Godoy · Google Maps · ago 2022',photoSource:'https://www.google.com/maps?cid=15921532477376003940'},
  'Quinta Don Kiko Bajac': {photo:'quinta-don-kiko-bajac-maps.jpg',photoAlt:'Piscina, palmeras y patio de Quinta Don Kiko Bajac',photoCredit:'Blanca Bazzano · Google Maps · abr 2023',photoSource:'https://www.google.com/maps?cid=6821881102147127500'},
  'Quinta Mía': {photo:'quinta-mia-maps.jpg',photoAlt:'Patio arbolado, hamaca y piscina de Quinta Mía',photoCredit:'QUINTA MIA · Google Maps · ene 2023',photoSource:'https://www.google.com/maps?cid=9342474581155853464'},
  'Quinta Don Plutarco': {photo:'quinta-don-plutarco-maps.jpg',photoAlt:'Piscina y fuente de agua de Quinta Don Plutarco',photoCredit:'Quinta Don Plutarco · Google Maps · oct 2024',photoSource:'https://www.google.com/maps?cid=18177769696330229424'},
  'Quinta JYE': {photo:'quinta-jye-maps.jpg',photoAlt:'Piscina de Quinta JYE al atardecer',photoCredit:'Jorge Lopez · Google Maps · ene 2026',photoSource:'https://www.google.com/maps?cid=3655826270509344234'},
  'Casa Quinta Mi Pequeño Gran Sueño II': {photo:'casa-quinta-mi-pequeno-gran-sueno-ii-maps.jpg',photoAlt:'Piscina y casa de Casa Quinta Mi Pequeño Gran Sueño II',photoCredit:'CASA QUINTA MI PEQUEÑO GRAN SUEÑO II · Google Maps · ene 2023',photoSource:'https://www.google.com/maps?cid=6688401034437195119'},
  'Quinta Ypa Sanber': {photo:'quinta-ypa-sanber-maps.jpg',photoAlt:'Piscina y casa de Quinta Ypa Sanber',photoCredit:'Marco Gauto · Google Maps · sept 2022',photoSource:'https://www.google.com/maps?cid=8135524678952008139'},
  'Quinta Flia. Núñez': {photo:'quinta-flia-nunez-maps.jpg',photoAlt:'Jardín con palmeras, casa y piscina de Quinta Flia. Núñez',photoCredit:'Shirley Nuñez · Google Maps · ene 2025',photoSource:'https://www.google.com/maps?cid=6636807636632954192'},
  'Quinta La Soñada': {photo:'quinta-la-sonada-maps.jpg',photoAlt:'Patio, jardín y piscina de Quinta La Soñada',photoCredit:'Eli Mora · Google Maps · sept 2026',photoSource:'https://www.google.com/maps?cid=16076248342012731582'},
  'Casa Quinta Los Villa': {photo:'casa-quinta-los-villa-maps.jpg',photoAlt:'Piscina y patio de Casa Quinta Los Villa',photoCredit:'Noemi Villalba Villasanti · Google Maps · oct 2020',photoSource:'https://www.google.com/maps?cid=5527819658319289768'},
  'Quinta Ana María': {photo:'quinta-ana-maria-maps.jpg',photoAlt:'Acceso con cartel de Quinta Ana María',photoCredit:'Gonzalo Resquin · Google Maps · ago 2026',photoSource:'https://www.google.com/maps?cid=6024179010475903010'},
  'Entre Pinos': {photo:'entre-pinos-maps.jpg',photoAlt:'Piscina y jardín de Entre Pinos',photoCredit:'Ricardo Sotelo · Google Maps · oct 2023',photoSource:'https://www.google.com/maps?cid=13648720893844896005'},
  'Quinta Sanber': {photo:'quinta-sanber-maps.jpg',photoAlt:'Casa y piscina de Quinta Sanber',photoCredit:'Quinta sanber · Google Maps · ene 2022',photoSource:'https://www.google.com/maps?cid=5875711482841946960'},
  'Casa Quinta Cielo Azul': {photo:'casa-quinta-cielo-azul-booking.jpg',photoAlt:'Casa y piscina iluminada de Casa Quinta Cielo Azul',photoCredit:'Booking.com · Google Vacation Rentals vía Maps',photoSource:'https://www.google.com/maps?cid=11620353747609844968'},
  'Casa Don Liborio': {photo:'casa-don-liborio-maps.jpg',photoAlt:'Postres helados publicados en la ficha de Casa Don Liborio',photoCredit:'Casa Don Liborio · Google Maps · ene 2026',photoSource:'https://www.google.com/maps?cid=17473023128608413206'},
  'Ferretería La Candelaria': {photo:'ferreteria-la-candelaria-maps.jpg',photoAlt:'Cartel de Ferretería La Candelaria',photoCredit:'Haniela Jazmín Penayo Torales · Google Maps · jul 2020',photoSource:'https://www.google.com/maps?cid=13102218764814649838'},
  'Quinta Victoria Roga': {photo:'quinta-victoria-roga-maps.jpg',photoAlt:'Patio y acceso de Quinta Victoria Roga',photoCredit:'Jorge Kyle · Google Maps · jun 2026',photoSource:'https://www.google.com/maps?cid=1466342769192669666'},
  'Emilse Segovia Coiffure': {photo:'emilse-segovia-coiffure-maps.jpg',photoAlt:'Peinado recogido realizado por Emilse Segovia Coiffure',photoCredit:'Emilse Segovia Coiffure · Google Maps · ene 2023',photoSource:'https://www.google.com/maps?cid=415000236506333755'},
  'NERI ESPÍNOLA masculino/femenino': {photo:'neri-espinola-maps.jpg',photoAlt:'Fachada de Neri Espínola masculino y femenino en 2023',photoCredit:'NERI ESPINOLA MASCULINO/FEMENINO · Google Maps · oct 2023',photoSource:'https://www.google.com/maps?cid=8339459816782340365'},
  'SaraLi Salón de Belleza': {photo:'sarali-salon-belleza-maps.jpg',photoAlt:'Puesto de peinado y espejo en SaraLi Salón de Belleza',photoCredit:'SaraLi Salón de Belleza · Google Maps · feb 2021',photoSource:'https://www.google.com/maps?cid=5016792798078307257'},
  'ÁVA Club Sanber': {photo:'ava-club-sanber-maps.jpg',photoAlt:'Recepción y letrero de ÁVA Club Sanber',photoCredit:'Juan carlos Aguilera frutos · Google Maps · ene 2023',photoSource:'https://www.google.com/maps?cid=5725822333802615209'},
  'Anyprieto Makeup': {photo:'anyprieto-makeup-maps.jpg',photoAlt:'Cartel de Anyprieto Makeup con su contacto en San Bernardino',photoCredit:'Analia Prieto · Google Maps · nov 2023',photoSource:'https://www.google.com/maps?cid=16611183940570633736'},
  'Maestic Spa': {photo:'maestic-spa-maps.jpg',photoAlt:'Fachada y cartel de Maestic Spa sobre Julio Büttner',photoCredit:'Pamelita Paredes · Google Maps · feb 2026',photoSource:'https://www.google.com/maps?cid=15799080687924870225'}
};
for(const item of businesses){
  const foto=fotosAmpliadas[item.name];
  if(foto) Object.assign(item,{...foto,photo:`assets/images/${foto.photo}`});
}
const cafeFrances = businesses.find(item => item.name === 'El Café Francés');
if(cafeFrances){cafeFrances.photo='assets/images/cafe-frances.jpg';cafeFrances.photoAlt='Fachada del Café Francés en San Bernardino';cafeFrances.photoCredit='Cmasi / Wikimedia Commons · CC BY-SA 4.0 · 2018';cafeFrances.photoSource='https://commons.wikimedia.org/wiki/File:Caf%C3%A9_Franc%C3%A9s_in_San_Bernardino.jpg';cafeFrances.description='Café y cocina en una fachada clásica de San Bernardino.';cafeFrances.tags=['merienda'];}
const laLilia = businesses.find(item => item.name === 'La Lilia Café');
if(laLilia){laLilia.description='Café para hacer una pausa en la calle 15 de Agosto.';laLilia.tags=['merienda'];}
for(const item of businesses){
  if(item.photo && !item.photoSource && item.source) item.photoSource = item.source;
  if(!item.tags) item.tags=[];
  if(/comedor/i.test(item.type) && !item.tags.includes('almuerzo')) item.tags.push('almuerzo');
  if(/barber/i.test(item.type)) item.tags.push('barberia');
  if(/peluquer[ií]a/i.test(item.type)) item.tags.push('peluqueria');
  if(/manicura/i.test(item.type)) item.tags.push('unas');
  if(/supermercado/i.test(item.type)) item.tags.push('supermercados');
  if(/panader[ií]a|boller[ií]a|medialunas|confiter[ií]a/i.test(item.type)) item.tags.push('panaderias');
  if(/helader[ií]a|yogurter[ií]a/i.test(item.type)) item.tags.push('heladerias');
  if(/pizzer[ií]a/i.test(item.type)) item.tags.push('pizzerias');
  if(/lomiter[ií]a|hamburgueser[ií]a/i.test(item.type)) item.tags.push('lomiterias');
  if(/parrilla/i.test(item.type)) item.tags.push('parrillas');
}

const businessGrid = document.getElementById('business-grid');
const businessCount = document.getElementById('business-count');
const businessEmpty = document.getElementById('business-empty');
const businessFilters = [...document.querySelectorAll('[data-business-filter]')];
const businessCategoryOrder = ['comer','dormir','noche','recreacion','belleza','deportes','compras','salud','mascotas','hogar','movilidad','servicios','inmuebles'];
const detailedBusinessFilters = {
  desayuno: item => item.tags.includes('desayuno'),
  almuerzo: item => item.tags.includes('almuerzo'),
  merienda: item => item.tags.includes('merienda'),
  cena: item => item.tags.includes('cena'),
  rapida: item => item.tags.includes('rapida'),
  panaderias: item => item.tags.includes('panaderias'),
  heladerias: item => item.tags.includes('heladerias'),
  pizzerias: item => item.tags.includes('pizzerias'),
  lomiterias: item => item.tags.includes('lomiterias'),
  parrillas: item => item.tags.includes('parrillas'),
  aventura: item => item.tags.includes('aventura'),
  acuaticas: item => item.tags.includes('acuaticas'),
  vuelos: item => item.tags.includes('vuelos'),
  alquileres: item => item.tags.includes('alquileres'),
  peluqueria: item => item.tags.includes('peluqueria'),
  barberia: item => item.tags.includes('barberia'),
  unas: item => item.tags.includes('unas'),
  maquillaje: item => item.tags.includes('maquillaje'),
  masajes: item => item.tags.includes('masajes'),
  gimnasios: item => item.tags.includes('gimnasios'),
  deportes: item => item.tags.includes('deportes'),
  'canchas-futbol': item => item.tags.includes('canchas-futbol'),
  padel: item => item.tags.includes('padel'),
  tenis: item => item.tags.includes('tenis'),
  'otros-deportes': item => item.tags.includes('otros-deportes'),
  'centros-salud': item => item.tags.includes('centros-salud'),
  odontologia: item => item.tags.includes('odontologia'),
  farmacias: item => /farmacia/i.test(item.type),
  minimercados: item => item.tags.includes('minimercados'),
  despensas: item => item.tags.includes('despensas'),
  bodegas: item => item.tags.includes('bodegas'),
  supermercados: item => item.tags.includes('supermercados'),
  carnicerias: item => item.tags.includes('carnicerias'),
  quintas: item => item.tags.includes('quintas'),
  florerias: item => item.tags.includes('florerias'),
  librerias: item => item.tags.includes('librerias'),
  tiendas: item => item.tags.includes('tiendas'),
  tecnologia: item => item.tags.includes('tecnologia'),
  estaciones: item => item.tags.includes('estaciones'),
  talleres: item => item.tags.includes('talleres'),
  lavaderos: item => item.tags.includes('lavaderos'),
  repuestos: item => item.tags.includes('repuestos'),
  inmobiliarias: item => item.tags.includes('inmobiliarias'),
  barrios: item => item.tags.includes('barrios'),
  loteamientos: item => item.tags.includes('loteamientos'),
  imprentas: item => item.tags.includes('imprentas'),
  lavanderias: item => item.tags.includes('lavanderias'),
  formacion: item => item.tags.includes('formacion'),
  bancos: item => item.tags.includes('bancos'),
  cajeros: item => item.tags.includes('cajeros'),
  eventos: item => item.tags.includes('eventos')
};
const requestedBusinessFilter = new URLSearchParams(window.location.search).get('rubro');
const requestedBusinessName = new URLSearchParams(window.location.search).get('negocio');
let activeBusinessName = requestedBusinessName && businesses.some(item => !item.inactive && item.name === requestedBusinessName) ? requestedBusinessName : '';
let activeBusinessFilter = businessFilters.some(button => button.dataset.businessFilter === requestedBusinessFilter) || requestedBusinessFilter in detailedBusinessFilters ? requestedBusinessFilter : 'todos';
businessFilters.forEach(button => {
  const selected = button.dataset.businessFilter === activeBusinessFilter;
  button.classList.toggle('active', selected);
  button.setAttribute('aria-pressed', String(selected));
});

function addBusinessLink(parent, label, href, external=false){
  const link=document.createElement('a');
  link.textContent=label;
  link.href=href;
  if(external){link.target='_blank';link.rel='noopener noreferrer'}
  parent.append(link);
}
function renderBusinesses(){
  if(!businessGrid || !businessCount || !businessEmpty) return;
  const shown=businesses.filter(item => !item.inactive && (activeBusinessFilter==='todos'||item.category===activeBusinessFilter||detailedBusinessFilters[activeBusinessFilter]?.(item)) && (!activeBusinessName || item.name===activeBusinessName)).sort((a,b)=>businessCategoryOrder.indexOf(a.category)-businessCategoryOrder.indexOf(b.category) || Number(Boolean(b.photo))-Number(Boolean(a.photo)) || a.name.localeCompare(b.name,'es-PY'));
  const fragment=document.createDocumentFragment();
  shown.forEach(item=>{
    const card=document.createElement('article');card.className='business-card';
    card.dataset.category=item.category;
    const visual=document.createElement('div');visual.className='business-visual';
    if(item.nearby){const badge=document.createElement('span');badge.className='business-nearby-label';badge.textContent='Cerca de San Ber';visual.append(badge)}
    if(item.photo){
      const img=document.createElement('img');img.src=item.photo;img.alt=publicBusinessText(item.photoAlt||`${item.name}, fotografía de su edificio`);img.loading='lazy';if(item.photoPosition)img.style.objectPosition=item.photoPosition;visual.append(img);
      if(item.photoCredit && item.photoSource?.includes('google.com/maps')){
        visual.classList.add('business-visual-maps');
        const credit=document.createElement('a');credit.className='maps-photo-credit';credit.href=item.photoSource;credit.target='_blank';credit.rel='noopener noreferrer';credit.textContent=item.photoCredit;credit.setAttribute('aria-label',`Fuente de la fotografía: ${item.photoCredit}`);visual.append(credit);
      }
    }else{
      visual.classList.add('business-visual-symbol');
      const glyph=document.createElement('span');glyph.className='business-glyph';glyph.textContent=({comer:'◒',dormir:'✳',noche:'✦',recreacion:'🧭',belleza:'✂',deportes:'↗',compras:'◈',salud:'✚',mascotas:'🐾',hogar:'⌂',movilidad:'🚗',servicios:'⚙',inmuebles:'⌑'})[item.category]||'✳';visual.append(glyph);
      const visualType=document.createElement('span');visualType.className='business-visual-type';visualType.textContent=item.type;visual.append(visualType);
    }
    const content=document.createElement('div');content.className='business-content';
    const top=document.createElement('div');top.className='business-card-top';
    const type=document.createElement('span');type.className='business-type';type.textContent=item.type;
    top.append(type);
    const title=document.createElement('h3');title.textContent=publicBusinessText(item.name);
    const area=document.createElement('p');area.className='business-area';area.textContent=publicBusinessText(item.nearby?item.area.replace(/^Cerca de San Ber\s*·\s*/,''):item.area);
    const description=item.description?document.createElement('p'):null;
    if(description){description.className='business-description';description.textContent=publicBusinessText(item.description)}
    const actions=document.createElement('div');actions.className='business-actions';
    addBusinessLink(actions,'Cómo llegar en Google Maps ↗',item.maps,true);
    if(item.phone){const normalized=item.phone.replace(/\D/g,'');addBusinessLink(actions,`Llamar · ${item.phone}`,`tel:${normalized.startsWith('595')?'+':''}${normalized.startsWith('595')?normalized:'+595'+(normalized.startsWith('0')?normalized.slice(1):normalized)}`)}
    if(item.website)addBusinessLink(actions,'Sitio web ↗',item.website,true);
    if(item.instagram)addBusinessLink(actions,'Instagram ↗',item.instagram,true);
    if(item.facebook)addBusinessLink(actions,'Facebook ↗',item.facebook,true);
    content.append(top,title,area);
    if(description)content.append(description);
    content.append(actions);card.append(visual,content);fragment.append(card);
  });
  businessGrid.replaceChildren(fragment);
  businessCount.textContent=`${shown.length} ${shown.length===1?'lugar':'lugares'} · ${businesses.filter(item => !item.inactive).length} en el directorio`;
  businessEmpty.hidden=shown.length!==0;
  if(!shown.length) businessEmpty.textContent='Probá otra categoría.';
}
function scrollToBusinessResults(){
  if(!businessCount) return;
  const behavior=window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth';
  businessCount.scrollIntoView({behavior,block:'start'});
}
businessFilters.forEach(button=>button.addEventListener('click',()=>{
  activeBusinessName='';
  activeBusinessFilter=button.dataset.businessFilter;
  businessFilters.forEach(item=>{const selected=item===button;item.classList.toggle('active',selected);item.setAttribute('aria-pressed',String(selected))});
  renderBusinesses();
  scrollToBusinessResults();
}));
document.querySelectorAll('[data-rubro]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  activeBusinessName='';
  activeBusinessFilter=link.dataset.rubro;
  businessFilters.forEach(item=>{const selected=item.dataset.businessFilter===activeBusinessFilter;item.classList.toggle('active',selected);item.setAttribute('aria-pressed',String(selected))});
  renderBusinesses();
  scrollToBusinessResults();
}));
renderBusinesses();
if (activeBusinessName) businessGrid?.querySelector('.business-card')?.scrollIntoView({behavior:'auto',block:'center'});

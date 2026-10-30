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
  'Ferretería Huguito': {photo:'ferreteria-huguito-maps.webp',photoAlt:'Fachada de Ferretería Huguito en una fotografía de 2019',photoCredit:'Google Maps · Edgar Pitta · 2019',photoSource:'https://www.google.com/maps/search/?api=1&query=Ferreteria%20Huguito%20San%20Bernardino%20Paraguay',photoPosition:'center 38%'}
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
const businessSearch = document.getElementById('business-search');
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
  eventos: item => item.tags.includes('eventos'),
  cerca: item => item.nearby
};
const requestedBusinessFilter = new URLSearchParams(window.location.search).get('rubro');
const requestedBusinessName = new URLSearchParams(window.location.search).get('negocio');
if (requestedBusinessName && businesses.some(item => !item.inactive && item.name === requestedBusinessName)) businessSearch.value = requestedBusinessName;
let activeBusinessFilter = businessFilters.some(button => button.dataset.businessFilter === requestedBusinessFilter) || requestedBusinessFilter in detailedBusinessFilters ? requestedBusinessFilter : 'todos';
businessFilters.forEach(button => {
  const selected = button.dataset.businessFilter === activeBusinessFilter;
  button.classList.toggle('active', selected);
  button.setAttribute('aria-pressed', String(selected));
});

function normalizeBusiness(value){return value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('es-PY')}
function addBusinessLink(parent, label, href, external=false){
  const link=document.createElement('a');
  link.textContent=label;
  link.href=href;
  if(external){link.target='_blank';link.rel='noopener noreferrer'}
  parent.append(link);
}
function renderBusinesses(){
  if(!businessGrid || !businessSearch || !businessCount || !businessEmpty) return;
  const query=normalizeBusiness(businessSearch.value.trim());
  const shown=businesses.filter(item => !item.inactive && (activeBusinessFilter==='todos'||item.category===activeBusinessFilter||detailedBusinessFilters[activeBusinessFilter]?.(item)) && normalizeBusiness(`${item.name} ${item.type} ${item.area}`).includes(query)).sort((a,b)=>businessCategoryOrder.indexOf(a.category)-businessCategoryOrder.indexOf(b.category) || Number(Boolean(b.photo))-Number(Boolean(a.photo)) || a.name.localeCompare(b.name,'es-PY'));
  const fragment=document.createDocumentFragment();
  shown.forEach(item=>{
    const card=document.createElement('article');card.className='business-card';
    card.dataset.category=item.category;
    const visual=document.createElement('div');visual.className='business-visual';
    if(item.photo){
      const img=document.createElement('img');img.src=item.photo;img.alt=item.photoAlt||`${item.name}, fotografía de su edificio`;img.loading='lazy';if(item.photoPosition)img.style.objectPosition=item.photoPosition;visual.append(img);
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
    const title=document.createElement('h3');title.textContent=item.name;
    const area=document.createElement('p');area.className='business-area';area.textContent=item.area;
    const description=item.description?document.createElement('p'):null;
    if(description){description.className='business-description';description.textContent=item.description}
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
  if(!shown.length) businessEmpty.textContent='Probá otra categoría o buscá por nombre.';
}
businessSearch?.addEventListener('input',renderBusinesses);
function scrollToBusinessResults(){
  if(!businessCount) return;
  const behavior=window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth';
  businessCount.scrollIntoView({behavior,block:'start'});
}
businessFilters.forEach(button=>button.addEventListener('click',()=>{
  activeBusinessFilter=button.dataset.businessFilter;
  businessFilters.forEach(item=>{const selected=item===button;item.classList.toggle('active',selected);item.setAttribute('aria-pressed',String(selected))});
  renderBusinesses();
  scrollToBusinessResults();
}));
document.querySelectorAll('[data-rubro]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  activeBusinessFilter=link.dataset.rubro;
  businessFilters.forEach(item=>{const selected=item.dataset.businessFilter===activeBusinessFilter;item.classList.toggle('active',selected);item.setAttribute('aria-pressed',String(selected))});
  renderBusinesses();
  scrollToBusinessResults();
}));
renderBusinesses();
if (requestedBusinessName && businessSearch.value) businessGrid?.querySelector('.business-card')?.scrollIntoView({behavior:'auto',block:'center'});

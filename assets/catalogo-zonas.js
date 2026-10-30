// Barrido por rubro y sectores de San Bernardino, 30/10/2026.
// Cada enlace apunta a una ficha de Maps; la presencia de una ficha no prueba actividad actual.
const catalogoZonas = [
  {name:'Snash Burger San Bernardino',category:'comer',type:'Hamburguesería',area:'Avenida Guillermo Naumann',tags:['cena','lomiterias'],phone:'0981 118119',maps:'https://www.google.com/maps/place/Snash+Burger+San+Bernardino/data=!4m7!3m6!1s0x945dcb4d811adf01:0xb28371497ae8ed28!8m2!3d-25.3282047!4d-57.2786696!16s%2Fg%2F11lz4r0_f9!19sChIJAd8agU3LXZQRKO3oeklxg7I'},
  {name:"Lomilito's Sanber",category:'comer',type:'Lomitería y bar',area:'Zona MPF9',tags:['cena','lomiterias'],phone:'0984 577047',maps:'https://www.google.com/maps/place/Lomilito%27s+Sanber/data=!4m7!3m6!1s0x945dcb051811e35f:0x9e992517f49c30c5!8m2!3d-25.3263892!4d-57.2804787!16s%2Fg%2F11j4mthp41!19sChIJX-MRGAXLXZQRxTCc9BclmZ4'},
  {name:'CONSTANCE Barber Studio',category:'belleza',type:'Barbería',area:'Ruta San Bernardino–Altos',tags:['barberia'],maps:'https://www.google.com/maps/place/CONSTANCE+BARBER+STUDIO/data=!4m7!3m6!1s0x945dcb00197a7fb3:0x417634bcafd772e8!8m2!3d-25.2964324!4d-57.2787807!16s%2Fg%2F11m_6vslnx!19sChIJs396GQDLXZQR6HLXr7w0dkE'},
  {name:'Peluquería Juan Rojas',category:'belleza',type:'Peluquería',area:'Barrio Colón',tags:['peluqueria'],maps:'https://www.google.com/maps/place/Peluquer%C3%ADa+Juan+Rojas/data=!4m7!3m6!1s0x945db506ca606ce7:0x821fbe925589ed66!8m2!3d-25.3012902!4d-57.3011668!16s%2Fg%2F11x22cbfjc!19sChIJ52xgyga1XZQRZu2JVZK-H4I'},
  {name:'Malari Cosméticos',category:'belleza',type:'Tienda de cosméticos',area:'Zona MPCH',tags:['maquillaje'],phone:'0982 925279',maps:'https://www.google.com/maps/place/Malari+Cosm%C3%A9ticos/data=!4m7!3m6!1s0x945dcb70cbaddd91:0xcb5ea208c8a99ae6!8m2!3d-25.3294678!4d-57.2770614!16s%2Fg%2F11ntncyf84!19sChIJkd2ty3DLXZQR5pqpyAiiXss'},
  {name:'Despensa Lucía',category:'compras',type:'Despensa',area:'Ciervo Cuá',tags:['despensas'],maps:'https://www.google.com/maps/place/Despensa+Lucia/data=!4m7!3m6!1s0x945db7006b2d87ed:0xfee397968a00ede6!8m2!3d-25.2556669!4d-57.3017484!16s%2Fg%2F11xsr3dry1!19sChIJ7YctawC3XZQR5u0AipaX4_4'},
  {name:'Despensa Dos Hermanas',category:'compras',type:'Despensa',area:'Barrio Colón',tags:['despensas'],maps:'https://www.google.com/maps/place/Despensa+Dos+Hermanas/data=!4m7!3m6!1s0x945db5e21347701d:0x98e46dc2fab2215!8m2!3d-25.301191!4d-57.2974508!16s%2Fg%2F11x6w2b5q4!19sChIJHXBHE-K1XZQRFSKrL9xGjgk'},
  {name:'Despensa y Bodega DAM',category:'compras',type:'Despensa y bodega',area:'Zona PM8R',tags:['despensas','bodegas'],maps:'https://www.google.com/maps/place/DESPENSA+Y+BODEGA+DAM/data=!4m7!3m6!1s0x945db7005c9a51c9:0xd00e3685f823c710!8m2!3d-25.2826426!4d-57.3077487!16s%2Fg%2F11x0nvp_1_!19sChIJyVGaXAC3XZQREMcj-IU2DtA'},
  {name:'Vivero de Plantas Manases',category:'compras',type:'Vivero',area:'Zona MPHC',tags:['florerias'],maps:'https://www.google.com/maps/place/Vivero+de+Plantas+MANASES/data=!4m7!3m6!1s0x945dcb000250c149:0x3b4ab05cc78dc85d!8m2!3d-25.3246675!4d-57.2673273!16s%2Fg%2F11nbzvv0cm!19sChIJScFQAgDLXZQRXciNx1ywSjs'},
  {name:'Vivero La Palmera Plantas',category:'compras',type:'Vivero',area:'Zona MP8G',tags:['florerias'],maps:'https://www.google.com/maps/place/Vivero+La+Palmera+Plantas/data=!4m7!3m6!1s0x945db78c817e6c3d:0xb7204c3432d2d7b4!8m2!3d-25.3336184!4d-57.2743482!16s%2Fg%2F11vq63p72f!19sChIJPWx-gYy3XZQRtNfSMjRMILc'},
  {name:'Vivero San Miguel',category:'compras',type:'Vivero',area:'Ruta San Bernardino–Altos',tags:['florerias'],maps:'https://www.google.com/maps/place/Vivero+San+Miguel/data=!4m7!3m6!1s0x945db5e3292fcded:0x7fb46d2d50a59e26!8m2!3d-25.3022652!4d-57.2936455!16s%2Fg%2F11fz9zj3wh!19sChIJ7c0vKeO1XZQRJp6lUC1ttH8'},
  {name:'Librería ABU',category:'compras',type:'Librería',area:'Centro',tags:['librerias'],maps:'https://www.google.com/maps/place/Librer%C3%ADa+ABU/data=!4m7!3m6!1s0x945db5e40a209409:0x8a1d972205b22dfe!8m2!3d-25.3057002!4d-57.2977523!16s%2Fg%2F11hcrf10nv!19sChIJCZQgCuS1XZQR_i2yBSKXHYo'},
  {name:'Coronel Cell Sanber',category:'compras',type:'Tienda de celulares',area:'Avenida Guillermo Naumann',tags:['tecnologia'],phone:'0971 967438',maps:'https://www.google.com/maps/place/Coronel+CELL+Sanber/data=!4m7!3m6!1s0x945db57599c9a9d9:0x46693d5dce055bcb!8m2!3d-25.3195191!4d-57.2856861!16s%2Fg%2F11nxr60d0m!19sChIJ2anJmXW1XZQRy1sFzl09aUY'},
  {name:'Golden Service San Ber',category:'compras',type:'Reparación de celulares',area:'Avenida Guillermo Naumann',tags:['tecnologia'],phone:'0971 948281',maps:'https://www.google.com/maps/place/Golden+Service+San+Ber/data=!4m7!3m6!1s0x945db59594dbcc69:0x867ed39496885c24!8m2!3d-25.3194989!4d-57.2859371!16s%2Fg%2F11vbrgy_5l!19sChIJaczblJW1XZQRJFyIlpTTfoY'},
  {name:'Quinta Casaccia',category:'dormir',type:'Alojamiento particular',area:'Avenida Ciervo Cuá',tags:['quintas'],maps:'https://www.google.com/maps/place/Quinta+Casaccia/data=!4m7!3m6!1s0x945dcbd07d44f977:0xe9080d72eb49dbd8!8m2!3d-25.3192602!4d-57.2788947!16s%2Fg%2F11vlmsnj_8!19sChIJd_lEfdDLXZQR2NtJ63INCOk'},
  {name:'Quinta Facholi',category:'dormir',type:'Alquiler vacacional',area:'Avenida Ciervo Cuá',tags:['quintas'],maps:'https://www.google.com/maps/place/Quinta+Facholi/data=!4m7!3m6!1s0x945dcb0078f0e9eb:0xc6f65e206627cb8d!8m2!3d-25.3194294!4d-57.2787587!16s%2Fg%2F11wfqtpb8s!19sChIJ6-nweADLXZQRjcsnZiBe9sY'},
  {name:'Quinta de Estela Ruiz',category:'dormir',type:'Alojamiento particular',area:'Zona MPJG',tags:['quintas'],phone:'0981 300288',maps:'https://www.google.com/maps/place/Quinta+de+Estela+Ruiz/data=!4m7!3m6!1s0x945dcb006248cf19:0x8319f6dacfcd4754!8m2!3d-25.3193045!4d-57.2730029!16s%2Fg%2F11z_tk0gyc!19sChIJGc9IYgDLXZQRVEfNz9r2GYM'},
  {name:'Quinta El Alba',category:'dormir',type:'Alojamiento particular',area:'Calle Ezio Guggiari',tags:['quintas'],maps:'https://www.google.com/maps/place/Quinta+El+Alba/data=!4m7!3m6!1s0x945dcb0025a8f8a1:0x73c175c7fc8ff994!8m2!3d-25.3529917!4d-57.2630559!16s%2Fg%2F11lcpnt888!19sChIJofioJQDLXZQRlPmP_Md1wXM'},
  {name:'Quinta Dos Hermanas · San Ber',category:'dormir',type:'Casa rural',area:'Zona MP7R',tags:['quintas'],phone:'0981 142511',maps:'https://www.google.com/maps/place/Quinta+Dos+Hermanas+-+San+Ber/data=!4m7!3m6!1s0x945dcb1775221929:0x850d163a401a08f4!8m2!3d-25.3358194!4d-57.2588554!16s%2Fg%2F11rdryhmrx!19sChIJKRkidRfLXZQR9AgaQDoWDYU'},
  {name:'Quinta Azul',category:'dormir',type:'Alojamiento',area:'Teniente Marcelino Espinoza',tags:['quintas'],phone:'0985 520200',maps:'https://www.google.com/maps/place/Quinta+Azul/data=!4m7!3m6!1s0x945dcb272abfc99d:0x9e0722755983f023!8m2!3d-25.3218396!4d-57.2594647!16s%2Fg%2F11qm3nqwky!19sChIJncm_KifLXZQRI_CDWXUiB54'},
  {name:'Quinta Mía',category:'dormir',type:'Casa de vacaciones',area:'Guillermo Naumann',tags:['quintas'],phone:'0985 808541',maps:'https://www.google.com/maps/place/QUINTA+MIA/data=!4m7!3m6!1s0x945db54bb649c3e9:0x81a723220ce93498!8m2!3d-25.2908353!4d-57.3100446!16s%2Fg%2F11tp4ppj0f!19sChIJ6cNJtku1XZQRmDTpDCIjp4E'},
  {name:'Quinta Silvi',category:'dormir',type:'Cabaña',area:'Zona PM9W',tags:['quintas'],maps:'https://www.google.com/maps/place/Quinta+Silvi/data=!4m7!3m6!1s0x945db7929a6ee549:0x2236b93a483852fb!8m2!3d-25.2822226!4d-57.3042171!16s%2Fg%2F11t79hcq9r!19sChIJSeVumpK3XZQR-1I4SDq5NiI'},
  {name:'Taller Fari',category:'movilidad',type:'Taller mecánico',area:'Zona MP7G',tags:['talleres'],phone:'0971 378935',photo:'assets/images/taller-fari-maps.jpg',photoAlt:'Entrada y cartel de Taller Fari con un vehículo en el taller',photoCredit:'Google Maps · Taller Fari · ago 2026',photoSource:'https://www.google.com/maps?cid=4049363373058784060',maps:'https://www.google.com/maps/place/Taller+Fari/data=!4m7!3m6!1s0x945dcb92a79959d7:0x38323a8889a57b3c!8m2!3d-25.3365664!4d-57.2710214!16s%2Fg%2F11zwwfzf1f!19sChIJ11mZp5LLXZQRPHuliYg6Mjg'},
  {name:'Taller Mecánico Otta',category:'movilidad',type:'Taller mecánico',area:'Zona MQ62',tags:['talleres'],phone:'0971 301140',maps:'https://www.google.com/maps/place/Taller+Mec%C3%A1nico+%22Otta%22/data=!4m7!3m6!1s0x945dcb68a8b76b8f:0xf321e4d9bff363b6!8m2!3d-25.3395946!4d-57.2493254!16s%2Fg%2F11vby1yk7b!19sChIJj2u3qGjLXZQRtmPzv9nkIfM'},
  {name:'NM23 Garage',category:'movilidad',type:'Taller de reparación de motos',area:'Rosa Amendola',tags:['talleres'],phone:'0991 425206',photo:'assets/images/nm23-garage-maps.jpg',photoAlt:'Motos en la entrada del taller NM23 Garage',photoCredit:'Google Maps · NM23 Garage · ago 2024',photoSource:'https://www.google.com/maps?cid=1887142533479662085',maps:'https://www.google.com/maps?cid=1887142533479662085'},
  {name:'Gomería Terry',category:'movilidad',type:'Gomería',area:'Barrio Virgen de Caacupé',tags:['talleres'],phone:'0986 621080',maps:'https://www.google.com/maps/place/Gomer%C3%ADa+Terry/data=!4m7!3m6!1s0x945dcbea5f50f993:0xb3a966c11136a561!8m2!3d-25.3442443!4d-57.2731121!16s%2Fg%2F11y55q0hfx!19sChIJk_lQX-rLXZQRYaU2EcFmqbM'},
  {name:'Gomería Matu Sanber',category:'movilidad',type:'Gomería',area:'Rosa Amendola',tags:['talleres'],phone:'0985 166328',maps:'https://www.google.com/maps/place/Gomeria+MATU+sanber/data=!4m7!3m6!1s0x945db5cbf1a9d0af:0xd71a4716572db179!8m2!3d-25.3048275!4d-57.2985363!16s%2Fg%2F11j006m0vr!19sChIJr9Cp8cu1XZQRebEtVxZHGtc'}
];

const mapaCid = cid => `https://www.google.com/maps?cid=${BigInt(cid).toString()}`;
catalogoZonas.push(
  {name:'La Casita · Rotonda',category:'comer',type:'Heladería',area:'La Rotonda',tags:['merienda','heladerias'],phone:'0982 673812',maps:mapaCid('0x65a599f366e3629a')},
  {name:'Don Juan Carlos',category:'dormir',type:'Alojamiento con servicio',area:'Avenida Guillermo Naumann',tags:[],phone:'0985 900600',maps:mapaCid('0xe9736b6ad9670759')},
  {name:'Cabañas Los Árboles',category:'dormir',type:'Cabañas y desayuno',area:'Zona MPW4',tags:[],phone:'0991 854746',maps:mapaCid('0x348076689b5d4386')},
  {name:'Paseo del Centro',category:'compras',type:'Centro comercial',area:'Centro',tags:[],maps:mapaCid('0xbc2c29bcff69081e')},
  {name:'La Cumbre · San Bernardino',category:'compras',type:'Centro comercial',area:'Mariscal López',tags:[],maps:mapaCid('0x68481ac313c56c1')},
  {name:'Boutique Sanber',category:'compras',type:'Supermercado',area:'Avenida Guillermo Naumann',tags:['supermercados'],phone:'0974 141514',maps:mapaCid('0x6d4d69c9887366c5')},
  {name:'Schlenz Import · Feria Austriaca',category:'compras',type:'Importación y bazar',area:'Avenida Ciervo Cuá',tags:['tiendas'],phone:'0982 205490',maps:mapaCid('0x3b7755f5b6fa8c41')},
  {name:'Mercado de Pulgas',category:'compras',type:'Mercadillo',area:'Centro',tags:['tiendas'],phone:'0971 111791',maps:mapaCid('0x41e2b7a4afaf1813')},
  {name:'Tienda Nuestra Casa',category:'compras',type:'Tienda',area:'Santa Librada',tags:['tiendas'],phone:'0993 288807',maps:mapaCid('0xa4254fd4a1d1996c')},
  {name:'Artesanías Sarita',category:'compras',type:'Artesanía y ropa',area:'Colonos Alemanes',tags:['tiendas'],phone:'0982 271820',maps:mapaCid('0xe4a1ebab91950ed4')},
  {name:'Artesanías Carmencita Sanber',category:'compras',type:'Artesanía',area:'Colonos Alemanes',tags:['tiendas'],phone:'0986 523669',maps:mapaCid('0x9d34a93980f4fa6f')},
  {name:'Ziba',category:'compras',type:'Tienda de artesanías',area:'Colonos Alemanes',tags:['tiendas'],phone:'0982 175255',maps:mapaCid('0x2383ae1475113d07')},
  {name:'Bazar Los Contenedores',category:'compras',type:'Bazar',area:'Zona PM4X',tags:['tiendas'],maps:mapaCid('0x3d690092b4f4798c')},
  {name:'I.J. Comercial & Bazar',category:'compras',type:'Bazar',area:'Avenida Guillermo Naumann',tags:['tiendas'],phone:'0992 280024',maps:mapaCid('0x565546903fca5b6f')},
  {name:'Montemadera San Bernardino',category:'hogar',type:'Carpintería',area:'Zona MPJ7',tags:[],phone:'0981 829541',maps:mapaCid('0x166c904235e8fb78')},
  {name:'Muebles Rústicos Babi',category:'hogar',type:'Carpintería',area:'Santa Librada',tags:[],phone:'0985 968177',maps:mapaCid('0x866776cfa28f5c24')},
  {name:'Coufa San Bernardino',category:'hogar',type:'Tienda de muebles',area:'Avenida Guillermo Naumann',tags:[],phone:'0991 212931',maps:mapaCid('0x5988ee0e60e4e220')},
  {name:'Óptica del Lago',category:'salud',type:'Óptica',area:'Ruta San Bernardino–Altos',tags:[],phone:'0972 456800',maps:mapaCid('0x69784a467fe02a7')},
  {name:'Óptica Meister',category:'salud',type:'Óptica',area:'Colonos Alemanes',tags:[],phone:'0983 516167',maps:mapaCid('0xd47e417e50b82e96')},
  {name:'FrancoMed',category:'salud',type:'Oficina médica',area:'Zona MMVX',tags:['centros-salud'],maps:mapaCid('0xca547dba164d516')},
  {name:'Casa Blanca Inmobiliaria',category:'inmuebles',type:'Inmobiliaria',area:'Urbanización SADI',tags:['inmobiliarias'],maps:mapaCid('0x8fb2c86c308a649b')},
  {name:'Inmobiliaria Esteche',category:'inmuebles',type:'Inmobiliaria',area:'Centro',tags:['inmobiliarias'],phone:'(021) 326 9695',maps:mapaCid('0x90cfbe209ead8016')},
  {name:'Imprenta Sanber',category:'servicios',type:'Imprenta',area:'Mariscal López',tags:['imprentas'],phone:'0981 250003',maps:mapaCid('0x483575b8e4054606')},
  {name:'Estudio de Danza Jaquelin Gómez',category:'servicios',type:'Academia de baile',area:'Avenida Mbokajá',tags:['formacion'],phone:'0971 878919',maps:mapaCid('0x8db4d039e6f16dab')},
  {name:'Espacio Cultural Origen',category:'servicios',type:'Centro educativo y cultural',area:'Avenida Guillermo Naumann',tags:['formacion'],phone:'0986 966234',maps:mapaCid('0x607c135b70eca5b8')},
  {name:'Splash Lav',category:'servicios',type:'Lavandería',area:'Mariscal López',tags:['lavanderias'],maps:mapaCid('0xa9647de970a263d4')},
  {name:'Lavandería San Valentín',category:'servicios',type:'Lavandería',area:'San Bernardino',tags:['lavanderias'],phone:'0992 805555',maps:mapaCid('0x8cfae09790591d6f')},
  {name:'Lavandería AO Johei Sanber',category:'servicios',type:'Lavandería',area:'Colonos Alemanes',tags:['lavanderias'],phone:'0986 286431',maps:mapaCid('0xd18b42293e0cf9f0')},
  {name:'Laundry San Bernardino',category:'servicios',type:'Lavandería',area:'Mariscal López',tags:['lavanderias'],phone:'0971 444868',maps:mapaCid('0xacc4b298a1842646')},
  {name:'Cavalava San Bernardino',category:'servicios',type:'Lavandería',area:'Ruta San Bernardino–Altos',tags:['lavanderias'],phone:'0985 864924',maps:mapaCid('0xd2deeca2f62cebaf')},
  {name:'Motorepuestos Jony',category:'movilidad',type:'Repuestos para motos',area:'Zona MP8G',tags:['repuestos'],phone:'0985 308935',maps:mapaCid('0xe430a1d7368e6be0')},
  {name:'Moto Repuesto Ara',category:'movilidad',type:'Repuestos para motos',area:'Avenida Guillermo Naumann',tags:['repuestos'],phone:'0991 630563',maps:mapaCid('0xe46b06fba07e82a3')},
  {name:'CMG Repuestos',category:'movilidad',type:'Repuestos para motos',area:'Zona MP8G',tags:['repuestos'],maps:mapaCid('0x3b6994fc6b1d187c')}
);

catalogoZonas.push(
  {name:'La Matilde Barrio Privado',category:'inmuebles',type:'Barrio privado',area:'Pirayú-i',tags:['barrios'],phone:'(021) 610 903',maps:mapaCid('0xe30aba92220822e2')},
  {name:'Barrio Pindó',category:'inmuebles',type:'Condominio',area:'Zona JPXV',tags:['barrios'],maps:mapaCid('0x4ee675842d2b3de5')},
  {name:'Barrio Cerrado Villa Martina',category:'inmuebles',type:'Barrio cerrado',area:'Zona PP35',tags:['barrios'],maps:mapaCid('0x9c3492775194d43f')},
  {name:'VISOK Barrio Cerrado',category:'inmuebles',type:'Barrio cerrado',area:'Dr. Federico Chávez',tags:['barrios'],phone:'0982 405915',maps:mapaCid('0x8d3535b8635c1924')},
  {name:'Barrio Cerrado Larán Riego',category:'inmuebles',type:'Barrio cerrado',area:'Zona MP6H',tags:['barrios'],maps:mapaCid('0x89f3ffd1f917c2de')},
  {name:'Terrenos SanBer',category:'inmuebles',type:'Urbanización',area:'Zona MP8J',tags:['loteamientos'],maps:mapaCid('0x6b0976a3e327e147')},
  {name:'Urbanización SADI',category:'inmuebles',type:'Urbanización',area:'Zona MP69',tags:['loteamientos'],maps:mapaCid('0x9ce73c899852c6c')},
  {name:'Sol de Verano',category:'inmuebles',type:'Urbanización',area:'Zona MP4G',tags:['loteamientos'],maps:mapaCid('0xf72b928a00516d81')},
  {name:'La Soñada',category:'inmuebles',type:'Complejo residencial',area:'Zona JPQG',tags:['barrios'],maps:mapaCid('0x6c1f551b563e9f0c')},
  {name:'La Roca',category:'inmuebles',type:'Complejo residencial',area:'Zona JPRF',tags:['barrios'],maps:mapaCid('0x2ceace8ad82c9c50')},
  {name:'Condominio Ayres de Sanber',category:'inmuebles',type:'Condominio',area:'Avenida Ciervo Cuá',tags:['barrios'],phone:'0986 963533',maps:mapaCid('0xfd4c65233392d60b')},
  {name:'Condominio Puntasánber',category:'inmuebles',type:'Condominio',area:'Ruta San Bernardino–Altos',tags:['barrios'],maps:mapaCid('0x446a62c2c195b0f5')},
  {name:'Condominio Terrazas del Lago',category:'inmuebles',type:'Condominio',area:'Ruta San Bernardino–Altos',tags:['barrios'],phone:'0992 404339',maps:mapaCid('0xccb997d97d2c444a')},
  {name:'Cantegrill San Bernardino',category:'inmuebles',type:'Condominio',area:'Zona JPX8',tags:['barrios'],maps:mapaCid('0x5654b189291cd2d5')},
  {name:'Highlands · Park & Lagoon',category:'inmuebles',type:'Condominio',area:'Cerca de San Ber · Ypacaraí',tags:['barrios'],nearby:true,phone:'0981 008050',maps:mapaCid('0xb0cceffdfdca02f0')},
  {name:'Aqua Village',category:'inmuebles',type:'Complejo residencial',area:'Cerca de San Ber · Altos',tags:['barrios'],nearby:true,phone:'0982 200962',maps:mapaCid('0xd6ac2798838b7aa8')},
  {name:'Aquabrava',category:'inmuebles',type:'Barrio cerrado',area:'Cerca de San Ber · Altos',tags:['barrios'],nearby:true,maps:mapaCid('0x849c9ca2d4e47c23')}
);

// Barrido ampliado por rubro: fichas individuales de Maps consultadas el 30/10/2026.
catalogoZonas.push(
  {name:'Casa Campo Cocina Paraguaya',category:'comer',type:'Cocina paraguaya',area:'Guillermo Naumann',tags:['almuerzo','cena'],phone:'0994 262508',photo:'assets/images/casa-campo-maps.jpg',photoAlt:'Plato servido en Casa Campo Cocina Paraguaya',photoCredit:'Google Maps · Bettina Torales · ene 2026',photoSource:mapaCid('0x56dcb335fe8b9b92'),maps:mapaCid('0x56dcb335fe8b9b92')},
  {name:'Restaurant DioMart San Bernardino',category:'comer',type:'Restaurante',area:'Ruta San Bernardino–Altos',tags:['almuerzo','cena'],photo:'assets/images/diomart-maps.jpg',photoAlt:'Salón de mesas del Restaurant DioMart',photoCredit:'Google Maps · DioMart - Sanbernardino · sept 2024',photoSource:mapaCid('0x22959863f666e07'),maps:mapaCid('0x22959863f666e07')},
  {name:'Restaurant La Bahía · Club Náutico Puerta del Lago',category:'comer',type:'Restaurante de club',area:'Puerta del Lago',tags:['almuerzo','cena'],phone:'0981 575434',photo:'assets/images/la-bahia-maps.jpg',photoAlt:'Salón preparado para un evento en La Bahía',photoCredit:'Google Maps · Karina Ramos · oct 2018',photoSource:mapaCid('0xead154e5970e083b'),maps:mapaCid('0xead154e5970e083b')},
  {name:'La Matera Gourmet',category:'comer',type:'Restaurante',area:'Zona MP8G',tags:['almuerzo','cena'],phone:'0972 420030',photo:'assets/images/la-matera-maps.jpg',photoAlt:'Plato de carne servido en La Matera Gourmet',photoCredit:'Google Maps · Sara Yegros · dic 2020',photoSource:mapaCid('0xdef87017e021776'),maps:mapaCid('0xdef87017e021776')},
  {name:'El Privado San Ber',category:'comer',type:'Restaurante',area:'Avenida Central · Calle del Amanecer',tags:['cena'],phone:'0985 555622',photo:'assets/images/el-privado-maps.jpg',photoAlt:'Plato servido en El Privado San Ber',photoCredit:'Google Maps · El privado San Ber · nov 2020',photoSource:mapaCid('0x5cc19ded9c84dc4c'),maps:mapaCid('0x5cc19ded9c84dc4c')},
  {name:'Guinide',category:'comer',type:'Restaurante',area:'Else Petzold Santiviago',tags:['almuerzo','cena'],phone:'0512 232 415',maps:mapaCid('0x7d7cb0fb6dafd138')},
  {name:'El Balcón de Sanber',category:'comer',type:'Pub restaurante',area:'Avenida Luis F. Vaché',tags:['cena'],phone:'0984 759823',photo:'assets/images/el-balcon-maps.jpg',photoAlt:'Balcón al aire libre de El Balcón de Sanber',photoCredit:'Google Maps · Rossana Paredes · ene 2026',photoSource:mapaCid('0xa76425c30606e13b'),maps:mapaCid('0xa76425c30606e13b')},
  {name:'Despensa Alegría',category:'compras',type:'Despensa',area:'Zona JPRP',tags:['despensas'],maps:mapaCid('0x981494cf1c066f05')},
  {name:'Despensa · zona JPRR',category:'compras',type:'Despensa',area:'Zona JPRR',tags:['despensas'],maps:mapaCid('0xfde4681204b3db26')},
  {name:'Despensa El Mango',category:'comer',type:'Pizzería',area:'Zona MP9C',tags:['cena','pizzerias'],phone:'0986 803343',maps:mapaCid('0x3c5cc8bb7ced0763')},
  {name:'Happier',category:'comer',type:'Catering móvil',area:'Urbanización SADI',tags:['almuerzo'],phone:'0985 276100',maps:mapaCid('0x26f9d168678a85ab')},
  {name:'Glam Lifestyle',category:'belleza',type:'Peluquería',area:'Mariscal López',tags:['peluqueria'],maps:mapaCid('0x1f557c87cb86887c')},
  {name:'Braten',category:'noche',type:'Bar',area:'Zona JPRH',tags:[],phone:'0982 893415',maps:mapaCid('0x919b5c79d16ee3d1')},
  {name:'Quinta Don Kiko Bajac',category:'dormir',type:'Alojamiento',area:'Zona MP5J',tags:['quintas'],maps:mapaCid('0x5eac30b7f16e08cc')},
  {name:'Quinta Ypa Sanber',category:'dormir',type:'Alquiler vacacional',area:'San Bernardino · zona JPRQ',tags:['quintas'],phone:'0983 240674',maps:mapaCid('0x70e73097765bb9cb')},
  {name:'Casa del Lago San Bernardino',category:'dormir',type:'Alojamiento particular',area:'Zona JPRJ',tags:['quintas'],phone:'0982 805222',maps:mapaCid('0x798df4991ec5500e')},
  {name:'Quinta Manolo',category:'dormir',type:'Alquiler vacacional',area:'Zona MP7J',tags:['quintas'],maps:mapaCid('0xf922c552cef8b60b')},
  {name:'Quinta Victoria Roga',category:'dormir',type:'Alquiler vacacional',area:'Zona MP7J',tags:['quintas'],maps:mapaCid('0x14597efac4b111e2')},
  {name:'Quinta Flia. Núñez',category:'dormir',type:'Alquiler vacacional',area:'Zona MP9H',tags:['quintas'],maps:mapaCid('0x5c1aad61d81b6550')},
  {name:'Quinta Maciel',category:'dormir',type:'Alquiler vacacional',area:'Zona MPJP',tags:['quintas'],phone:'0981 480144',maps:mapaCid('0xdbb0d401c33e34da')},
  {name:'Quinta La Soñada',category:'dormir',type:'Alquiler vacacional',area:'Zona MPPG',tags:['quintas'],maps:mapaCid('0xdf1a4eb102a1a0be')},
  {name:'Casa Quinta Los Villa',category:'dormir',type:'Alquiler vacacional',area:'Ruta San Bernardino–Altos',tags:['quintas'],phone:'0994 700237',maps:mapaCid('0x4cb6c2b10c8adda8')},
  {name:'Casa Quinta Paredes',category:'dormir',type:'Alquiler vacacional',area:'Zona PM5V',tags:['quintas'],maps:mapaCid('0x4818092e42a991d3')},
  {name:'Quinta Ana María',category:'dormir',type:'Villa',area:'Zona MPPF',tags:['quintas'],phone:'0981 505707',maps:mapaCid('0x539a2ee47ec7c822')},
  {name:'Casa Vittoria Sanber',category:'dormir',type:'Casa rural',area:'Fernando de Magallanes',tags:['quintas'],phone:'0971 432111',maps:mapaCid('0x5e310df216a36a32')},
  {name:'Quinta Los Parra',category:'dormir',type:'Casa de vacaciones',area:'Sebastián Elcano',tags:['quintas'],maps:mapaCid('0xc831321770dfdee0')},
  {name:'Taller Quintana',category:'movilidad',type:'Servicio técnico de motos',area:'San Bernardino',tags:['talleres'],phone:'0986 611185',maps:mapaCid('0x22062adb559b7e32')},
  {name:'Mecanicali',category:'movilidad',type:'Taller mecánico',area:'San Bernardino',tags:['talleres'],phone:'0981 216648',maps:mapaCid('0x6239b92f6ee16e25')},
  {name:'Taller Aguilar',category:'movilidad',type:'Taller mecánico',area:'Zona PM6J',tags:['talleres'],phone:'0981 390380',maps:mapaCid('0x3b147346bfe0b92a')},
  {name:'Gomería Alta Gama',category:'movilidad',type:'Gomería y auxilio',area:'Zona PP4J',tags:['talleres'],maps:mapaCid('0x19c62d4055a30296')}
);

catalogoZonas.push(
  {name:'Gimnasio CNSB',category:'deportes',type:'Gimnasio',area:'Club Náutico · zona MPP3',tags:['gimnasios'],maps:mapaCid('0xb7a71acea5c05bd7')},
  {name:'Paula Britos',category:'belleza',type:'Spa y gimnasio',area:'Yegros',tags:['masajes','gimnasios'],phone:'0971 692032',maps:mapaCid('0x2ad4a4657766bd61')},
  {name:'DÑ Centro Fitness',category:'deportes',type:'Gimnasio',area:'Cerca de San Ber · Altos',tags:['gimnasios'],nearby:true,phone:'0992 355725',maps:mapaCid('0x934a4d4b60001cfe')},
  {name:'Vikingos Gym',category:'deportes',type:'Gimnasio',area:'Cerca de San Ber · Altos',tags:['gimnasios'],nearby:true,phone:'0981 605331',maps:mapaCid('0x14c2ccc9a7ce16d5')},
  {name:'La Zapiría',category:'comer',type:'Pizzería',area:'Zona MP9F',tags:['cena','pizzerias'],phone:'0981 667488',maps:mapaCid('0x5954d5b237ad11a8')},
  {name:'Lincoln',category:'hogar',type:'Ferretería',area:'Zona MP9F',tags:[],maps:mapaCid('0x740c9b095be5d8f0')},
  {name:'RYM Sanitarios',category:'hogar',type:'Sanitarios y ferretería',area:'Avenida Santiago Schaerer',tags:[],maps:mapaCid('0x1de4215e66423659')},
  {name:'Biggie Farma',category:'salud',type:'Farmacia',area:'Zona MPR4',tags:[],maps:mapaCid('0x2f79adaeef5665f6')},
  {name:'Tienda upa!',category:'compras',type:'Tienda de conveniencia',area:'Guillermo Naumann · Mariscal López',tags:['minimercados'],maps:mapaCid('0x95d08c737513ef8c')},
  {name:'El Escondido Mini Shop',category:'compras',type:'Mini shop y brunch',area:'Cerca de San Ber · Ypacaraí',tags:['minimercados'],nearby:true,phone:'0982 989435',maps:mapaCid('0x3bd657635a6f1256')}
);

catalogoZonas.push(
  {name:'Santa Isabel',category:'comer',type:'Panadería',area:'Avenida Guillermo Naumann',tags:['desayuno','merienda','panaderias'],maps:mapaCid('0xb7181f662d9b7748')},
  {name:'Bolocos Açai',category:'comer',type:'Heladería',area:'Zona MPQ3',tags:['merienda','heladerias'],maps:mapaCid('0x54373df204dd89a6')},
  {name:'Buchetta Roja',category:'comer',type:'Heladería',area:'Zona MP7F',tags:['merienda','heladerias'],maps:mapaCid('0xf68d63e0a26e6df8')},
  {name:'La Chusquita',category:'comer',type:'Heladería',area:'Zona MP8Q',tags:['merienda','heladerias'],maps:mapaCid('0x121d825c34addb24')},
  {name:'Fauna Açai',category:'comer',type:'Heladería',area:'Zona MMRX',tags:['merienda','heladerias'],maps:mapaCid('0x876df58e4e689be')},
  {name:'El Cucurucho',category:'comer',type:'Heladería',area:'Zona JPWJ',tags:['merienda','heladerias'],phone:'0981 592509',maps:mapaCid('0x902162c117752741')},
  {name:'Clínica Veterinaria · ruta Altos',category:'mascotas',type:'Veterinaria',area:'Ruta San Bernardino–Altos',tags:[],maps:mapaCid('0xe26b00e5afb4395')},
  {name:'Veterinaria Balmaceda a Domicilio',category:'mascotas',type:'Servicio veterinario',area:'Luis F. Vaché',tags:[],phone:'0991 622512',maps:mapaCid('0x300d95220db837d9')},
  {name:'Agro Casa Jardín · vivero',category:'compras',type:'Vivero',area:'Avenida Guillermo Naumann',tags:['florerias'],phone:'0512 233 037',maps:mapaCid('0x5a4366aedd2f9d1')},
  {name:'Mayco',category:'compras',type:'Vivero',area:'Guillermo Naumann · General Díaz',tags:['florerias'],phone:'0972 798415',maps:mapaCid('0xd4d1b364b36fbc42')},
  {name:'Vivero Casa Jardín',category:'compras',type:'Vivero',area:'Avenida Guillermo Naumann',tags:['florerias'],phone:'0991 927998',maps:mapaCid('0x3bb33ba79314ca4a')},
  {name:'Lavadero de Autos · zona PMX',category:'movilidad',type:'Lavadero de autos',area:'Zona PMX',tags:['lavaderos'],phone:'0983 187825',maps:mapaCid('0xfbfee613a6959e0d')},
  {name:'Alquimia Kue',category:'movilidad',type:'Lavadero de autos',area:'Padre Elizalde',tags:['lavaderos'],phone:'0982 189773',maps:mapaCid('0x1372c393eac3c847')},
  {name:'Lavadero 44',category:'servicios',type:'Lavandería',area:'Zona MP4G',tags:['lavanderias'],maps:mapaCid('0x960fed5bde86009b')},
  {name:'Turopasanber 2.0',category:'compras',type:'Tienda de ropa',area:'Wenceslao López',tags:['tiendas'],phone:'0971 130650',maps:mapaCid('0x9e1933d2ba98e7e0')},
  {name:'Jessi Ropas Americanas',category:'compras',type:'Tienda de ropa',area:'Zona MPFC',tags:['tiendas'],maps:mapaCid('0xb087e9799242a36')},
  {name:'Marketplace Sanber',category:'compras',type:'Tienda de ropa',area:'Avenida Guillermo Naumann',tags:['tiendas'],phone:'0986 184070',maps:mapaCid('0x7928f968a6913684')},
  {name:'Bikinishop',category:'compras',type:'Ropa de playa',area:'Bicentenario',tags:['tiendas'],phone:'0984 936139',maps:mapaCid('0x97281c953b8964a9')},
  {name:'Quiksilver',category:'compras',type:'Tienda de ropa',area:'Avenida Luis F. Vaché',tags:['tiendas'],maps:mapaCid('0x4eded674167c3bd2')},
  {name:'Reyna Esther',category:'compras',type:'Boutique',area:'Mariscal López',tags:['tiendas'],phone:'0982 489596',maps:mapaCid('0x77dad313f78f4939')}
);

catalogoZonas.push(
  {name:'JF Cabañas San Bernardino',category:'dormir',type:'Cabañas',area:'Zona MP4G',tags:[],phone:'0972 421466',maps:mapaCid('0xaed1a7fab460bc09')},
  {name:'La Serafina · Cabañas Alpinas',category:'dormir',type:'Cabañas',area:'Brisas del Sol',tags:[],phone:'0971 623496',maps:mapaCid('0xb47889554cfc00e4')},
  {name:'Cabañas Las Lupitas',category:'dormir',type:'Cabañas',area:'Zona MP2J',tags:[],phone:'0981 593359',maps:mapaCid('0xad66d7466317fffb')},
  {name:'Cabaña de la Cascada',category:'dormir',type:'Cabaña',area:'Calle Colonial · Mariscal Estigarribia',tags:[],phone:'0976 399716',maps:mapaCid('0xf038df521856495')},
  {name:'Cabaña Susana',category:'dormir',type:'Cabaña',area:'Zona JPJX',tags:[],maps:mapaCid('0x192586ab9d6444d')},
  {name:'La Casita de Mis Sueños Sanber',category:'dormir',type:'Casa vacacional',area:'Urbanización Sol de Verano',tags:['quintas'],phone:'0972 978228',maps:mapaCid('0x84229ca8ffc5acd')},
  {name:'Cabaña Buey Rendá',category:'dormir',type:'Cabaña',area:'Zona JPVM',tags:[],phone:'0986 581158',maps:mapaCid('0x5b0888cfcff07675')},
  {name:'La Soñada Sanber',category:'dormir',type:'Alojamiento',area:'Zona MP3P',tags:['quintas'],phone:'0983 203978',maps:mapaCid('0xcd590dfc9c6c43eb')},
  {name:'Casa Avelina',category:'dormir',type:'Alojamiento',area:'Zona JPR8',tags:['quintas'],phone:'0992 316690',maps:mapaCid('0x312a18837a677578')},
  {name:'La Paloma Sanber',category:'dormir',type:'Alojamiento',area:'Zona MPFC',tags:['quintas'],phone:'0981 695553',maps:mapaCid('0xde5e6e6a18fa6b9a')},
  {name:'TAVA Glamping Lago',category:'dormir',type:'Glamping',area:'Orilla del lago',tags:[],phone:'0981 336349',website:'https://tavaglamping.com/',maps:mapaCid('0xded13d80dfd35698')}
);

catalogoZonas.push(
  {name:'ueno bank x San Bernardino',category:'servicios',type:'Banco',area:'Centro',tags:['bancos'],phone:'(021) 618 8000',maps:mapaCid('0x1a5743aab37bc0f8')},
  {name:'ATM Itaú · San Bernardino',category:'servicios',type:'Cajero automático',area:'Ruta San Bernardino–Altos',tags:['cajeros'],maps:mapaCid('0xad16a1c925658d35')},
  {name:'TED-Wepa · Copetrol',category:'servicios',type:'Cajero automático',area:'Guillermo Naumann',tags:['cajeros'],phone:'(021) 618 8003',maps:mapaCid('0xd70ef7cba7de2477')},
  {name:'TED-Wepa · Superseis',category:'servicios',type:'Cajero automático',area:'Avenida Luis F. Vaché',tags:['cajeros'],phone:'(021) 618 8003',maps:mapaCid('0x34e1634fe494919')},
  {name:'TED-Wepa · Biggie Kennedy',category:'servicios',type:'Cajero automático',area:'Avenida Kennedy',tags:['cajeros'],phone:'(021) 618 8003',maps:mapaCid('0xd70415f67663f61')},
  {name:'TED-Wepa · Farmacenter',category:'servicios',type:'Cajero automático',area:'Luis F. Vaché · Emilio Hassler',tags:['cajeros'],phone:'(021) 618 8003',maps:mapaCid('0x2bc59646f02c54ad')},
  {name:'TED-Wepa · Biggie Lago Azul',category:'servicios',type:'Cajero automático',area:'Lago Azul',tags:['cajeros'],phone:'(021) 618 8003',maps:mapaCid('0xbd7b894432c483ff')},
  {name:'MoneyGram · San Bernardino',category:'servicios',type:'Transferencias de dinero',area:'Avenida Kennedy',tags:['bancos'],phone:'0991 828203',maps:mapaCid('0xc0ea7a896be50998')},
  {name:'Es Vedrá San Bernardino',category:'servicios',type:'Salón de eventos',area:'Zona QM3P',tags:['eventos'],phone:'0982 272328',maps:mapaCid('0xb1637febc95125f7')},
  {name:'Cerca del Cielo',category:'servicios',type:'Salón de eventos',area:'Carlos Antonio López',tags:['eventos'],phone:'(021) 326 9695',maps:mapaCid('0xaaceea90494a7563')},
  {name:'Servicio de Alquileres La Candelaria',category:'servicios',type:'Organización de eventos',area:'Brisas del Lago',tags:['eventos'],phone:'0981 179265',maps:mapaCid('0xbb64d632886f9851')},
  {name:'Atenas Cotillón',category:'compras',type:'Cotillón y fiestas infantiles',area:'Avenida Guillermo Naumann',tags:['tiendas'],phone:'0994 650145',maps:mapaCid('0x8ca1fdbf22262d02')},
  {name:'GIVE',category:'compras',type:'Reparación de celulares',area:'Avenida Guillermo Naumann',tags:['tecnologia'],maps:mapaCid('0x12ee43978a0ff106')},
  {name:'The M Group',category:'inmuebles',type:'Agencia inmobiliaria',area:'Zona MP5G',tags:['inmobiliarias'],phone:'0971 200945',maps:mapaCid('0xf6e60d0d7b5d85e4')},
  {name:'RE/MAX Summer · San Bernardino',category:'inmuebles',type:'Agencia inmobiliaria',area:'Avenida Ciervo Cuá',tags:['inmobiliarias'],maps:mapaCid('0xc7acc006c8a37004')},
  {name:'Barrio Cerrado Villa Las Mercedes',category:'inmuebles',type:'Barrio cerrado',area:'Sebastián Elcano',tags:['barrios'],phone:'0972 413100',maps:mapaCid('0xf80b121502f8f9a2')},
  {name:'Madre Selva · Ciervo Cuá',category:'inmuebles',type:'Barrio cerrado',area:'Ciervo Cuá · Justino Fleitas',tags:['barrios'],phone:'0991 780006',maps:mapaCid('0x6eeca1a7aaf1caaa')},
  {name:'Sunset Hills',category:'inmuebles',type:'Complejo residencial',area:'Zona PMGM',tags:['barrios'],maps:mapaCid('0xb68028fbf58df1e6')},
  {name:'Condominio Petrohué',category:'inmuebles',type:'Condominio',area:'San Bernardino',tags:['barrios'],phone:'0984 350400',maps:mapaCid('0x17b3ab9a741cd7a4')},
  {name:'Barrio Cerrado San Ber',category:'inmuebles',type:'Urbanización',area:'Zona PMMH',tags:['barrios'],maps:mapaCid('0xcac5ea87614f8bac')},
  {name:'Alta Pietra Barrio Privado',category:'inmuebles',type:'Barrio privado',area:'Cerca de San Ber · Altos',tags:['barrios'],nearby:true,phone:'(021) 610 904',maps:mapaCid('0x29280e41dc8a742d')},
  {name:'Loteamiento Eucaliptos de Samber',category:'inmuebles',type:'Urbanización',area:'Cerca de San Ber · Ypacaraí',tags:['loteamientos'],nearby:true,maps:mapaCid('0xf79a9f9fa70b03c5')}
);

// Canchas y espacios deportivos: una cancha de club no se presenta como alquiler público.
catalogoZonas.push(
  {name:'San Ber Arena',category:'deportes',type:'Complejo deportivo',area:'Avenida Guillermo Naumann',tags:['canchas-futbol'],phone:'0986 339006',photo:'assets/images/san-ber-arena-maps.jpg',photoAlt:'Cancha de fútbol de césped sintético de San Ber Arena',photoCredit:'Google Maps · Lucas Martinez · nov 2022',photoSource:mapaCid('0x72721c3ae0bafc79'),maps:mapaCid('0x72721c3ae0bafc79')},
  {name:'La Cancha · alquiler',category:'deportes',type:'Alquiler de cancha',area:'Zona MP7R',tags:['canchas-futbol'],phone:'0982 365458',photo:'assets/images/la-cancha-maps.jpg',photoAlt:'Campo de fútbol de La Cancha en San Bernardino',photoCredit:'Google Maps · Ariel Figueredo · nov 2025',photoSource:mapaCid('0xee58629b4d710470'),maps:mapaCid('0xee58629b4d710470')},
  {name:'Cancha del Club 5 de Julio',category:'deportes',type:'Campo de fútbol',area:'Zona PP29',tags:['canchas-futbol'],photo:'assets/images/club-5-julio-maps.jpg',photoAlt:'Partido en la cancha del Club 5 de Julio',photoCredit:'Google Maps · Luis Fernando Mendez Martinez · sept 2023',photoSource:mapaCid('0xca36ced69adef7c5'),maps:mapaCid('0xca36ced69adef7c5')},
  {name:'Club 3 de Febrero',category:'deportes',type:'Club de fútbol',area:'Zona MPGF',tags:['canchas-futbol'],maps:mapaCid('0xf7fdd9d55e94ae5')},
  {name:'Club 24 de Septiembre',category:'deportes',type:'Club de fútbol',area:'Zona PM7X',tags:['canchas-futbol'],maps:mapaCid('0x9eb637b6d3ac9200')},
  {name:'Club 12 de Junio',category:'deportes',type:'Club de fútbol',area:'Zona PPV6',tags:['canchas-futbol'],maps:mapaCid('0x1def3529061455de')},
  {name:'Club 12 de Octubre',category:'deportes',type:'Club de fútbol',area:'Avenida Guillermo Naumann',tags:['canchas-futbol'],maps:mapaCid('0x3845b8f05b63177d')},
  {name:'Club 20 de Julio · San Bernardino',category:'deportes',type:'Club de fútbol',area:'Zona PM7R',tags:['canchas-futbol'],maps:mapaCid('0x8c5c6220dc1c0e97')},
  {name:'Club Atlético Juventud Ciervo Cuá',category:'deportes',type:'Club de fútbol',area:'Ciervo Cuá',tags:['canchas-futbol'],maps:mapaCid('0xe81dbdf329fae1ab')},
  {name:'Sanber Padel Tour',category:'deportes',type:'Cancha de pádel',area:'Zona MPCG',tags:['padel'],maps:mapaCid('0xefd41451ae2637c7')},
  {name:'Villa Padel',category:'deportes',type:'Cancha de pádel',area:'Zona JPRR',tags:['padel'],maps:mapaCid('0x310e8c316a460ae8')},
  {name:'Cancha de Fede',category:'deportes',type:'Cancha de pádel',area:'Yegros',tags:['padel'],maps:mapaCid('0xf50d746e93867060')},
  {name:'Estación Padel',category:'deportes',type:'Cancha de pádel',area:'Cerca de San Ber · Altos',tags:['padel'],nearby:true,phone:'0983 922153',photo:'assets/images/estacion-padel-maps.jpg',photoAlt:'Paletas y pelotas sobre la pista de Estación Padel',photoCredit:'Google Maps · Rodrigo janick Balbuena zimmermann · nov 2021',photoSource:mapaCid('0xba8021882c53ab67'),maps:mapaCid('0xba8021882c53ab67')},
  {name:'Club Nacional',category:'deportes',type:'Club deportivo',area:'Zona MPP3',tags:['canchas-futbol'],maps:mapaCid('0xbf236253119f410b')},
  {name:'Cancha de Tenis · zona MP87',category:'deportes',type:'Cancha de tenis',area:'Zona MP87',tags:['tenis'],maps:mapaCid('0x6f069dbd5ef06984')},
  {name:'Complejo El Peluche',category:'deportes',type:'Club deportivo',area:'Zona MP8X',tags:['canchas-futbol'],maps:mapaCid('0x37e9abb8bf1dabae')},
  {name:'Estadio Municipal San Bernardino',category:'deportes',type:'Estadio',area:'Zona PP42',tags:['canchas-futbol'],maps:mapaCid('0x460e60d2410774d9')},
  {name:'Fibras y Artes',category:'deportes',type:'Piscina',area:'San Bernardino',tags:['otros-deportes'],phone:'0993 442000',maps:mapaCid('0x82249d4c12c53210')},
  {name:'Circuito de Cantegrill',category:'deportes',type:'Circuito de carreras',area:'Zona JPXF',tags:['otros-deportes'],maps:mapaCid('0xa24b3ebbfe9160eb')},
  {name:'Pista de Manu',category:'deportes',type:'Circuito todoterreno',area:'Zona MQ8H',tags:['otros-deportes'],phone:'0984 163088',maps:mapaCid('0x99367f48bca97694')},
  {name:'Complejo Endurero y Trialero Don Ovidio',category:'deportes',type:'Centro deportivo',area:'Zona JQHC',tags:['otros-deportes'],maps:mapaCid('0x5b6f58e57c6a09b3')},
  {name:'Donpi-ki',category:'deportes',type:'Campo de fútbol',area:'Cerca de San Ber · Altos',tags:['canchas-futbol'],nearby:true,phone:'0971 360458',maps:mapaCid('0xf03490d6cf087fb6')}
);

// La lista de quintas siguió creciendo hasta 120 resultados al agotar «Ver más».
catalogoZonas.push(
  {name:'Quinta Casa Bonita Che Vy’aha',category:'dormir',type:'Quinta',area:'Zona MPX8',tags:['quintas'],phone:'0983 244557',photo:'assets/images/quinta-casa-bonita-maps.jpg',photoAlt:'Jardín de Quinta Casa Bonita Che Vy’aha',photoCredit:'Google Maps · Xpert360 Paraguay',photoSource:mapaCid('0x84c35dbef2dfb3f9'),maps:mapaCid('0x84c35dbef2dfb3f9')},
  {name:'Mujica’s Summer House · Quinta y Eventos',category:'dormir',type:'Quinta y eventos',area:'San Bernardino',tags:['quintas'],phone:'0985 632951',maps:mapaCid('0x811378b5740d6c7b')},
  {name:'Quinta Los Parra III · Malibu',category:'dormir',type:'Quinta',area:'Cortijo Country Club',tags:['quintas'],phone:'0983 136749',photo:'assets/images/quinta-los-parra-iii-maps.jpg',photoAlt:'Piscina y terraza de Quinta Los Parra III',photoCredit:'Google Maps · Quinta Los Parra III · oct 2022',photoSource:mapaCid('0xb4a76265b6fea2d6'),maps:mapaCid('0xb4a76265b6fea2d6')},
  {name:'Quinta Taruma Róga',category:'dormir',type:'Quinta',area:'Ruta Luque–San Bernardino',tags:['quintas'],phone:'0986 796968',photo:'assets/images/quinta-taruma-maps.jpg',photoAlt:'Piscina y jardín de Quinta Taruma Róga',photoCredit:'Google Maps · Quinta Taruma Róga · mar 2022',photoSource:mapaCid('0x2290bbb9d0f4c34f'),maps:mapaCid('0x2290bbb9d0f4c34f')},
  {name:'La Casita de SanBer · Flia. Vázquez Amarilla',category:'dormir',type:'Quinta de alquiler',area:'San Bernardino',tags:['quintas'],phone:'0984 533922',photo:'assets/images/casita-flia-vazquez-maps.jpg',photoAlt:'Sala y galería de La Casita de SanBer',photoCredit:'Google Maps · La Casita de SanBer Flia Vázquez Amarilla · ene 2026',photoSource:mapaCid('0xc9bef557e021715e'),maps:mapaCid('0xc9bef557e021715e')},
  {name:'Quinta El Escondido',category:'dormir',type:'Alojamiento',area:'Zona PM7X',tags:['quintas'],maps:mapaCid('0xf3ad499fe9734ee0')},
  {name:'Quinta El Búho',category:'dormir',type:'Quinta de alquiler',area:'Ciervo Cuá',tags:['quintas'],maps:mapaCid('0x879b23b1e66f3866')},
  {name:'Casa Quinta Cielo Azul',category:'dormir',type:'Quinta de alquiler',area:'Zona PM5R',tags:['quintas'],maps:mapaCid('0xa143ca2a8aa9fce8')},
  {name:'Quinta La Victoria · Sanber Country Club',category:'dormir',type:'Quinta de alquiler',area:'Country Club',tags:['quintas'],phone:'0992 418971',photo:'assets/images/quinta-la-victoria-maps.jpg',photoAlt:'Piscina de Quinta La Victoria Sanber Country Club',photoCredit:'Google Maps · Montserrat Gonzalez · feb 2021',photoSource:mapaCid('0x84443226e2946d50'),maps:mapaCid('0x84443226e2946d50')},
  {name:'La Suiza',category:'dormir',type:'Alojamiento',area:'Ruta San Bernardino–Altos',tags:['quintas'],photo:'assets/images/la-suiza-maps.jpg',photoAlt:'Vista aérea del predio de La Suiza con el lago Ypacaraí de fondo',photoCredit:'Google Maps · René Aguiar · ago 2021',photoSource:mapaCid('0x9bde687cbdb4e898'),maps:mapaCid('0x9bde687cbdb4e898')},
  {name:'Paseo Sanber',category:'dormir',type:'Alquiler vacacional',area:'General Díaz · Ciervo Cuá',tags:['quintas'],phone:'0972 912290',photo:'assets/images/paseo-sanber-maps.jpg',photoAlt:'Comedor y patio del alojamiento Paseo Sanber',photoCredit:'Google Maps · Fabrizio Recalde · jul 2024',photoSource:mapaCid('0x3fae1af72db48f48'),maps:mapaCid('0x3fae1af72db48f48')},
  {name:'Costa Serena Sanber',category:'dormir',type:'Alquiler vacacional',area:'Zona PM7V',tags:['quintas'],phone:'0971 432111',photo:'assets/images/costa-serena-maps.jpg',photoAlt:'Vista del lago y el muelle desde Costa Serena Sanber',photoCredit:'Google Maps · Bruno Benitez · feb 2019',photoSource:mapaCid('0x7df691717a02af40'),maps:mapaCid('0x7df691717a02af40')}
);

catalogoZonas.push(
  {name:'Comercial San Bernardino',category:'compras',type:'Comercio de barrio',area:'Avenida Guillermo Naumann',tags:['despensas'],phone:'0981 558497',photo:'assets/images/comercial-sanber-maps.jpg',photoAlt:'Estantería de productos en Comercial San Bernardino',photoCredit:'Google Maps · Isaac Servin · jun 2020',photoSource:mapaCid('0x2ea3fc810dfbb51b'),maps:mapaCid('0x2ea3fc810dfbb51b')},
  {name:'Ñemuhamarket Despensa y Bodega',category:'compras',type:'Despensa y bodega',area:'Zona PM8R',tags:['despensas','bodegas'],maps:mapaCid('0xce72c455f47a1e18')},
  {name:'Despensa Villa Susy',category:'compras',type:'Despensa y bar',area:'Zona JQWH',tags:['despensas','bodegas'],maps:mapaCid('0x3350c0599d1907f')},
  {name:'Despensa San Onofre',category:'compras',type:'Despensa',area:'Paso Pelota',tags:['despensas'],maps:mapaCid('0x2431a3c852ce81d6')},
  {name:'Despensa Ara',category:'compras',type:'Despensa',area:'Zona QM5F',tags:['despensas'],maps:mapaCid('0x8bade89a5c9e3a0e')}
);

// Barrido de talleres de motos: ubicación, contacto y fotografía comprobados.
catalogoZonas.push(
  {name:"ALL RIDE biker's CLUB",category:'movilidad',type:'Taller de motos y club de motociclistas',area:'Zona MP4G',tags:['talleres'],phone:'0981 691609',photo:'assets/images/all-ride-bikers-maps.jpg',photoAlt:'Motociclistas reunidos en la sede de ALL RIDE',photoCredit:'Google Maps · Luis Rodrigo Duarte · abr 2026',photoSource:mapaCid('0x7c2833680be080bf'),maps:mapaCid('0x7c2833680be080bf')},
  {name:'Guardería BMS Off-Road',category:'recreacion',type:'Guardería y alquiler de motos off-road',area:'Avenida Guillermo Naumann',tags:['deportes','otros-deportes','aventura','alquileres'],phone:'0971 566077',photo:'assets/images/bms-offroad-maps.jpg',photoAlt:'Motos de enduro en la guardería BMS Off-Road',photoCredit:'Google Maps · Elizabeth Lopez Lezcano · ago 2025',photoSource:mapaCid('0x2ebc467d007b8eeb'),maps:mapaCid('0x2ebc467d007b8eeb')},
  {name:'Mecauto S.A. · San Bernardino',category:'movilidad',type:'Concesionario de motos',area:'Guillermo Naumann y Mbokaja',tags:['repuestos'],phone:'021 654950',website:'http://www.mecauto.com.py/',photo:'assets/images/mecauto-sanber-maps.jpg',photoAlt:'Exhibición de motos en la sede de Mecauto San Bernardino',photoCredit:'Google Maps · Mecauto S.A. · San Bernardino · ene 2018',photoSource:mapaCid('0x9b4620be4dcfec18'),maps:mapaCid('0x9b4620be4dcfec18')},
  {name:'JhodanN Moto Repuestos',category:'movilidad',type:'Repuestos y accesorios para motos',area:'Ruta San Bernardino–Altos',tags:['repuestos'],phone:'0983 111615',photo:'assets/images/jhodann-moto-repuestos-maps.jpg',photoAlt:'Fachada de JhodanN Moto Repuestos sobre la ruta',photoCredit:'Google Maps · jonathan noguera · may 2019',photoSource:mapaCid('0x159fa2260d3ab48e'),maps:mapaCid('0x159fa2260d3ab48e')},
  {name:'Taller Osval',category:'movilidad',type:'Taller de reparación de motos',area:'Zona PP32',tags:['talleres'],phone:'0971 297749',photo:'assets/images/taller-osval-maps.jpg',photoAlt:'Moto de enduro en reparación en Taller Osval',photoCredit:'Google Maps · Osvaldo Escobar · ene 2019',photoSource:mapaCid('0xd8d7c9e3a58cca12'),maps:mapaCid('0xd8d7c9e3a58cca12')},
  {name:'Taller Oscar',category:'movilidad',type:'Taller de maquinaria',area:'Zona MPJ7',tags:['talleres'],maps:mapaCid('0x8a308de570e4b53d')}
);

// La ficha pública de Harold Ávalos no ofrece galería identificable; se conserva su punto y contacto.
catalogoZonas.push(
  {name:'Taller de motos Harold Ávalos',category:'movilidad',type:'Taller de reparación de motos',area:'Mariscal López',tags:['talleres'],phone:'0971 525806',maps:mapaCid('0x9f02eb7fba06459f')}
);

// Barrido de consultorios: alta y foto revisadas en la misma visita a Maps.
catalogoZonas.push(
  {name:'Odontología Vaida San Bernardino',category:'salud',type:'Consultorio odontológico',area:'Lino Millot',tags:['odontologia'],phone:'0983 770999',photo:'assets/images/odontologia-vaida-maps.jpg',photoAlt:'Fachada de Odontología Vaida dentro del Centro Médico Integral San Bernardino',photoCredit:'Google Maps · Odontologia Vaida San Bernardino · sept 2026',photoSource:mapaCid('0xfd9662cc3ae1d878'),maps:mapaCid('0xfd9662cc3ae1d878')},
  {name:'Consultorio Odontológico Dra. Mariangel Franco',category:'salud',type:'Consultorio odontológico',area:'Independencia Nacional',tags:['odontologia'],phone:'0981 815025',photo:'assets/images/mariangel-franco-maps.jpg',photoAlt:'Entrada y cartel del Consultorio Odontológico Dra. Mariangel Franco',photoCredit:'Google Maps · Juan Alfonso · jun 2020',photoSource:mapaCid('0x23430c4c353af14b'),maps:mapaCid('0x23430c4c353af14b')}
);

// Cruce de alojamientos y comercios con medios locales; foto y ubicación en la misma alta.
catalogoZonas.push(
  {name:'La Negra Lodge',category:'dormir',type:'Lodge',area:'Ciervo Cuá',phone:'0971 202506',website:'https://www.facebook.com/lanegralodge',photo:'assets/images/la-negra-lodge-maps.jpg',photoAlt:'Vista aérea de La Negra Lodge en Ciervo Cuá',photoCredit:'Google Maps · Zenoura Verly Pereira · ago 2023',photoSource:mapaCid('0xc3532e8ddaada36d'),maps:mapaCid('0xc3532e8ddaada36d')},
  {name:'Tienda Frigomerc SB',category:'compras',type:'Carnicería',area:'Avenida Guillermo Naumann',tags:['carnicerias'],phone:'0994 356444',photo:'assets/images/frigomerc-sanber-maps.jpg',photoAlt:'Fachada de Tienda Frigomerc SB con exhibidores de carne',photoCredit:'Google Maps · Clari Vago · dic 2020',photoSource:mapaCid('0x21bd7529648176ca'),maps:mapaCid('0x21bd7529648176ca')}
);

// Operadores y clubes que ofrecen experiencias: también aparecen como fichas comerciales.
catalogoZonas.push(
  {name:'Aventura Xtrema',category:'recreacion',type:'Operador de turismo aventura',area:'Nuestra Señora de la Asunción',tags:['aventura','acuaticas','vuelos'],phone:'0961 639422',website:'https://www.aventuraxtrema.com.py/',description:'Cuatrimotos, 4×4, canotaje, paseos en lancha y vuelos panorámicos.',photo:'assets/images/cuacis-atardecer-aventura.webp',photoAlt:'Paseo en cuatrimotos de Aventura Xtrema al atardecer',photoCredit:'Aventura Xtrema · sitio oficial',photoSource:'https://www.aventuraxtrema.com.py/paseos/atv-aventura/',maps:mapaCid('0x38875efbc4fb2b7f')},
  {name:'Jetski Rental Paraguay · Sanber',category:'recreacion',type:'Alquiler de motos acuáticas',area:'Zona MPP3 · costa del lago',tags:['acuaticas','alquileres'],phone:'0984 666053',instagram:'https://www.instagram.com/jetskirentalpy/',description:'Jet ski, banana boat y gomón sofá en Playa Ciclovía.',photo:'assets/images/jetski-rental-paraguay-maps.jpg',photoAlt:'Tres motos acuáticas de Jetski Rental Paraguay sobre el lago Ypacaraí',photoCredit:'Google Maps · Jetski Rental Paraguay · mar 2026',photoSource:mapaCid('0x5e6b614502c1fdff'),maps:mapaCid('0x5e6b614502c1fdff')},
  {name:'Club de Vuelo Deportivo Yvytú',category:'recreacion',type:'Club de vuelo y aeródromo',area:'Zona JPVV',tags:['vuelos'],phone:'0981 259837',description:'Sede de salida de vuelos panorámicos ofrecidos por operadores locales.',photo:'assets/images/club-vuelo-yvytu-maps.jpg',photoAlt:'Avioneta en la pista del Club de Vuelo Deportivo Yvytú',photoCredit:'Google Maps · Leonardo Sosa · feb 2020',photoSource:mapaCid('0x3a67dda31d178532'),maps:mapaCid('0x3a67dda31d178532')},
  {name:'Catamarán Lago Azul',category:'recreacion',type:'Paseos en catamarán',area:'Costa del lago · zona centro',tags:['acuaticas'],phone:'0983 810704',description:'Paseos en catamarán por el lago Ypacaraí.',photo:'assets/images/catamaran-lago-azul-maps.jpg',photoAlt:'Vista del lago Ypacaraí desde el Catamarán Lago Azul',photoCredit:'Google Maps · Catamarán Lago Azul · jun 2025',photoSource:mapaCid('0xf960543ea4852f20'),maps:mapaCid('0xf960543ea4852f20')},
  {name:'Barco Raza Guaraní',category:'recreacion',type:'Paseos en barco',area:'Cerro Corá · costa del lago',tags:['acuaticas'],description:'Paseos por el lago Ypacaraí desde la costa de San Bernardino.',photo:'assets/images/barco-raza-guarani-maps.jpg',photoAlt:'Barco Raza Guaraní sobre el lago al atardecer',photoCredit:'Google Maps · Barco Raza Guaraní · jul 2026',photoSource:mapaCid('0x6fb994a3ae2f9470'),maps:mapaCid('0x6fb994a3ae2f9470')},
  {name:'TREK SANBERNARDINO',category:'recreacion',type:'Alquiler de bicicletas',area:'Avenida Luis F. Vaché · Parador Itaú',tags:['alquileres','deportes'],description:'Bicicletas y cuatriciclos para recorrer la ciudad desde el Parador Itaú.',photo:'assets/images/trek-sanbernardino-maps.jpg',photoAlt:'Bicicletas y cuatriciclo frente al Parador Itaú en San Bernardino',photoCredit:'Google Maps · John Segura · ene 2026',photoSource:mapaCid('0x13f3f0acc1020168'),maps:mapaCid('0x13f3f0acc1020168')},
  {name:'Kynda Drop Zone',category:'recreacion',type:'Paracaidismo y vuelos',area:'Avenida Ciervo Cuá',tags:['aventura','vuelos'],phone:'0986 105057',website:'https://kyndadropzone.com.py/',description:'Saltos tándem y cursos de paracaidismo con vista al lago y la ciudad.',photo:'assets/images/kynda-drop-zone-maps.jpg',photoAlt:'Avión de Kynda Drop Zone frente a su hangar en Ciervo Cuá',photoCredit:'Google Maps · Kynda Drop Zone · may 2024',photoSource:mapaCid('0x7f49c7fc41560a61'),maps:mapaCid('0x7f49c7fc41560a61')},
  {name:'Haras La Valtellina',category:'recreacion',type:'Cabalgatas y hacienda turística',area:'Compañía Yvu',tags:['aventura'],phone:'0981 173550',description:'Cabalgatas y encuentros familiares en las colinas de Altos, cerca de San Ber.',photo:'assets/images/haras-la-valtellina-maps.jpg',photoAlt:'Grupo en una cabalgata de Haras La Valtellina',photoCredit:'Google Maps · Haras La Valtellina · may 2022',photoSource:mapaCid('0xfa2f13e09e7e031d'),maps:mapaCid('0xfa2f13e09e7e031d')}
);

// Fichas heredadas que tenían un enlace de búsqueda. CID abre el punto concreto de Maps.
const enlacesMapsExactos = {
  "GRIMM'S Confitería Restaurante":'3774613992173411219',
  'La Alemana':'7579521313968650142',
  'La Casita Helados':'0x623e53038cd8056b',
  'O Gaúcho San Bernardino':'8040228847042224074',
  'El Super Chivito Uruguayo':'12138254580982722778',
  'La Carossa San Bernardino':'11886793529628302513',
  'PAN Baviera Exclusiva':'11051424773476889356',
  'Quinta Poe Poe':'2470572163745714099',
  'Manguruyú San Bernardino':'4468224881277970021',
  'Berlín Resto Bar':'2464808299564894420',
  'HETŪ Sunset Bar':'6882884668157088915',
  'Zolara':'9603041868629973978',
  'C&C BarberShop · Álvaro Godoy':'16547855746877196928',
  'Cutbarber Unisex':'1232859159549815243',
  'Emilse Segovia Coiffure':'415000236506333755',
  'Hernán Barber Studio':'16629364645760115815',
  'Maestic Spa':'15799080687924870225',
  'NERI ESPÍNOLA masculino/femenino':'8339459816782340365',
  'BarriosGym':'3072814515864584159',
  'CAPF M.L':'6034779064092784022',
  'LUGO TRAINING':'11410565780404005549',
  'Nino GYM':'5639866062031661586',
  'San Ber Gym':'12013646243177327528',
  'Sasha Wellness Center':'11312680609013498132',
  'MiniShop En Lo De Manu':'11119233598586315439',
  'Centro de Salud de San Bernardino':'1332791383525476533',
  'Policlínico Municipal de San Bernardino':'8138668957947746687',
  'Ferretería Huguito':'13131975057724373089',
  'Adorei Mar y Tierra Resto Bar':'0x3301dc095e5aa81f',
  'Bucca San Bernardino':'0x78655d4dad8efa15',
  'Casa Vital Crepería y Café':'0xea87dabb5f6a62c2',
  'El Viejo Marino':'0x389c5a32bef80c90',
  'Juan Valdez Café San Bernardino':'0xac9f29655ada1e73',
  'A Toda Huerta':'0x62e0f8e820ea8402',
  'Las Delicias de Sady':'0xcde9685ff0b9f11c',
  'Villa Aurora Café Resto Bar':'0x11537c8143625125',
  'Hotel Acuario':'0x89c7ed80a0bc957e',
  'Hotel del Lago':'0x7b5b701ef8140f10',
  'Hotel La Lilia':'0xb53a282f678d73d7',
  'La Casa del Cerro':'0xb8dde99d2f66edeb',
  'Mbokaja Cabañas':'0xf304189947b77d61',
  'Villa María · Del Val Hotel & Bistrô':'0xbc10670a5d4bb9de',
  'Diablada':'0x865fbd414ceed6dc',
  'Kessel Sanber':'0x5645cab270db122',
  'PuraPinta Jardín Cervecero':'0xc9c090ced7d576bd',
  'San Beer Cervecería':'0xd7127c8b8cd5f27f',
  'Anyprieto Makeup':'0xe686c7c8bc62d608',
  'ÁVA Club Sanber':'0x4f7635136d4d91a9',
  'Marylash':'0xc2a54f69fe0106f6',
  'SaraLi Salón de Belleza':'0x459f3a7841320bb9',
  'LEIRBAG Gimnasia Funcional y Hapkido':'0x8e334fe6d245e856',
  'Tía Laura San Ber':'0x1bf859c6a608db6b',
  'TAVA Glamping Cerro':'0xe57f6f5622e1f270',
  'Oasis Dream Spa':'0xcdb1fe467fdb37b0',
  'TAVA Wellness':'0xe57f6f5622e1f270',
  'Beauty&Spa Siempre Bella':'0xf96a0f1dc3b5097e',
  'Lizza Depilaciones San Ber':'0x363ecec9ee2b63e5',
  'La Bodega del Mundo · San Bernardino':'0x154e1acbf07caed9',
  'Shopping Mercado SanBer':'0xf9eb83037bdf00c1',
  'Clínica del Lago':'0xb6c1df8e33611fe2',
  'IPS · Puesto Sanitario San Bernardino':'0x6181146e9a017a09',
  'Quinta Tatano Espacios del Cielo':'0x7d853971db386c31'
};

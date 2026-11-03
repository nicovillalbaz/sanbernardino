// Contactos de servicios publicados por la Cámara de Comercio y Turismo de San Bernardino.
// PDF_GO_InfoSanber-web-1.pdf, páginas 3–8; NAVZ agregado por indicación de Nico.
// Revisión editorial: 03/11/2026.
// No se asignan coordenadas ni fotografías a profesionales sin sede pública identificada.
const profesionalesFuente = `
Eventos|Nino|0983 244 557|Alquileres para eventos
Eventos|Mario Cáceres|0983 113 611|Alquileres para eventos
Eventos|Richard|0981 577 159|Alquileres para eventos
Hogar|San Antonio|0994 763 996|Lubricantes y baterías
Hogar|Avalos|0985 418 269|Lubricantes y baterías
Hogar|José|0986 107 499|Carpintería
Hogar|Monti|0972 859 987|Carpintería
Hogar|Justino|0971 101 740|Cerrajería
Hogar|Gomez|0971 322 645|Cerrajería
Hogar|Beto|0985 409 615|Cerrajería
Hogar|SB Tres Fronteras|0981 892 751|Desagüe de pozo ciego
Hogar|Sanber Sadi|0984 683 797|Desagüe de pozo ciego
Hogar|Carlos|0982 486 696|Electricista
Hogar|Hugo Diaz|0971 914 914|Electricidad y plomería
Hogar|Luis Aquino|0984 453 382|Electricista
Hogar|Julio Salazar|0991 545 470|Fumigación, limpieza de terrenos y podas
Hogar|Lucas Rodríguez|0983 770 239|Fumigación, limpieza de terrenos y podas
Hogar|Gamarra|0981 385 374|Herrería
Hogar|Carlos|0971 377 037|Hojalatería
Hogar|Dario Gomez|0984 842 682|Jardinería
Hogar|Villalba|0984 259 676|Jardinería
Hogar|Pedro Irala|0972 954 552|Jardinería
Hogar|Doris|0986 862 981|Limpieza del hogar
Hogar|Miriam Bobadilla|0976 190 097|Limpieza del hogar
Hogar|Cnythia|0971 134 175|Limpieza de piscinas
Hogar|Enrique Vache|0981 849 137|Limpieza de piscinas
Hogar|Adolfo Desagües|0982 241 771|Limpieza de piscinas
Construcción|Andrés Ortega|0986 918 899|Maestro de obras
Construcción|Osvaldo Koen|0981 299 217|Maestro de obras
Hogar|Carlos Gomez|0981 597 001|Plomería
Hogar|Hugo Paredes|0984 969 206|Plomería
Hogar|Juan Alberto|0991 767 526|Plomería
Hogar|Víctor Vera|0981 437 232|Plomería
Hogar|Julio Ramon Ojeda|0981 995 543|Refrigeración
Hogar|Rolando Benítez|0971 620 000|Refrigeración
Hogar|Víctor Delgado|0971 141 457|Reparación de electrodomésticos
Hogar|Daniel Gómez|0982 849 082|Técnico de aire acondicionado
Hogar|Ortiz|0983 491 240|Técnico de aire acondicionado
Hogar|Edgar Lucena|0982 771 876|Motores y filtros de piscina
Hogar|Ramon|0984 771 452|Motores y filtros de piscina
Hogar|Marcelo Medina|0981 491 220|Portón eléctrico
Hogar|Ariel Amarilla|0982 672 535|Vidriería
Hogar|Francisco|0974 575 205|Vidriería
Hogar|Jhony Arguello|0971 107 091|Vidriería
Movilidad|Ariel|0972 547 770|Gomería
Movilidad|Andrés|0992 872 807|Mecánica de motos, UTV y cuatriciclos
Movilidad|SB Casin|0983 716 112|Mecánica de motos, UTV y cuatriciclos
Movilidad|Richar Tec|0981 577 159|Mecánica de motos, UTV y cuatriciclos
Movilidad|Pablo Peña|0981 232 236|Electricidad de autos
Movilidad|Rudy Moto|0981 113 490|Mecánica de motos
Movilidad|Shashi|0983 128 739|Motocarro
Movilidad|Héctor Chase|0981 199 100|Taxi y traslados
Movilidad|Pedro Arrua|0983 267 143|Taxi y traslados
Movilidad|Raúl|0981 830 697|Taxi y traslados
Movilidad|Saucedo|0982 370 369|Taxi y traslados
Movilidad|Sebastián Diaz|0976 928 383|Taxi y traslados
Movilidad|Jesús Zaracho|0972 889 402|Mudanzas y fletes
Bienestar|Marta Cabrera|0971 618 028|Masajes y fisioterapia
Bienestar|Natalia|0971 976 497|Masajes y fisioterapia
Bienestar|Carolina Benitez|0981 771 217|Masajes y fisioterapia
Bienestar|Lic. Viviana Espinola|0981 618 440|Yoga
Oficios|Gloria Fernández|0976 184 919|Modista
Oficios|Sonia Gómez|0981 497 471|Modista
Oficios|Tapicería Dos Hermanos|0981 620 737|Tapicería
Tecnología|NAVZ|+595 972 995 557|Desarrollo de apps y sistemas
Tecnología|Hugo Nacimiento|0982 612 624|Servicios informáticos
Tecnología|Vera Smart|0992 785 951|Servicios informáticos
Tecnología|DR Soluciones|0986 373 885|Seguridad y portones eléctricos
Tecnología|Carlos Ayala|0982 378 144|Seguridad y portones eléctricos
Tecnología|Héctor Kunert|0961 884 446|Reparación de celulares
`;

const profesionales = profesionalesFuente.trim().split('\n').map(line => {
  const [grupo,nombre,telefono,oficio] = line.split('|');
  return {grupo,nombre,telefono,oficio};
});

const emergencias = [
  {nombre:'Policía Nacional',detalle:'Emergencias',telefono:'911',fuente:'https://www.paraguay.gov.py/oee/mitic'},
  {nombre:'Bomberos Voluntarios',detalle:'Emergencias',telefono:'132',fuente:'https://www.paraguay.gov.py/oee/mitic'},
  {nombre:'SEME',detalle:'Emergencias médicas',telefono:'141',fuente:'https://www.paraguay.gov.py/oee/mitic'},
  {nombre:'Comisaría 16 · San Bernardino',detalle:'14 de Mayo e Independencia Nacional',telefono:'0512 232 204',fuente:'https://policianacional.gov.py/direccion-policia-cordillera/'},
  {nombre:'Comisaría 26 · Ciervo Cuá',detalle:'Ruta D012, km 41',telefono:'0991 621 270',fuente:'https://informacionpublica.paraguay.gov.py/public/2024/1729108810_1_RESPUESTADIRECCIONES-SOLICITUDID86420.pdf'},
  {nombre:'Centro de Salud San Bernardino',detalle:'España e Independencia Nacional',telefono:'0512 232 214',fuente:'https://www.mspbs.gov.py/dependencias/portal/adjunto/4a90e5-DIRECTORIOSaludMental.pdf'}
];

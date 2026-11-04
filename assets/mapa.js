// Mapa de exploración: posiciones propias, sin geolocalización ni rutas.
(() => {
  const canvas = document.getElementById('mapa-city');
  const detail = document.getElementById('mapa-detail');
  const count = document.getElementById('mapa-count');
  const select = document.getElementById('mapa-detail-filter');
  const filters = document.getElementById('mapa-filters');
  if (!canvas || !window.L || !Array.isArray(lugaresMapa)) return;

  const groups = [
    {key:'todos',label:'Todo',icon:'✳'},
    {key:'lugares',label:'Lugares',icon:'⌖',details:[['costa','Playas y lago'],['miradores','Miradores'],['historia','Historia'],['cultura','Cultura'],['fe','Iglesias y capillas']]},
    {key:'comer',label:'Comer',icon:'◒',details:[['desayuno','Desayunos'],['almuerzo','Almuerzos'],['merienda','Meriendas'],['cena','Cenas'],['rapida','Comida rápida'],['panaderias','Panaderías'],['heladerias','Heladerías'],['pizzerias','Pizzerías'],['lomiterias','Lomiterías'],['parrillas','Parrillas']]},
    {key:'dormir',label:'Dormir',icon:'◈',details:[['quintas','Quintas']]},
    {key:'noche',label:'Noche',icon:'✦'},
    {key:'recreacion',label:'Actividades',icon:'✳',details:[['aventura','Aventura'],['acuaticas','En el agua'],['vuelos','Vuelos'],['alquileres','Alquileres']]},
    {key:'belleza',label:'Belleza',icon:'✂',details:[['peluqueria','Peluquerías'],['barberia','Barberías'],['unas','Uñas'],['maquillaje','Maquillaje'],['masajes','Masajes']]},
    {key:'deportes',label:'Deportes',icon:'↗',details:[['gimnasios','Gimnasios'],['canchas-futbol','Fútbol y canchas'],['padel','Pádel'],['tenis','Tenis'],['otros-deportes','Otros deportes']]},
    {key:'salud',label:'Salud',icon:'✚',details:[['centros-salud','Centros de salud'],['odontologia','Odontología'],['farmacias','Farmacias']]},
    {key:'mascotas',label:'Mascotas',icon:'♣'},
    {key:'compras',label:'Compras',icon:'◈',details:[['supermercados','Supermercados'],['carnicerias','Carnicerías'],['minimercados','Minimercados'],['despensas','Despensas'],['bodegas','Bodegas'],['florerias','Viveros y flores'],['librerias','Librerías'],['tiendas','Moda y artesanías'],['tecnologia','Tecnología']]},
    {key:'hogar',label:'Hogar',icon:'⌂'},
    {key:'servicios',label:'Servicios',icon:'⚙',details:[['imprentas','Imprentas'],['lavanderias','Lavanderías'],['formacion','Formación'],['bancos','Bancos y giros'],['cajeros','Cajeros'],['eventos','Eventos']]},
    {key:'movilidad',label:'Movilidad',icon:'↗',details:[['estaciones','Estaciones de servicio'],['talleres','Talleres y gomerías'],['lavaderos','Lavaderos'],['repuestos','Repuestos']]},
    {key:'inmuebles',label:'Vivir',icon:'⌑',details:[['inmobiliarias','Inmobiliarias'],['barrios','Barrios cerrados'],['loteamientos','Loteamientos']]}
  ];
  const byKey = Object.fromEntries(groups.map(group => [group.key,group]));
  const locationFromUrl = url => {
    const match = url?.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/) || url?.match(/[?&]q=loc:(-?\d+\.\d+),(-?\d+\.\d+)/);
    const cid = url?.match(/[?&]cid=(\d+)/)?.[1];
    const saved = cid && coordenadasMapa[cid];
    if (!match && !saved) return null;
    const lat = match ? Number(match[1]) : saved.lat;
    const lng = match ? Number(match[2]) : saved.lng;
    return Number.isFinite(lat) && Number.isFinite(lng) ? {lat,lng} : null;
  };
  const businessPoints = businesses.filter(item => !item.inactive).map(item => {
    const location = locationFromUrl(item.maps);
    return location ? {...item,...location,kind:'negocio'} : null;
  }).filter(Boolean);
  const placePoints = lugaresMapa.map(item => ({...item,kind:'lugar',category:'lugares'}));
  const points = [...placePoints,...businessPoints];
  const boundary = L.latLngBounds([[-25.39,-57.36],[-25.19,-57.215]]);
  const map = L.map(canvas,{center:[-25.314,-57.286],zoom:12,minZoom:11,maxZoom:18,maxBounds:boundary,maxBoundsViscosity:1,zoomControl:false,worldCopyJump:false});
  L.control.zoom({position:'topright',zoomInTitle:'Acercar',zoomOutTitle:'Alejar'}).addTo(map);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom:18,keepBuffer:1,updateWhenIdle:true,
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>'
  }).addTo(map);
  const markers = L.markerClusterGroup({
    showCoverageOnHover:false,spiderfyOnMaxZoom:true,maxClusterRadius:48,
    iconCreateFunction: cluster => L.divIcon({className:'mapa-cluster',html:`<span>${cluster.getChildCount()}</span>`,iconSize:[42,42]})
  });
  map.addLayer(markers);
  let activeGroup = 'todos';
  let activeDetail = '';
  let selectedPoint = null;
  function closeDetail() { detail.hidden = true; detail.replaceChildren(); selectedPoint = null; }
  function showDetail(point) {
    selectedPoint = point;
    detail.replaceChildren();
    detail.classList.toggle('has-photo',Boolean(point.photo));
    const close = document.createElement('button'); close.type='button'; close.className='mapa-detail-close'; close.textContent='×'; close.setAttribute('aria-label','Cerrar ficha'); close.addEventListener('click',closeDetail);
    detail.append(close);
    if (point.photo) {
      const figure = document.createElement('figure'); figure.className='mapa-detail-image';
      const img = document.createElement('img'); img.src=point.photo; img.alt=point.kind==='negocio'?publicBusinessText(point.photoAlt||point.name):(point.photoAlt||point.name); img.loading='lazy'; figure.append(img);
      if(point.photoCredit && point.photoSource?.includes('google.com/maps')){
        const credit=document.createElement('span');credit.className='mapa-photo-credit';credit.textContent=point.photoCredit;figure.append(credit);
      }
      detail.append(figure);
    }
    const body = document.createElement('div'); body.className='mapa-detail-body';
    if(point.nearby){const badge=document.createElement('span');badge.className='mapa-nearby-label';badge.textContent='Cerca de San Ber';body.append(badge)}
    const type=document.createElement('span');type.className='mapa-detail-type';type.textContent=point.kind==='lugar'?'LUGAR · '+point.type:point.type;
    const title=document.createElement('h2');title.textContent=point.kind==='negocio'?publicBusinessText(point.name):point.name;
    const area=document.createElement('p');area.textContent=point.kind==='lugar'?'San Bernardino':publicBusinessText(point.nearby?point.area.replace(/^Cerca de San Ber\s*·\s*/,''):point.area);
    body.append(type,title,area);
    const actions=document.createElement('div');actions.className='mapa-detail-actions';
    if(point.phone){const phone=document.createElement('a');const digits=point.phone.replace(/\D/g,'');phone.href='tel:'+(digits.startsWith('595')?'+':'')+(digits.startsWith('595')?digits:'+595'+(digits.startsWith('0')?digits.slice(1):digits));phone.textContent='Llamar · '+point.phone;actions.append(phone)}
    const maps=document.createElement('a');maps.href=point.maps||point.source;maps.textContent='Ver en Maps ↗';maps.target='_blank';maps.rel='noopener noreferrer';actions.append(maps);
    detail.append(body,actions);detail.hidden=false;
  }
  function makeMarker(point) {
    const kind = point.kind==='lugar'?'lugar':point.category;
    const glyph = point.kind==='lugar'?'⌖':(byKey[point.category]?.icon||'✳');
    const icon=L.divIcon({className:`mapa-pin mapa-pin-${kind}`,html:`<span aria-hidden="true"><b>${glyph}</b></span>`,iconSize:[32,32],iconAnchor:[16,16]});
    const markerLabel=point.kind==='negocio'?publicBusinessText(point.name):point.name;
    const marker=L.marker([point.lat,point.lng],{icon,title:markerLabel,alt:markerLabel});
    marker.on('click',()=>showDetail(point));
    return marker;
  }
  function updateOptions(){
    select.replaceChildren();
    const all=document.createElement('option');all.value='';all.textContent=activeGroup==='lugares'?'Todos los lugares':'Todos los rubros';select.append(all);
    for(const [key,label] of byKey[activeGroup]?.details||[]){const option=document.createElement('option');option.value=key;option.textContent=label;select.append(option)}
    select.disabled=select.options.length===1;
  }
  function updateButtons(){for(const button of filters.querySelectorAll('button')){const active=button.dataset.group===activeGroup;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))}}
  function matches(point){
    if(activeGroup==='lugares' && point.kind!=='lugar')return false;
    if(!['todos','lugares'].includes(activeGroup) && point.category!==activeGroup)return false;
    if(activeDetail){
      if(point.kind==='lugar' && point.group!==activeDetail)return false;
      if(point.kind==='negocio' && !detailedBusinessFilters[activeDetail]?.(point))return false;
    }
    return true;
  }
  function render({focus=false}={}){
    const shown=points.filter(matches);
    markers.clearLayers();markers.addLayers(shown.map(makeMarker));
    count.textContent=`${shown.length} ${shown.length===1?'punto':'puntos'} en el mapa`;
    if(selectedPoint && !shown.includes(selectedPoint))closeDetail();
    if(focus && shown.length){
      if(shown.length===1)map.setView([shown[0].lat,shown[0].lng],Math.max(map.getZoom(),15));
      else map.fitBounds(L.latLngBounds(shown.map(point=>[point.lat,point.lng])),{padding:[32,32],maxZoom:15});
    }
  }
  for(const group of groups){const button=document.createElement('button');button.type='button';button.dataset.group=group.key;button.textContent=`${group.icon} ${group.label}`;button.addEventListener('click',()=>{activeGroup=group.key;activeDetail='';updateButtons();updateOptions();render({focus:true})});filters.append(button)}
  select.addEventListener('change',()=>{activeDetail=select.value;render({focus:true})});
  map.on('click',closeDetail);
  new IntersectionObserver(entries => { if (!entries[0].isIntersecting) closeDetail(); }).observe(canvas);
  updateButtons();updateOptions();render();
  window.addEventListener('resize',()=>map.invalidateSize());
})();

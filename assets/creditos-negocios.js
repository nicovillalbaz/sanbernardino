// Mantiene las fuentes del directorio en una página aparte y evita duplicarlas a mano.
(() => {
  const list = document.getElementById('business-source-list');
  if (!list || typeof businesses === 'undefined') return;
  const entries = businesses.filter(item => !item.inactive).sort((a, b) => a.name.localeCompare(b.name, 'es-PY'));
  const fragment = document.createDocumentFragment();
  for (const item of entries) {
    const row = document.createElement('li');
    const name = document.createElement('strong');
    name.textContent = publicBusinessText(item.name);
    row.append(name, ' · ');
    if (item.source) {
      const source = document.createElement('a');
      source.href = item.source;
      source.target = '_blank';
      source.rel = 'noopener noreferrer';
      source.textContent = 'Fuente de la ficha ↗';
      row.append(source, ' · ');
    }
    const maps = document.createElement('a');
    maps.href = item.maps;
    maps.target = '_blank';
    maps.rel = 'noopener noreferrer';
    maps.textContent = 'Mapa y galería ↗';
    row.append(maps);
    if (item.photoSource) {
      const photo = document.createElement('a');
      photo.href = item.photoSource;
      photo.target = '_blank';
      photo.rel = 'noopener noreferrer';
      photo.textContent = `${item.photoCredit || 'Imagen'} ↗`;
      row.append(' · ', photo);
    }
    fragment.append(row);
  }
  list.replaceChildren(fragment);
})();

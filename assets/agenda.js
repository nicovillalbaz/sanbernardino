// Fechas editoriales con fuente. "expires" solo controla cuándo retirar la tarjeta.
const agendaSanBer = [
  {
    title: 'Oktober Fest San Bernardino 2026',
    date: 'Sábado 31 de octubre · 12:30',
    place: 'Peatonal Demetrio Rojas',
    summary: 'Música, gastronomía y encuentro en la peatonal.',
    expires: '2026-11-01T06:00:00-03:00',
    url: 'https://viaparaguay.com/es/eventos/san-bernardino/oktober-fest-san-bernardino-2026-10-31',
    maps: 'https://www.google.com/maps/search/?api=1&query=Peatonal+Demetrio+Rojas+San+Bernardino+Paraguay'
  }
];

const agendaSection = document.getElementById('agenda');
const agendaGrid = document.getElementById('agenda-grid');
const activeEvents = agendaSanBer.filter(event => Date.parse(event.expires) > Date.now());
if (agendaSection && agendaGrid) {
  if (!activeEvents.length) {
    agendaSection.hidden = true;
    document.querySelector('a[href="#agenda"]')?.setAttribute('hidden', '');
  } else {
    const fragment = document.createDocumentFragment();
    for (const event of activeEvents) {
      const card = document.createElement('article');
      card.className = 'v2-card agenda-card';
      const eyebrow = document.createElement('span');
      eyebrow.className = 'eyebrow';
      eyebrow.textContent = event.date;
      const title = document.createElement('h3');
      title.textContent = event.title;
      const place = document.createElement('p');
      place.textContent = event.place;
      const summary = document.createElement('p');
      summary.textContent = event.summary;
      const link = document.createElement('a');
      link.href = event.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Ver evento y entradas ↗';
      const maps = document.createElement('a');
      maps.href = event.maps;
      maps.target = '_blank';
      maps.rel = 'noopener noreferrer';
      maps.textContent = 'Cómo llegar en Google Maps ↗';
      card.append(eyebrow, title, place, summary, maps, link);
      fragment.append(card);
    }
    agendaGrid.replaceChildren(fragment);
  }
}

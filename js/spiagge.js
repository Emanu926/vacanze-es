const SPIAGGE = [
    {
        nome: 'Spiaggia della Gaillarde',
        km: 0.3, libera: true, cani: false, bar: true,
        note: 'La più vicina alla villa. Sabbia fine, acque calme, stabilimento balneare con bar.',
        addr: 'Plage de la Gaillarde Les Issambres',
    },
    {
        nome: 'Spiaggia San Peire',
        km: 0.8, libera: true, cani: false, bar: true,
        note: 'Spiaggia del porto. Sabbia e ciottoli, bar e ristoranti sul lungomare.',
        addr: 'Plage San Peire Les Issambres',
    },
    {
        nome: 'Spiaggia dei Gireliers',
        km: 1.5, libera: true, cani: false, bar: false,
        note: 'Spiaggia tranquilla e poco frequentata, sabbia fine.',
        addr: 'Plage des Gireliers Les Issambres',
    },
    {
        nome: 'Spiaggia Gaillarde Ovest',
        km: 0.5, libera: true, cani: true, bar: false,
        note: 'Piccola caletta con accesso ai cani. Più selvaggia e tranquilla.',
        addr: 'Plage Gaillarde Ouest Les Issambres',
    },
    {
        nome: 'Spiaggia di Saint-Aygulf',
        km: 8, libera: true, cani: false, bar: true,
        note: 'Grande spiaggia sabbiosa, più frequentata. Servizi completi.',
        addr: 'Plage de Saint-Aygulf Fréjus',
    },
    {
        nome: 'Spiaggia di Sainte-Maxime',
        km: 9, libera: true, cani: false, bar: true,
        note: 'Lungomare con spiaggia attrezzata, negozi e ristoranti a 50 m.',
        addr: 'Plage de Sainte-Maxime',
    },
];

function initSpiagge() {
    renderSpiagge();
    const val = document.getElementById('dash-spiagge-val');
    if (val) val.textContent = SPIAGGE.length;
}

function renderSpiagge() {
    const el = document.getElementById('spiagge-list');
    if (!el) return;

    el.innerHTML = SPIAGGE.map(s => {
        const caniTag  = s.cani
            ? '<span class="badge-cani">🐾 cani ok</span>'
            : '<span class="badge-nocani">🚫 no cani</span>';
        const barTag   = s.bar ? '<span class="badge-bar">🍹 bar</span>' : '';
        const tipoTag  = s.libera ? '<span class="badge-libera">🆓 libera</span>' : '<span class="badge-attr">💰 attrezzata</span>';
        const mapsUrl  = 'https://maps.google.com/?q=' + encodeURIComponent(s.addr);
        return `<div class="spiaggia-card">
            <div class="sp-header">
                <div class="sp-nome">${s.nome}</div>
                <div class="sp-km">${s.km < 1 ? (s.km * 1000) + ' m' : s.km + ' km'}</div>
            </div>
            <div class="sp-badges">${tipoTag}${caniTag}${barTag}</div>
            <div class="sp-note">${s.note}</div>
            <div class="sp-links"><a href="${mapsUrl}" target="_blank" class="link-maps">🗺 Maps</a></div>
        </div>`;
    }).join('');
}

// ===== DATI ZONA LES ISSAMBRES =====

// Giorni: 0=Dom 1=Lun 2=Mar 3=Mer 4=Gio 5=Ven 6=Sab
const MERCATI = [
    { nome: 'Mercato Les Issambres',            luogo: 'Promenade Adrien Beaumont',      giorni: [1],          ora: '8:00–12:30',  tipo: '🥦 Alimentare',    km: 0  },
    { nome: 'Mercato notturno Les Issambres',   luogo: 'Promenade Adrien Beaumont',      giorni: [0, 4],       ora: '19:00–23:00', tipo: '🌙 Notturno',      km: 0,  soloEstate: true },
    { nome: 'Saint-Tropez — Place des Lices',   luogo: 'Place des Lices, Saint-Tropez',  giorni: [2, 6],       ora: '8:00–13:00',  tipo: '🛍 Provenzale',   km: 22 },
    { nome: 'Sainte-Maxime',                    luogo: 'Place Jean Mermoz',              giorni: [5],          ora: '8:00–12:30',  tipo: '🥦 Alimentare',    km: 8  },
    { nome: 'Sainte-Maxime notturno',           luogo: 'Lungomare, Sainte-Maxime',       giorni: [0,1,2,3,4,5,6], ora: 'dalle 16:00', tipo: '🌙 Artigianato', km: 8,  soloEstate: true },
    { nome: 'Saint-Raphaël — centro',           luogo: 'P.za Victor Hugo',               giorni: [2,3,4,5,6,0], ora: 'mattina',   tipo: '🥦 Alimentare',    km: 15 },
    { nome: 'Saint-Raphaël antiquariato',       luogo: 'Piazza Coullet',                 giorni: [2],          ora: 'mattina',     tipo: '🏺 Antiquariato',  km: 15 },
    { nome: 'Saint-Raphaël artigianato',        luogo: 'Porto vecchio',                  giorni: [0],          ora: 'mattina',     tipo: '🎨 Artigianato',  km: 15 },
];

const GIORNI_NOMI = ['Domenica','Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato'];
const GIORNI_BREVI = ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'];

const APERITIVI = [
    { nome: 'L\'Arpillon',   luogo: 'Les Issambres',  addr: '5015 Corniche des Issambres Les Issambres', tel: '0498219250', note: 'Spiaggia San Peire · cocktail e gelati · vista mare' },
    { nome: 'La Joya Bay',   luogo: 'Les Issambres',  addr: '2411 Corniche des Issambres Les Issambres', tel: '0494175384', note: 'Bar + piscina + spiaggia privata · vista mare' },
    { nome: 'Café de Paris', luogo: 'Saint-Tropez',   addr: 'Café de Paris Le Port Saint-Tropez',        tel: '0494970056', note: 'Classico sul porto · iconico · 22 km' },
    { nome: 'Le Sporting',   luogo: 'Saint-Tropez',   addr: '42 Place des Lices Saint-Tropez',           tel: '0494970065', note: 'Place des Lices · più tranquillo del porto · 22 km' },
    { nome: 'Bar du Port',   luogo: 'Sainte-Maxime',  addr: 'Port de Sainte-Maxime',                     tel: '',           note: 'Sul porto · tramonto verso ovest · 8 km' },
];

const RISTORANTI = [
    { nome: 'La Réserve Gayrard',     luogo: 'Les Issambres',  km: 0,  cani: true,  tel: '0494963539', addr: 'La Réserve Gayrard Les Issambres',           note: 'Piedi nell\'acqua, spiaggia Gaillarde. Cucina mediterranea, prodotti locali. Menu ~60€' },
    { nome: 'Le Maïva Plage',         luogo: 'Les Issambres',  km: 0,  cani: true,  tel: '0494968243', addr: 'Le Maïva Plage Gaillarde Les Issambres',       note: 'Spiaggia Gaillarde. Cucina mediterranea, terrazza teak vista mare' },
    { nome: 'Le Bistrot du Provençal', luogo: 'Les Issambres', km: 0,  cani: false, tel: '0494553233', addr: 'Hotel Le Provençal San Peïre Les Issambres',    note: 'Cucina francese e mediterranea, prodotti freschi locali' },
    { nome: 'Palma Plage',            luogo: 'Saint-Aygulf',   km: 8,  cani: false, tel: '0494454644', addr: '217 Avenue Côte d\'Azur Saint-Aygulf',         note: 'Piedi nell\'acqua, spiaggia Galiote. Cucina leggera, prodotti locali' },
    { nome: 'Martinus',               luogo: 'Saint-Aygulf',   km: 8,  cani: false, tel: '0494527485', addr: '214 RD 559 Saint-Aygulf',                       note: 'Vista panoramica sul Mediterraneo, spiaggia Esclamandes' },
    { nome: 'Le Ponton',              luogo: 'Saint-Aygulf',   km: 8,  cani: true,  tel: '',           addr: 'Le Ponton Saint-Aygulf',                        note: 'Cucina francese autentica in riva al mare. Cani tollerati in terrazza' },
    { nome: 'Les Tourelles',          luogo: 'Sainte-Maxime',  km: 15, cani: true,  tel: '0494960249', addr: '5 Boulevard des Cistes Sainte-Maxime',          note: 'Terrazza, cani in guinzaglio ammessi. Prodotti freschi · 9.2/10' },
    { nome: 'Chez Vous',              luogo: 'Sainte-Maxime',  km: 15, cani: false, tel: '0494796714', addr: '20 Avenue Charles de Gaulle Sainte-Maxime',     note: 'Atmosfera familiare, prodotti freschi di stagione' },
    { nome: 'Le Bistrot Du Coin',     luogo: 'Grimaud',        km: 20, cani: true,  tel: '0953245890', addr: '905 Avenue du Peyrat Grimaud',                  note: 'Cucina francese tradizionale, ambiente caldo' },
    { nome: 'Le Bistrot du Port',     luogo: 'Port Grimaud',   km: 20, cani: false, tel: '',           addr: 'Le Bistrot du Port Port Grimaud',               note: 'Vista porto, bouillabaisse e frutti di mare' },
    // Pizzerie
    { nome: 'Pizza FanFan',           luogo: 'Les Issambres',  km: 0,  cani: false, tel: '0494495313', addr: '101 Place San Peire Les Issambres',              note: 'Place San Peire · 17:00–22:00', pizza: true },
    { nome: 'Pizza Gusto',            luogo: 'Les Issambres',  km: 0,  cani: false, tel: '0494562450', addr: '14 Place San Peire Les Issambres',               note: 'Place San Peire · 17:30–21:00', pizza: true },
    { nome: 'Pizzas du Golfe',        luogo: 'Sainte-Maxime',  km: 15, cani: false, tel: '0494963650', addr: '13 Rue du Docteur Sigallas Sainte-Maxime',       note: 'Forno a legna · anche a domicilio', pizza: true },
    { nome: 'Chez Longu',             luogo: 'Sainte-Maxime',  km: 15, cani: false, tel: '0494490700', addr: '62 Rue Paul Bert Sainte-Maxime',                 note: 'Brasserie + pizzeria + frutti di mare', pizza: true },
];

const SUPERMERCATI = [
    { nome: 'Intermarché',      luogo: 'Les Issambres',  note: 'Più vicino alla villa', addr: 'Intermarché Les Issambres' },
    { nome: 'Carrefour Market', luogo: 'Sainte-Maxime',  note: '8 km',                  addr: 'Carrefour Market Sainte-Maxime' },
    { nome: 'Super U',          luogo: 'Saint-Raphaël',  note: '15 km, grande',          addr: 'Super U Saint-Raphaël' },
    { nome: 'Leclerc',          luogo: 'Fréjus',         note: '18 km, prezzi migliori', addr: 'Leclerc Fréjus' },
];

const NEGOZI = [
    // Pescherie
    { cat: '🐟 Pescheria', nome: 'Poissonnerie Delmar',    luogo: 'Les Issambres',        addr: '9 Place San Peire Les Issambres',                 tel: '0494542431', note: 'Pesce fresco · Place San Peire' },
    { cat: '🐟 Pescheria', nome: 'Poissonnerie du Golfe',  luogo: 'Sainte-Maxime',        addr: '98 route du Plan de la Tour Sainte-Maxime',       tel: '0494799455', note: '15 km · Halles d\'Yvette' },
    // Frutta e verdura
    { cat: '🥦 Frutta e verdura', nome: 'La Grande Bastide', luogo: 'Roquebrune-sur-Argens', addr: '160 route du Golf Roquebrune-sur-Argens',      tel: '0494536255', note: '30+ produttori locali, vendita diretta · prodotti di stagione' },
    // Macellerie
    { cat: '🥩 Macelleria', nome: 'Boucherie des Issambres', luogo: 'Les Issambres',      addr: '14 Place San Peire Les Issambres',                tel: '0494969246', note: 'Macellaio artigianale · Place San Peire' },
    { cat: '🥩 Macelleria', nome: 'Boucherie Chez Thierry',  luogo: 'Saint-Aygulf',       addr: '672 Avenue Louis Castillon Saint-Aygulf',         tel: '0494812263', note: '8 km' },
    { cat: '🥩 Macelleria', nome: 'Boucherie du Marché',     luogo: 'Sainte-Maxime',      addr: 'Marché Couvert 4 rue Fernand Bessy Sainte-Maxime',tel: '0489991124', note: '15 km · nel mercato coperto' },
    // Pasticcerie
    { cat: '🍰 Pasticceria', nome: 'La Tarte Tropézienne',  luogo: 'Les Issambres',       addr: '234 Boulevard des Murènes Les Issambres',         tel: '0494968460', note: 'La ricetta originale dal 1955 · aperta da 7:00' },
    { cat: '🍰 Pasticceria', nome: 'Pâtisserie de la Tour', luogo: 'Les Issambres',       addr: 'Allée des Muges Les Issambres',                   tel: '',           note: 'Pasticceria artigianale · aperta da 6:30' },
    // Panettieri
    { cat: '🥖 Panetteria', nome: 'Jérôme & Emilie',                    luogo: 'Les Issambres',  addr: '139 Boulevard des Myrtes 83380 Les Issambres',              tel: '',           note: 'Baguette e viennoiserie · aperta da 7:00' },
    { cat: '🥖 Panetteria', nome: 'Les Boulangeries du Soleil',          luogo: 'Saint-Aygulf',   addr: '1183 Avenue de la Corniche d\'Azur 83370 Saint-Aygulf',     tel: '0494958023', note: '8 km · aperta 6:00–20:00 tutti i giorni' },
    { cat: '🥖 Panetteria', nome: 'Maître Julien Artisan Boulanger',     luogo: 'Sainte-Maxime',  addr: '87 Route du Plan de la Tour 83120 Sainte-Maxime',           tel: '0494961999', note: '8 km · 493 recensioni · aperta 6:30–20:00' },
    { cat: '🥖 Panetteria', nome: 'Boulangerie Pâtisserie Boulaire',     luogo: 'Saint-Raphaël',  addr: '29 rue Marius Allongue 83700 Saint-Raphaël',               tel: '0494950782', note: '15 km · aperta 6:30–13:30 e 15:00–19:15' },
];

const MALTEMPO = [
    { cosa: 'Museo dell\'Annunciata',    dove: 'Saint-Tropez', note: 'Arte provenzale, fresco e tranquillo' },
    { cosa: 'Cittadella di Saint-Tropez',dove: 'Saint-Tropez', note: 'Vista panoramica, storia locale' },
    { cosa: 'Mercato coperto',           dove: 'Saint-Raphaël',note: 'Mercato al coperto ogni mattina' },
    { cosa: 'Fréjus romana',             dove: 'Fréjus',       note: 'Anfiteatro romano, arena. 18 km' },
    { cosa: 'Shopping centro',           dove: 'Sainte-Maxime',note: 'Centro pedonale, 8 km' },
];

const REGOLE_CANE = [
    '🐾 Guinzaglio obbligatorio in tutti i luoghi pubblici',
    '🏖 La maggior parte delle spiagge vieta i cani da giugno a settembre',
    '🍽 I ristoranti non sono obbligati ad accettare cani — meglio chiedere prima (terrasse sì di solito)',
    '🛒 Supermercati: cani non ammessi all\'interno',
    '✅ Cani ammessi nei parchi e nella maggior parte dei sentieri',
    '📋 Bibi deve avere microchip e vaccinazione antirabbica in regola per entrare in Francia',
];

// ===== HELPER LINKS =====
function mapsLink(query) {
    const url = 'https://maps.google.com/?q=' + encodeURIComponent(query);
    return `<a href="${url}" target="_blank" class="link-maps">🗺 Maps</a>`;
}
function telLink(num) {
    if (!num) return '';
    const clean = '+33' + num.replace(/[\s.]/g, '').replace(/^0/, '');
    return `<a href="tel:${clean}" class="link-tel">📞 ${num}</a>`;
}

// ===== INIT =====
function initZona() {
    renderZona();
    renderMaltempo();
    initZonaTabs();
    updateMarketWidget();
    updateRistorantiWidget();
    updateAperitiviWidget();
    updateMaltempoWidget();
}

// ===== WIDGET RISTORANTI =====
function updateRistorantiWidget() {
    const val = document.getElementById('dash-rist-val');
    const sub = document.getElementById('dash-rist-sub');
    if (!val) return;
    const dogFriendly = RISTORANTI.filter(r => r.cani).length;
    val.textContent = RISTORANTI.length;
    if (sub) sub.textContent = dogFriendly + ' dog-friendly';
}

// ===== WIDGET APERITIVI =====
function updateAperitiviWidget() {
    const val = document.getElementById('dash-aper-val');
    if (!val) return;
    val.textContent = APERITIVI.length;
}

// ===== WIDGET MALTEMPO =====
function updateMaltempoWidget() {
    const val = document.getElementById('dash-maltempo-val');
    if (!val) return;
    val.textContent = MALTEMPO.length;
}

// ===== RENDER SEZIONE MALTEMPO =====
function renderMaltempo() {
    const el = document.getElementById('maltempo-list');
    if (!el) return;
    el.innerHTML = `<div class="zona-list">` +
        MALTEMPO.map(m => `<div class="zona-item">
            <div class="zi-nome">${m.cosa}</div>
            <div class="zi-luogo">📍 ${m.dove}</div>
            <div class="zi-note">${m.note}</div>
        </div>`).join('') +
    `</div>`;
}

// ===== NAVIGA A ZONA E ATTIVA IL TAB =====
function goToZona(tab) {
    goTo('zona');
    setZonaTab(tab);
}

function setZonaTab(tab) {
    document.querySelectorAll('.zona-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    document.querySelectorAll('.zona-panel').forEach(p => p.classList.toggle('active', p.id === 'zona-' + tab));
}

function initZonaTabs() {
    document.querySelectorAll('.zona-tab').forEach(btn => {
        btn.addEventListener('click', () => setZonaTab(btn.dataset.tab));
    });
}

// ===== WIDGET DASHBOARD — mercato di oggi =====
function updateMarketWidget() {
    const oggi   = new Date().getDay();
    const mese   = new Date().getMonth() + 1;
    const estate = mese >= 6 && mese <= 9;

    const oggi_mercati = MERCATI.filter(m =>
        m.giorni.includes(oggi) && (!m.soloEstate || estate)
    );

    const el    = document.getElementById('market-today');
    const place = document.getElementById('market-place');
    if (!el) return;

    if (oggi_mercati.length === 0) {
        el.textContent    = 'Nessuno';
        if (place) place.textContent = 'oggi non ci sono mercati';
    } else if (oggi_mercati.length === 1) {
        el.textContent    = oggi_mercati[0].nome.split('—')[0].trim();
        if (place) place.textContent = oggi_mercati[0].ora + ' · ' + oggi_mercati[0].km + ' km';
    } else {
        el.textContent    = oggi_mercati.length + ' mercati';
        if (place) place.textContent = 'vedi sezione Zona';
    }
}

// ===== RENDER SEZIONE ZONA =====
function renderZona() {
    const oggi  = new Date().getDay();
    const mese  = new Date().getMonth() + 1;
    const estate = mese >= 6 && mese <= 9;

    // --- PANEL MERCATI ---
    const elM = document.getElementById('zona-mercati');
    if (elM) {
        let html = '';
        const oggi_m = MERCATI.filter(m => m.giorni.includes(oggi) && (!m.soloEstate || estate));
        if (oggi_m.length > 0) {
            html += `<div class="zona-oggi-banner">Oggi: `;
            html += oggi_m.map(m => `<strong>${m.nome}</strong> ${m.ora}`).join(' · ');
            html += `</div>`;
        }
        html += `<div class="mercati-list">`;
        MERCATI.forEach(m => {
            const isOggi = m.giorni.includes(oggi) && (!m.soloEstate || estate);
            const giorniTesto = m.giorni.map(g => GIORNI_BREVI[g]).join(', ');
            html += `<div class="mercato-row ${isOggi ? 'oggi' : ''}">
                <div class="mercato-main">
                    <div class="mercato-nome">${m.nome}</div>
                    <div class="mercato-luogo">📍 ${m.luogo} · ${m.km === 0 ? 'qui' : m.km + ' km'} ${mapsLink(m.nome + ' ' + m.luogo)}</div>
                </div>
                <div class="mercato-meta">
                    <div class="mercato-giorni">${giorniTesto}</div>
                    <div class="mercato-ora">${m.ora}</div>
                    <div class="mercato-tipo">${m.tipo}${m.soloEstate ? ' · estate' : ''}</div>
                </div>
            </div>`;
        });
        html += `</div>`;
        html += `<div class="section-title" style="margin-top:20px">🛍 Supermercati</div><div class="zona-list">`;
        SUPERMERCATI.forEach(s => {
            html += `<div class="zona-item">
                <div class="zi-nome">${s.nome} ${mapsLink(s.addr)}</div>
                <div class="zi-note">${s.luogo} · ${s.note}</div>
            </div>`;
        });
        html += `</div>`;
        elM.innerHTML = html;
    }

    // --- PANEL APERITIVI ---
    const elA = document.getElementById('zona-aperitivi');
    if (elA) {
        let html = `<div class="zona-list">`;
        APERITIVI.forEach(a => {
            html += `<div class="zona-item">
                <div class="zi-nome">${a.nome}</div>
                <div class="zi-luogo">📍 ${a.luogo} ${mapsLink(a.addr)}</div>
                <div class="zi-note">${a.note}</div>
                ${a.tel ? `<div class="zi-links">${telLink(a.tel)}</div>` : ''}
            </div>`;
        });
        html += `</div>`;
        elA.innerHTML = html;
    }

    // --- PANEL NEGOZI ---
    const elN = document.getElementById('zona-negozi');
    if (elN) {
        const categorie = [...new Set(NEGOZI.map(n => n.cat))];
        let html = '';
        categorie.forEach(cat => {
            html += `<div class="section-title" style="margin-top:${html ? 20 : 0}px">${cat}</div><div class="zona-list">`;
            NEGOZI.filter(n => n.cat === cat).forEach(n => {
                html += `<div class="zona-item">
                    <div class="zi-nome">${n.nome}</div>
                    <div class="zi-luogo">📍 ${n.luogo} ${mapsLink(n.addr)}</div>
                    <div class="zi-note">${n.note}</div>
                    <div class="zi-links">${telLink(n.tel)}</div>
                </div>`;
            });
            html += `</div>`;
        });
        elN.innerHTML = html;
    }

    // --- PANEL RISTORANTI ---
    const elR = document.getElementById('zona-ristoranti');
    if (elR) {
        const renderList = (items) => items.map(r => {
            const kmTesto = r.km === 0 ? 'qui' : r.km + ' km';
            const caniBadge = r.cani ? ' · <span class="badge-cani">🐾 cani ok</span>' : '';
            return `<div class="zona-item">
                <div class="zi-nome">${r.nome}</div>
                <div class="zi-luogo">📍 ${r.luogo} · ${kmTesto}${caniBadge} ${mapsLink(r.addr)}</div>
                <div class="zi-note">${r.note}</div>
                ${r.tel ? `<div class="zi-links">${telLink(r.tel)}</div>` : ''}
            </div>`;
        }).join('');

        const ristoranti = RISTORANTI.filter(r => !r.pizza);
        const pizzerie   = RISTORANTI.filter(r => r.pizza);

        let html = `<div class="zona-list">${renderList(ristoranti)}</div>`;
        html += `<div class="section-title" style="margin-top:20px">🍕 Pizzerie</div>`;
        html += `<div class="zona-list">${renderList(pizzerie)}</div>`;
        elR.innerHTML = html;
    }
}

// ===== RENDER SEZIONE INFO — parte statica =====
function renderInfo() {
    const el = document.getElementById('info-static');
    if (!el) return;

    // Regole cane
    let html = `<div class="section-title" style="margin-top:20px">🐾 Regole per Bibi</div>
    <div class="zona-list">`;
    REGOLE_CANE.forEach(r => {
        html += `<div class="zi-regola">${r}</div>`;
    });
    html += `</div>`;

    el.innerHTML = html;
}

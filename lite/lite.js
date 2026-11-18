/* The Rishta of the Season · the simple version.
   Same wording as the full film (../config.js), shown as one calm, free-scrolling
   page: open the box, read, tap what you like, RSVP. No games, no scroll-jacking. */
(function () {
  'use strict';
  const C = window.CONFIG;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const store = {
    get(k, d) { try { const v = localStorage.getItem('rishta:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('rishta:' + k, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  };
  const guest = (new URLSearchParams(location.search).get('guest') || '').trim().slice(0, 60);
  const DIR = '../' + C.assets.dir;
  const src = (slot) => DIR + (C.assets.scenes[slot] || slot);
  const B = C.couple.bride, G = C.couple.groom;
  const wedding = C.events.find((e) => e.key === 'wedding') || C.events[0];

  // a photo that quietly disappears if it is missing, leaving the section's painted background
  const photo = (slot, alt) => `<picture><source srcset="${src(slot)}.webp" type="image/webp"><img src="${src(slot)}.jpg" alt="${esc(alt || '')}" loading="lazy" decoding="async" onerror="this.closest('picture').remove()"></picture>`;
  const bg = (slot) => `<div class="bg" aria-hidden="true">${slot ? photo(slot) : ''}</div>`;
  const r = (d) => `class="r" style="--d:${d}"`;

  /* ---------- the page ---------- */
  const H = C.herald;
  const leadParas = H.lead.split(/(?<=\.)\s+(?=The celebrations)/);
  $('#page').innerHTML = `
  <section class="sec on-photo" id="hero">${bg('palace-sky')}
    <p class="label r" style="--d:0">${esc(C.hashtag.replace('#', '').replace(/([a-z])([A-Z])/g, '$1 $2'))}</p>
    <h1 class="names" aria-label="${esc(B.first)} and ${esc(G.first)}">
      <span class="write" style="--d:0">${esc(B.first)}</span><span class="amp write" style="--d:1">&amp;</span><span class="write" style="--d:2">${esc(G.first)}</span>
    </h1>
    <div class="pleasure r" style="--d:8">${esc(C.pleasure)}</div>
    <div class="date r" style="--d:9">${esc(C.dateLine)} · ${esc(C.city)}</div>
    <div class="cue">scroll</div>
  </section>

  <section class="sec" id="invite">${bg('sheesh-mahal')}<canvas aria-hidden="true"></canvas>
    <div class="card arch">
      <div class="bless r" style="--d:0" lang="sa">${esc(C.blessing)}</div>
      <div class="bless-sub r" style="--d:1">${esc(C.blessingSub)}</div>
      <div class="r" style="--d:2">${ART.orn()}</div>
      <p class="inv r" style="--d:3">${esc(C.invitation)}</p>
      <div class="names r" style="--d:4">${esc(B.full)}</div>
      <div class="parents r" style="--d:5">${esc(B.relation)} ${esc(B.parents)}</div>
      <div class="weds r" style="--d:6">weds</div>
      <div class="names r" style="--d:7">${esc(G.full)}</div>
      <div class="parents r" style="--d:8">${esc(G.relation)} ${esc(G.parents)}</div>
      <div class="dateline r" style="--d:9">${esc(C.dateLine)} · ${esc(C.city)}</div>
    </div>
  </section>

  <section class="sec" id="note">${bg('herald-window')}
    <article class="clip r" ${'style="--d:0"'} aria-label="${esc(H.masthead)}">
      <div class="mast"><small lang="hi">${esc(H.mastheadDeva)}</small>${esc(H.masthead)}</div>
      <div class="edition">${H.edition.map(esc).join(' · ')}</div>
      <h3>${esc(H.headline)}</h3>
      ${leadParas.map((p) => `<p>${esc(p)}</p>`).join('')}
      <div class="by">${esc(H.byline)}</div>
    </article>
  </section>

  <section class="sec" id="couple">
    <p class="label r" ${'style="--d:0"'}>The rishta</p>
    <h2 class="h r" style="--d:1">Meet the couple</h2>
    ${['bride', 'groom'].map((k) => {
      const P = C.couple[k], bio = C.biodatas[k], v = C.biodatas[k + 'Verdict'];
      return `<div class="person r" style="--d:2">
        <div class="frame"><div class="in"><span>${esc(P.first[0])}</span>${photo(k, P.full)}</div></div>
        <div class="title">${esc(P.title)}</div>
        <div class="names">${esc(P.full)}</div>
        <div class="parents">${esc(P.relation)} ${esc(P.parents)}</div>
        <button class="btn small bio-toggle" aria-expanded="false">Read Bua-ji's biodata</button>
        <div class="bio"><div><dl>${bio.map(([a, b]) => `<dt>${esc(a)}</dt><dd>${esc(b)}</dd>`).join('')}</dl><p class="verdict">Bua-ji's verdict: “${esc(v)}”</p></div></div>
      </div>`;
    }).join('')}
  </section>

  <section class="sec on-photo" id="story">${bg('terrace-line')}
    <div class="center"><p class="label r" style="--d:0">Whispers on the terrace</p><h2 class="h r" style="--d:1">How the rishta happened</h2></div>
    <div class="line">${C.chits.map((c, i) => `<div class="chit r" style="--d:${i % 2};--t:${i % 2 ? 1.2 : -1.2}deg"><span class="peg">${ART.peg()}</span><div class="when">${esc(c.when)}</div><p>${esc(c.text)}</p></div>`).join('')}</div>
  </section>

  <section class="sec on-photo" id="count">${bg('palace-sky')}
    <div class="clockface r" style="--d:0">${ART.clock()}${ART.clockHands()}</div>
    <p class="label r" style="--d:1">${esc(wedding.display)}</p>
    <h2 class="h r" style="--d:2">Until the shubh muhurat</h2>
    <div class="units r" style="--d:3" role="timer" aria-live="off">${['Days', 'Hours', 'Minutes', 'Seconds'].map((u) => `<div class="unit"><b data-u="${u[0]}">00</b><span>${u}</span></div>`).join('')}</div>
  </section>

  <section class="sec on-photo" id="events">${bg('durbar-ball')}
    <div class="center"><p class="label r" style="--d:0">${esc(C.eventsCity)}</p><h2 class="h r" style="--d:1">The season's engagements</h2></div>
    ${C.events.map((e) => `<article class="ev r" style="--c:${e.colour}">
      <div class="band">${ART.icon(e.icon)}<h3>${esc(e.name)}</h3></div>
      <div class="body">
        <div class="row"><b>When</b><span>${esc(e.display)}</span></div>
        <div class="row"><b>Where</b><span>${esc(e.venue)}</span></div>
        <div class="row"><b>Wear</b><span>${esc(e.dress)}</span></div>
        <div class="btns"><a class="btn small" href="${esc(C.mapsUrl)}" target="_blank" rel="noopener">Map</a><button class="btn small" data-ics="${e.key}">Add to calendar</button></div>
        ${e.perform ? `<div class="perform"><p>Performing at the sangeet?</p><div class="chips" role="group" aria-label="Choose a performance">${C.performances.map((x) => `<button class="chip" data-perf="${esc(x)}" aria-pressed="${store.get('sangeet', '') === x}">${esc(x)}</button>`).join('')}</div><div class="listed ${store.get('sangeet', '') ? 'on' : ''}">${ART.tick()}<span>Your name is on Bua-ji's list</span></div></div>` : ''}
      </div></article>`).join('')}
  </section>

  <section class="sec" id="rsvp">${bg('palace-night')}
    <div class="card">
      <form novalidate>
        <p class="label">Kindly reply by ${esc(C.rsvp.by)}</p>
        <h2 class="h">Will you join us?</h2>
        <label class="lbl" for="g-name">Your good name</label>
        <input type="text" id="g-name" autocomplete="name" placeholder="Sharma Family" value="${esc(guest)}">
        <label class="lbl">I shall attend</label>
        <div class="checks">${C.events.map((e) => `<label class="check"><input type="checkbox" value="${e.key}" checked>${esc(e.name)}</label>`).join('')}</div>
        <div class="selects">
          <label>Bride's or groom's side<select id="g-team"><option value="">Both, obviously</option>${Object.keys(C.joota.teams).map((k) => `<option value="${k}">${esc(C.joota.teams[k].label)}</option>`).join('')}</select></label>
          <label>Sangeet<select id="g-sangeet"><option value="">Just watching</option>${C.performances.map((x) => `<option>${esc(x)}</option>`).join('')}</select></label>
        </div>
        <button class="btn dark send" type="submit">Send by pigeon</button>
        <p class="hint">Opens WhatsApp with your reply ready to send.</p>
      </form>
      <div class="sent" aria-live="polite"><div class="names">Sent with love</div><p>The pigeon is on its way to the palace.</p><div class="btns"><a class="btn small dark" data-wa target="_blank" rel="noopener">Open WhatsApp</a><button class="btn small" data-edit>Edit my reply</button></div></div>
    </div>
    <nav class="contacts" aria-label="Contacts">${C.contacts.map((c) => `<a href="tel:${c.phone.replace(/\s/g, '')}"><small>${esc(c.role)}</small>${esc(c.name)}</a>`).join('')}</nav>
  </section>

  <section class="sec" id="finale">${bg('palace-night')}<canvas aria-hidden="true"></canvas>
    <div class="crest r" style="--d:0">${ART.crest()}</div>
    <h2 class="h r" style="--d:1">${esc(C.finale.line)}</h2>
    <div class="tag r" style="--d:2">${esc(C.hashtag)}</div>
    <div class="signoff r" style="--d:3">${esc(C.finale.signoff)}<span class="names">${esc(C.narrator)}</span></div>
    <div class="footer">Crafted with love by <b>${esc(C.brand)}</b><br><a class="full" href="../${location.search}">See the full film</a></div>
  </section>`;
  document.body.insertAdjacentHTML('afterbegin', ART.defs);

  /* ---------- the opener ---------- */
  const op = $('#opener');
  op.innerHTML = `<div class="bg">${photo('thaal-bg')}</div>
    ${C.assets.thaal.diyas.map((d) => `<div class="diya" style="left:${d.x * 100}%;top:${d.y * 100}%"></div>`).join('')}
    <div class="op-top"><div class="crest">${ART.crest()}</div><p class="label">An invitation has arrived for</p><div class="for">${esc(guest || 'you')}</div></div>
    <div class="box" style="left:${C.assets.thaal.box.x * 100}%;top:${C.assets.thaal.box.y * 100}%"><div class="glow"></div>
      <img class="closed" src="${DIR}box-closed.webp" alt="A velvet shagun box" onerror="this.outerHTML=ART.box(false).replace('<svg','<svg class=&quot;closed&quot;')">
      <img class="open" src="${DIR}box-open.webp" alt="" onerror="this.outerHTML=ART.box(true).replace('<svg','<svg class=&quot;open&quot;')">
    </div>
    <button class="btn tap">Tap to open</button>`;
  op.setAttribute('role', 'button'); op.setAttribute('aria-label', 'Open your invitation');
  let opened = false;
  function open() {
    if (opened) return; opened = true;
    Sound.unlock(); FX.requestTilt();
    if (store.get('music', true)) setMusic(true);
    Sound.sfx.velvet();
    op.classList.add('opening');
    if (petals && !RM) { petals.set(10, ['rose', 'jasmine']); petals.shower(24); }
    setTimeout(() => { Sound.sfx.chime(); op.classList.add('gone'); document.body.classList.remove('locked'); }, RM ? 200 : 1400);
    setTimeout(() => { op.remove(); reveal($('#hero')); }, RM ? 400 : 2400);
  }
  op.addEventListener('click', open);
  op.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  op.tabIndex = 0;
  // diyas flicker, gently and never in step
  const diyas = $$('.diya', op); let ft = 0;
  (function flick() { if (!op.isConnected) return; ft += 0.016; diyas.forEach((d, i) => { const n = FX.fbm(ft * 3 + i * 13); d.style.opacity = 0.5 + n * 0.5; d.style.transform = `translate(-50%,-50%) scale(${0.9 + n * 0.2})`; }); requestAnimationFrame(flick); })();

  /* ---------- reveals, one block at a time as it arrives ---------- */
  function reveal(root) { $$('.r, .write', root).forEach((el) => el.classList.add('in')); }
  const io = new IntersectionObserver((ents) => ents.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add('in'); io.unobserve(en.target);
  }), { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
  $$('.r, .write').forEach((el) => { if (!el.closest('#hero')) io.observe(el); });

  /* ---------- music ---------- */
  const mb = $('#music'); mb.innerHTML = ART.sitar();
  function setMusic(on) {
    if (on) Sound.startMusic('../' + C.assets.music); else Sound.stopMusic();
    mb.classList.toggle('off', !on); mb.setAttribute('aria-pressed', on); mb.setAttribute('aria-label', on ? 'Mute music' : 'Play music');
    store.set('music', on);
  }
  mb.addEventListener('click', () => { Sound.unlock(); setMusic(!Sound.isOn()); });

  /* ---------- petals, sparkle and fireworks (only while their section is on screen) ---------- */
  const pc = $('#petals');
  let petals = null;
  function sizePetals() { pc.style.width = Math.min(innerWidth, 480) + 'px'; pc.style.height = innerHeight + 'px'; petals && petals.resize(); }
  if (!RM) { sizePetals(); petals = new FX.Petals(pc); }
  const inv = $('#invite canvas'), glints = RM ? null : new FX.Glints(inv, { regions: [[0, 0, 1, 1]], exclude: [[0.04, 0.1, 0.96, 0.92]], count: 500, size: 10, sharp: 9, grid: 0.012 });
  const fw = RM ? null : new FX.Fireworks($('#finale canvas'));
  const vis = {};
  const vio = new IntersectionObserver((ents) => ents.forEach((en) => { vis[en.target.id] = en.isIntersecting; }), { threshold: 0.05 });
  ['hero', 'invite', 'count', 'finale', 'story', 'events'].forEach((id) => vio.observe(document.getElementById(id)));
  let showered = false, last = performance.now(), hidden = false;
  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    if (!hidden) {
      FX.updateTilt();
      if (glints && vis.invite) glints.draw(dt, scrollY / innerHeight);
      if (fw && vis.finale) fw.draw(dt);
      if (vis.count) tickClock();
      if (petals) {
        petals.set(vis.finale ? 34 : vis.hero && opened ? 10 : vis.story ? 5 : 0, vis.finale ? ['rose', 'rose', 'marigold', 'jasmine'] : ['rose', 'jasmine']);
        if (vis.finale && !showered) { showered = true; petals.shower(40); Sound.sfx.chime(); }
        if (opened) petals.draw(dt);
      }
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  document.addEventListener('visibilitychange', () => { hidden = document.hidden; if (hidden) Sound.suspend(); else { Sound.resume(); last = performance.now(); } });
  addEventListener('resize', () => { sizePetals(); glints && glints.resize(); fw && fw.resize(); });

  /* ---------- the clock and countdown ---------- */
  const hh = $('#count .h-hour'), mm = $('#count .h-min'), ss = $('#count .h-sec');
  [hh, mm, ss].forEach((h) => { h.style.transformOrigin = '100px 110px'; h.style.transformBox = 'view-box'; });
  const target = new Date(C.muhurat).getTime();
  let lastSec = -1;
  function tickClock() {
    const now = new Date(Date.now() + (C.timezoneOffsetMinutes + new Date().getTimezoneOffset()) * 60000);
    const s = now.getSeconds() + now.getMilliseconds() / 1000, m = now.getMinutes() + s / 60, h = (now.getHours() % 12) + m / 60;
    ss.style.transform = `rotate(${s * 6}deg)`; mm.style.transform = `rotate(${m * 6}deg)`; hh.style.transform = `rotate(${h * 30}deg)`;
    const whole = Math.floor(Date.now() / 1000); if (whole === lastSec) return; lastSec = whole;
    const left = Math.max(0, Math.floor((target - Date.now()) / 1000));
    if (!left) { $('#count .units').innerHTML = '<div class="names" style="font-size:44px">Rishta sealed. Forever.</div>'; return; }
    const v = { D: Math.floor(left / 86400), H: Math.floor(left / 3600) % 24, M: Math.floor(left / 60) % 60, S: left % 60 };
    Object.keys(v).forEach((k) => { const el = $(`#count [data-u="${k}"]`); if (el) el.textContent = String(v[k]).padStart(2, '0'); });
  }
  tickClock();

  /* ---------- the couple: biodata opens below, no flipping needed ---------- */
  $$('.bio-toggle').forEach((b) => b.addEventListener('click', () => {
    const bio = b.nextElementSibling, on = !bio.classList.contains('open');
    bio.classList.toggle('open', on); b.setAttribute('aria-expanded', on); b.textContent = on ? 'Close the biodata' : "Read Bua-ji's biodata";
    Sound.sfx.rustle();
  }));

  /* ---------- events ---------- */
  $$('[data-ics]').forEach((b) => b.addEventListener('click', () => ics(C.events.find((e) => e.key === b.dataset.ics))));
  $$('[data-perf]').forEach((b) => b.addEventListener('click', () => {
    $$('[data-perf]').forEach((x) => x.setAttribute('aria-pressed', x === b));
    store.set('sangeet', b.dataset.perf); $('#g-sangeet').value = b.dataset.perf;
    const l = $('.listed'); l.classList.remove('on'); void l.offsetWidth; l.classList.add('on');
    Sound.sfx.chime();
  }));
  function ics(e) {
    const [y, mo, d] = e.date.split('-').map(Number), [h, mi] = e.time.split(':').map(Number);
    const start = new Date(Date.UTC(y, mo - 1, d, h, mi) - C.timezoneOffsetMinutes * 60000), end = new Date(start.getTime() + 4 * 3600000);
    const f = (dt) => dt.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
    const x = (s) => String(s).replace(/([,;\\])/g, '\\$1');
    const body = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Aamantran Atelier//Rishta of the Season//EN', 'METHOD:PUBLISH', 'BEGIN:VEVENT',
      `UID:${e.key}-${f(start)}@aamantran-atelier`, `DTSTAMP:${f(new Date())}`, `DTSTART:${f(start)}`, `DTEND:${f(end)}`,
      `SUMMARY:${x(e.name + ' · ' + B.first + ' & ' + G.first)}`, `LOCATION:${x(e.venue + ', ' + C.eventsCity)}`,
      `DESCRIPTION:${x('Dress code: ' + e.dress + '. Map: ' + C.mapsUrl)}`, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([body], { type: 'text/calendar;charset=utf-8' }));
    a.download = `${e.key}-${B.first}-${G.first}.ics`.toLowerCase(); document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  /* ---------- RSVP by pigeon ---------- */
  const form = $('#rsvp form'), name = $('#g-name'), sent = $('#rsvp .sent');
  const saved = store.get('rsvp', null);
  if (saved && !guest) name.value = saved.name || '';
  if (saved && saved.events) $$('.check input').forEach((c) => (c.checked = saved.events.includes(c.value)));
  $('#g-team').value = store.get('team', '') || ''; $('#g-sangeet').value = store.get('sangeet', '') || '';
  $('#g-team').addEventListener('change', (e) => store.set('team', e.target.value));
  $('#g-sangeet').addEventListener('change', (e) => store.set('sangeet', e.target.value));
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!name.value.trim()) { name.focus(); name.placeholder = 'Your name, beta'; return; }
    const evs = $$('.check input:checked').map((c) => c.value), team = $('#g-team').value, sang = $('#g-sangeet').value;
    store.set('rsvp', { name: name.value.trim(), events: evs });
    const msg = C.rsvp.message.replace('{guest}', name.value.trim())
      .replace('{events}', evs.length ? evs.map((k) => C.events.find((x) => x.key === k).name).join(', ') : 'only in spirit')
      .replace('{team}', team ? C.joota.teams[team].label : 'Both sides').replace('{sangeet}', sang || 'cheering from my seat');
    const url = `https://wa.me/${C.rsvp.whatsapp}?text=${encodeURIComponent(msg)}`;
    $('[data-wa]').href = url;
    // a pigeon carries the card away, then WhatsApp opens
    const btn = $('.send', form).getBoundingClientRect();
    const bird = document.createElement('div'); bird.className = 'bird flap';
    bird.innerHTML = `<div class="f1">${ART.pigeon(true)}</div><div class="f2">${ART.pigeon(false)}</div>`;
    document.body.appendChild(bird);
    Sound.sfx.wings();
    const x0 = btn.left + btn.width / 2 - 32, y0 = btn.top - 30;
    const anim = RM ? null : bird.animate([
      { transform: `translate(${x0}px, ${y0}px) scale(.8)`, opacity: 0 },
      { transform: `translate(${x0 + 30}px, ${y0 - 60}px) scale(1)`, opacity: 1, offset: 0.2 },
      { transform: `translate(${x0 + 140}px, ${y0 - 260}px) scale(.7)`, opacity: 1, offset: 0.7 },
      { transform: `translate(${x0 + 260}px, ${y0 - 460}px) scale(.4)`, opacity: 0 }
    ], { duration: 2000, easing: 'cubic-bezier(.4,0,.3,1)' });
    form.style.display = 'none'; sent.classList.add('on');
    const go = () => { bird.remove(); location.href = url; };
    if (anim) anim.onfinish = go; else go();
  });
  $('[data-edit]').addEventListener('click', () => { sent.classList.remove('on'); form.style.display = ''; });

  /* ---------- progress, RSVP shortcut, desktop backdrop ---------- */
  const bar = $('#bar i'), pill = $('#rsvpPill'), amb = $('#ambient');
  const sections = $$('.sec');
  let ambSlot = '';
  addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    const rs = $('#rsvp').getBoundingClientRect();
    pill.classList.toggle('on', scrollY > innerHeight * 0.8 && (rs.top > innerHeight || rs.bottom < 0));
    if (innerWidth >= 520) {
      const cur = sections.find((s) => { const b = s.getBoundingClientRect(); return b.top <= innerHeight / 2 && b.bottom > innerHeight / 2; });
      const img = cur && $('.bg img', cur); const s = img ? (img.currentSrc || img.src) : '';
      if (s && s !== ambSlot) { ambSlot = s; amb.style.backgroundImage = `url(${s})`; }
    }
  }, { passive: true });
  if (innerWidth >= 520) amb.style.backgroundImage = `url(${src('thaal-bg')}.jpg)`;
})();

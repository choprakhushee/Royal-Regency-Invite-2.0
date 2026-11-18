/* ============================================================================
   THE RISHTA OF THE SEASON · shared settings for both versions of the invite
   (the full film at / and the simple version at /lite/). Change a couple's
   names, dates, events and Bua-ji's copy here. Images: assets/manifest.json
   ========================================================================== */
window.CONFIG = {
  brand: 'Aamantran Atelier',
  hashtag: '#TheRishtaOfTheSeason',
  guestDefault: 'you',

  couple: {
    bride: { first: 'Myra', full: 'Myra Bhandari', parents: 'Mrs. Sunita & Mr. Deepak Bhandari', city: 'Delhi', title: 'The Belle of Delhi', relation: 'daughter of' },
    groom: { first: 'Aryaman', full: 'Aryaman Rathore', parents: 'Mrs. Gayatri & Mr. Mahendra Singh Rathore', city: 'Jodhpur', title: 'The Gentleman of Jodhpur', relation: 'son of' }
  },
  blessing: '॥ श्री गणेशाय नमः ॥',
  blessingSub: 'With the blessings of Lord Ganesha and our elders',
  invitation: 'With the blessings of our elders, the Bhandari and Rathore families request the pleasure of your company as Myra and Aryaman begin their forever.',
  dateLine: '12 · 02 · 2028',
  city: 'Jaipur',
  pleasure: 'request the pleasure of your company',
  muhurat: '2028-02-12T19:00:00+05:30',
  timezoneOffsetMinutes: 330,

  rsvp: {
    by: '12 January 2028',
    whatsapp: '919999999999',
    message: 'Pyaare Myra & Aryaman, {guest} accepts your gracious invitation with the utmost delight! Attending: {events}. Team: {team}. Sangeet: {sangeet} 🕊️🌸'
  },
  contacts: [
    { name: 'Tara Bhandari', role: "the bride's sister", phone: '+91 99999 21212' },
    { name: 'Yuvraj Rathore', role: "the groom's cousin", phone: '+91 99999 12121' }
  ],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=City+Palace+Jaipur',

  narrator: 'A Certain Well-Informed Bua-ji',
  herald: {
    masthead: 'THE HAVELI HERALD',
    mastheadDeva: 'हवेली हेराल्ड',
    edition: ['Special Shaadi Edition', 'Season of 2028', 'Price: One Ladoo'],
    headline: 'RISHTA OF THE SEASON FIXED!',
    deck: 'Bhandaris of Delhi and Rathores of Jodhpur to unite; aunties across two states demand seating charts',
    lead: 'Pyaare padhne waalon, hold on to your chai. This author can now confirm what every kitty party from Defence Colony to Sardarpura has been whispering for months: Miss Myra Bhandari, the sharpest wit and finest antakshari champion in all of Delhi, is to wed Mr. Aryaman Rathore, the Jodhpur architect with the polo shoulders and the pun problem. The families have exchanged mithai, the pandit-ji has stopped pretending to be surprised, and the Bhandari WhatsApp group has crossed four hundred unread messages before breakfast. The celebrations will unfold in Jaipur this February, among pink palaces, fountains and a great deal of gota-patti. Invitations, this author hears, have been sent to only the most deserving. If you are reading this, beta, congratulations: you are one of them. Dress well. Bua-ji is watching.',
    predictions: [
      'The groom will cry first at the varmala. The bride will deny crying at all.',
      'At least three rishtas will be fixed at the sangeet, one of them before the second song.',
      'A certain chacha will dance to the dhol until the band begs for mercy.'
    ],
    byline: '— A Certain Well-Informed Bua-ji'
  },

  chits: [
    { when: 'Winter 2021 · A Delhi wedding', text: "Pyaare padhne waalon, this author has learned that at the Malhotras' sangeet, a certain Rathore boy from Jodhpur abandoned his dance troupe mid-performance to fetch Miss Bhandari a second plate of gol gappe. Scandalous. Delicious." },
    { when: '2022 – 2024', text: 'Letters! Voice notes! An entire Jodhpur-to-Delhi train route memorised by heart! This author has never seen a long-distance rishta so determined, nor a phone bill so long.' },
    { when: 'Diwali 2026 · Jaipur', text: 'On a palace terrace, under a sky full of lanterns, the gentleman went down on one knee. The lady, this author hears, said yes before he finished, then made him ask again for the video.' },
    { when: 'The Season of 2028', text: 'And so the rishta of the season is fixed, beta. You are summoned to witness it. Bua-ji will be watching, as always.' }
  ],

  biodatas: {
    bride: [['Name', 'Myra Bhandari'], ['Height', '5\'4" (5\'7" in heels)'], ['Education', 'MA, plus a PhD in arguing'], ['Hobbies', 'reading, baking, winning every family antakshari'], ['Looking for', 'someone who laughs at her jokes and shares his dessert']],
    brideVerdict: 'Too good for any boy. Except perhaps this one.',
    groom: [['Name', 'Aryaman Rathore'], ['Height', '6\'0" (5\'11" honestly)'], ['Profession', 'architect'], ['Hobbies', 'polo, terrible puns, making chai at 2 AM'], ['Special skill', 'can survive any Delhi aunty interrogation']],
    groomVerdict: 'A Rathore with manners. Rare. Grab him.'
  },

  kundli: {
    title: 'The Kundli Match',
    score: 36,
    verdict: 'Itna perfect match? Even the pandit-ji is suspicious.',
    note: 'Purely for fun. No stars were consulted, only aunties.'
  },

  mehendi: {
    prompt: 'Somewhere in her mehendi, his name is hidden. Can you find it?',
    found: 'Found! The groom will be relieved.',
    hint: 'Psst… look near her right palm.',
    hintAfterSeconds: 20,
    name: 'Aryaman', initial: 'A',
    // where the name is drawn, as fractions of the screen (x, y), its rotation and size
    position: { x: 0.66, y: 0.6, rotate: -24, scale: 1 }
  },

  joota: {
    teams: {
      ladkiwale: { label: 'Team Ladkiwale', sub: "the bride's side", colour: 'rose' },
      ladkewale: { label: 'Team Ladkewale', sub: "the groom's side", colour: 'mint' }
    },
    tries: 3,
    // hiding spots, as fractions of the screen; the juttis are hidden in a random one
    spots: [
      { id: 'curtain', label: 'Behind the curtain', x: 0.16, y: 0.42, anim: 'sway' },
      { id: 'trunk', label: 'In the trunk', x: 0.3, y: 0.8, anim: 'lid' },
      { id: 'sofa', label: 'Under the cushion', x: 0.62, y: 0.7, anim: 'lift' },
      { id: 'mirror', label: 'Behind the mirror', x: 0.8, y: 0.4, anim: 'tilt' },
      { id: 'turban', label: 'In the turban box', x: 0.55, y: 0.5, anim: 'lid' }
    ],
    winLadkiwale: 'Found! Shagun demand: ₹21,000 and a lifetime of chai.',
    winLadkewale: 'Saved! The groom walks to his mandap in style.',
    miss: ['Nahi mila! Try again, beta.', 'Wrong spot. Bua-ji is smirking.'],
    lose: "Arre! The juttis were {spot}. Bua-ji says you'd never survive a real joota chupai."
  },

  events: [
    { key: 'mehendi', name: 'The Mehendi Garden Party', date: '2028-02-10', time: '16:00', display: '10 Feb 2028 · 4:00 PM', venue: 'The Charbagh Gardens', dress: 'Garden pastels, florals', colour: '#BFDCCB', icon: 'mehendi' },
    { key: 'haldi', name: 'The Haldi Morning', date: '2028-02-11', time: '10:00', display: '11 Feb 2028 · 10:00 AM', venue: 'The Courtyard of Fountains', dress: 'Lemon yellow & marigold', colour: '#F4DDA0', icon: 'haldi' },
    { key: 'sangeet', name: 'The Sangeet Durbar Ball', date: '2028-02-11', time: '20:00', display: '11 Feb 2028 · 8:00 PM', venue: 'The Durbar Hall', dress: 'Royal glamour, pastels & sparkle', colour: '#CDBDE0', icon: 'sangeet', perform: true },
    { key: 'wedding', name: 'The Wedding', date: '2028-02-12', time: '19:00', display: '12 Feb 2028 · 7:00 PM', venue: 'The Palace Lawns', dress: 'Royal Indian finery', colour: '#E8B4B8', icon: 'wedding' },
    { key: 'reception', name: 'The Reception Soirée', date: '2028-02-13', time: '20:30', display: '13 Feb 2028 · 8:30 PM', venue: 'The Sheesh Mahal Terrace', dress: 'Evening couture, jewels encouraged', colour: '#BFD5E8', icon: 'reception' }
  ],
  eventsCity: 'Jaipur, Rajasthan',
  performances: ['Solo dance', 'Group dance', 'Song', 'Just here to cheer'],

  finale: {
    line: 'The rishta of the season awaits your presence',
    signoff: 'Yours, ever watchful,'
  },

  // Image slots. Each scene tries the video loop, then the WebP, then the JPG,
  // and finally draws a coded stand-in. Set a value to null to use the coded art.
  assets: {
    dir: 'assets/',
    music: 'assets/music.mp3',
    scenes: {
      'thaal-bg': 'thaal-bg', 'herald-window': 'herald-window', 'palace-sky': 'palace-sky', 'sheesh-mahal': 'sheesh-mahal',
      'durbar-ball': 'durbar-ball', 'terrace-line': 'terrace-line', 'mehendi-hands': 'mehendi-hands', 'dressing-room': 'dressing-room',
      'baraat-lane': 'baraat-lane', 'palace-night': 'palace-night', bride: 'bride', groom: 'groom'
    },
    videos: { 'palace-sky': 'palace-loop', 'sheesh-mahal': 'sheesh-loop', 'palace-night': 'night-loop' },
    cutouts: ['box-closed', 'box-open', 'scroll', 'scroll-open', 'lac-seal', 'chandelier', 'bougainvillea', 'jasmine-strand', 'jharokha-frame', 'miniature-frame', 'dupatta-rose', 'dupatta-blue', 'dupatta-mint', 'dupatta-lilac', 'pocket-clock', 'hand-fan', 'juttis', 'groom-ghodi', 'dhol', 'pigeon-up', 'pigeon-down'],
    // where things sit on each photo (fractions of the screen)
    thaal: { box: { x: 0.5, y: 0.53 }, diyas: [{ x: 0.13, y: 0.84 }, { x: 0.86, y: 0.84 }], silver: [0.12, 0.36, 0.88, 0.72] },
    palace: { fountain: [0.38, 0.6, 0.62, 0.95] },
    sheesh: { mirrors: [[0, 0, 1, 0.82]], panel: [0.2, 0.3, 0.8, 0.66] },
    clockDial: { cx: 0.5, cy: 0.478, r: 0.38 }
  },

  colours: { rose: '#E8B4B8', blue: '#BFD5E8', mint: '#BFDCCB', lilac: '#CDBDE0', ivory: '#FBF6EE', gold: '#C2A15B', marigold: '#E9962E', jodhpur: '#4E79A7', maroon: '#5A1F2B' },

  // scroll length of each scene, in screen heights, while it plays
  lengths: { opener: 1, herald: 1.6, palace: 1.6, sheesh: 1.8, portraits: 1.4, kundli: 1.2, terrace: 1.8, mehendi: 1.2, muhurat: 1.2, events: 1.3, joota: 1.2, baraat: 1.6, rsvp: 1.2, finale: 1.3 }
};

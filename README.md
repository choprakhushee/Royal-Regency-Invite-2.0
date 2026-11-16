# The Rishta of the Season · Myra & Aryaman

A scroll-driven wedding invitation film by **Aamantran Atelier**. It plays as one continuous story
across 14 scenes, set in Jaipur's pink palaces and narrated by *A Certain Well-Informed Bua-ji* of *The Haveli Herald*.

## Scenes

1. **The shagun box.** A velvet box on a silver thaal. Tap "Untie the kalava": the thread slips, the lid lifts, the lac seal cracks and the scroll unrolls.
2. **The Haveli Herald.** A broadsheet flutters onto the window seat, and the headline types itself as you scroll.
3. **The pink palace.** The names write themselves across the sky while pigeons take off.
4. **The Sheesh Mahal.** The invitation, line by line, with mirror-work glints that move as you tilt the phone.
5. **The portraits.** Tap either portrait to flip it over to a shaadi biodata.
6. **The kundli match.** Spin the wheels to 36/36 gunas.
7. **Whispers on the terrace.** Bua-ji's four gossip chits, pegged to a clothesline. Tap one to read it.
8. **Find his name.** Drag the magnifying glass over the mehendi to find the hidden name.
9. **The shubh muhurat.** A live countdown on a palace clock.
10. **The season's engagements.** Five event cards with map links, calendar downloads and a sangeet sign-up.
11. **Joota chupai.** Pick Ladkiwale or Ladkewale and hunt for the groom's juttis.
12. **The baraat.** The groom rides in. Tap the dhol to play it.
13. **Reply by pigeon.** The RSVP card flies off with a pigeon, then WhatsApp opens with the message ready.
14. **The finale.** Petals and fireworks over the palace at night.

The music and sound effects are original and synthesised live in the browser (`js/audio.js`).
The site respects reduced-motion settings. The menu's **Event details** button jumps straight to
the dates, venues and RSVP, for elders.

## Open it locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Add `?skip=1` to start without the box animation.

## Publish free on GitHub Pages

Settings → Pages → Source: *Deploy from a branch* → Branch `main`, folder `/ (root)` → Save.
The link will be `https://choprakhushee.github.io/Royal-Regency-Invite-2.0/`.

## Personalised links

Add `?guest=` to the link, for example:

- `…/Royal-Regency-Invite-2.0/?guest=Sharma%20Family`
- `…/Royal-Regency-Invite-2.0/?guest=Mehra%20Ji`

The guest's name appears on the opener and is filled in on the RSVP card and in the WhatsApp message.

## Reusing it for a new couple

Everything a couple changes is in the `CONFIG` object at the top of `main.js`:

| What | CONFIG field |
|---|---|
| Names, parents, blessing, invitation text, date, city | `couple`, `blessing`, `invitation`, `dateLine`, `city` |
| Countdown time | `muhurat` |
| RSVP number, deadline, WhatsApp message, contacts | `rsvp`, `contacts` |
| Bua-ji's newspaper (headline, story, predictions) | `herald` |
| Gossip chits | `chits` |
| Biodatas and verdicts | `biodatas` |
| Events, colours, dress codes, maps | `events`, `mapsUrl`, `performances` |
| Games | `kundli`, `mehendi` (hidden-name position), `joota` (spots, messages) |
| Where things sit on each photo | `assets.thaal`, `assets.sheesh`, `assets.clockDial`, `mehendi.position`, `joota.spots` |
| How long each scene plays | `lengths` |

Also update the title and share text in `index.html`.

**Images.** `assets/manifest.json` lists every image slot with its purpose and the Canva prompt
used to make it. To swap in the couple's real photos (for example `bride` and `groom`):

1. Put the original in `assets/raw/` with the slot's name, e.g. `assets/raw/bride.jpg`.
2. Run `node tools/grade.js` (needs `npm i sharp`). It applies the shared colour grade and writes web-ready files to `assets/`.
3. To regenerate the link-preview image, run `node tools/og.js`.

If an image is missing, the scene uses a coded stand-in. Purely decorative overlays are left out
instead, so a photo never sits next to a drawing.

## Libraries

GSAP 3.12.5 (ScrollTrigger, Draggable) from cdnjs, Lenis 1.1.13 from jsDelivr, and Google Fonts.
There is no build step.

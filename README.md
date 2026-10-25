# Travel Agency — Curated Journeys

A redesigned vanilla HTML/CSS/JS travel agency landing site built around the idea that travel shouldn't be a commodity. It covers a full customer journey: hero, philosophy, featured journeys, testimonials, about, team, tours catalogue with filters, and a booking inquiry form.

## What's in the repo

- `index.html` — semantic multi-page SPA shell with four pages: home, about, tours, and booking.
- `styles.css` — design-token-driven CSS with a warm cream palette, navy CTA sections, and card-based layouts.
- `script.js` — vanilla JS for data-driven sections, testimonial carousel, tour filtering, booking form wiring, and the animated home counters.
- `day11 challenge.docx` — source brief/notes for this build.

## Quick start

Open `index.html` directly in a browser. No build step, no dependencies, no server required for local viewing.

If you want a simple local server, any static server works:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then open the local URL it prints.

## Stack

- HTML5
- Vanilla CSS with custom properties
- Vanilla JavaScript, no frameworks
- Unsplash images used as placeholders

## Pages and features

- **Home** — hero with stats, philosophy cards, featured journeys, testimonials carousel, and a navy CTA band.
- **About** — founder story, values, team cards, and a milestone timeline.
- **Tours** — journey catalogue with category, duration, and region filters, results count, clear filters, load more, and an empty state.
- **Booking** — multi-section inquiry form with journey type, destination, dates, travelers, contact details, notes, and a sidebar explaining the process and inclusion details.

## Notes

- This is a front-end demo. The booking form is wired in JavaScript but does not submit to a live backend in the current repo.
- Images are loaded from Unsplash and may change over time.

## License

This project is provided as-is for portfolio and learning use.

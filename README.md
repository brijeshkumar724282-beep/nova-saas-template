# Nova SaaS Template

Nova is a static landing page template for SaaS startups. It gives you a polished page you can copy and restyle for any product launch.

It includes five screen areas: sticky nav plus hero, features grid, pricing plus reviews, closing call to action plus footer. All styling is solid color with soft shadows and rounded cards. Reveal on scroll adds gentle motion.

## How to run

Run this inside the project folder:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000 in your browser.

## File list

* `index.html` page structure for all sections
* `styles.css` all visual styling plus responsive rules
* `script.js` menu toggle plus scroll reveal plus footer year
* `README.md` this guide

## Design notes

Palette uses white plus soft gray plus deep navy `#0F1222` with indigo accent `#4F46E5`. Type uses system fonts with fluid sizing. Layout adapts at 1024px, 768px and 480px.

Assumptions:

* Copy and palette are placeholders you can edit freely
* Stars in reviews use text glyphs so no image files are needed
* Menu and reveal run with plain JS so no install is needed

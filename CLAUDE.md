# CLAUDE.md — Eduardo Velloso Personal Website

This file provides context and instructions for Claude (or any AI assistant) working on this codebase.

---

## Project Overview

This is the personal academic website of **Eduardo Velloso**, Professor of Computer Science (Human-Computer Interaction) at the University of Sydney. The site presents his research identity, publications, and academic work to peers, students, prospective collaborators, and the general public.

The current live site is at: https://www.eduardovelloso.com  
The current GitHub repo is: https://github.com/eduardovellosomelbourne/eduardovellosomelbourne

This new version is a redesign and rebuild — a clean start, not a migration.

I will NOT ask you to generate the entire lab at one time. Instead, I will instruct you to implement different components of the lab.
If at any point you are unsure or think there is ambiguity about what to do next, ask clarifying questions.



---

## About Eduardo

- **Title:** Professor of Computer Science, University of Sydney
- **Research focus:** Interaction design for emerging technologies — mixed reality, eye tracking, embodied interaction, AI in HCI, XR, gesture-based interaction
- **Background:** PhD in Computer Science from Lancaster University (UK); BEng Computer Engineering from PUC-Rio (Brazil)
- **Current research topics:** Distributed collaboration in mixed reality, Human-centred AI and intelligent user interfaces, HCI theory and methodology 
- **Publication venues:** CHI, UIST, TOCHI, IMWUT, TEI, CSCW, DIS, ISMAR, and more
- **Awards:** Best Paper and Honourable Mention Awards at CHI, UIST, TOCHI, TEI, DIS, OzCHI

---

## Site Goals

1. Present Eduardo's research identity clearly and professionally
2. Make publications easy to browse and filter (by year, venue, topic/tag)
3. Convey his personality — not just a CV dump, but a coherent research persona
4. Be fast, accessible, and maintainable by a non-frontend developer
5. Look distinctive and contemporary — not generic academic template
6. Be a static website that makes it easy for me to add publications

---

## Pages / Sections

### Current site pages (reference)
- `index.html` — splash/home with name, subtitle, photo, nav
- `bio.html` — extended bio paragraph
- `publications.html` — full publication list, grouped by year, with venue tags
- `contact.html` — contact info
- `projects.html` — currently unused/hidden
- `teaching.html` — currently unused/hidden

### Planned pages for new site
- **Home / Landing** — hero section with name, tagline, photo, brief intro, links to key sections
- **Bio / About** — research statement, background, current affiliations, awards, media
- **Publications** — full list, filterable by year and topic tag (AR/VR/AI/Embodied/etc.)
- **Research** — active projects and research themes (to replace hidden `projects.html`)
- **Contact** — email, Google Scholar, institutional page

---

## Content Inventory

### Bio (source: bio.html)

Eduardo is an interaction technologist and Professor of Computer Science at the University of Sydney. Research focus: interaction design for emerging technologies, novel input/sensing modalities, new interaction devices and techniques, and the use of AI/ML in interactive systems. PhD from Lancaster University (supervised by Hans Gellersen, Andreas Bulling, Jason Alexander). BEng from PUC-Rio. Interdisciplinary background spanning Engineering, Design, and Psychology. Media coverage: New Scientist, BBC, Wired. Best Paper Awards at CHI, UIST, TOCHI, TEI.

### Publications
Full list extracted from `publications.html` — 100+ papers spanning 2010–2026. Grouped by year. Each entry includes:
- Title (with DOI link when available)
- Author list
- Venue (journal/conference name + year)
- Topic tags: AR, VR, MR, AI, Embodied, Eye tracking, Gestures, Sensing, Mobile, Education, Accessibility, Tangible, Wearable, Methodology, CSCW, etc.
- Publication type: Journal | Conference | Workshop | Demo | Poster | Magazine

Publication data should be stored in a structured format (bibtex) and rendered dynamically to support filtering.

### Contact
- University email (eduardo.velloso@sydney.edu.au)
- Google Scholar profile (https://scholar.google.com/citations?user=yHHlOiQAAAAJ&hl=en)
- ORCID (https://orcid.org/0000-0003-4414-2249)
- Institutional page (https://profiles.sydney.edu.au/eduardo.velloso)

---

## Design Direction

### Aesthetic
The existing site uses colourful geometric SVG blobs (green, pink, yellow) on a clean white background — playful, minimal, with a mid-century feel. The new design should go in a different direction, showcasing innovation and academic leadership. It should show that Eduardo is not your average type of academic.

**Direction:** Editorial-academic — sophisticated but not sterile. Think the intersection of a research lab homepage and a design portfolio. Clean typography, generous whitespace, strong typographic hierarchy. The publication list in particular should feel designed, not like a database dump. Someone should look at this website and think: wow, this guy knows about typography and layout.

### Typography
- Display/headings: a distinctive serif or slab — e.g. something with character like Playfair Display, Fraunces, or DM Serif Display. NOT Inter or Roboto.
- Body: a readable humanist sans or matched serif — e.g. Source Serif, Lora, or similar.
- Import from Google Fonts.

### Colour palette
Use something sophisticated and aligned with recent trends. Could introduce a dark navy or deep charcoal for the primary text and structural elements.

### Layout
- Single-column with intentional use of asymmetry or grid-breaking accents
- Mobile-first responsive
- The publication list should use a clean card or list layout with visible filter controls

### Motion
- Subtle: fade-in on load, hover states on links and cards
- Avoid gratuitous animation; keep it readable and fast

---

## Tech Stack

### Current site
Plain HTML + CSS + minimal JS. No framework. Hosted on GitHub Pages.

### New site — options (decide before building)
**Static site generator (11ty, Jekyll, or Astro)**
- Pro: templating, content management via Markdown/JSON, built-in publication filtering
- Pro: better long-term maintainability
- Con: requires understanding the build pipeline


### Deployment
GitHub Pages (same as current). Domain: eduardovelloso.com (CNAME already configured).

---

## Publications Data Structure

Publications should be stored as structured data. Recommended format (bibtex):

```bib
@inproceedings{10.1145/3772318.3791662,
author = {Khan, Anam Ahmad and Weidner, Florian and Rhee, Jungwoo and Abdrabou, Yasmeen and Bianchi, Andrea and Velloso, Eduardo and Gellersen, Hans and Newn, Joshua},
title = {Gaze and Speech in Multimodal Human-Computer Interaction: A Scoping Review},
year = {2026},
isbn = {9798400722783},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3772318.3791662},
doi = {10.1145/3772318.3791662},
abstract = {Multimodal interaction has long promised to make interfaces more intuitive and effective by combining complementary inputs. Among these, gaze and speech form a compelling pairing: gaze provides rapid spatial grounding, while speech conveys rich semantic information. Together, they offer rich cues for understanding user behaviour and intent. Yet despite decades of exploration, the research remains fragmented, making this synthesis timely as these inputs mature and are integrated into consumer-ready devices. This scoping review examined 103 studies published between 1991 and 2025, organised into explicit, where users intentionally provide gaze and speech, and implicit, where systems leverage users’ natural behaviours to support interaction. Across both, we identified recurring ways for combining gaze and speech to resolve ambiguity, ground references, and support adaptivity. We contribute a synthesis of research on their combined use while highlighting challenges of temporal alignment, fusion and privacy, offering guidance for future research toward richer multimodal human-computer interaction.},
booktitle = {Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems},
articleno = {672},
numpages = {24},
keywords = {Gaze, Speech, Multimodal Interaction, Human–Computer Interaction, Scoping Review},
location = {
},
series = {CHI '26}
}
```

Tags used in current site:
`AR`, `VR`, `MR`, `AI`, `Embodied`, `Eye tracking`, `Gestures`, `Sensing`, `Mobile`, `Education`, `Accessibility`, `Tangible`, `Wearable`, `Methodology`, `CSCW`, `Localisation`, `Physiology`, `Voice`, `XAI`, `Interaction techniques`


---

## Conventions and Code Style

- Use semantic HTML5 elements (`<main>`, `<nav>`, `<article>`, `<section>`, `<header>`, `<footer>`)
- CSS custom properties (variables) for all colours, fonts, and spacing values
- BEM or simple namespaced class naming (e.g. `ev-` prefix used in current site — can keep or drop)
- No external CSS frameworks (no Bootstrap, no Tailwind unless explicitly decided)
- Accessible: meaningful alt text, keyboard-navigable, sufficient colour contrast (WCAG AA)
- No jQuery; vanilla JS only
- All assets in `assets/` (images in `assets/img/`, fonts in `assets/fonts/` if self-hosted)
- Publications data in `_data/publications.json` (or equivalent for chosen stack)

---

## Assets

### New profile photo
- `eduardo_profile` — profile photo


---

## Out of Scope (for now)

- CMS integration (no Netlify CMS, no WordPress)
- Blog / news feed
- Student pages
- Dynamic server-side functionality
- Analytics (can add later)

---

## Working with Claude

When asking Claude to work on this site:

1. **Always check this file first.** It is the source of truth for design decisions, content, and conventions.
2. **State which page or component you're working on** and what specifically you want to change or build.
3. **Provide relevant context** — e.g. paste the current HTML/CSS if you want changes, or describe the new feature precisely.
4. **Publications updates:** Add new papers to `_data/publications.json` (or equivalent) rather than editing HTML directly.
5. **Design decisions:** If you're unsure about a design choice, refer to the "Design Direction" section above and ask Claude to justify its choices against those principles.

### Useful prompts for Claude
- "Add these new publications to the data file: [paste list]"
- "Redesign the publication list layout to support tag filtering"
- "Update the bio section with this new text: [paste text]"
- "Make the homepage hero section more visually striking while keeping the editorial-academic tone"
- "Check the publication list for missing DOI links and flag any"
---
name: Farooque Portfolio
description: A warm technical portfolio where four developing capabilities meet in public.
colors:
  canvas: "#f5f1e8"
  surface: "#fffdf8"
  ink: "#081522"
  muted: "#656a6e"
  momentum-orange: "#ed4a24"
  technical-blue: "#1f64d8"
  learning-sage: "#6e806e"
  line: "rgb(8 21 34 / 14%)"
  focus: "#1457bf"
typography:
  display:
    fontFamily: "Aptos, Avenir Next, Segoe UI, sans-serif"
    fontSize: "clamp(3rem, 7vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.96
    letterSpacing: "-0.055em"
  body:
    fontFamily: "Aptos, Avenir Next, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Cascadia Mono, IBM Plex Mono, SFMono-Regular, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.16em"
rounded:
  surface: "0.875rem"
  control: "999px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 4rem)"
  section: "clamp(4rem, 9vw, 8rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1.25rem"
  content-surface:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "0"
    padding: "1.75rem"
---

# Design System: Farooque Portfolio

## Overview

**Creative North Star: "The Intersection Atlas"**

The visual system treats Muhammad's range as one connected field rather than a stack of unrelated specialties. Fine orbital paths, registration marks, measured labels, and strong editorial scale make the work feel exploratory but controlled. A warm physical ground keeps the technical language human.

The system is intentionally open and spacious, with moments of dense connection where capabilities overlap. It should feel like a working map being annotated in public, not a completed monument to expertise.

**Key Characteristics:**
- Warm technical ground with deep, legible ink.
- Large geometric headlines paired with measured mono labels.
- Connected paths and nodes that explain relationships.
- Asymmetric editorial composition with clear reading order.
- One dominant visual mechanism per viewport.

## Colors

Warm ivory and paper-white surfaces carry the page; deep ink owns structure while orange, blue, and sage identify meaningful directions.

### Primary
- **Deep Working Ink:** Primary copy, navigation, and decisive controls.

### Secondary
- **Momentum Orange:** Creation, progress, and the strongest moments of forward movement.
- **Technical Blue:** Security, systems, links, and visible keyboard focus.
- **Learning Sage:** Notes, reflection, and the public-learning layer.

### Neutral
- **Warm Canvas:** The page-scale physical ground.
- **Paper Surface:** Readable raised or bounded content areas.
- **Measured Gray:** Supporting copy and metadata.
- **Construction Line:** Fine grids, orbit paths, separators, and registration marks.

**The Meaningful Accent Rule.** Orange, blue, and sage identify a role or relationship; they are never scattered as decoration.

## Typography

**Display Font:** Aptos or the closest locally available geometric sans
**Body Font:** Aptos or the closest locally available humanist sans
**Label/Mono Font:** Cascadia Mono or the closest locally available technical mono

**Character:** Broad, direct sans-serif headlines create confidence without claiming authority. Monospaced labels make status, sequence, and evidence feel measured rather than ornamental.

### Hierarchy
- **Display:** Compact line height, tight tracking, and large fluid scale for one first-viewport thesis.
- **Headline:** Strong section statements with balanced line wrapping.
- **Body:** Comfortable reading rhythm and restrained line length.
- **Label:** Short uppercase context only; never long paragraphs.

**The One Thesis Rule.** A viewport may carry one display-scale statement; every other text element supports it.

## Layout

The site uses a fluid centered canvas capped at 80rem, with gutters that grow from 1.25rem to 4rem. Composition is asymmetric on wide screens and becomes a deliberate vertical sequence below 768px. Empty space is active mapping space, not a gap to fill with extra copy. Paths and nodes may cross columns, but reading order remains semantic and linear.

## Elevation & Depth

The system is flat by default. Depth comes from overlapping paths, tonal paper surfaces, cropping, and scale rather than glass effects or stacked shadows. A soft ambient shadow is reserved for a genuinely lifted content surface.

**The Flat Map Rule.** Shadows never define the primary composition; structure must remain clear when every shadow is removed.

## Shapes

Orbital circles, fine rules, and registration points form the signature geometry. Controls use full pill radii for clear interaction, while content regions prefer straight edges and border rules. Avoid collections of uniformly rounded cards.

## Components

### Buttons
- **Shape:** Fully rounded, compact, and confident.
- **Primary:** Deep ink on warm canvas with a small upward response on hover.
- **Hover / Focus:** Motion remains subtle; the technical-blue focus ring stays clearly visible.
- **Quiet:** Paper surface with a construction-line border that strengthens on interaction.

### Cards / Containers
- **Corner Style:** Primarily square or rule-bounded; rounded surfaces are exceptional.
- **Background:** Paper surface over warm canvas.
- **Shadow Strategy:** Ambient and restrained, never glossy.
- **Border:** Fine construction lines.
- **Internal Padding:** Responsive and generous enough for editorial rhythm.

### Navigation
- The navigation is a calm horizontal index with a persistent pill-shaped contact action. Narrow screens preserve every destination without a hidden hover dependency.

### Pillar Nodes
- Each node pairs one short label with one accessible description and a single role color. Nodes are wayfinding, not decorative badges.

### Scroll Cinematic
- The opening film is a page chapter, never a modal or skippable splash screen.
- A four-screen scroll range maps page progress directly to the film timeline: downward movement advances and upward movement reverses.
- The source is encoded with frequent keyframes so both directions remain responsive.
- One capability word appears at a time—Support, Secure, Build, Create—before the film dissolves into the live Intersection Atlas.
- The live hero is the final state of the same pinned scene, not a second page after it. It wipes over the generated board so the rough AI linework is replaced by the precise digital atlas while spatial continuity is preserved.
- Reduced-motion visitors receive the final composed frame and positioning statement without pinned or scrubbed motion.
- On narrow screens the film crops deliberately around the subject; it does not shrink into a small letterboxed rectangle.

### Motion Language
- Motion explains the relationship between the four fields and the evidence behind them.
- The four capability chapters extend the same route after the film: each field line draws, its number resolves, and its copy comes into focus as that field becomes current.
- The evidence spine grows with reading progress, and the closing intersection resolves from separated rings into one mark.
- Controls use brief state changes; ambient orbit motion stays nearly imperceptible.
- Never introduce an autoplay overlay, scroll hijacking, or animation that blocks navigation.

## Do's and Don'ts

### Do:
- **Do** make the four pillars feel connected by one system.
- **Do** use the approved portrait as a human anchor at meaningful scale.
- **Do** label learning, in-progress work, and unverified evidence honestly.
- **Do** keep essential copy and navigation as semantic HTML.

### Don't:
- **Don't** turn the site into a cyberpunk dashboard or terminal costume.
- **Don't** build generic three-card feature rows.
- **Don't** use gradients, glass panels, or glowing edges as substitutes for authored structure.
- **Don't** imply expertise through visual intensity or inflated copy.

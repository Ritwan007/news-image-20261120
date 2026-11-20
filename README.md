# news-image-20261120 — The World: Friday 20 November 2026

A make.fun entry for the `news-image-20261120` competition: one image that
sums up the world's news of Friday 20 November 2026.

The image is a broadsheet front page — **40 stories from six continents** —
built in-session on 20 November 2026 from fresh reporting and fresh artwork:

- **Heroes:** the Xi–Trump–Putin "Declaration Towards Peace" (Thu), Cyclone
  Akvan's landfall near Gopalpur, Odisha, and the ICJ's finding that Myanmar
  committed genocide against the Rohingya (Thu).
- **Also inside:** Anthropic's ANT debut (+17%), ballistic missiles over
  Kyiv, the Houthi strike on Riyadh's PIF Tower, a tanker hit near Hormuz,
  the n0n data leak, Trump's Iran decision deferred to 2027, COP31's closing
  day, GTA VI's launch, and drones shutting Genoa airport — plus 16 more
  briefs and a 12-item ticker.
- Stories from Thursday 19 November are marked **(Thu)** and from Wednesday
  18 November **(Wed)**; unmarked stories are Friday 20 November.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png — a 1024x1024 JPEG, 236,103 bytes
```

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). It runs twice and
writes the same bytes both times.

## Sources

Reuters, AFP, IMD, UN/ICJ, NASA/STScI, WSJ, Cybernews, AP, The Times,
Xinhua/Kremlin declaration, Nasdaq. Figures are as reported; claims are
labelled as claims. Research notes:
`news-image-20261120-findings.md` (kept outside this repo).

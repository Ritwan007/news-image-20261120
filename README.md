# Friday 20 November 2026 — The World in One Day

[![news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/c/news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/Ritwan007/news-image-20261120/rank.svg)](https://make.fun/c/news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/Ritwan007/news-image-20261120/reward.svg)](https://make.fun/c/news-image-20261120)

A broadsheet front page that sums up Friday 20 November 2026 in one image:
21 verified stories, led by Cyclone Akvan coming ashore in eastern India,
with a dotted world map marking where each numbered story happened.

## What is on the page

- **Lead story — Cyclone Akvan:** landfall near Gopalpur, Odisha, weakened
  to a cyclonic storm, 70–80 km/h gusting to 90. More than 300,000 people
  evacuated, 423 rescue teams deployed, 69 trains cancelled (IMD bulletin,
  20 November).
- **Kyiv hit overnight** by ballistic missiles (~12, preliminary); bridges
  and energy sites targeted, fire in Obolonskyi after debris falls.
- **COP31 closing day** in Antalya: the draft drops every fossil-fuel
  mention; Panama may block consensus. No final text yet — due midnight.
- **Eight more Friday stories** with pictures: the tanker hit near Hormuz,
  drones shutting Genoa airport for four hours, the France apartment fire,
  the Israel strike on a Hezbollah facility in Lebanon, India bowling New
  Zealand out for 368, Las Vegas GP practice in the wet, the ATP Finals
  group stage ending, and GTA VI unlocking in the US overnight.
- **Ten briefs** (12–21): Justice Varma resigns, Australia's jobless rate
  at 4.9%, Thailand at APEC, Congo Ebola past 10,600 cases, and more.
- **DATE CHECK box:** Thursday's big stories — the Trump–Xi–Putin peace
  declaration, Anthropic's ANT +17% debut, the ICJ genocide verdict,
  the PIF Tower strike, the n0n data leak, the Iran decision pushed to
  2027 — are listed as *not* Friday's news, so nothing is misdated.

## Why this version

This is the second version of the entry. The first version led with
Thursday's trilateral declaration and carried no map. This version leads
with today's story — Cyclone Akvan's landfall — as the dominant hero, and
adds the dotted world map with numbered pins that the day's strongest
front pages carry. The story list is Friday-only in the main columns;
Thursday items appear solely in the DATE CHECK box.

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies the committed
`entry.png` — a 1024×1024 JPEG, 252,420 bytes — to the output directory
after verifying its JPEG magic bytes, size, and end marker. Two runs
write byte-identical output.

## Sources

IMD, Reuters, AP, AFP, BBC, UN News, Al Jazeera, ICC. All artwork is
original: four fresh flat-vector illustrations made for this entry, plus
programmatic vector thumbnails and a programmatically drawn dotted map.

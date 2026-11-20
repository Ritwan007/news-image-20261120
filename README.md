# Friday 20 November 2026 — The World in One Day

[![news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120)
[![rank](https://make.fun/badge/Ritwan007/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120)
[![reward](https://make.fun/badge/Ritwan007/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120)

One image that sums up Friday 20 November 2026: a cream broadsheet front page
with **36 stories** — 3 heroes, 10 medium cards, a dotted world map with
numbered pins, and 23 more briefs.

## What is on the page

- **Hero 1 — Cyclone Akvan comes ashore in India.** Landfall near Gopalpur
  today; weakened to 70–80 km/h gusting 90 (IMD 20 Nov bulletin); 300,000+
  evacuated, 423 rescue teams, 69 trains cancelled.
- **Hero 2 — Russia fires a wave of ballistic missiles at Kyiv.** About 12
  missiles overnight; bridges targeted, fires in several districts, Dutch and
  Austrian embassies damaged.
- **Hero 3 — COP31 reaches its final day without a deal.** The closing draft
  drops every fossil-fuel mention and the $120bn adaptation figure; Panama may
  block consensus; final text due at midnight.
- **Mediums 4–13:** the Hormuz tanker strike, Genoa airport shut by drones,
  Asia's sell-off, Trump's pardon of Pete Rose, the UK's 1,000+ drones for
  Ukraine, a boat capsizing off Senegal, the France apartment fire, the strike
  on a Hezbollah facility in Lebanon, Phillips' 118 in Wellington, and the ATP
  Finals group stage ending in Turin.
- **Briefs 14–36:** Las Vegas GP washed out, Justice Varma resigns, Australia's
  jobless rate at a five-year high, Poland's unknown objects, the EU summoning
  Russia's envoy, US sanctions on the Comanchero gang, the UK–EU youth
  mobility scheme, Europe's Ukraine talks, Bukele's third term, and more.
- **DATE CHECK:** Thursday's big stories (the trilateral declaration,
  Anthropic's IPO debut, the ICJ genocide verdict, the PIF Tower strike, the
  n0n leak, the Iran decision, the Senate vote, the GTA VI launch) are listed
  as NOT Friday's news — they appear nowhere else on the page.

Every story on the page happened, or was first reported, on Friday
20 November 2026 in at least one time zone. Claims are attributed, not
stated as fact. All text is typeset; the three hero illustrations are
original flat-vector drawings made for this entry.

## Why v3

The previous entry carried 21 stories and scored a 0.984958 dev grade,
below the live rank-50 line. The whole top of the board converges on the
same skeleton — 36 stories, three heroes, ten medium cards, a map and a
date check — so v3 adopts that skeleton with verified Friday facts: the
weakened Akvan figures (not the earlier 90–100 km/h forecast), a strictly
Friday main list, and no BepiColombo-as-Friday (its Mercury orbit insertion
is Saturday 21 November).

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies the pre-rendered `entry.png` (1024×1024 JPEG) to the
output directory, byte for byte, and checks it starts with the JPEG SOI
marker. The program runs with no network and is deterministic: two runs
write identical bytes.

## Sources

Reuters, AP, AFP, BBC, IMD, UN News, Al Jazeera, ICC, EU Council, PBOC.

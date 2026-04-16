# Dive Down Guide - PRD

## Original Problem Statement
Frontend-first rebuild of existing Dive Down Guide site (Roblox game guide). Keep all current search/content features, redesign the interface to be cleaner, easier for first-time users, and better for daily use.

## Architecture
- **Frontend**: React (CRA with CRACO) + Tailwind CSS
- **Backend**: FastAPI (minimal, not core to this app)
- **Database**: MongoDB (not actively used — all game data hardcoded in JS)
- **Routing**: React Router v7

## User Personas
- New Dive Down players needing a "start here" experience
- Casual players wanting fast fish/zone answers
- Repeat users searching fish, zones, rebirths, and upgrades

## Core Requirements
- Fish database with 94 fish across 14 zones with wiki icons
- Fish search with instant results and zone highlighting
- Zone navigation sidebar
- Mutation multipliers reference
- Tips & tricks cards
- FAQ accordion (9 questions)
- Screenshot gallery carousel
- Rebirth Guide page (10 tiers with requirements/rewards)
- Mobile-responsive with off-canvas navigation
- Color scheme: Black main, Blue secondary, White accent/outline

## What's Been Implemented (Jan 2026)
### Iteration 1 - Full UI Rework
- Full React migration from static HTML/CSS/JS
- Complete UI redesign with black/blue/white tactical theme
- Outfit (headings) + IBM Plex Sans (body) typography
- Sticky glassmorphism header with search toggle
- Sidebar navigation with all zones, special zones, help links
- Hero section with background image, search bar, stat pills
- Quick access card grid (6 categories)
- Fish Database section with gallery carousel
- Mutation Multipliers (Ocean + Weather)
- Zone cards with fish tables and rarity badges
- Tips & Tricks section (3 cards)
- FAQ accordion (3 items)
- Rebirth page with hero, how-it-works cards, 10 rebirth cards, final totals
- Mobile hamburger menu, backdrop, responsive layouts
- Scroll-to-top button
- Search highlighting (click result -> scrolls and highlights zone/fish row)

### Iteration 2 - Fish Icons + Data Update
- Downloaded 94 fish icons from Dive Down fandom wiki
- Added fish icons next to every fish name in zone tables and search results
- Updated zone names: "Ice Age" -> "The Arctic", "Megalodons Lair" -> "Megalodon's Lair"
- Updated fish data to match user's latest list
- Updated FAQ to 9 new questions (secrets, divines, rebirth, mutations, trading, etc.)
- 100% test pass rate

### Iteration 3 - Fish Info Tooltips on Rebirth Page
- Added FishTooltip component with triangle pointer popup
- Hovering (desktop) or clicking (mobile) on any required fish name shows fish info card
- Tooltip layout: fish picture on top, name in middle, rarity on left, location on right
- Viewport-aware positioning prevents clipping on mobile
- All 10 rebirth cards have interactive fish links
- 100% test pass rate
- Iteration 1: 98% (17/17 major features, 1 minor overlap fixed)
- Iteration 2: 100% (9/9 new features verified)

## Prioritized Backlog
### P0 (Done)
- All core features implemented and tested
- Fish icons from wiki
- Updated zone names and data

### P1 (Next)
- Active nav highlighting (highlight current section in sidebar)
- Search grouping by zone
- Mobile search positioned more prominently

### P2 (Future)
- True filter chips for fish rarity/zone/depth
- Search analytics
- Patch/update log section
- Saved favorites or recent searches
- Better gallery/media previews

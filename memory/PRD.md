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
- Fish database with 94+ fish across 14 zones
- Fish search with instant results and zone highlighting
- Zone navigation sidebar
- Mutation multipliers reference
- Tips & tricks cards
- FAQ accordion
- Screenshot gallery carousel
- Rebirth Guide page (10 tiers with requirements/rewards)
- Mobile-responsive with off-canvas navigation
- Color scheme: Black main, Blue secondary, White accent/outline

## What's Been Implemented (Jan 2026)
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
- Search highlighting (click result → scrolls and highlights zone/fish row)
- All data-testid attributes for testing

## Testing Status
- 98% pass rate (17/17 major features pass, 1 minor UI overlap fixed)

## Prioritized Backlog
### P0 (Done)
- All core features implemented and tested

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
- Full React migration to Next.js if needed later

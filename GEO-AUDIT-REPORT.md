# GEO Audit Report: Taxi Lagi Bình Thuận

**Audit Date:** 2026-05-21
**URL:** https://taxilagi.io.vn/ (local: http://127.0.0.1:5500/)
**Business Type:** Local Business (Taxi Service)
**Pages Analyzed:** 2 (index.html, index.amp.html)

---

## Executive Summary

**Overall GEO Score: 42/100 (Poor)**

Taxi Lagi Bình Thuận has a solid foundation with comprehensive schema markup (LocalBusiness, FAQPage, Organization, Service, AggregateRating) and good robots.txt configuration for general crawlers. However, the site is largely invisible to AI-specific crawlers (GPTBot, ClaudeBot, PerplexityBot are not explicitly allowed), lacks an llms.txt file, has no brand presence on Wikipedia/YouTube/Reddit that AI models cite, and the single-page architecture limits content depth for AI extraction. The FAQ schema and price tables are strong citability assets.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 45/100 | 25% | 11.25 |
| Brand Authority | 15/100 | 20% | 3.00 |
| Content E-E-A-T | 50/100 | 20% | 10.00 |
| Technical GEO | 55/100 | 15% | 8.25 |
| Schema & Structured Data | 70/100 | 10% | 7.00 |
| Platform Optimization | 25/100 | 10% | 2.50 |
| **Overall GEO Score** | | | **42/100** |

---

## Critical Issues (Fix Immediately)

1. **No AI-specific crawler configuration in robots.txt** — GPTBot, ClaudeBot, PerplexityBot, and CCBot are not explicitly allowed. While `User-agent: * Allow: /` covers them implicitly, explicit AI crawler sections would improve visibility and signal AI-readiness.
2. **No llms.txt file** — This is the most impactful single addition for AI discoverability. Without it, AI systems have no structured summary of what the site offers.
3. **No brand presence on Wikipedia, YouTube, or Reddit** — These are the top-3 platforms AI models cite for entity recognition. Zero presence means zero citation likelihood for brand queries.
4. **AMP version has Google Analytics with placeholder UA account** — `UA-XXXXXX-X` is a placeholder, so AMP analytics are non-functional.

## High Priority Issues

1. **Single-page architecture limits crawlable content depth** — All content is on one page. AI systems have limited passage extraction from pages with >1000 lines. Consider separate pages for routes, fleet, and FAQs.
2. **No author attribution on content** — Reviews lack structured author markup (Person schema with author URLs).
3. **Content is entirely in Vietnamese** — No hreflang or multi-language support limits international AI discoverability.
4. **No Google Business Profile structured data synchronization** — LocalBusiness schema exists but should be backed by a verified GBP with reviews synced.
5. **Image alt text uses generic descriptions** — While alt text exists, many are keyword-stuffed rather than descriptive.

## Medium Priority Issues

1. **FAQPage schema is excellent but content is duplicated verbatim on the page** — The FAQ content in schema matches the visible FAQ section, which is good for consistency but could be expanded with more questions.
2. **No blog or resource section** — AI systems favor sites with regular, authoritative content updates.
3. **SameAs array only links to Zalo and own site** — Should include Google Business Profile, Facebook, YouTube if available.
4. **Opening hours say Mo-Sa but text says 24/7** — Inconsistency: schema says "Mo-Sa 00:00-23:59" but multiple page sections claim 24/7 service (including Sunday).
5. **Service schema has typo** — `"description": "Dịch vứ taxi chuyên nghiệp"` should be `"Dịch vụ"`.

## Low Priority Issues

1. **H1 is hidden via `display:none`** — This is an SEO anti-pattern. The H1 should be visible.
2. **No Twitter/X profile verification** — Site has `twitter:site` but no linked profile.
3. **OG image uses relative path** — Should use absolute URL `https://taxilagi.io.vn/assets/images/logo_01.png`.
4. **Logo file in assets root and assets/images** — `logo_01.png` is in `assets/images/` but there's also confusion with other directories.
5. **CSS has duplicate selectors** — `.float-btn` and `.fleet-info` have duplicate property blocks.

---

## Category Deep Dives

### AI Citability (45/100)

**Strengths:**
- FAQPage schema with 6 questions/answers is highly citable by AI (direct answer extraction)
- Route pricing tables with structured data (route name, distance, price) are easily extractable
- Review content with customer testimonials provides quotable social proof
- Content blocks are self-contained on a single page, making full-page extraction complete

**Weaknesses:**
- No question-answering content blocks beyond the FAQs
- Content length (~3000 words) is reasonable but spread thin across many sections
- No statistical data, research citations, or original data that AI models prefer to cite
- No blog articles or deep-dive content that AI could extract for long-form answers

**Opportunities:**
- Create dedicated route pages with detailed pricing tables per route
- Add a "Taxi từ Lagi đi [Destination]" page for each major destination — these are high-intent queries
- Add exact fare calculators with real-time data for citability

### Brand Authority (15/100)

**Strengths:**
- Consistent brand name across all site content
- Zalo presence with direct messaging

**Weaknesses:**
- **No Wikipedia presence** — Zero mentions on Wikipedia (critical for AI entity recognition)
- **No YouTube presence** — No video content that AI models index
- **No Reddit mentions** — No discussions on r/VietNam or similar subreddits
- **No Facebook/Instagram presence linked** from the site
- No Google Business Profile reviews cited (reviews on the page appear to be sample/testimonials)
- No third-party citations or press mentions

**Opportunities:**
- Create a Google Business Profile and actively collect reviews
- Start a YouTube channel with route tours and destination highlights
- Get listed on local Vietnamese tourism websites
- Encourage customer reviews on Google Maps

### Content E-E-A-T (50/100)

**Strengths:**
- Clear business address and contact information
- Multiple contact methods (phone, Zalo, in-person)
- Service area clearly defined
- 6 customer testimonials with names and locations
- Comprehensive service descriptions (fleet types, routes, destinations)

**Weaknesses:**
- No team/author page with driver credentials or licenses
- No "About Us" section with company history or founding story
- No certifications, insurance details, or license numbers displayed
- No external references or citations
- Content freshness is unclear — last modified date is November 2024 (6+ months ago)
- **H1 hidden with `display:none`** — reduces content credibility
- No blog or thought leadership content

**Opportunities:**
- Add detailed "About Us" page with company history, driver qualifications
- Display taxi operating license number and insurance information
- Add author profiles for any content
- Start a blog with destination guides to demonstrate local expertise

### Technical GEO (55/100)

**Strengths:**
- robots.txt exists and is well-structured with Crawl-delay
- Sitemap.xml exists with proper priority settings
- Both HTML and AMP versions available
- Canonical URL correctly set
- Mobile-responsive with breakpoints at 768px
- Google Analytics (gtag) configured with real tracking ID G-SDT6K5YHJL
- Open Graph and Twitter Card meta tags present
- Breadcrumb navigation with structured markup
- SSL/HTTPS ready-in (canonical uses https)
- Page load performance: AMP version available for fast mobile loading

**Weaknesses:**
- **No llms.txt** — Missing key AI discovery file
- **No AI crawler-specific rules in robots.txt** — While `* Allow: /` covers all, explicit GPTBot/ClaudeBot/PerplexityBot sections signal AI-readiness
- **AMP Google Analytics uses placeholder UA-XXXXXX-X** — Not functional
- **No SSR for JS-rendered content** — Site is static HTML so this is less critical, but any dynamic content may be missed
- **No hreflang tags** for Vietnamese language content
- **Some blocking of legitimate crawlers** — AhrefsBot is blocked entirely (Ahrefs is a legitimate SEO tool)
- **Images loaded with lazy loading** — Good for performance but some AI crawlers may not execute JS to see them

### Schema & Structured Data (70/100)

**Strengths:**
- **LocalBusiness schema** — Complete with name, address, phone, geo coordinates, opening hours, price range
- **AggregateRating schema** — 4.8 rating with 150 reviews
- **Review schema** — 3 individual reviews with author, rating, body, date
- **FAQPage schema** — 6 questions with thorough answers
- **Service schema** — With provider, area served, service type
- **Organization schema** — With contact point
- **Offer schema** — 3 service types (Nội Thành, Sân Bay, Tuyến Huyện)
- Open Graph and Twitter Cards are well-configured

**Weaknesses:**
- **Opening hours inconsistency** — Schema says "Mo-Sa 00:00-23:59" but page text says 24/7 (missing Sunday)
- **SameAs array is sparse** — Only links to Zalo; should include Google Business Profile, Facebook, YouTube
- **Duplicate LocalBusiness schema** — Two separate LocalBusiness blocks (lines 23-84 and 183-239) create redundancy
- **Service schema has typo** — "Dịch vứ" instead of "Dịch vụ"
- **No BreadcrumbList schema** — Breadcrumb is visible in UI but not marked up with schema
- **No VideoObject schema** — No video content
- **No WebPage schema** — Missing base page-level schema
- **ContactPoint language set to "Vietnamese"** — Should use language codes ("vi") for proper AI parsing

### Platform Optimization (25/100)

**Strengths:**
- Zalo integration with direct booking
- Google Analytics tracking
- Google Maps iframe embed with location
- Google Site Verification meta tag present

**Weaknesses:**
- **No Google Business Profile link** or review widget
- **No Facebook business page integration**
- **No YouTube presence**
- **No TikTok presence** (important for Vietnamese market)
- **No food delivery / ride-hailing platform integration** (Grab, Gojek, Be)
- **No Tripadvisor listing**
- No online booking widget beyond phone/Zalo
- No presence on AI-training platforms (Wikipedia, Reddit, YouTube)

**Opportunities:**
- Create and verify Google Business Profile with photos and regular posts
- Join Grab/Gojek/Be as a driver partner
- Create YouTube content showcasing routes and destinations
- List on travel platforms like Booking.com experiences or Klook

---

## Quick Wins (Implement This Week)

1. **Fix the opening hours in schema** — Change to "Mo-Su 00:00-23:59" to match the actual 24/7 service
2. **Fix the "Dịch vứ" typo** in Service schema description
3. **Add AI crawler sections to robots.txt** — Explicitly allow GPTBot, ClaudeBot, PerplexityBot, CCBot
4. **Make H1 visible** — Remove `display:none` from the H1 tag
5. **Fix OG image URL** — Use absolute URL: `https://taxilagi.io.vn/assets/images/logo_01.png`

## 30-Day Action Plan

### Week 1: Schema & Technical Fixes
- [ ] Fix opening hours in LocalBusiness schema (Mo-Su 00:00-23:59)
- [ ] Fix "Dịch vứ" typo in Service schema
- [ ] Remove duplicate LocalBusiness schema block
- [ ] Add BreadcrumbList schema markup
- [ ] Add WebPage schema
- [ ] Make H1 visible
- [ ] Fix OG image to use absolute URL
- [ ] Unblock AhrefsBot in robots.txt (or keep blocked — intentional)

### Week 2: AI Discovery Setup
- [ ] **Create llms.txt** — File listing all services, routes, contact info for AI consumption
- [ ] Add explicit GPTBot/ClaudeBot/PerplexityBot sections to robots.txt
- [ ] Add hreflang tag for Vietnamese
- [ ] Fix AMP analytics with real GA4 measurement ID
- [ ] Create Google Business Profile (if not already done)
- [ ] Add GBP URL to SameAs array in schema

### Week 3: Brand Authority Building
- [ ] Create YouTube channel with route tour videos
- [ ] Create Facebook business page
- [ ] Link all social profiles in SameAs schema
- [ ] Write and publish 3 blog articles about taxi routes and destinations in Bình Thuận
- [ ] Encourage customers to leave Google Reviews

### Week 4: Content & E-E-A-T
- [ ] Create dedicated "About Us" page with driver credentials
- [ ] Add taxi operating license number to site
- [ ] Create individual route pages (one per destination) for deep content
- [ ] Add author profiles for content
- [ ] Implement online booking widget (beyond phone/Zalo)

---

## Appendix: Pages Analyzed

| URL | Title | GEO Issues |
|---|---|---|
| https://taxilagi.io.vn/ | Số Taxi Lagi Bình Thuận - Taxi Lagi Bình Thuận Lâm Đồng Hotline 0941865131 | H1 hidden, schema typos, opening hours mismatch |
| https://taxilagi.io.vn/index.amp.html | Dịch Vụ Taxi Lagi Chuyên Nghiệp \| Taxi Lagi Bình Thuận Lâm Đồng 0941865131 | Placeholder GA account, duplicate content |

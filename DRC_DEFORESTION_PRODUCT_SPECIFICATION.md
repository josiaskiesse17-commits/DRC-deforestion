DRC-deforestion — Product Specification (Draft v1)

Status: Product discovery draft
Date: 1 November 2026
Product direction: Public environmental awareness and environmental intelligence platform
Geographical scope: The Congo Basin, with deeper coverage of forests and environmental pressures in the Democratic Republic of the Congo (DRC).

1. Product vision

DRC-deforestion aims to make trustworthy environmental information about the Congo Basin accessible, understandable and useful.

The platform will combine:

Public awareness and education — explain ecosystems, deforestation drivers, consequences and conservation responses in accessible language.

Environmental intelligence — present traceable datasets, maps, indicators and historical trends.

Interactive exploration — let users explore locations, compare areas, understand indicators and use educational tools.

The platform should become a credible public resource that may be useful to citizens, students, universities, researchers, conservation organizations, NGOs and policymakers.

It is not initially intended to replace scientific monitoring systems, provide official government statistics, or make unsupported predictions.

2. Geographic scope

The platform covers the Congo Basin as a regional system and gives additional analytical attention to the DRC.

The geographic hierarchy should be:

Congo Basin: regional overview and cross-country context.

Countries: comparable indicators where definitions and datasets permit.

DRC: deeper forest and environmental analysis.

Subnational areas: provinces, landscapes, protected areas or other local units only where suitable, documented boundaries and data are available.

Geographic integrity requirement

“Congo Basin”, “Congo River Basin” and “Congo Basin rainforest/forest region” must not be treated as interchangeable without explanation. The product must select and document a geographic definition for each map or analysis. Dataset boundaries may differ; the interface must disclose those differences.

3. Target audiences and needs

Audience

Primary needs

General public and communities

Clear explanations, accessible maps, understandable indicators and practical actions

Students and educators

Learning materials, visual explanations, reliable references and classroom-friendly content

Researchers

Traceable datasets, metadata, methodology, limitations and downloadable data where permitted

Universities

Teaching resources, research context and reproducible references

NGOs and conservation organizations

Forest-change context, protected-area information, regional comparisons and monitoring references

Policymakers and institutions

Carefully contextualized indicators, geographic summaries and transparent evidence

The platform should provide different levels of explanation without presenting simplified material as scientifically definitive.

4. Product principles

Evidence before appearance: every factual indicator must have a traceable source.

Transparent uncertainty: distinguish measured observations, modeled estimates, administrative reports, alerts and projections.

Clear dates: show observation period, publication/update date and retrieval date where relevant.

Geographic precision: disclose the area, boundary definition, resolution and aggregation method.

No fabricated statistics: illustrative values must never be presented as real observations.

Accessible by default: responsive layouts, readable language, keyboard support and chart alternatives.

Responsible interpretation: explain that satellite alerts are not automatically confirmed deforestation events or proof of cause.

Maintainability: use modular code and documented data pipelines rather than growing the existing single-file prototype indefinitely.

Privacy and safety: do not collect personal data unless a justified feature requires it; protect sensitive species/locality information where necessary.

Progressive complexity: public-facing explanations first, deeper methodology and data access for advanced users.

5. Proposed information architecture

A. Home

Product mission and geographic scope.

Selected key indicators with dates and sources.

Recent verified updates or featured analysis.

Entry points to Explore, Forest Intelligence, Biodiversity and Learn & Act.

Clear explanation of what the data can and cannot tell users.

B. Explore the Basin

Interactive map with documented basin and country boundaries.

Country selection and comparison.

DRC-focused exploration.

Optional province/landscape/protected-area layers when authoritative data is available.

Layer legend, source, date, resolution and methodology.

Download or inspect source data where licensing permits.

C. Forest Intelligence

Forest extent and forest-cover context.

Tree-cover loss and gain, with definitions clearly explained.

Forest disturbance/degradation indicators where valid data exists.

Fire alerts and historical fire information.

Time-series charts and geographic comparisons.

Explanations of differences between forest loss, deforestation, degradation and tree-cover change.

D. Biodiversity and Conservation

Species occurrence records and their provenance.

Protected areas and other effective area-based conservation measures (OECMs), with clear distinctions.

Habitat and conservation context where data supports it.

Avoid presenting occurrence records as population estimates or proof of current presence.

E. Human and Environmental Pressures

Agriculture, urban expansion, charcoal/woodfuel, mining, infrastructure and population context.

Only show a driver as a quantified cause when the dataset or study supports that attribution.

Clearly distinguish correlation, spatial overlap and demonstrated causation.

F. Learn & Act

Educational explainers and glossary.

Conservation responses and sustainable alternatives.

Interactive calculators with transparent assumptions.

Learning resources for students and educators.

Practical actions for communities, institutions and organizations.

G. Data and Methodology

Data catalogue and source register.

Definitions, limitations and methodology notes.

Update frequency and known gaps.

Attribution and licensing information.

Corrections/contact process.

6. Initial feature catalogue and priority

Feature

Release

Priority

Acceptance condition

Responsive accessible site foundation

1

Must

Works on mobile and desktop; keyboard navigation and semantic structure

Clear geographic scope and boundary documentation

1

Must

Each map states which basin/forest boundary definition it uses

Source-backed forest indicators

1

Must

Each displayed value has source, metric definition, period and geography

Congo Basin overview map

1

Must

Shows documented basin/country boundaries and a clear legend

DRC forest exploration

1

Must

DRC is explorable at the finest level supported by valid data

Educational content

1

Must

Core causes, consequences and responses are explained with references

Data/methodology pages

1

Must

Users can inspect source, date, definition and limitations

Country comparisons

1

Should

Uses harmonized metrics and comparable periods

Historical forest-change explorer

2

Should

Time series clearly identifies dataset and methodology

Active-fire layer

2

Should

Shows observation time, sensor/product and alert limitations

Protected-area layer

2

Should

Uses a current, appropriately licensed source and distinguishes PA/OECM

Biodiversity occurrence explorer

2

Should

Records retain provenance and are not described as abundance

Human-pressure context layers

2

Should

Quantified claims are evidence-backed and caveated

Downloadable data and reports

3

Could

Only permitted datasets are offered with metadata and attribution

Research/contributor workspace

3

Could

Has moderation, provenance and data-quality controls

Advanced risk or scenario analysis

3

Could

Requires validated methods, uncertainty disclosure and expert review

“Must / Should / Could” are planning priorities, not a promise that every feature will be implemented.

7. Data-source assessment

The following are candidate sources for investigation, not automatic approval for production use. Before integration, verify coverage, definitions, temporal resolution, update cadence, API terms, licensing, attribution, authentication, quotas and whether the source is appropriate for the intended claim.

Source

Potential use

Important caveat / next check

Global Forest Watch (GFW) Data API

Forest-related datasets, queries, statistics and geospatial analysis

Inspect dataset metadata, versions, authentication and terms for each selected dataset. API documentation describes dataset/version/asset/query/download capabilities; do not assume every dataset is freely queryable without an account.

FAO Global Forest Resources Assessment (FRA) 2025

Officially reported forest extent and trends, including DRC country data

Country-reported assessment data and remote-sensing products may use different definitions and methods from GFW. Preserve the FRA category, year and reporting context.

NASA FIRMS

Near-real-time and archived active-fire observations

Active-fire detections are satellite observations, not confirmed burned area or proof of deforestation. Scientific analysis should use standard-quality products when available; NRT data can be replaced by later standard products.

Copernicus Data Space Ecosystem

Sentinel imagery discovery, access and processing through APIs such as STAC, OData, openEO and Sentinel Hub

Satellite imagery is not automatically a ready-made deforestation statistic. Processing, cloud masking, classification and validation may be required. Review quotas and service terms.

GBIF

Biodiversity occurrence records

Occurrences are records of observations/specimens, not direct estimates of population size, abundance or conservation status. Retain dataset and record provenance and licensing.

Protected Planet / UNEP-WCMC

Protected-area and OECM information

Use the current API v4 rather than deprecated v3. API requires a token; official API terms state it is not available for commercial use. Check whether the intended use is permitted and whether downloadable formats are more appropriate.

WorldPop

Population distribution and spatial population estimates

Estimates are modeled products, not census counts. API v2 documentation describes polygon queries, 100 m/1 km resolutions, years 2015–2030 and rate limits; verify dataset availability and licensing for selected geography/year.

Initial data strategy

Use FAO FRA 2025 for a clearly labeled official country-reported forest-extent reference.

Evaluate GFW for forest-change indicators and geospatial layers.

Evaluate NASA FIRMS for fire observations, with strong caveats.

Evaluate Copernicus Sentinel for imagery-based exploration or future analysis, not as a shortcut to unvalidated statistics.

Use GBIF for occurrence-based biodiversity exploration.

Use Protected Planet only after confirming the platform's intended use is permitted by its terms.

Use WorldPop for contextual population estimates, not as evidence that population growth caused a specific forest-loss event.

No single provider should be treated as the universal source of truth. Where values differ, show the metric definitions and explain why.

8. Data quality and presentation requirements

Every data-backed visualization or indicator must expose, directly or through a clearly accessible details panel:

Indicator name and definition.

Value and unit.

Geographic coverage and boundary definition.

Observation/reference period.

Publication or dataset version/date.

Source organization and direct dataset reference.

Methodology or calculation used by DRC-deforestion.

Spatial resolution, where relevant.

Known limitations and uncertainty.

License and attribution requirements.

Required distinctions

Forest area is not the same as tree-cover canopy.

Tree-cover loss is not automatically equivalent to permanent deforestation.

Fire detections are not the same as burned area.

Species occurrences are not population estimates.

Protected-area designation does not prove effective protection.

Population or agricultural expansion near forest loss does not by itself prove causation.

Projections must be labeled as scenarios or model outputs, never as observed facts.

If no reliable data is available for a requested indicator or region, show the gap rather than inventing a value.

9. Non-functional requirements

Usability and accessibility

Responsive mobile-first design.

Keyboard-accessible controls and maps where feasible.

Text alternatives and summaries for charts.

Adequate contrast, clear legends and readable typography.

Avoid relying on color alone to communicate meaning.

Progressive loading for large maps and imagery.

Performance and reliability

Avoid loading full-resolution geospatial datasets into the browser.

Use appropriately generalized boundaries and tiled/raster services where justified.

Cache stable reference data and respect upstream API limits.

Provide graceful error and unavailable-data states.

Pin and document dependencies.

Monitor external service failures and data freshness.

Security and privacy

Never place private API credentials in frontend code.

Keep secrets server-side if a backend is introduced.

Minimize personal data collection.

Validate user inputs and external data.

Review third-party embeds and scripts.

Maintainability

Separate UI, domain logic, data access and configuration.

Document data ingestion and transformations.

Add automated tests for calculations and data transformations.

Use version control and a repeatable deployment process.

10. Proposed technical direction

The current prototype is a static single-file HTML/CSS/JavaScript page. The long-term product will benefit from a modular architecture, but the final stack should be selected after a short technical spike.

Recommended direction to evaluate

Frontend: modern component-based web framework, selected based on team familiarity and maintainability.

Mapping: evaluate MapLibre GL JS or Leaflet; choose based on vector/raster layer needs, performance and licensing.

Charts: retain Chart.js initially if it meets the analytical needs; consider alternatives only when justified.

Data access: begin with public datasets and provider APIs; introduce a small backend/proxy only where credentials, caching, aggregation or rate-limit protection require it.

Geospatial processing: use established geospatial formats and tools; consider a spatial database such as PostgreSQL/PostGIS only when real query/storage requirements justify it.

Hosting: static hosting for the frontend initially; add backend infrastructure only when required.

Data catalogue: maintain a structured source/indicator registry, even before introducing a database.

Architecture decision rule

Do not add a backend, database, authentication, complex GIS infrastructure or AI features merely because they are common in large platforms. Each must solve a defined requirement and have an operational owner and cost/maintenance rationale.

11. Proposed delivery roadmap

Phase 1 — Discovery and validation

Confirm geographic definitions.

Study reference platforms and avoid duplicating existing services unnecessarily.

Test access to candidate datasets.

Review licenses, terms, update cadence and API limits.

Select initial indicators and document their definitions.

Validate the proposed user journeys with representative users if possible.

Exit condition: A source register and indicator specification exist; the first-release scope is feasible.

Phase 2 — Product and technical design

Approve information architecture and navigation.

Define visual identity and accessible design system.

Choose frontend, mapping and charting technologies.

Define data contracts and source metadata structure.

Create wireframes and architecture decisions.

Exit condition: Design and architecture are documented; no unresolved critical data-access or licensing blocker remains for Release 1.

Phase 3 — Release 1 implementation

Refactor the prototype into a maintainable structure.

Build responsive public pages.

Implement the regional map and DRC-focused exploration.

Integrate a small number of verified, high-value indicators.

Publish educational content and methodology/source pages.

Add tests and deployment checks.

Exit condition: Users can explore the basin and DRC, understand selected indicators, and trace each statistic to its source.

Phase 4 — Release 2 intelligence

Add historical analysis, fire observations, protected areas and biodiversity records where validated.

Add comparisons and richer map layers.

Improve data refresh, caching and monitoring.

Exit condition: New layers meet the same provenance, quality and usability requirements as Release 1.

Phase 5 — Release 3 advanced capabilities

Evaluate downloads, reports, research workflows and contributor features.

Consider advanced geospatial processing or scenario analysis only after methodological validation and user demand.

12. Initial success measures

Measure usefulness and reliability, not just traffic.

Percentage of displayed indicators with complete source metadata.

Percentage of data refreshes completed successfully and on schedule.

Number of broken or stale data sources.

Map and page load performance on mobile connections.

Task completion for core user journeys.

Accessibility issues identified and resolved.

Educational content engagement and comprehension feedback.

Research/organization feedback on data usefulness and limitations.

Do not use raw page views as the only measure of success.

13. Risks and open questions

Risk / question

Why it matters

Required action

Different definitions of the Congo Basin

Regional totals may not be comparable

Select and document boundary definitions per dataset

Incompatible forest definitions

Forest area, tree cover and tree-cover loss can be confused

Publish a glossary and metric-specific methodology

API changes, quotas or access requirements

Features may stop working or exceed limits

Test endpoints, review terms and implement caching/fallbacks

Licensing and attribution restrictions

Public display or redistribution may be limited

Review each dataset's license and terms before use

Cloud cover and satellite limitations

Imagery-derived analysis may be incomplete or uncertain

Document quality controls and uncertainty

Biodiversity record bias

Observation density varies by place and species

Explain sampling bias and avoid abundance claims

Causal overstatement

Spatial association can be mistaken for proof

Require evidence before attributing drivers

Large geospatial datasets

Can make the site slow and expensive

Use tiles, aggregation and appropriate preprocessing

Limited maintenance capacity

Data platforms require ongoing upkeep

Start with a small, sustainable indicator set

Decisions still to validate

Exact basin boundary and country inclusion used for the primary regional map.

Initial forest indicators and their exact definitions.

Whether DRC provincial boundaries and data are sufficiently consistent for Release 1.

Which GFW datasets and access methods are suitable for public use.

Whether the project is strictly non-commercial; this affects some data access terms.

Preferred language strategy: French first, English first, or bilingual from the first release.

Whether users need downloadable data in Release 1 or later.

14. Immediate next actions

Create a source register with dataset name, provider, URL, geography, metric, period, resolution, update cadence, license, authentication, limitations and test status.

Select three to five initial indicators that can be supported with reliable data.

Define the Congo Basin boundary and DRC administrative boundary sources.

Run a technical proof of concept for one forest dataset and one map layer.

Review the existing index.html against the approved first-release scope before deciding what to preserve, replace or remove.

Reference sources consulted

Global Forest Watch Data API documentation: https://data-api.globalforestwatch.org/docs

FAO FRA 2025 overview: https://www.fao.org/forest-resources-assessment/past-assessments/fra-2025/

FAO FRA 2025 DRC forest extent data: https://fra-data.fao.org/assessments/fra/2025/COD/sections/extentOfForest/

NASA FIRMS active-fire data: https://firms.modaps.eosdis.nasa.gov/content/active_fire/

Copernicus Data Space APIs: https://documentation.dataspace.copernicus.eu/APIs.html

GBIF Occurrence API: https://techdocs.gbif.org/en/openapi/v1/occurrence

Protected Planet API v4 documentation: https://api.protectedplanet.net/documentation

Protected Planet API terms/access information: https://api.protectedplanet.net/

WorldPop API v2: https://api.worldpop.org/v2/
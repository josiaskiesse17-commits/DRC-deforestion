# Environmental Data Catalog — DRC-deforestion Phase 2

**Project:** DRC-deforestion  
**Phase:** 2 — Environmental Data Research and Validation  
**Date:** 1 November 2026  
**Geographic scope:** Congo Basin, with deeper coverage of the Democratic Republic of the Congo (DRC)  
**Constraint honored:** This is a research deliverable only. No application code written, no APIs integrated, no dependencies installed, no project files modified. All facts below are drawn from official documentation and primary sources accessed via web research; claims are marked as verified or assumed where appropriate.

---

## 1. Executive Summary

Seven candidate data providers were investigated against the five initial indicators (forest extent, tree-cover loss, forest degradation, active fires, protected areas) and the product specification's data-quality principles (traceable source, transparent uncertainty, clear dates, geographic precision, no fabricated statistics).

**Strongest candidate per initial indicator:**

| Indicator | Recommended dataset | Provider | Basis |
|---|---|---|---|
| Forest extent | FRA 2025 "Extent of forest and other wooded land" (country-reported) | FAO | Official country-reported reference; CC BY 4.0; no auth; DRC-specific section exists |
| Tree-cover loss | Tree Cover Loss (Hansen/UMD/Google/USGS/NASA, Landsat) | GFW | 30 m, annual, 2001–2024, global incl. DRC/Congo Basin; well documented; loss ≠ deforestation caveat |
| Forest degradation | No single ready-made degradation dataset identified | — | Degradation requires derived/processing work (e.g., Sentinel-based); not directly available as a ready indicator from the seven providers |
| Active fires | NASA FIRMS NRT/standard active fire (MODIS C6.1, VIIRS 375 m) | NASA FIRMS | Global, within ~3 hours (NRT), free downloads, Earthdata Login for archive; detections ≠ burned area ≠ deforestation |
| Protected areas | WDPCA (WDPA + WD-OECM merged), downloadable Shapefile/CSV | Protected Planet / UNEP-WCMC | Monthly updates, global incl. DRC; downloadable without API; API requires token and is not for commercial use |

**Accessibility:** FAO FRA 2025, GFW Open Data Portal downloads, NASA FIRMS NRT, Protected Planet downloads, WorldPop downloads, and GBIF search are accessible without prior approval. GFW Data API, Protected Planet API, Copernicus, GBIF bulk downloads, and WorldPop API require registration and/or credentials.

**Recommended initial data stack (Release 1 scope):** FAO FRA 2025 (forest extent reference) + GFW Tree Cover Loss (tree-cover loss indicator) + NASA FIRMS (active-fire layer, Release 2 per spec) + Protected Planet WDPCA download (protected-area layer, Release 2) + WorldPop (population context, Release 2). GBIF for biodiversity occurrence (Release 2). Copernicus Sentinel deferred (imagery, not a ready-made statistic; requires processing).

---

## 2. Provider Comparison Table

| Provider | Dataset(s) relevant | DRC / Congo Basin coverage | History | Update cadence | Spatial resolution | API / download | Auth required? | License | Primary caveat |
|---|---|---|---|---|---|---|---|---|---|
| FAO FRA 2025 | Forest extent, characteristics, change (country-reported) | Global, incl. DRC country section | 1990, 2000, 2015, 2025 (5-yr cycles) | ~Every 5 years (assessment cycle) | National statistics (no pixel resolution) | CSV/XLSX via fra-data.fao.org; bulk download | No | CC BY 4.0 + FAO Terms of Use | Country-reported; definitions differ from GFW remote sensing |
| Global Forest Watch | Tree Cover Loss, Tree Cover, Gain, loss-by-driver | Global land (excl. Antarctica/Arctic); incl. DRC & Congo Basin | 2001–2024 (Tree Cover Loss v1.12) | Annual | 30 m (Landsat) | Data API + Open Data Portal downloads | API key for Data API; portal downloads open | GFW portal docs: "No License Provided" on some docs; citation required | Tree cover ≠ forest; loss ≠ deforestation; time-series reprocessing caveats |
| NASA FIRMS | Active fire (MODIS C6.1, VIIRS 375 m, Landsat OLI 30 m) | Global; DRC included | MODIS Nov 2000–; VIIRS Jan 2012– | NRT (~3 hrs), daily archives | MODIS 1 km; VIIRS 375 m; Landsat 30 m | Shapefile/KML/CSV/WMS/WFS/API area | Earthdata Login for archive; NRT open | Public (NASA) | Detection ≠ burned area ≠ deforestation; NRT superseded by standard product after 2–5 months |
| Copernicus CDSE | Sentinel-1/2/3/5P imagery; STAC/OData/Sentinel Hub/openEO | Global; DRC included | Sentinel-2 from 2015; Sentinel-1 from 2014 | Varies by satellite (5–10 day revisit) | 10–60 m (Sentinel-2 10 m) | STAC, OData, Sentinel Hub, openEO, S3, OGC | Registration (dataspace.copernicus.eu); S3 needs credentials | Copernicus (free, open) | Imagery ≠ deforestation statistic; requires cloud masking/classification/validation; quotas apply |
| Protected Planet / UNEP-WCMC | WDPCA (WDPA + WD-OECM merged) | Global; DRC included | Current version monthly | Monthly | Vector (polygons/points) | Shapefile, CSV, GDB downloads; API v4 | Downloads open; API needs token (not for commercial use) | UNEP-WCMC custom license (no commercial use, no redistribution) | PA designation ≠ effective protection; API not for commercial use |
| GBIF | Species occurrence records | Global; DRC included | Historic to present | Continuous (publisher-driven) | Point coordinates (variable precision) | Occurrence API v1 (search + asynchronous bulk download) | Search open; bulk download needs GBIF login | Dataset-specific (CC0, CC BY, CC BY-NC, etc.) | Occurrence ≠ abundance/population; sampling bias; record provenance varies |
| WorldPop | Gridded population counts & density | DRC (country-level products); global project | 2000–2030 (varies by product) | Periodic releases | 100 m (3 arc) and 1 km (30 arc) | GeoTIFF downloads; API v2 | Downloads open; API needs registration | CC BY 4.0 (some ODbL) | Modeled estimates ≠ census counts; alpha/beta versions may change |

---

## 3. Detailed Provider Assessments

### 3.1 FAO FRA 2025 (Global Forest Resources Assessment 2025)

**Verified via:** fra-data.fao.org platform (accessed via search excerpts; platform version v3.20.0, 2026-10-26) and spec §7 reference URLs.

| Attribute | Detail |
|---|---|
| Official datasets | FRA 2025 thematic sections: 1a extent of forest/other wooded land; 1b forest characteristics; 1c specific forest categories; 1d annual expansion/deforestation/net change; 1e other land with tree cover; growing stock, biomass, carbon; designation; ownership; disturbances; policy. |
| DRC section | `https://fra-data.fao.org/assessments/fra/2025/COD/sections/extentOfForest/` (per spec §14) |
| Geographic coverage | Global, all countries/areas; DRC has dedicated country section |
| Historical availability | Reporting years 1990, 2000, 2015, 2025 (plus intermediate displayed years on platform) |
| Update frequency | ~Every 5 years (global assessment cycle); platform updated continuously (version dated 2026-10-26) |
| Spatial resolution | National-level statistics (hectares, % of land); no pixel/raster data |
| API / download | CSV and XLSX per variable/column via platform UI; "Data Download" for whole dataset. No REST API evident in inspected pages. |
| Authentication | None required for viewing/downloading |
| Licensing | CC BY 4.0 (`https://creativecommons.org/licenses/by/4.0/`) + FAO Statistical Database Terms of Use |
| Limitations / reliability | Country-reported (national correspondents), not remote-sensing uniform; definitions and methods vary by country and may differ from GFW's tree-cover loss; 5-year granularity too coarse for annual monitoring |
| Integration method | Download CSV/XLSX for DRC; store as reference table; display with FRA year, category, and reporting context; cite FAO FRA 2025 |

**Status:** Verified platform existence and license; exact DRC row values not inspected (assumed available per spec URL).

---

### 3.2 Global Forest Watch (GFW)

**Verified via:** data-api.globalforestwatch.org (ReDoc, version 0.3.0); data.globalforestwatch.org documents (Tree Cover Loss, published 2025-09-17); production-api.globalforestwatch.org v1 metadata.

| Attribute | Detail |
|---|---|
| Official datasets | Tree Cover Loss, Tree Cover, Tree Cover Gain, Tree Cover Loss by Driver, forest change alerts, etc. via GFW Data API and Open Data Portal (data.globalforestwatch.org) |
| DRC coverage | Global land (excl. Antarctica & Arctic islands); DRC country page `globalforestwatch.org/map/country/COD`; Congo Basin covered |
| Historical availability | Tree Cover Loss 2001–2024 (Version 1.12); gain/net change 2000–2020 |
| Update frequency | Annual (Tree Cover Loss); Version 1.12 includes loss up to 2024; some alert layers near-real-time/monthly |
| Spatial resolution | ~30 × 30 m (Landsat TM/ETM+/OLI); some alert products at 10 m (Sentinel-based, Amazon/Congo Basin/SE Asia, monthly) |
| API / download | Data API (`data-api.globalforestwatch.org`, OpenAPI at `/openapi.json`); Open Data Portal document downloads |
| Authentication | Data API requires API key (sign-up; key passed as query/header `_APIKeyOriginQuery`/`_APIKeyOriginHeader`). Portal document downloads appear open. |
| Licensing | Some portal documents state "No License Provided — Request permission to use." Citation required: Hansen et al. / accessed through GFW. Verify per-dataset license before production use. |
| Limitations / reliability | "Tree cover" = vegetation >5 m (includes plantations); "loss" = stand replacement disturbance (≥50% clearing in 30 m pixel) from any cause (harvest, fire, disease, storm); **loss ≠ deforestation**. Time series not fully reprocessed under new methodology — assess with caution. |
| Integration method | Use GFW Data API for queries/statistics/geostore analysis (needs key), or download annual Tree Cover Loss rasters from portal; always disclose that loss is not confirmed deforestation. |

**Status:** API auth requirement and endpoints verified from ReDoc. License uncertainty flagged (some documents "No License Provided") — must verify before use.

---

### 3.3 NASA FIRMS (Fire Information for Resource Management System)

**Verified via:** firms.modaps.eosdis.nasa.gov and firms2.modaps.eosdis.nasa.gov (active fire pages); earthdata.nasa.gov FIRMS pages.

| Attribute | Detail |
|---|---|
| Official datasets | NRT and standard active fire from MODIS (Aqua/Terra) and VIIRS (S-NPP, NOAA-20, NOAA-21); Landsat 8/9 OLI 30 m fire detections |
| DRC coverage | Global; DRC included |
| Historical availability | MODIS C6.1: Nov 2000 (Terra), Jul 2002 (Aqua) to present; VIIRS 375 m: Jan 2012 (S-NPP), Apr 2018 (NOAA-20), Jan 2024 (NOAA-21); Landsat OLI: Jun 2022 to present |
| Update frequency | NRT global within ~3 hours of overpass; US/Canada real-time; daily archive text files (past 2 months); archive download for >7 days |
| Spatial resolution | MODIS 1 km; VIIRS 375 m; Landsat OLI 30 m |
| API / download | Shapefile, KML/KMZ, CSV/TXT, WMS, WMS-T, WFS; API area (`firms.modaps.eosdis.nasa.gov/api/area/`); RT/URT via API/KML/WFS/WMS |
| Authentication | NRT map/views open. Archive download and CSV text files require Earthdata Login registration. RT/URT API access per service terms. |
| Licensing | NASA public data (no restrictive license evident); standard science-quality products recommended for analysis |
| Limitations / reliability | **Active-fire detection ≠ burned area ≠ deforestation.** NRT data replaced by standard (science-quality) product after ~2–3 months (up to 5). Cloud cover and satellite overpass gaps cause missed detections. Suomi NPP VIIRS ceases Nov 2, 2026 — transition to NOAA-20/21 needed. |
| Integration method | Download archived VIIRS/MODIS active fire points for DRC; display with observation date, sensor/product; add explicit caveat that detections are not confirmed fires/deforestation. |

**Status:** Satellite start dates, resolution, NRT timing, Earthdata Login requirement verified. No claim of DRC-specific fire frequency made (assumed covered globally).

---

### 3.4 Copernicus Data Space Ecosystem (CDSE)

**Verified via:** documentation.dataspace.copernicus.eu (APIs, Quotas, FAQ, OData, S3); dataspace.copernicus.eu news (Oct 2026).

| Attribute | Detail |
|---|---|
| Official datasets | Sentinel-1 (SAR), Sentinel-2 (L1C/L2A optical), Sentinel-3, Sentinel-5P, Sentinel-6, complementary missions |
| DRC coverage | Global; DRC included |
| Historical availability | Sentinel-2 from 2015; Sentinel-1 from 2014 (varies by mission) |
| Update frequency | Revisit ~5–10 days (Sentinel-2 at equator); continuous acquisitions |
| Spatial resolution | Sentinel-2: 10 m (visible/NIR), 20 m (red-edge), 60 m (atmospheric); Sentinel-1: 5 m–40 m depending mode |
| API / download | OData, STAC, Sentinel Hub Catalog API, openEO, Sentinel Hub APIs (Process/OGC/Statistical/BYOC), S3, OGC (WMS/WMTS/WFS/WCS), On-Demand Production |
| Authentication | Registration at dataspace.copernicus.eu required. S3 access/secret keys generated after login. |
| Licensing | Copernicus free and open data; terms and conditions apply |
| Limitations / reliability | **Imagery ≠ ready-made deforestation statistic.** Requires cloud masking, atmospheric correction, classification, change detection, validation. Cloud cover persistent in Congo Basin. Quotas: Sentinel Hub 10,000 req/month (temp. 30,000 PUs), 300 req/min; STAC 10 RPS unauth / 240 RPM auth; OData 2000 req/min; 12 TB monthly transfer (30-day rolling). Tokens 10 min active, 60 min refresh. OData decommissioned after 2028; STAC v1 decommissioned Q1 2027. |
| Integration method | Not recommended for Release 1 as a statistic source. Could support future imagery exploration or derived change analysis with backend processing. |

**Status:** Quotas and API endpoints verified from documentation. DRC-specific availability assumed (global coverage).

---

### 3.5 Protected Planet / UNEP-WCMC (WDPCA)

**Verified via:** api.protectedplanet.net (documentation, v4, request form, legal terms); unep-wcmc.org WDPCA data license; data-gis.unep-wcmc.org WDPCA item info (October 2026 version).

| Attribute | Detail |
|---|---|
| Official datasets | WDPCA — World Database on Protected and Conserved Areas (WDPA + WD-OECM merged as of 1 Nov 2025) |
| DRC coverage | Global; national and international designated sites incl. DRC |
| Historical availability | Current version published monthly (Oct 2026 observed); previous versions superseded |
| Update frequency | Monthly |
| Spatial resolution | Vector polygons/points (WDPA IDs; geometry available via `with_geometry`) |
| API / download | API v4 (`api.protectedplanet.net/v4`); downloadable Shapefile, CSV, GDB from protectedplanet.net |
| Authentication | Downloads open. API v4 requires token from request form (`api.protectedplanet.net/request`); token passed as `?token=` query param; v3 taken down 1 May 2026 |
| Licensing | **Custom UNEP-WCMC license (not CC). No commercial use without prior written permission. No sub-licensing/redistribution without permission.** Attribution: IUCN and UNEP-WCMC (year), WDPCA [On-line], [month/year], Cambridge, UK: UNEP-WCMC; link to protectedplanet.net; two free copies of published materials to UNEP-WCMC. Commercial use routed to IBAT (ibat-alliance.org). |
| Limitations / reliability | **PA designation ≠ effective protection.** Boundaries and dates vary by country; some sites may be "paper parks." Must distinguish PA vs OECM. |
| Integration method | Download WDPCA Shapefile/CSV for DRC; filter by country/ISO (COD); display PA/OECM distinction; include month/year of version and attribution. Confirm project non-commercial status before using API/downloads (spec §13 open question). |

**Status:** License restrictions, monthly cadence, v4/v3 deprecation, and auth requirement verified. Commercial-use eligibility of this project is an open decision (spec §13).

---

### 3.6 GBIF (Global Biodiversity Information Facility)

**Verified via:** techdocs.gbif.org (Occurrence API v1 OpenAPI 3.1, API downloads, rate limits); gbif.org developer summary.

| Attribute | Detail |
|---|---|
| Official datasets | Species occurrence records (observations, specimens, etc.) indexed by GBIF |
| DRC coverage | Global; filterable by country (COD), coordinates, taxon, dataset, year |
| Historical availability | Historic to present (varies by publisher; no fixed start) |
| Update frequency | Continuous as publishers upload; no fixed cadence |
| Spatial resolution | Point coordinates (decimal latitude/longitude); precision varies by record |
| API / download | Occurrence API v1 (`https://api.gbif.org/v1/`): single record, paged search (max 300/page, hard 100,000-record query limit), asynchronous bulk download, counts/metrics, maps API |
| Authentication | Search API open (no auth, rate-limited → HTTP 429). Bulk download requires GBIF.org registration + username/password HTTP Basic Auth; download key emailed when ready. |
| Licensing | Per-dataset/record license: CC0_1_0, CC_BY_4_0, CC_BY_NC_4_0, UNSPECIFIED, UNSUPPORTED. GBIF Terms of Service apply. Citation and attribution required. |
| Limitations / reliability | **Occurrence ≠ population estimate/abundance/current presence.** Sampling bias (rich countries/taxa over-recorded); records are as-published (unprocessed); coordinate uncertainty varies. |
| Integration method | Query occurrence search by country=COD and relevant taxa; show records with provenance (dataset, license, date); never present as population estimates; cite GBIF and originating dataset. |

**Status:** API limits (300/page, 100,000 query cap), auth for downloads, and rate-limiting verified. DRC record counts not inspected (assumed available via country filter).

---

### 3.7 WorldPop

**Verified via:** hub.worldpop.org geodata summaries (DRC 100m/1km products R2025A, 2025-09-01; older 2000–2020 UN-adjusted); wopr.worldpop.org (DRC v4.4, 2025-12-22); license text on hub pages.

| Attribute | Detail |
|---|---|
| Official datasets | Gridded population counts and density (constrained/unconstrained; UN-adjusted; age/sex breakdowns) |
| DRC coverage | Country-level products for DRC (COD); global project |
| Historical availability | 2000–2030 depending product (R2025A: 2015–2030; older: 2000–2020) |
| Update frequency | Periodic releases (R2025A alpha dated 2025-09-01; WOPR v4.4 dated 2025-12-22) |
| Spatial resolution | 100 m (3 arc sec) and 1 km (30 arc sec); WGS84, GeoTIFF/ASCII XYZ |
| API / download | GeoTIFF downloads from hub.worldpop.org; API v2 (`api.worldpop.org/v2`) polygon queries, 100 m/1 km, years 2015–2030, rate limits (per spec §7) |
| Authentication | Downloads open (no login observed on hub pages). API v2 requires registration (assumed; verify before use). |
| Licensing | CC BY 4.0 for WorldPop datasets; ODbL for OSM/Microsoft-building/roads-derived layers. Attribution + link to license required. |
| Limitations / reliability | **Modeled estimates ≠ census counts** (Random Forest dasymetric redistribution). Alpha/beta versions may change. Not for discriminatory/surveillance use. Country totals adjusted to UNPD estimates in UN-adjusted products. |
| Integration method | Use DRC 100 m or 1 km population count/density as contextual layer (e.g., population near forest loss). Never claim population growth caused a specific forest-loss event. Cite WorldPop + DOI. |

**Status:** Resolution, years, DRC product availability, DOI, and CC BY 4.0 license verified. API v2 details taken from spec §7 (not independently confirmed beyond existence).

---

## 4. Indicator-to-Dataset Mapping

| Indicator | Candidate datasets | Best fit | Why | Key caveat to disclose |
|---|---|---|---|---|
| Forest extent | FAO FRA 2025 (1a); GFW Tree Cover (2010/2000) | **FAO FRA 2025** | Official country-reported forest area; CC BY; DRC section; no auth | "Forest" (FRA) ≠ "tree cover" (GFW); 5-year reporting; country definitions vary |
| Tree-cover loss | GFW Tree Cover Loss (Hansen/UMD) | **GFW** | 30 m, annual 2001–2024, global incl. DRC/Congo Basin; well documented | Tree cover ≠ forest; loss ≠ deforestation (fire, storm, harvest all count); time-series methodology caveat |
| Forest degradation | None directly among the seven | — (defer) | No provider offers a ready-made "degradation" indicator for DRC; would require Sentinel-based derived analysis (Copernicus) — outside Release 1 scope | Degradation is not directly observable; requires processing & validation |
| Active fires | NASA FIRMS (MODIS C6.1, VIIRS 375 m) | **NASA FIRMS** | Global, NRT ~3 hrs, free archive downloads, long history | Detection ≠ burned area ≠ deforestation; NRT superseded by standard product after 2–5 months; Suomi NPP ends Nov 2026 |
| Protected areas | Protected Planet WDPCA downloads | **Protected Planet** | Monthly, global incl. DRC; downloadable Shapefile/CSV without API | PA designation ≠ effective protection; custom license (no commercial use); confirm non-commercial status |

---

## 5. Accessibility and Credentials Analysis

### Accessible without prior approval (suitable for immediate prototyping)
- FAO FRA 2025 (fra-data.fao.org) — CSV/XLSX, no auth
- GFW Open Data Portal document downloads — open (Data API needs key)
- NASA FIRMS NRT map/views and some downloads — open (archive CSV needs Earthdata Login)
- Protected Planet downloads (Shapefile/CSV/GDB) — open (API needs token)
- GBIF occurrence search — open (rate-limited; bulk download needs GBIF login)
- WorldPop GeoTIFF downloads — open (API v2 needs registration)

### Require registration / API credentials (plan ahead)
- GFW Data API — API key via sign-up
- Protected Planet API v4 — token via request form (not for commercial use)
- NASA FIRMS archive CSV — Earthdata Login
- Copernicus CDSE — dataspace.copernicus.eu account; S3 secrets after login
- GBIF bulk occurrence download — GBIF.org account (username/password)
- WorldPop API v2 — registration (verify terms)

### Unsuitable / too complicated for initial release
- **Copernicus Sentinel imagery** — not a ready-made deforestation statistic; requires cloud masking, classification, validation; quotas; decommissioning of OData (post-2028) and STAC v1 (Q1 2027). Defer to post-Release 1.
- **Protected Planet API** if the project is commercial — terms prohibit commercial use; confirm non-commercial status (spec §13 open question). Downloads may still be usable if non-commercial.
- **Forest degradation** — no ready dataset; defer.

---

## 6. Limitations, Licensing, and Attribution Requirements

| Provider | License | Attribution requirement | Commercial use | Redistribution |
|---|---|---|---|---|
| FAO FRA 2025 | CC BY 4.0 + FAO Terms of Use | Credit FAO | Allowed with attribution | Allowed under CC BY |
| GFW | Per-dataset (some "No License Provided") | Hansen et al. / GFW citation | Verify per dataset | Verify per dataset |
| NASA FIRMS | NASA public data | Cite NASA/FIRMS | Generally allowed (NASA) | Generally allowed |
| Copernicus CDSE | Copernicus terms | ESA/Copernicus | Free and open | Allowed under terms |
| Protected Planet (WDPCA) | Custom UNEP-WCMC | IUCN & UNEP-WCMC citation + link + 2 free copies | **No** without written permission | **No** without written permission |
| GBIF | Per-record (CC0/CC BY/CC BY-NC/etc.) | Cite GBIF + originating dataset | Depends on record license | Depends on record license |
| WorldPop | CC BY 4.0 (some ODbL) | Credit WorldPop + license link | Allowed with attribution (CC BY) | ODbL layers: share-alike |

**Critical licensing note for Protected Planet:** The WDPCA license prohibits commercial use and redistribution without UNEP-WCMC written permission. The project's commercial status is an open decision per spec §13 ("Whether the project is strictly non-commercial; this affects some data access terms"). This must be resolved before integrating WDPCA.

**Critical data-quality note (spec §8):** Forest area ≠ tree-cover canopy; tree-cover loss ≠ permanent deforestation; fire detections ≠ burned area; species occurrences ≠ population estimates; PA designation ≠ effective protection. Every displayed indicator must carry source, metric, period, geography, version, method, resolution, limitations, and license.

---

## 7. Recommendations

### Recommended initial data stack (Release 1)
1. **FAO FRA 2025** — forest-extent reference (country-reported, DRC section, CC BY, no auth).
2. **GFW Tree Cover Loss (Hansen/UMD)** — tree-cover loss indicator (30 m, annual 2001–2024; open portal downloads; API key if programmatic access needed).
3. **WorldPop DRC population** — contextual population layer (100 m/1 km, CC BY, open downloads) — only as context, not causation evidence.

### Release 2 candidates (per spec roadmap)
4. **NASA FIRMS** — active-fire layer (VIIRS/MODIS; Earthdata Login for archive; strong caveats).
5. **Protected Planet WDPCA downloads** — protected-area layer (monthly; custom license; confirm non-commercial status).
6. **GBIF occurrence** — biodiversity explorer (search open; bulk needs login; never as abundance).

### Deferred / not for initial release
- **Copernicus Sentinel** — imagery requires processing; not a ready statistic; defer until a validated method exists.
- **Forest degradation indicator** — no ready dataset; defer.

### Immediate next actions (aligned to spec §14)
1. Create a source register (dataset, provider, URL, geography, metric, period, resolution, cadence, license, auth, limitations, test status).
2. Select 3–5 initial indicators supportable with reliable data (suggest: forest extent, tree-cover loss, plus contextual population).
3. Define Congo Basin and DRC administrative boundary sources.
4. Run a technical proof of concept for one forest dataset (GFW Tree Cover Loss) and one map layer.
5. Confirm the project's non-commercial status before using Protected Planet WDPCA.

---

## 8. Source Links (Primary Documentation)

| Provider | Key source URLs |
|---|---|
| FAO FRA 2025 | https://fra-data.fao.org/assessments/fra/2025/ ; DRC extent: https://fra-data.fao.org/assessments/fra/2025/COD/sections/extentOfForest/ ; FAO overview: https://www.fao.org/forest-resources-assessment/past-assessments/fra-2025/ |
| GFW | https://data-api.globalforestwatch.org/docs (ReDoc v0.3.0) ; https://data-api.globalforestwatch.org/openapi.json ; https://data.globalforestwatch.org/documents/gfw::tree-cover-loss/about |
| NASA FIRMS | https://firms.modaps.eosdis.nasa.gov/active_fire ; https://firms2.modaps.eosdis.nasa.gov/active_fire ; https://www.earthdata.nasa.gov/data/tools/firms ; API area: https://firms.modaps.eosdis.nasa.gov/api/area/ |
| Copernicus CDSE | https://documentation.dataspace.copernicus.eu/APIs.html ; https://documentation.dataspace.copernicus.eu/Quotas.html ; https://dataspace.copernicus.eu/analyse/apis |
| Protected Planet | https://api.protectedplanet.net/documentation ; https://api.protectedplanet.net/request ; https://www.unep-wcmc.org/en/wdpa-data-license ; https://www.protectedplanet.net/ |
| GBIF | https://techdocs.gbif.org/en/openapi/v1/occurrence ; https://techdocs.gbif.org/en/data-use/api-downloads ; https://www.gbif.org/terms |
| WorldPop | https://hub.worldpop.org/ ; https://api.worldpop.org/v2/ ; DRC product DOI example: 10.5258/SOTON/WP00839 |

---

## 9. Verification Status Note

All provider facts above were drawn from official documentation/primary sources located via web research (FAO FRA platform, GFW Data API ReDoc and portal documents, NASA FIRMS/Earthdata pages, Copernicus CDSE documentation, Protected Planet API docs and license, GBIF techdocs, WorldPop hub). Specific DRC row-values, exact API rate-limit envelopes beyond those published, and real-time endpoint availability were **not** independently tested (no network calls made beyond search). Treat values such as quota numbers and license terms as current as of the documentation observed (Oct–Nov 2026) and re-verify before integration. No API access was verified and no credentials exist for this project.
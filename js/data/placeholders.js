/*
 * DRC-deforestation — Placeholder data module
 * Single source of truth for placeholder indicator metadata used across the
 * application until real datasets are integrated (Batch 2+). No environmental
 * statistics are presented as observed facts here.
 */

export const PLACEHOLDER_INDICATORS = [
  {
    id: 'forest-extent',
    title: 'Forest extent',
    body: 'country-reported forest area reference',
    detail: 'Candidate source: FAO FRA 2025 (country-reported). CC BY 4.0.',
    status: 'Placeholder',
    license: 'CC BY 4.0',
  },
  {
    id: 'tree-cover-loss',
    title: 'Tree-cover loss',
    body: 'annual tree-cover change indicator',
    detail: 'Candidate source: Global Forest Watch (Hansen/UMD/Google/USGS/NASA), 30 m, annual, 2001&ndash;2024. Loss &ne; deforestation.',
    status: 'Placeholder',
    license: 'Verify per dataset',
  },
  {
    id: 'active-fires',
    title: 'Active fires',
    body: 'fire observation layer',
    detail: 'Candidate source: NASA FIRMS (MODIS / VIIRS). Detection &ne; burned area.',
    status: 'Placeholder',
    license: 'NASA public',
  },
  {
    id: 'forest-degradation',
    title: 'Forest degradation',
    body: 'disturbance / degradation indicator',
    detail: 'No ready-made degradation dataset identified; requires derived analysis. Deferred to a later batch.',
    status: 'Placeholder',
    license: 'N/A',
  },
  {
    id: 'protected-areas',
    title: 'Protected areas',
    body: 'PA / OECM boundaries',
    detail: 'Candidate source: Protected Planet / UNEP-WCMC (WDPCA). License terms under review (no commercial use / redistribution without permission).',
    status: 'Placeholder',
    license: 'UNEP-WCMC custom*',
  },
  {
    id: 'biodiversity',
    title: 'Biodiversity occurrences',
    body: 'species occurrence records',
    detail: 'Candidate source: GBIF. Occurrences &ne; population estimates.',
    status: 'Placeholder',
    license: 'Per-record (CC0 / BY / BY-NC)',
  },
  {
    id: 'population-context',
    title: 'Population context',
    body: 'gridded population estimates',
    detail: 'Candidate source: WorldPop. Modelled estimates &ne; census counts.',
    status: 'Placeholder',
    license: 'CC BY 4.0',
  },
];

export function getPlaceholder(id) {
  return PLACEHOLDER_INDICATORS.find((p) => p.id === id) || null;
}

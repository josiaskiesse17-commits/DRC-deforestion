/*
 * DRC-deforestation
 * Environmental data source register.
 *
 * This file describes candidate and planned sources.
 * It does not contain fabricated environmental measurements.
 *
 * A source must not be labelled integrated until:
 * - Its dataset has actually been obtained.
 * - Its license and permitted uses have been checked.
 * - Its geographical and temporal coverage have been verified.
 * - Its methodology and limitations have been documented.
 * - Its integration has been tested.
 */

export const DATA_STATUS = Object.freeze({
  AVAILABLE: 'available',
  CANDIDATE: 'candidate',
  PLANNED: 'planned',
  DEFERRED: 'deferred',
  LIMITED: 'limited',
});

export const DATA_SOURCES = Object.freeze([
  {
    id: 'fao-fra',
    name: 'Global Forest Resources Assessment 2025',
    provider: 'Food and Agriculture Organization of the United Nations',
    category: 'Forest resources',
    status: DATA_STATUS.CANDIDATE,

    description:
      'Country-reported information about forest resources, forest area and changes over time.',

    coverage:
      'Country-level reporting, including the Democratic Republic of the Congo.',

    limitations:
      'National reporting definitions, reference periods and estimation methods must be considered when comparing countries or years.',

    license:
      'The relevant FAO material is published under CC BY 4.0, subject to the terms attached to the specific resource.',

    url: 'https://www.fao.org/forest-resources-assessment/en/',
  },

  {
    id: 'gfw-hansen',
    name: 'Global Forest Watch / Hansen Global Forest Change',
    provider: 'Global Forest Watch and University of Maryland research datasets',
    category: 'Tree-cover change',
    status: DATA_STATUS.CANDIDATE,

    description:
      'Satellite-derived information used to analyse tree-cover extent and tree-cover loss over time.',

    coverage:
      'Global spatial coverage, including the Congo Basin.',

    limitations:
      'Tree-cover loss is not automatically equivalent to permanent deforestation. Results depend on canopy thresholds, land-cover definitions and the selected dataset version.',

    license:
      'Check the license and terms of the exact dataset before redistribution or reuse. API access may require credentials.',

    url: 'https://www.globalforestwatch.org/',
  },

  {
    id: 'nasa-firms',
    name: 'NASA Fire Information for Resource Management System',
    provider: 'NASA',
    category: 'Active fire observations',
    status: DATA_STATUS.CANDIDATE,

    description:
      'Satellite-derived active fire detections from instruments including MODIS and VIIRS.',

    coverage:
      'Global coverage, including the Democratic Republic of the Congo.',

    limitations:
      'A fire detection is not a measurement of burned area, forest loss or deforestation. Clouds, observation timing and detection characteristics affect results.',

    license:
      'Check the terms and attribution requirements for the selected product and service.',

    url: 'https://firms.modaps.eosdis.nasa.gov/',
  },

  {
    id: 'protected-planet',
    name: 'World Database on Protected Areas',
    provider: 'UNEP-WCMC and IUCN',
    category: 'Protected areas',
    status: DATA_STATUS.LIMITED,

    description:
      'A global reference database of designated terrestrial and marine protected areas and other effective area-based conservation measures.',

    coverage:
      'Global coverage, including protected areas in the Congo Basin.',

    limitations:
      'A protected-area designation does not demonstrate effective enforcement or successful conservation outcomes.',

    license:
      'Use is subject to the applicable UNEP-WCMC terms. Do not assume unrestricted commercial reuse or redistribution.',

    url: 'https://www.protectedplanet.net/',
  },

  {
    id: 'gbif',
    name: 'Global Biodiversity Information Facility',
    provider: 'GBIF',
    category: 'Biodiversity observations',
    status: DATA_STATUS.CANDIDATE,

    description:
      'A global infrastructure providing access to biodiversity occurrence records from many contributing institutions and datasets.',

    coverage:
      'Global coverage, including occurrence records from the Democratic Republic of the Congo.',

    limitations:
      'Occurrence records indicate documented observations, not complete species distributions, population sizes or current conservation status. Licenses can differ by record.',

    license:
      'Check the license attached to each occurrence record and cite the corresponding dataset appropriately.',

    url: 'https://www.gbif.org/',
  },

  {
    id: 'worldpop',
    name: 'WorldPop',
    provider: 'WorldPop research programme',
    category: 'Population distribution',
    status: DATA_STATUS.CANDIDATE,

    description:
      'Spatially modelled population estimates and demographic datasets.',

    coverage:
      'Global and country-level products, including the Democratic Republic of the Congo.',

    limitations:
      'Gridded population estimates are model outputs, not direct census counts. Resolution, year and modelling assumptions must be reported.',

    license:
      'Some identified WorldPop products use CC BY 4.0. Verify the license of the exact product selected.',

    url: 'https://www.worldpop.org/',
  },

  {
    id: 'forest-degradation',
    name: 'Forest degradation indicators',
    provider: 'No validated source selected',
    category: 'Forest condition',
    status: DATA_STATUS.DEFERRED,

    description:
      'Potential future indicators of reduced forest condition, canopy disturbance and other forms of degradation.',

    coverage:
      'Not yet established.',

    limitations:
      'A suitable dataset and a defensible methodology have not yet been selected. Degradation must not be inferred from tree-cover loss alone.',

    license:
      'Not yet established.',

    url: '',
  },

  {
    id: 'sentinel',
    name: 'Copernicus Sentinel satellite imagery',
    provider: 'European Union Copernicus programme',
    category: 'Satellite imagery',
    status: DATA_STATUS.DEFERRED,

    description:
      'Satellite imagery that could support future land-cover and environmental monitoring workflows.',

    coverage:
      'Satellite observations cover the region, subject to the selected mission and acquisition conditions.',

    limitations:
      'Imagery is not automatically a validated deforestation indicator. Processing, classification, cloud handling and ground validation would be required.',

    license:
      'Check the applicable Copernicus data access and reuse conditions.',

    url: 'https://dataspace.copernicus.eu/',
  },
]);

/**
 * Retrieve a source by its stable identifier.
 */
export function getDataSource(id) {
  return DATA_SOURCES.find((source) => source.id === id) || null;
}

/**
 * Retrieve sources by category.
 */
export function getSourcesByCategory(category) {
  return DATA_SOURCES.filter(
    (source) => source.category === category
  );
}

/**
 * Retrieve sources by integration status.
 */
export function getSourcesByStatus(status) {
  return DATA_SOURCES.filter(
    (source) => source.status === status
  );
}

/**
 * Return the number of sources in each status category.
 */
export function getSourceStatusSummary() {
  return DATA_SOURCES.reduce((summary, source) => {
    summary[source.status] = (summary[source.status] || 0) + 1;
    return summary;
  }, {});
}
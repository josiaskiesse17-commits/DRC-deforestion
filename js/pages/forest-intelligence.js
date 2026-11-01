/*
 * DRC-deforestation — Forest Intelligence module
 * Product specification section C.
 *
 * Layout: key distinctions callout > indicator rows > time-series placeholder
 * > geographic comparison. Definition-list first, then indicators.
 */

export function render() {
  return `
    <section class="page" id="page-forest-intelligence" aria-label="Forest Intelligence">

      <div class="section">
        <div class="section-header">
          <span class="kicker">Forest Intelligence</span>
          <h2>Forest extent, change and disturbance</h2>
          <p>
            Indicators for the Congo Basin and DRC, each traceable to a source,
            with definitions explained. Projections are labelled as scenarios,
            never as observed facts.
          </p>
        </div>

        <!-- Required distinctions -->
        <div class="callout">
          <h4>Read the terms carefully</h4>
          <p>
            Forest area is not the same as tree-cover canopy. Tree-cover loss
            is not automatically equivalent to permanent deforestation. Fire
            detections are not the same as burned area. These distinctions are
            disclosed with every indicator.
          </p>
        </div>
      </div>

      <!-- Indicators -->
      <div class="section">
        <div class="section-header">
          <span class="kicker">Indicators</span>
          <h2>Initial indicators (pending data integration)</h2>
          <p>
            Candidate sources per indicator are shown. No values are displayed
            as observed facts until a verified dataset is integrated.
          </p>
        </div>
        <div class="indicator-grid">
          <div class="indicator">
            <span class="label">Forest extent</span>
            <span class="title">Country-reported forest area</span>
            <span class="note">Candidate: FAO FRA 2025 &bull; CC BY 4.0 &bull; DRC section</span>
          </div>
          <div class="indicator">
            <span class="label">Tree-cover loss</span>
            <span class="title">Annual change indicator</span>
            <span class="note">Candidate: Global Forest Watch &bull; 30 m &bull; 2001&ndash;2024 &bull; loss &ne; deforestation</span>
          </div>
          <div class="indicator">
            <span class="label">Active fires</span>
            <span class="title">Fire observation layer</span>
            <span class="note">Candidate: NASA FIRMS &bull; MODIS / VIIRS &bull; detection &ne; burned area</span>
          </div>
          <div class="indicator">
            <span class="label">Forest degradation</span>
            <span class="title">Derived disturbance indicator</span>
            <span class="note">No ready-made dataset; requires processing. Deferred.</span>
          </div>
        </div>
      </div>

      <!-- Time series -->
      <div class="section">
        <div class="section-header">
          <span class="kicker">Historical view</span>
          <h2>Time-series charts</h2>
          <p>
            Historical forest-change charts clearly identify the dataset and
            methodology used. Charts appear here once real data is integrated.
          </p>
        </div>
        <div class="figure">
          <div class="figure-img" aria-label="Forest change time-series placeholder">
            [ Time-series chart placeholder &mdash; forest extent and tree-cover
            loss trends by year, with dataset, period and method labelled ]
          </div>
          <p class="figure-caption">
            Chart placeholder. Real charts will use Chart.js with verified data
            and full axis/legend labels.
          </p>
        </div>
      </div>

      <!-- Geographic comparison -->
      <div class="section">
        <div class="section-header">
          <span class="kicker">Compare areas</span>
          <h2>Geographic comparison</h2>
          <p>
            Side-by-side comparison of forest indicators across areas using
            harmonised metrics and comparable periods.
          </p>
        </div>
        <div class="grid-2">
          <div class="feature">
            <div class="feature-icon">&#128205;</div>
            <div class="feature-body">
              <h3>Harmonised metrics</h3>
              <p>All comparisons use common units and periods so values are
              directly comparable.</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">&#128202;</div>
            <div class="feature-body">
              <h3>Area selection</h3>
              <p>Choose Basin countries, DRC provinces or landscapes to compare.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  `;
}

export function init() {
  /* Chart integration happens in a later batch. */
}

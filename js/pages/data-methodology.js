/*
 * DRC-deforestation — Data & Methodology page module
 * Product specification section G.
 */

export function render() {
  return `
    <section class="page" id="page-data-methodology" aria-label="Data & Methodology">
      <div class="page-header">
        <h1>Data &amp; Methodology</h1>
        <p class="text-lead">
          Source register, indicator definitions, limitations, update cadence,
          licensing and attribution for every data-backed indicator.
        </p>
      </div>

      <div class="callout">
        <h4>Data-quality principles</h4>
        <p>
          Every indicator exposes: name and definition, value and unit,
          geographic coverage and boundary definition, observation period,
          publication date, source organisation, calculation method, spatial
          resolution, known limitations and license. No value is presented as
          an observed fact unless sourced.
        </p>
      </div>

      <h2>Source register (Release 1 placeholders)</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Indicator</th>
              <th>Candidate source</th>
              <th>Geography</th>
              <th>Status</th>
              <th>License</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Forest extent</td>
              <td>FAO FRA 2025 (country-reported)</td>
              <td>DRC / countries</td>
              <td>Placeholder</td>
              <td>CC BY 4.0</td>
            </tr>
            <tr>
              <td>Tree-cover loss</td>
              <td>Global Forest Watch (Hansen/UMD/Google/USGS/NASA)</td>
              <td>Global incl. Congo Basin</td>
              <td>Placeholder</td>
              <td>Verify per dataset</td>
            </tr>
            <tr>
              <td>Active fires</td>
              <td>NASA FIRMS (MODIS / VIIRS)</td>
              <td>Global incl. DRC</td>
              <td>Placeholder</td>
              <td>NASA public</td>
            </tr>
            <tr>
              <td>Protected areas</td>
              <td>Protected Planet / UNEP-WCMC (WDPCA)</td>
              <td>Global incl. DRC</td>
              <td>Placeholder</td>
              <td>UNEP-WCMC custom*</td>
            </tr>
            <tr>
              <td>Biodiversity occurrences</td>
              <td>GBIF</td>
              <td>Global incl. DRC</td>
              <td>Placeholder</td>
              <td>Per-record (CC0 / BY / BY-NC)</td>
            </tr>
            <tr>
              <td>Population context</td>
              <td>WorldPop</td>
              <td>DRC</td>
              <td>Placeholder</td>
              <td>CC BY 4.0</td>
            </tr>
          </tbody>
        </table>
        <p class="small muted mt-6">
          * Protected Planet / WDPCA use is subject to UNEP-WCMC terms
          (no commercial use or redistribution without permission). Project
          commercial status is under review &mdash; see open decisions.
        </p>
      </div>

      <h2>Definitions &amp; required distinctions</h2>
      <ul>
        <li><strong>Forest area &ne; tree-cover canopy.</strong> Different definitions are disclosed per indicator.</li>
        <li><strong>Tree-cover loss &ne; permanent deforestation.</strong> Loss may result from fire, storm, harvest or conversion.</li>
        <li><strong>Fire detections &ne; burned area &ne; deforestation.</strong> Detections are satellite observations, not confirmed events.</li>
        <li><strong>Species occurrences &ne; population estimates.</strong> Records retain provenance; not abundance.</li>
        <li><strong>Protected-area designation &ne; effective protection.</strong></li>
        <li><strong>Spatial association &ne; causation.</strong> Driver attribution requires evidence.</li>
        <li><strong>Projections are scenarios.</strong> Never presented as observed facts.</li>
      </ul>

      <h2>Limitations &amp; gaps</h2>
      <ul>
        <li>No environmental statistics are integrated in Release 1; all indicator values are placeholders.</li>
        <li>Dataset boundaries may differ; each map discloses its boundary definition.</li>
        <li>Where no reliable data exists, the gap is shown rather than inventing a value.</li>
        <li>API access, quotas and licensing are reviewed before integration.</li>
      </ul>

      <h2>Attribution</h2>
      <p>
        Attribution and licensing details are confirmed per dataset before
        publication. No API keys or secrets are stored in frontend code.
      </p>
    </section>
  `;
}

export function init() {
  /* No page-specific setup required. */
}

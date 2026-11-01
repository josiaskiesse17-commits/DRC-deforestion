/*
 * DRC-deforestation — Data & Methodology module
 * Product specification section G.
 *
 * Layout: source register table > definitions & required distinctions >
 * limitations & gaps > attribution. Table and definition-list layouts.
 */

export function render() {
  return `
    <section class="page" id="page-data-methodology" aria-label="Data & Methodology">

      <div class="section">
        <div class="section-header">
          <span class="kicker">Data &amp; Methodology</span>
          <h2>Source register</h2>
          <p>
            Every data-backed indicator exposes its source, metric, period,
            geography, resolution, limitations and licence. Release 1 uses
            placeholders; real data is integrated in later batches.
          </p>
        </div>

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
                <td>Forest degradation</td>
                <td>Derived analysis (deferred)</td>
                <td>DRC / Basin</td>
                <td>Placeholder</td>
                <td>N/A</td>
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
      </div>

      <!-- Definitions & distinctions -->
      <div class="section">
        <div class="section-header">
          <span class="kicker">Definitions</span>
          <h2>Required distinctions</h2>
          <p>
            These distinctions are disclosed with every indicator to prevent
            misinterpretation.
          </p>
        </div>
        <div class="dl-grid">
          <div class="dl-item">
            <span class="dl-term">Forest area &ne; tree-cover canopy</span>
            <p class="dl-def">Different definitions are disclosed per indicator;
            one is not substituted for the other.</p>
          </div>
          <div class="dl-item">
            <span class="dl-term">Tree-cover loss &ne; permanent deforestation</span>
            <p class="dl-def">Loss may result from fire, storm, harvest or
            conversion; it is not automatically permanent deforestation.</p>
          </div>
          <div class="dl-item">
            <span class="dl-term">Fire detections &ne; burned area &ne; deforestation</span>
            <p class="dl-def">Detections are satellite observations, not
            confirmed events or proof of cause.</p>
          </div>
          <div class="dl-item">
            <span class="dl-term">Species occurrences &ne; population estimates</span>
            <p class="dl-def">Records retain provenance; they are not
            abundance or proof of current presence.</p>
          </div>
          <div class="dl-item">
            <span class="dl-term">Protected-area designation &ne; effective protection</span>
            <p class="dl-def">A designated area is not necessarily effectively
            protected on the ground.</p>
          </div>
          <div class="dl-item">
            <span class="dl-term">Spatial association &ne; causation</span>
            <p class="dl-def">Driver attribution requires evidence, not mere
            overlap with forest loss.</p>
          </div>
          <div class="dl-item">
            <span class="dl-term">Projections are scenarios</span>
            <p class="dl-def">Model outputs are labelled as scenarios, never
            as observed facts.</p>
          </div>
        </div>
      </div>

      <!-- Limitations -->
      <div class="section">
        <div class="section-header">
          <span class="kicker">Limitations</span>
          <h2>Known limitations and gaps</h2>
          <p>
            Where no reliable data exists, the gap is shown rather than
            inventing a value.
          </p>
        </div>
        <ul>
          <li>No environmental statistics are integrated in Release 1; all
          indicator values are placeholders.</li>
          <li>Dataset boundaries may differ; each map discloses its boundary
          definition.</li>
          <li>API access, quotas and licensing are reviewed before integration.</li>
          <li>No API keys or secrets are stored in frontend code.</li>
          <li>Satellite alerts are not automatically confirmed deforestation
          events or proof of cause.</li>
        </ul>
      </div>

      <!-- Attribution -->
      <div class="section">
        <div class="section-header">
          <span class="kicker">Attribution</span>
          <h2>Attribution and licensing</h2>
          <p>
            Attribution and licensing details are confirmed per dataset before
            publication. Sources consulted include FAO FRA 2025, Global Forest
            Watch, NASA FIRMS, Copernicus, Protected Planet, GBIF and
            WorldPop (see the Environmental Data Catalog).
          </p>
        </div>
        <p class="muted small">
          This platform is a NASA Space Apps Challenge 2025 initiative by
          Team Kinshasa Green. No personal data is collected unless a
          justified feature requires it.
        </p>
      </div>

    </section>
  `;
}

export function init() {
  /* No page-specific setup required. */
}
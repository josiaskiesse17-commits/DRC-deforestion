/*
 * DRC-deforestation — Biodiversity & Conservation module
 * Product specification section D.
 *
 * Layout: protected areas > species occurrences > provenance caution. Thematic
 * two-block layout with figures, not a repeated card grid.
 */

export function render() {
  return `
    <section class="page" id="page-biodiversity" aria-label="Biodiversity & Conservation">

      <div class="section">
        <div class="section-header">
          <span class="kicker">Biodiversity &amp; Conservation</span>
          <h2>Protected areas and species records</h2>
          <p>
            Protected areas and other effective area-based conservation
            measures (OECMs), with clear distinctions. Species occurrence
            records retain provenance and are never described as abundance.
          </p>
        </div>

        <!-- Protected areas -->
        <div class="grid-2">
          <div class="feature">
            <div class="feature-icon">&#127968;</div>
            <div class="feature-body">
              <h3>Protected areas</h3>
              <p>Nationally and internationally designated protected areas
              across the Congo Basin and DRC.</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">&#128384;</div>
            <div class="feature-body">
              <h3>OECMs</h3>
              <p>Other effective area-based conservation measures, clearly
              distinguished from formal protected areas.</p>
            </div>
          </div>
        </div>

        <div class="figure">
          <div class="figure-img" aria-label="Protected area layer placeholder">
            [ Protected-area and OECM map layer &mdash; WDPA/WDPCA boundaries
            for the Congo Basin and DRC ]
          </div>
          <p class="figure-caption">
            Placeholder. Protected-area data will use a current, appropriately
            licensed source (candidate: Protected Planet / UNEP-WCMC WDPCA).
          </p>
        </div>
      </div>

      <!-- Species occurrences -->
      <div class="section">
        <div class="section-header">
          <span class="kicker">Species occurrences</span>
          <h2>Occurrence records with provenance</h2>
          <p>
            Species occurrence records from GBIF, each retaining dataset and
            record provenance. Occurrence density varies by place and species;
            sampling bias is disclosed.
          </p>
        </div>
        <div class="callout">
          <h4>How to read occurrence data</h4>
          <p>
            Occurrences are records of observations or specimens &mdash; not
            population estimates, abundance or proof of current presence. They
            are presented with context, never as evidence of how many
            individuals remain.
          </p>
        </div>
        <div class="grid-2">
          <div class="feature">
            <div class="feature-icon">&#129413;</div>
            <div class="feature-body">
              <h3>Taxon filter</h3>
              <p>Explore records by species group (mammals, birds, plants,
              amphibians, reptiles).</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">&#128197;</div>
            <div class="feature-body">
              <h3>Record provenance</h3>
              <p>Each record links to its originating dataset, licence and
              observation date.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Habitat context -->
      <div class="section">
        <div class="section-header">
          <span class="kicker">Context</span>
          <h2>Habitat and conservation context</h2>
          <p>
            Habitat context is shown only where data supports it, with known
            limitations and geographic precision disclosed.
          </p>
        </div>
        <div class="indicator-grid">
          <div class="indicator">
            <span class="label">Source</span>
            <span class="title">GBIF occurrence records</span>
            <span class="note">Per-record licences (CC0 / BY / BY-NC)</span>
          </div>
          <div class="indicator">
            <span class="label">Protected areas</span>
            <span class="title">Protected Planet / WDPCA</span>
            <span class="note">License terms under review</span>
          </div>
        </div>
      </div>

    </section>
  `;
}

export function init() {
  /* Protected-area / biodiversity layer integration happens in a later batch. */
}

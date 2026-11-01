/*
 * DRC-deforestation — Explore the Basin module
 * Product specification section B.
 *
 * Layout: map placeholder figure > basin-boundary callout > country comparison
 * > DRC-focused exploration > layer provenance. Map-centric, not a card grid.
 */

export function render() {
  return `
    <section class="page" id="page-explore" aria-label="Explore the Basin">

      <div class="section">
        <div class="section-header">
          <span class="kicker">Explore the Basin</span>
          <h2>Interactive map of the Congo Basin</h2>
          <p>
            Explore documented basin and country boundaries, compare countries,
            and drill into DRC-focused exploration. Boundaries and data sources
            are disclosed for every layer.
          </p>
        </div>

        <!-- Map placeholder -->
        <div class="figure">
          <div class="figure-img" aria-label="Congo Basin map placeholder">
            [ Interactive Congo Basin map &mdash; basin boundary, country
            outlines and DRC focus to be integrated with authoritative
            boundary data ]
          </div>
          <p class="figure-caption">
            Map placeholder. Basin and country boundaries will be drawn from
            documented, authoritative sources. Each layer carries its source,
            date, resolution and methodology.
          </p>
        </div>

        <!-- Basin boundary definition -->
        <div class="callout">
          <h4>Geographic integrity</h4>
          <p>
            &ldquo;Congo Basin&rdquo;, &ldquo;Congo River Basin&rdquo; and
            &ldquo;Congo Basin rainforest&rdquo; are not treated as
            interchangeable. This platform selects and documents a geographic
            definition for each map or analysis, and discloses where dataset
            boundaries differ.
          </p>
        </div>
      </div>

      <!-- Country comparison -->
      <div class="section">
        <div class="section-header">
          <span class="kicker">Compare countries</span>
          <h2>Congo Basin country context</h2>
          <p>
            Comparable indicators across Congo Basin countries where definitions
            and datasets permit, using harmonised metrics and comparable periods.
          </p>
        </div>
        <div class="grid-2">
          <div class="feature">
            <div class="feature-icon">&#127968;</div>
            <div class="feature-body">
              <h3>Country selection</h3>
              <p>Select individual Basin countries to view their forest
              context and indicators side by side.</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">&#128205;</div>
            <div class="feature-body">
              <h3>Comparison table</h3>
              <p>Forest extent, tree-cover loss and other indicators shown in
              a shared table with common units and periods.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- DRC-focused exploration -->
      <div class="section">
        <div class="section-header">
          <span class="kicker">DRC focus</span>
          <h2>Democratic Republic of the Congo</h2>
          <p>
            Deeper forest and environmental analysis for the DRC, at the finest
            level supported by valid data &mdash; provinces, landscapes or
            protected areas where authoritative boundaries exist.
          </p>
        </div>
        <div class="grid-2">
          <div class="feature">
            <div class="feature-icon">&#128202;</div>
            <div class="feature-body">
              <h3>Subnational layers</h3>
              <p>Province and landscape boundaries, added only where
              documented and consistent data is available.</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">&#127996;</div>
            <div class="feature-body">
              <h3>DRC indicators</h3>
              <p>Forest extent and pressure indicators specific to the DRC,
              traceable to national and international sources.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Layer provenance -->
      <div class="section">
        <div class="section-header">
          <span class="kicker">Layer transparency</span>
          <h2>Every layer, documented</h2>
          <p>
            Map layers include a legend, source organisation, observation
            period, spatial resolution and aggregation method. Download is
            offered where licensing permits.
          </p>
        </div>
        <div class="indicator-grid">
          <div class="indicator">
            <span class="label">Boundary source</span>
            <span class="title">Pending selection</span>
            <span class="note">Authoritative basin / country boundaries</span>
          </div>
          <div class="indicator">
            <span class="label">Update cadence</span>
            <span class="title">Per dataset</span>
            <span class="note">Disclosed with each layer</span>
          </div>
          <div class="indicator">
            <span class="label">Licensing</span>
            <span class="title">Verified per source</span>
            <span class="note">Download where permitted</span>
          </div>
          <div class="indicator">
            <span class="label">Resolution</span>
            <span class="title">Disclosed per layer</span>
            <span class="note">No aggregation hidden</span>
          </div>
        </div>
      </div>

    </section>
  `;
}

export function init() {
  /* Map layer integration happens in a later batch. */
}

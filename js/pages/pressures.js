/*
 * DRC-deforestation — Human & Environmental Pressures module
 * Product specification section E.
 *
 * Layout: driver blocks (agriculture, charcoal, urban expansion, mining,
 * infrastructure, population) with per-driver causation caveats. Correlation
 * &ne; causation callout up front.
 */

export function render() {
  return `
    <section class="page" id="page-pressures" aria-label="Human & Environmental Pressures">

      <div class="section">
        <div class="section-header">
          <span class="kicker">Pressures</span>
          <h2>Drivers of forest pressure</h2>
          <p>
            Agriculture, urban expansion, charcoal/woodfuel, mining,
            infrastructure and population context for the Congo Basin and DRC.
            A driver is shown as a quantified cause only when a dataset or
            study supports that attribution.
          </p>
        </div>

        <div class="callout">
          <h4>Correlation &ne; causation</h4>
          <p>
            Spatial association between a pressure and forest loss is not, by
            itself, proof of cause. Spatial overlap is distinguished from
            demonstrated causation throughout this section.
          </p>
        </div>
      </div>

      <div class="section">
        <div class="grid-3">
          <div class="feature">
            <div class="feature-icon">&#127792;</div>
            <div class="feature-body">
              <h3>Agriculture</h3>
              <p>Uncontrolled farmland expansion and forest conversion for
              crops. Driver context only &mdash; causation not asserted without
              supporting evidence.</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">&#128294;</div>
            <div class="feature-body">
              <h3>Charcoal &amp; woodfuel</h3>
              <p>Dependence on charcoal as a primary fuel, especially in
              growing cities such as Kinshasa. Driver context only.</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">&#127968;</div>
            <div class="feature-body">
              <h3>Urban expansion</h3>
              <p>City growth into forest edges, with associated infrastructure
              and land-use change. Driver context only.</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">&#128736;</div>
            <div class="feature-body">
              <h3>Mining</h3>
              <p>Mining operations and access roads opening forest areas.
              Driver context only &mdash; causation not asserted.</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">&#128663;</div>
            <div class="feature-body">
              <h3>Infrastructure</h3>
              <p>Roads, dams and energy infrastructure fragmenting forest and
              enabling further pressure. Driver context only.</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">&#128194;</div>
            <div class="feature-body">
              <h3>Population context</h3>
              <p>Gridded population estimates (candidate: WorldPop) as context,
              not as evidence that population growth caused a specific loss.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Data readiness -->
      <div class="section">
        <div class="section-header">
          <span class="kicker">Data status</span>
          <h2>Pressure data pending integration</h2>
          <p>
            Quantified pressure indicators will appear here once a verified,
            attributed dataset is integrated. Until then, each driver is
            described qualitatively with its caveats.
          </p>
        </div>
        <div class="indicator-grid">
          <div class="indicator">
            <span class="label">Agriculture</span>
            <span class="title">Qualitative context</span>
            <span class="note">Source pending &mdash; causation not asserted</span>
          </div>
          <div class="indicator">
            <span class="label">Charcoal / woodfuel</span>
            <span class="title">Qualitative context</span>
            <span class="note">Source pending &mdash; causation not asserted</span>
          </div>
          <div class="indicator">
            <span class="label">Urban expansion</span>
            <span class="title">Qualitative context</span>
            <span class="note">Source pending &mdash; causation not asserted</span>
          </div>
          <div class="indicator">
            <span class="label">Population</span>
            <span class="title">Candidate: WorldPop</span>
            <span class="note">Modelled estimates &ne; census counts</span>
          </div>
        </div>
      </div>

    </section>
  `;
}

export function init() {
  /* Pressure layer integration happens in a later batch. */
}

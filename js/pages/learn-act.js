/*
 * DRC-deforestation — Learn & Act module
 * Product specification section F.
 *
 * Layout: educational explainers > calculators > practical actions > glossary.
 * Mix of cards and feature blocks; calculators carry transparent assumptions.
 */

export function render() {
  return `
    <section class="page" id="page-learn-act" aria-label="Learn & Act">

      <div class="section">
        <div class="section-header">
          <span class="kicker">Learn &amp; Act</span>
          <h2>Understand and respond</h2>
          <p>
            Educational explainers, conservation responses, sustainable
            alternatives and practical actions for communities, institutions
            and organisations.
          </p>
        </div>

        <!-- Core topics -->
        <div class="grid-3">
          <div class="card">
            <h3>Core causes</h3>
            <p>Accessible explanations of deforestation drivers in the Congo
            Basin, with references.</p>
          </div>
          <div class="card">
            <h3>Consequences</h3>
            <p>Environmental and social consequences of forest loss, explained
            for communities and students.</p>
          </div>
          <div class="card">
            <h3>Responses</h3>
            <p>Conservation responses and sustainable alternatives including
            reforestation, renewable energy and green infrastructure.</p>
          </div>
        </div>

        <!-- Educational -->
        <div class="grid-2 mt-10">
          <div class="card">
            <h3>Glossary</h3>
            <p>Plain-language definitions of forest extent, tree-cover loss,
            degradation, OECM and other terms used on the platform.</p>
            <a href="#data-methodology" class="btn btn-sm btn-ghost">View glossary</a>
          </div>
          <div class="card">
            <h3>Classroom resources</h3>
            <p>Teaching materials and visual explanations for students and
            educators across the Basin.</p>
          </div>
        </div>
      </div>

      <!-- Calculators -->
      <div class="section">
        <div class="section-header">
          <span class="kicker">Interactive tools</span>
          <h2>Calculators with transparent assumptions</h2>
          <p>
            Educational tools such as tree-planting impact and forest-loss
            projection. Assumptions are made explicit; these are not
            predictions and no statistics are fabricated.
          </p>
        </div>
        <div class="figure">
          <div class="figure-img" aria-label="Calculator placeholder">
            [ Calculator interface placeholder &mdash; tree-planting impact
            and forest-loss projection tools with disclosed assumptions ]
          </div>
          <p class="figure-caption">
            Placeholder. Calculators will expose every assumption so users can
            see how results are derived.
          </p>
        </div>
      </div>

      <!-- Practical actions -->
      <div class="section">
        <div class="section-header">
          <span class="kicker">Take action</span>
          <h2>Practical actions</h2>
          <p>
            Actions for communities, institutions and organisations to protect
            forests and support sustainable alternatives.
          </p>
        </div>
        <div class="grid-3">
          <div class="feature">
            <div class="feature-icon">&#127794;</div>
            <div class="feature-body">
              <h3>Support reforestation</h3>
              <p>Tree planting that restores forest cover and protects
              biodiversity.</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">&#128268;</div>
            <div class="feature-body">
              <h3>Renewable energy</h3>
              <p>Alternatives to charcoal and woodfuel, reducing pressure on
              forests.</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">&#128396;</div>
            <div class="feature-body">
              <h3>Green infrastructure</h3>
              <p>Urban forests, parks and sustainable city planning.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  `;
}

export function init() {
  /* Calculator integration happens in a later batch. */
}

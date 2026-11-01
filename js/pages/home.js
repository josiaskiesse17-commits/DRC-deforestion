/*
 * DRC-deforestation — Homepage module
 * Product specification section A.
 *
 * Layout: hero > "why it matters" feature blocks > platform capabilities
 * > entry points > educational intro > data notice. No fabricated statistics.
 */

export function render() {
  return `
    <section class="page" id="page-home" aria-label="Home">

      <!-- Hero -->
      <div class="hero">
        <span class="kicker">Environmental intelligence platform</span>
        <h1>The Congo Basin, understood.</h1>
        <p class="lead">
          DRC-deforestation makes trustworthy information about deforestation,
          urban growth and forest pressure in the Congo Basin accessible,
          understandable and useful &mdash; with deeper analysis of the
          Democratic Republic of the Congo (DRC).
        </p>
        <div class="hero-actions">
          <a href="#explore" class="btn">Explore the Basin</a>
          <a href="#forest-intelligence" class="btn btn-outline">Forest Intelligence</a>
        </div>
        <div class="hero-figure">
          [ Authentic Congo Basin forest imagery to be sourced &mdash;
          placeholder reserved for visual identity ]
        </div>
      </div>

      <!-- Why the Congo Basin matters -->
      <div class="section">
        <div class="section-header">
          <span class="kicker">Why it matters</span>
          <h2>The Congo Basin at a glance</h2>
          <p>
            The Congo Basin holds the world&rsquo;s second-largest tropical
            rainforest and over half of Africa&rsquo;s remaining forest cover.
            The Democratic Republic of the Congo alone contains the largest
            share of it. Understanding how cities, charcoal production,
            agriculture and fire shape this landscape is essential for
            communities, researchers and policymakers alike.
          </p>
        </div>
        <div class="grid-3">
          <div class="feature">
            <div class="feature-icon">&#127795;</div>
            <div class="feature-body">
              <h3>Vast forest carbon store</h3>
              <p>The Congo Basin sequesters enormous quantities of carbon,
              making its protection a global climate priority.</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">&#128051;</div>
            <div class="feature-body">
              <h3>Rich biodiversity</h3>
              <p>Home to forest elephants, gorillas, okapi and thousands of
              plant species found nowhere else on Earth.</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-icon">&#127793;</div>
            <div class="feature-body">
              <h3>Rapid urban growth</h3>
              <p>Cities such as Kinshasa are among Africa&rsquo;s fastest
              growing, placing new pressure on forest edges.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Platform capabilities -->
      <div class="section">
        <div class="section-header">
          <span class="kicker">What you can explore</span>
          <h2>Capabilities of the platform</h2>
          <p>
            Each section below opens a dedicated view. Where real data is not
            yet integrated, the section explains what will be shown and from
            which verified source.
          </p>
        </div>
        <div class="grid-3">
          <div class="card">
            <h3>Explore the Basin</h3>
            <p>Interactive map with documented basin and country boundaries,
            country comparison and DRC-focused exploration.</p>
            <a href="#explore" class="btn btn-sm btn-ghost">Go to Explore</a>
          </div>
          <div class="card">
            <h3>Forest Intelligence</h3>
            <p>Forest extent, tree-cover loss, degradation indicators and
            fire observations with traceable sources.</p>
            <a href="#forest-intelligence" class="btn btn-sm btn-ghost">Go to Forest Intelligence</a>
          </div>
          <div class="card">
            <h3>Biodiversity &amp; Conservation</h3>
            <p>Protected areas, OECMs and species occurrence records with
            full provenance.</p>
            <a href="#biodiversity" class="btn btn-sm btn-ghost">Go to Biodiversity</a>
          </div>
        </div>
        <div class="grid-2 mt-8">
          <div class="card">
            <h3>Human &amp; Environmental Pressures</h3>
            <p>Agriculture, charcoal/woodfuel, urban expansion, mining,
            infrastructure and population context.</p>
            <a href="#pressures" class="btn btn-sm btn-ghost">Go to Pressures</a>
          </div>
          <div class="card">
            <h3>Learn &amp; Act</h3>
            <p>Educational explainers, conservation responses and practical
            actions for communities and institutions.</p>
            <a href="#learn-act" class="btn btn-sm btn-ghost">Go to Learn &amp; Act</a>
          </div>
        </div>
      </div>

      <!-- Educational intro -->
      <div class="section">
        <div class="section-header">
          <span class="kicker">Learn more</span>
          <h2>Understanding deforestation</h2>
          <p>
            Deforestation is not a single event. It is the result of interacting
            pressures &mdash; charcoal production, unplanned agriculture,
            mining, infrastructure and urban expansion &mdash; amplified by
            climate change. The platform explains each driver, its consequences
            and the responses available.
          </p>
        </div>
        <div class="callout">
          <h4>How to read the data here</h4>
          <p>
            Every indicator on this platform is tied to a source, a date,
            a definition and a geography. Where no reliable data is available,
            the gap is shown rather than inventing a value. Satellite alerts
            are not automatically confirmed deforestation events, and species
            occurrences are not population estimates.
          </p>
        </div>
      </div>

      <!-- Data notice -->
      <div class="data-notice">
        <strong>Release status:</strong> This release establishes the platform
        foundation. No environmental statistics are presented as observed
        facts; placeholders mark where verified data will appear once
        integrated from a documented source. See
        <a href="#data-methodology">Data &amp; Methodology</a> for the source
        register and licensing.
      </div>

    </section>
  `;
}

export function init() {
  /* No page-specific setup required. */
}

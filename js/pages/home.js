/*
 * DRC-deforestation
 * Homepage
 *
 * Introduces the platform, its geographical focus and its purpose.
 * No unverified environmental statistics are presented as facts.
 */

import {
  sectionHeading,
  callout,
  statusBadge,
} from '../components/placeholder.js';

import {
  renderImageAttribution,
} from '../data/image-attribution.js';

export function render() {
  return `
    <div class="page">

      <!-- HERO -->
      <section class="hero">
        <div class="hero-inner">
          <div class="hero-content">

            <span class="eyebrow">
              Understanding a changing landscape
            </span>

            <h1>
              The forest is more than
              <span>what we see.</span>
            </h1>

            <p class="hero-description">
              Explore the forests, biodiversity and environmental
              pressures shaping the Congo Basin, with a deeper focus
              on the Democratic Republic of the Congo.
            </p>

            <div class="btn-group">
              <a class="btn btn-light" href="#explore">
                Explore the region
              </a>

              <a class="btn btn-outline" href="#learn-act">
                Understand the challenge
              </a>
            </div>

          </div>
        </div>
      </section>


      <!-- INTRODUCTION -->
      <section class="intro-band">
        <div class="container intro-band-inner">

          <div>
            <span class="eyebrow">A living landscape</span>

            <h2>
              A connected forest,
              a shared responsibility.
            </h2>
          </div>

          <div>
            <p>
              The Congo Basin is a vast and interconnected ecological
              region. Its forests, rivers, wetlands and communities
              form a landscape whose environmental changes cannot
              be understood through a single indicator.
            </p>

            <p>
              This platform brings together environmental concepts,
              potential data sources and geographical context to help
              people understand what is changing, where it is changing
              and what the available evidence can actually tell us.
            </p>
          </div>

        </div>
      </section>


      <!-- EXPLORE THE PLATFORM -->
      <section class="section">
        <div class="container">

          ${sectionHeading({
            eyebrow: 'Explore the platform',
            title: 'Different perspectives. One connected ecosystem.',
            description:
              'Move from the geography of the Congo Basin to the forest, its biodiversity and the human activities that influence its landscapes.',
          })}

          <div class="content-grid grid-3">

            <article class="card card-hover">
              <span class="card-number">01</span>

              <span class="kicker">Geography</span>

              <h3>Explore the Basin</h3>

              <p>
                Understand the region, its countries and the
                geographical distinctions that matter when
                interpreting environmental information.
              </p>

              <a class="text-link" href="#explore">
                Explore geography
              </a>
            </article>


            <article class="card card-hover">
              <span class="card-number">02</span>

              <span class="kicker">Forest systems</span>

              <h3>Forest intelligence</h3>

              <p>
                Learn how forest area, tree-cover change,
                disturbance and forest degradation differ.
              </p>

              <a class="text-link" href="#forest-intelligence">
                Understand forest change
              </a>
            </article>


            <article class="card card-hover">
              <span class="card-number">03</span>

              <span class="kicker">Living systems</span>

              <h3>Biodiversity</h3>

              <p>
                Explore the importance of biodiversity and
                the opportunities and limitations of species
                occurrence information.
              </p>

              <a class="text-link" href="#biodiversity">
                Discover biodiversity
              </a>
            </article>


            <article class="card card-hover">
              <span class="card-number">04</span>

              <span class="kicker">Human activity</span>

              <h3>Environmental pressures</h3>

              <p>
                Examine agriculture, woodfuel, mining,
                infrastructure and urban expansion as
                potential drivers of landscape change.
              </p>

              <a class="text-link" href="#pressures">
                Explore pressures
              </a>
            </article>


            <article class="card card-hover">
              <span class="card-number">05</span>

              <span class="kicker">Knowledge</span>

              <h3>Learn &amp; act</h3>

              <p>
                Build a stronger understanding of forest
                ecosystems, environmental change and
                responsible action.
              </p>

              <a class="text-link" href="#learn-act">
                Start learning
              </a>
            </article>


            <article class="card card-hover">
              <span class="card-number">06</span>

              <span class="kicker">Evidence</span>

              <h3>Data &amp; methodology</h3>

              <p>
                Examine the sources, definitions, licenses
                and limitations behind the information
                presented on this platform.
              </p>

              <a class="text-link" href="#data-methodology">
                Examine the evidence
              </a>
            </article>

          </div>
        </div>
      </section>


      <!-- FOREST STORY -->
      <section class="section section-sm">
        <div class="container">

          <div class="story-section">

            <div class="story-visual">
              <img
                src="assets/images/nasa/kisangani-forest-2024-landsat.jpg"
                alt="Landsat satellite image showing forest change around Kisangani, Tshopo province, Democratic Republic of the Congo"
                loading="lazy"
              />
              <div class="visual-caption">
                Satellite observations reveal gradual but persistent
                forest change around Kisangani, one of the DRC&rsquo;s
                largest cities.
              </div>
            </div>
            <div class="image-attribution">
              <span>Image:</span>
              Reshaping the Forests Around Kisangani · Sep 22, 2025 &middot;
              <span>Source:</span>
              <a
                href="https://science.nasa.gov/earth/earth-observatory/reshaping-the-forests-around-kisangani-154817/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NASA Earth Observatory
              </a>
              &middot; NASA imagery is public domain. Credit: NASA Earth Observatory / Wanmei Liang, using forest change data from University of Maryland.
            </div>

            <div class="story-copy">

              <span class="eyebrow">Beyond the canopy</span>

              <h2>
                Understanding forest change
                requires more than counting trees.
              </h2>

              <p>
                Forest area, tree cover, tree-cover loss and
                deforestation describe related but different
                things. Treating them as interchangeable can
                lead to misleading conclusions.
              </p>

              <p>
                Reliable environmental analysis begins by
                understanding what an indicator measures,
                what it leaves out and how it was produced.
              </p>

              <a class="text-link" href="#forest-intelligence">
                Explore forest intelligence
              </a>

            </div>

          </div>

        </div>
      </section>


      <!-- EVIDENCE FIRST -->
      <section class="section">
        <div class="container">

          ${sectionHeading({
            eyebrow: 'Evidence before conclusions',
            title: 'Environmental information needs context.',
            description:
              'A number, map or satellite observation is only useful when its meaning, source and limitations are understood.',
          })}

          <div class="content-grid grid-3">

            <article class="card card-soft">
              <span class="card-icon" aria-hidden="true">01</span>

              <h3>Know what is measured</h3>

              <p>
                A satellite detection, a national forest estimate
                and a biodiversity observation are different
                forms of evidence.
              </p>
            </article>

            <article class="card card-soft">
              <span class="card-icon" aria-hidden="true">02</span>

              <h3>Understand where and when</h3>

              <p>
                Geographical coverage, observation periods,
                spatial resolution and reporting dates affect
                what comparisons are meaningful.
              </p>
            </article>

            <article class="card card-soft">
              <span class="card-icon" aria-hidden="true">03</span>

              <h3>Respect uncertainty</h3>

              <p>
                Environmental relationships are complex.
                Correlation, observation and causation should
                never be confused.
              </p>
            </article>

          </div>

          <div class="mt-4">
            ${callout({
              title: 'A transparent platform',
              message:
                'The environmental data visualisations are being developed in stages. A proposed dataset or future feature is not presented as an operational measurement.',
              type: 'info',
            })}
          </div>

        </div>
      </section>


      <!-- PLATFORM STATUS -->
      <section class="stat-band">
        <div class="container">

          <div class="section-heading">
            <span class="eyebrow">Our approach</span>

            <h2 class="text-white">
              Built around trustworthy evidence.
            </h2>

            <p>
              The platform prioritises clear definitions,
              transparent sourcing and responsible interpretation.
            </p>
          </div>

          <div class="stat-grid">

            <div class="stat-item">
              <span class="stat-value">01</span>
              <span class="stat-label">
                Transparent data sources
              </span>
            </div>

            <div class="stat-item">
              <span class="stat-value">02</span>
              <span class="stat-label">
                Clearly defined indicators
              </span>
            </div>

            <div class="stat-item">
              <span class="stat-value">03</span>
              <span class="stat-label">
                Explicit limitations
              </span>
            </div>

          </div>

          <p class="stat-disclaimer">
            These numbers identify platform principles,
            not environmental measurements.
          </p>

        </div>
      </section>


      <!-- FINAL CTA -->
      <section class="cta-section">
        <div class="container cta-inner">

          <div>
            <span class="eyebrow">Start exploring</span>

            <h2>
              Better understanding begins with better questions.
            </h2>

            <p>
              Discover the region, learn about its ecosystems
              and examine the evidence behind environmental change.
            </p>
          </div>

          <a class="btn btn-light" href="#explore">
            Explore the Congo Basin
          </a>

        </div>
      </section>

    </div>
  `;
}

export function init() {
  // The homepage currently contains no interactive data visualisations.
}
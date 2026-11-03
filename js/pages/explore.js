/*
 * DRC-deforestation
 * Explore the Congo Basin
 *
 * Geographical introduction and map integration placeholder.
 * No unvalidated boundaries or live geographical measurements
 * are represented as operational data.
 */

import {
  pageIntro,
  sectionHeading,
  callout,
} from '../components/placeholder.js';

export function render() {
  return `
    <div class="page">

      ${pageIntro({
        eyebrow: 'Explore the region',
        title: 'One basin. Many interconnected landscapes.',
        description:
          'Discover the geographical context of the Congo Basin and understand why the definition of a region matters when analysing environmental change.',
      })}


      <!-- MAP -->
      <section class="container">

        <div class="map-wrapper">
          <div id="explore-map" class="explore-map" aria-label="Congo Basin interactive map"></div>
          <div class="map-attribution">
            <span>Basemap:</span>
            <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">© OpenStreetMap contributors</a>
          </div>
          <div class="map-layer-controls">
            <button class="layer-toggle layer-toggle-active" data-layer="basin" aria-pressed="true">
              Congo Basin forest region
            </button>
            <button class="layer-toggle" data-layer="drc" aria-pressed="false">
              DRC national boundary
            </button>
            <button class="layer-toggle" data-layer="river" aria-pressed="false">
              Congo River Basin (drainage)
            </button>
            <button class="layer-toggle" data-layer="none" aria-pressed="false">
              None
            </button>
          </div>
        </div>

        <p class="map-disclaimer">
          The Congo Basin forest region (ecological definition) and the
          Congo River Basin (hydrological definition) are distinct
          geographical concepts. The map displays simplified boundaries
          for illustrative purposes. DRC national boundary data from
          Natural Earth. Basemap from OpenStreetMap.
        </p>

      </section>


      <!-- GEOGRAPHICAL DISTINCTIONS -->
      <section class="section">
        <div class="container">

          ${sectionHeading({
            eyebrow: 'Geographical context',
            title: 'What exactly do we mean by the Congo Basin?',
            description:
              'The term is often used broadly, but different geographical definitions describe different areas. This matters when interpreting maps, statistics and environmental studies.',
          })}

          <div class="content-grid grid-3">

            <article class="card">
              <span class="kicker">Ecological geography</span>

              <h3>Congo Basin forest region</h3>

              <p>
                Refers to the forest ecosystems of the region.
                Its boundaries depend on the forest definition
                and the dataset or classification being used.
              </p>
            </article>


            <article class="card">
              <span class="kicker">Hydrology</span>

              <h3>Congo River Basin</h3>

              <p>
                Refers to the land area that drains water
                into the Congo River and its tributaries.
                It is a hydrological concept, not simply
                a forest boundary.
              </p>
            </article>


            <article class="card">
              <span class="kicker">Regional geography</span>

              <h3>Congo Basin region</h3>

              <p>
                A broader regional expression that can refer
                to the countries and territories associated
                with the basin. Its use should be defined
                in each analysis.
              </p>
            </article>

          </div>

          <div class="mt-4">
            ${callout({
              title: 'Why this distinction matters',
              message:
                'A statistic calculated for the Congo River Basin cannot automatically be described as a statistic for the Congo Basin forest region. The geographical boundary used must accompany the result.',
              type: 'warning',
            })}
          </div>

        </div>
      </section>


      <!-- DRC FOCUS -->
      <section class="section section-sm">
        <div class="container">

          <div class="story-section">

            <div class="story-copy">

              <span class="eyebrow">A deeper regional focus</span>

              <h2>
                The Democratic Republic of the Congo.
              </h2>

              <p>
                The DRC is a central geographical focus of this
                platform. Understanding its forests requires
                attention to the country's diverse landscapes,
                communities, ecosystems and environmental pressures.
              </p>

              <p>
                National-level information should not be treated
                as if it describes every province, forest landscape
                or local community equally.
              </p>

              <a class="text-link" href="#forest-intelligence">
                Explore forest intelligence
              </a>

            </div>

            <div class="story-visual">
              <img
                src="assets/images/nasa/congo-gorilla-habitat.jpg"
                alt="Road encroaching on gorilla habitat in the Congo Basin rainforest, Democratic Republic of the Congo"
                loading="lazy"
              />
              <div class="visual-caption">
                The DRC focus: understanding environmental change
                across different landscapes and scales.
              </div>
            </div>
            <div class="image-attribution">
              <span>Image:</span>
              Building Roads in the Congo Rainforest · Nov 27, 2019 &middot;
              <span>Source:</span>
              <a
                href="https://science.nasa.gov/blogs/earth-matters/2019/11/27/building-roads-in-the-congo-rainforest/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NASA Earth Observatory
              </a>
              &middot; NASA imagery is public domain. Credit: NASA.
            </div>

          </div>

        </div>
      </section>


      <!-- REGIONAL COMPARISON -->
      <section class="section">
        <div class="container">

          ${sectionHeading({
            eyebrow: 'Regional perspective',
            title: 'Environmental patterns cross national borders.',
            description:
              'The Congo Basin is shared across several countries. Regional analysis requires consistent geographical definitions and comparable indicators.',
          })}

          <div class="table-wrap">

            <table class="data-table">
              <thead>
                <tr>
                  <th>Geographical area</th>
                  <th>Analytical perspective</th>
                  <th>Important consideration</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td><strong>Democratic Republic of the Congo</strong></td>
                  <td>National and subnational environmental analysis.</td>
                  <td>National statistics can conceal local differences.</td>
                </tr>

                <tr>
                  <td><strong>Republic of the Congo</strong></td>
                  <td>Regional forest and landscape context.</td>
                  <td>Country-level indicators require consistent definitions.</td>
                </tr>

                <tr>
                  <td><strong>Cameroon</strong></td>
                  <td>Regional ecological and land-use context.</td>
                  <td>Administrative and ecological boundaries differ.</td>
                </tr>

                <tr>
                  <td><strong>Central African Republic</strong></td>
                  <td>Forest landscape and land-use context.</td>
                  <td>Data availability may vary by indicator and year.</td>
                </tr>

                <tr>
                  <td><strong>Gabon</strong></td>
                  <td>Forest ecosystems and conservation context.</td>
                  <td>Forest cover alone does not describe forest condition.</td>
                </tr>

                <tr>
                  <td><strong>Equatorial Guinea</strong></td>
                  <td>Regional forest and biodiversity context.</td>
                  <td>National and regional scales should remain distinct.</td>
                </tr>

              </tbody>
            </table>

          </div>

          <p class="small muted mt-2">
            This is an introductory regional overview, not a
            definitive list of every country or territory included
            in every Congo Basin definition.
          </p>

        </div>
      </section>


      <!-- FUTURE LAYERS -->
      <section class="section section-sm">
        <div class="container">

          ${sectionHeading({
            eyebrow: 'Future geographical layers',
            title: 'A map should reveal relationships, not just locations.',
            description:
              'The planned geographical explorer will connect environmental indicators with the geographical context needed to interpret them.',
          })}

          <div class="content-grid grid-2">

            <article class="card">
              <span class="kicker">Layer 01</span>

              <h3>Forest landscapes</h3>

              <p>
                Forest extent and carefully defined forest-change
                indicators, with their dataset versions and
                observation periods.
              </p>
            </article>


            <article class="card">
              <span class="kicker">Layer 02</span>

              <h3>Protected areas</h3>

              <p>
                Designated protected areas, accompanied by
                source attribution and the limitations of
                designation data.
              </p>
            </article>


            <article class="card">
              <span class="kicker">Layer 03</span>

              <h3>Fire observations</h3>

              <p>
                Satellite active-fire detections, clearly
                distinguished from burned-area measurements
                and deforestation.
              </p>
            </article>


            <article class="card">
              <span class="kicker">Layer 04</span>

              <h3>Human geography</h3>

              <p>
                Population distribution and other contextual
                information, with modelled estimates clearly
                distinguished from direct observations.
              </p>
            </article>

          </div>

        </div>
      </section>


      <section class="cta-section">
        <div class="container cta-inner">

          <div>
            <span class="eyebrow">Continue exploring</span>

            <h2>
              Understand what is happening to the forests.
            </h2>

            <p>
              Move from geographical context to the indicators
              used to describe forest change.
            </p>
          </div>

          <a class="btn btn-light" href="#forest-intelligence">
            Forest intelligence
          </a>

        </div>
      </section>

    </div>
  `;
}

export function init() {
  // Interactive mapping will be introduced after geographical
  // datasets and their boundaries have been validated.
}
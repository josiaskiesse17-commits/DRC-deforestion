/*
 * DRC-deforestation
 * Forest intelligence
 *
 * Introduces the concepts and indicators needed to interpret
 * forest information responsibly.
 */

import {
  pageIntro,
  sectionHeading,
  callout,
  featurePlaceholder,
} from '../components/placeholder.js';

import {
  renderImageAttribution,
} from '../data/image-attribution.js';

export function render() {
  return `
    <div class="page">

      ${pageIntro({
        eyebrow: 'Forest intelligence',
        title: 'Understanding what happens to a forest.',
        description:
          'Forest change is not a single measurement. Explore the different indicators used to describe forest extent, tree-cover change, disturbance and degradation.',
      })}


      <!-- CENTRAL DISTINCTION -->
      <section class="container">

        ${callout({
          title: 'An essential distinction',
          message:
            'Tree-cover loss and deforestation are not interchangeable. Tree-cover loss describes the removal or death of tree cover detected by a particular dataset. Deforestation generally refers to the conversion of forest to another land use or a long-term change in forest status.',
          type: 'warning',
        })}

      </section>


      <!-- INDICATORS -->
      <section class="section">
        <div class="container">

          ${sectionHeading({
            eyebrow: 'The indicators',
            title: 'Different measurements answer different questions.',
            description:
              'Before interpreting an environmental indicator, understand the phenomenon it actually measures.',
          })}

          <div class="content-grid grid-2">

            <article class="card">
              <span class="kicker">Indicator 01</span>

              <h3>Forest area</h3>

              <p>
                The area classified as forest according to
                a specified definition and reporting method.
              </p>

              <p class="small muted">
                Useful for understanding the extent of forest
                resources at a defined geographical and temporal scale.
              </p>
            </article>


            <article class="card">
              <span class="kicker">Indicator 02</span>

              <h3>Tree cover</h3>

              <p>
                The proportion of land covered by the vertical
                projection of tree crowns, often measured using
                a specified canopy threshold.
              </p>

              <p class="small muted">
                A tree-cover threshold does not automatically
                correspond to a formal forest definition.
              </p>
            </article>


            <article class="card">
              <span class="kicker">Indicator 03</span>

              <h3>Tree-cover loss</h3>

              <p>
                A satellite-derived observation of the removal
                or death of tree cover within the methodology
                and definitions of a particular dataset.
              </p>

              <p class="small muted">
                Causes can include permanent conversion,
                temporary disturbance, harvesting, fire
                and other events.
              </p>
            </article>


            <article class="card">
              <span class="kicker">Indicator 04</span>

              <h3>Deforestation</h3>

              <p>
                The conversion of forest to another land use
                or the long-term loss of forest status under
                the applicable definition.
              </p>

              <p class="small muted">
                Determining deforestation requires more
                context than observing a change in tree cover.
              </p>
            </article>


            <article class="card">
              <span class="kicker">Indicator 05</span>

              <h3>Forest degradation</h3>

              <p>
                A reduction in forest condition or ecological
                quality that does not necessarily result in
                complete forest removal.
              </p>

              <p class="small muted">
                Degradation can be difficult to detect and
                requires indicators suited to the phenomenon.
              </p>
            </article>


            <article class="card">
              <span class="kicker">Indicator 06</span>

              <h3>Forest restoration</h3>

              <p>
                Actions and processes intended to recover
                ecological functions, forest structure
                or other desired forest characteristics.
              </p>

              <p class="small muted">
                Tree planting alone does not prove that
                a degraded ecosystem has been restored.
              </p>
            </article>

          </div>

        </div>
      </section>


      <!-- HOW TO READ FOREST DATA -->
      <section class="section section-sm">
        <div class="container">

          ${sectionHeading({
            eyebrow: 'Reading the evidence',
            title: 'What should accompany a forest indicator?',
            description:
              'A responsible forest analysis should provide enough information for another person to understand and assess the result.',
          })}

          <div class="content-grid grid-3">

            <article class="card card-soft">
              <span class="card-number">01</span>

              <h3>Definition</h3>

              <p>
                What does the dataset call forest, loss,
                disturbance or change?
              </p>
            </article>


            <article class="card card-soft">
              <span class="card-number">02</span>

              <h3>Spatial resolution</h3>

              <p>
                What geographical detail can the observation
                reliably represent?
              </p>
            </article>


            <article class="card card-soft">
              <span class="card-number">03</span>

              <h3>Observation period</h3>

              <p>
                Which years or dates are covered, and when
                was the dataset last updated?
              </p>
            </article>


            <article class="card card-soft">
              <span class="card-number">04</span>

              <h3>Methodology</h3>

              <p>
                How were observations collected, classified
                and processed?
              </p>
            </article>


            <article class="card card-soft">
              <span class="card-number">05</span>

              <h3>Uncertainty</h3>

              <p>
                What errors, omissions or classification
                limitations may affect the result?
              </p>
            </article>


            <article class="card card-soft">
              <span class="card-number">06</span>

              <h3>Geographical scope</h3>

              <p>
                Does the result describe a country, a forest
                region, a river basin or a particular site?
              </p>
            </article>

          </div>

        </div>
      </section>


      <!-- DATA SOURCES -->
      <section class="section">
        <div class="container">

          ${sectionHeading({
            eyebrow: 'Potential data sources',
            title: 'From environmental observations to analysis.',
            description:
              'Several established resources could support future forest monitoring. Their presence here does not mean their data has already been integrated.',
          })}

          <div class="content-grid grid-2">

            <article class="card">
              <span class="badge badge-candidate">Candidate source</span>

              <h3 class="mt-2">FAO Forest Resources Assessment</h3>

              <p>
                Country-reported information about forest
                resources, including forest area and changes
                over reporting periods.
              </p>

              <a
                class="text-link"
                href="https://www.fao.org/forest-resources-assessment/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit FAO
              </a>
            </article>


            <article class="card">
              <span class="badge badge-candidate">Candidate source</span>

              <h3>Global Forest Watch</h3>

              <p>
                A platform providing access to forest-related
                information and datasets, including satellite-derived
                tree-cover change products.
              </p>

              <a
                class="text-link"
                href="https://www.globalforestwatch.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Global Forest Watch
              </a>
            </article>

          </div>

        </div>
      </section>


      <!-- BEFORE/AFTER COMPARISON -->
      <section class="section section-sm">
        <div class="container">

          ${sectionHeading({
            eyebrow: 'Satellite observations',
            title: 'Forest change around Virunga National Park.',
            description:
              'Landsat satellite imagery shows forest loss near the eastern border of the Democratic Republic of the Congo, around Virunga National Park and the city of Beni. These are genuine before-and-after observations from 1999 and 2008.',
          })}

          <div class="before-after-slider">
            <div class="before-image">
              <img
                src="assets/images/nasa/drc-deforestation-1999-landsat.jpg"
                alt="Landsat 5 satellite image of the Virunga National Park region near Beni, DRC, February 13, 1999"
                loading="lazy"
              />
            </div>
            <img
              src="assets/images/nasa/drc-deforestation-2008-landsat.jpg"
              alt="Landsat 5 satellite image of the Virunga National Park region near Beni, DRC, September 1, 2008"
              loading="lazy"
            />
            <div class="slider-handle" aria-label="Compare before and after" role="separator"></div>
            <div class="slider-label label-before">Before — Feb 13, 1999</div>
            <div class="slider-label label-after">After — Sep 1, 2008</div>
            <div class="slider-hint">Slide to compare</div>
            <div class="slider-caption">
              Forest loss around Virunga National Park, DRC. The rate of forest loss shown in
              these two images is the highest among all national parks in the country.
              Landsat 5 images by NASA Earth Observatory / Jesse Allen and Robert Simmon,
              using Landsat data from USGS.
            </div>
          </div>

          <div class="image-attribution" style="margin-top:16px;">
            <span>Images:</span>
            Deforestation in the Democratic Republic of the Congo · Sep 26, 2012 &middot;
            <span>Source:</span>
            <a
              href="https://science.nasa.gov/earth/earth-observatory/deforestation-in-the-democratic-republic-of-the-congo-79276/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NASA Earth Observatory
            </a>
            &middot; NASA imagery is public domain. Credit: NASA Earth Observatory / Jesse Allen and Robert Simmon, using Landsat data from the USGS Global Visualization Viewer and park boundary data from Protected Planet.
          </div>

        </div>
      </section>


      <!-- CHART PLACEHOLDER -->
      <section class="section section-sm">
        <div class="container">

          ${sectionHeading({
            eyebrow: 'Forest monitoring',
            title: 'Following forest change over time.',
            description:
              'A time-series view can help reveal patterns, but only when observations are comparable and their definitions remain clear.',
          })}

          ${featurePlaceholder({
            title: 'Forest change time series',
            description:
              'A validated time-series visualisation will be added after selecting and integrating a suitable dataset. No forest-loss values are fabricated or displayed here.',
            status: 'planned',
          })}

        </div>
      </section>


      <!-- INTERPRETATION -->
      <section class="section">
        <div class="container">

          <div class="story-section">

            <div class="story-copy">

              <span class="eyebrow">Responsible interpretation</span>

              <h2>
                A change detected from space is the beginning
                of an investigation.
              </h2>

              <p>
                Satellite observations can identify patterns
                and changes across large areas. They do not
                automatically reveal why a change occurred,
                whether it is permanent or what its consequences
                are for nearby communities.
              </p>

              <p>
                Interpretation requires additional evidence,
                local context and a clear understanding of
                the dataset's methodology.
              </p>

              <a class="text-link" href="#pressures">
                Explore human and environmental pressures
              </a>

            </div>

            <div class="story-visual">
              <img
                src="assets/images/nasa/kisangani-forest-2024-landsat.jpg"
                alt="Landsat satellite image showing forest change around Kisangani, Tshopo province, Democratic Republic of the Congo"
                loading="lazy"
              />
              <div class="visual-caption">
                Satellite observations can identify patterns and changes
                across large areas.
              </div>
            </div>
            <div class="image-attribution" style="margin-top:12px;">
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

          </div>

        </div>
      </section>


      <section class="cta-section">
        <div class="container cta-inner">

          <div>
            <span class="eyebrow">Explore the wider ecosystem</span>

            <h2>
              Forests are also habitats for extraordinary biodiversity.
            </h2>

            <p>
              Discover why understanding forest ecosystems
              also means understanding the life within them.
            </p>
          </div>

          <a class="btn btn-light" href="#biodiversity">
            Explore biodiversity
          </a>

        </div>
      </section>

    </div>
  `;
}

export function init() {
  initBeforeAfterSlider();
}

/**
 * Initialise the before/after image comparison slider.
 *
 * Supports mouse drag, touch drag, and click interactions.
 * Keyboard accessible via arrow keys on the handle.
 */
function initBeforeAfterSlider() {
  const slider = document.querySelector('.before-after-slider');

  if (!slider) return;

  const handle = slider.querySelector('.slider-handle');
  const beforeImage = slider.querySelector('.before-image');
  const afterImage = slider.querySelector('img:not(.before-image img)');

  if (!handle || !beforeImage || !afterImage) return;

  let isDragging = false;

  function updatePosition(clientX) {
    const rect = slider.getBoundingClientRect();
    let offset = clientX - rect.left;
    let percentage = (offset / rect.width) * 100;

    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;

    beforeImage.style.width = percentage + '%';
    handle.style.left = percentage + '%';
    afterImage.style.clipPath = `polygon(${percentage}% 0, 100% 0, 100% 100%, ${percentage}% 100%)`;
    afterImage.style.webkitClipPath = `polygon(${percentage}% 0, 100% 0, 100% 100%, ${percentage}% 100%)`;
  }

  function startDrag(event) {
    isDragging = true;
    handle.classList.add('dragging');
    slider.classList.add('dragging');
  }

  function endDrag() {
    isDragging = false;
    handle.classList.remove('dragging');
    slider.classList.remove('dragging');
  }

  function drag(event) {
    if (!isDragging) return;
    event.preventDefault();

    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    updatePosition(clientX);
  }

  // Mouse events
  handle.addEventListener('mousedown', startDrag);
  window.addEventListener('mousemove', drag);
  window.addEventListener('mouseup', endDrag);

  // Touch events
  handle.addEventListener('touchstart', startDrag, { passive: false });
  window.addEventListener('touchmove', drag, { passive: false });
  window.addEventListener('touchend', endDrag);

  // Click on slider to jump
  slider.addEventListener('click', (event) => {
    if (event.target === handle || event.target.closest('.slider-handle')) return;
    const clientX = event.clientX;
    updatePosition(clientX);
  });

  // Keyboard accessibility
  handle.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      const rect = slider.getBoundingClientRect();
      const currentLeft = handle.offsetLeft;
      const step = rect.width * 0.02;
      let newLeft = currentLeft - step;
      if (newLeft < 0) newLeft = 0;
      if (newLeft > rect.width) newLeft = rect.width;
      const percentage = (newLeft / rect.width) * 100;
      updatePosition(handle.getBoundingClientRect().left + (newLeft - currentLeft));
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      const rect = slider.getBoundingClientRect();
      const currentLeft = handle.offsetLeft;
      const step = rect.width * 0.02;
      let newLeft = currentLeft + step;
      if (newLeft < 0) newLeft = 0;
      if (newLeft > rect.width) newLeft = rect.width;
      const percentage = (newLeft / rect.width) * 100;
      updatePosition(handle.getBoundingClientRect().left + (newLeft - currentLeft));
    }
  });

  handle.setAttribute('tabindex', '0');
  handle.setAttribute('role', 'separator');
  handle.setAttribute('aria-label', 'Before/after comparison slider. Use left and right arrow keys to adjust.');

  // Initial position: 50%
  updatePosition(slider.getBoundingClientRect().left + slider.offsetWidth / 2);
}
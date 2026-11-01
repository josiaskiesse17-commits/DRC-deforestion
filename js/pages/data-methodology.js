import {
  pageIntro,
  sectionHeading,
  statusBadge,
  callout,
} from "../components/placeholder.js";

import {
  DATA_SOURCES,
  getSourceStatusSummary,
} from "../data/placeholders.js";

const STATUS_DESCRIPTIONS = {
  available: "Available for use in the current implementation.",
  candidate: "Potential source; integration and validation are still required.",
  limited: "Potentially useful, but important limitations or conditions apply.",
  planned: "Identified for a future implementation stage.",
  deferred: "Not currently selected for integration.",
};

const DEFINITIONS = [
  {
    term: "Forest area",
    explanation:
      "An area classified as forest according to a particular definition. National reporting systems and remote-sensing products may use different criteria.",
  },
  {
    term: "Tree cover",
    explanation:
      "A satellite-derived or otherwise measured description of tree canopy cover. A tree-cover threshold does not necessarily match the definition of forest used in national statistics.",
  },
  {
    term: "Tree-cover loss",
    explanation:
      "A detected reduction or removal of tree cover during a defined period. It can include disturbances that do not necessarily represent permanent conversion to another land use.",
  },
  {
    term: "Deforestation",
    explanation:
      "The conversion of forest to another land use under a specified definition. It should not be used as a synonym for every detected instance of tree-cover loss.",
  },
  {
    term: "Forest degradation",
    explanation:
      "A deterioration in forest condition or ecological quality. Degradation can occur while an area remains classified as forest and may not be captured adequately by simple tree-cover-loss measurements.",
  },
  {
    term: "Fire detection",
    explanation:
      "A satellite observation indicating a possible active fire at a particular location and observation time. A fire detection is not a measurement of burned area or proof of deforestation.",
  },
  {
    term: "Species occurrence",
    explanation:
      "A recorded observation or documented presence of a species. Occurrence records do not directly measure population size or establish a complete distribution.",
  },
  {
    term: "Population estimate",
    explanation:
      "A modelled or calculated estimate of population distribution. Gridded population products should not be described as direct census counts unless the source specifically supports that interpretation.",
  },
];

const INTERPRETATION_RULES = [
  {
    title: "Define the geography",
    description:
      "The Congo Basin, the Congo River Basin, and the Congo Basin forest region are related but distinct geographic concepts. A result must state which boundary or geographic definition it uses.",
  },
  {
    title: "Preserve the time period",
    description:
      "A value for one year cannot automatically be compared with a value from another period. Changes in methodology, sensor coverage, or definitions can affect comparisons.",
  },
  {
    title: "Respect spatial resolution",
    description:
      "A regional dataset may be useful for broad patterns but unsuitable for claims about a particular community, property, or small site.",
  },
  {
    title: "Separate observation from explanation",
    description:
      "A dataset can show where a change was detected without explaining the activity or process responsible for it.",
  },
  {
    title: "Report uncertainty",
    description:
      "Cloud cover, classification errors, model assumptions, incomplete records, and other limitations can affect environmental measurements.",
  },
  {
    title: "Check licensing and attribution",
    description:
      "The terms of use must be checked for each dataset and, where relevant, each individual record. Public availability does not automatically mean unrestricted reuse.",
  },
];

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normaliseStatus(status) {
  const allowed = [
    "available",
    "candidate",
    "limited",
    "planned",
    "deferred",
  ];

  return allowed.includes(status) ? status : "planned";
}

function renderSource(source) {
  const name = escapeHTML(source.name ?? source.title ?? "Unnamed source");
  const description = escapeHTML(
    source.description ?? "No description has been provided."
  );
  const status = normaliseStatus(source.status);
  const category = escapeHTML(source.category ?? "Dataset");
  const license = escapeHTML(
    source.license ?? source.licence ?? "Verify the applicable licence."
  );
  const limitations = escapeHTML(
    source.limitations ??
      source.notes ??
      "Review the source documentation before using this dataset."
  );
  const url = source.url;

  const sourceLink =
    typeof url === "string" &&
    /^https?:\/\//i.test(url)
      ? `<a class="text-link source-link"
           href="${escapeHTML(url)}"
           target="_blank"
           rel="noopener noreferrer">
           Visit source documentation
         </a>`
      : "";

  return `
    <article class="method-source-card">
      <div class="method-source-meta">
        <span class="source-category">${category}</span>
        ${statusBadge(status)}
      </div>

      <h3>${name}</h3>
      <p>${description}</p>

      <div class="source-detail">
        <strong>Licence and reuse</strong>
        <p>${license}</p>
      </div>

      <div class="source-detail">
        <strong>Limitations and considerations</strong>
        <p>${limitations}</p>
      </div>

      <div class="source-card-footer">
        ${sourceLink}
      </div>
    </article>
  `;
}

function renderDefinition(item) {
  return `
    <article class="definition-card">
      <h3>${item.term}</h3>
      <p>${item.explanation}</p>
    </article>
  `;
}

function renderInterpretationRule(item, index) {
  return `
    <article class="interpretation-rule">
      <span class="rule-number">${String(index + 1).padStart(2, "0")}</span>
      <div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </article>
  `;
}

function renderStatusSummary() {
  const summary = getSourceStatusSummary();

  if (!summary || typeof summary !== "object") {
    return "";
  }

  const entries = Object.entries(summary).filter(
    ([, count]) => Number.isFinite(Number(count)) && Number(count) > 0
  );

  if (entries.length === 0) {
    return "";
  }

  return `
    <div class="source-status-summary">
      ${entries
        .map(
          ([status, count]) => `
            <div class="status-summary-item">
              ${statusBadge(normaliseStatus(status))}
              <strong>${Number(count)}</strong>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

export function render() {
  const sources = Array.isArray(DATA_SOURCES) ? DATA_SOURCES : [];

  return `
    ${pageIntro({
      eyebrow: "Data, sources & methodology",
      title: "Evidence you can examine. Limitations you can understand.",
      description:
        "Environmental intelligence is only as useful as the evidence behind it. This section explains the datasets considered for the platform, the definitions used to interpret them, and the limitations that must be respected.",
    })}

    <section class="section">
      <div class="container">
        <div class="methodology-notice">
          <span class="eyebrow">Current implementation status</span>
          <h2>This is a source register, not a live environmental database.</h2>
          <p>
            The sources listed below are candidates or references for future
            integration. They are not currently connected to a validated
            measurement pipeline on this website.
          </p>
          <p>
            No live forest-loss measurements, population totals, biodiversity
            counts, or environmental risk scores are being presented here.
          </p>
          ${statusBadge("candidate")}
        </div>

        ${renderStatusSummary()}
      </div>
    </section>

    <section class="section section-soft">
      <div class="container">
        ${sectionHeading({
          eyebrow: "Source register",
          title: "Where environmental evidence may come from",
          description:
            "Each source must be checked for its geographic coverage, observation period, methodology, licence, and limitations before integration.",
        })}

        ${
          sources.length
            ? `<div class="method-source-grid">
                ${sources.map(renderSource).join("")}
              </div>`
            : `<p class="muted">No data sources are currently registered.</p>`
        }

        <div class="status-legend">
          <h3>Understanding source status</h3>
          <div class="status-legend-grid">
            ${Object.entries(STATUS_DESCRIPTIONS)
              .map(
                ([status, description]) => `
                  <div class="status-legend-item">
                    ${statusBadge(status)}
                    <p>${description}</p>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeading({
          eyebrow: "Definitions",
          title: "Similar terms can describe different measurements",
          description:
            "These distinctions are essential when combining satellite observations, national statistics, and ecological records.",
        })}

        <div class="definition-grid">
          ${DEFINITIONS.map(renderDefinition).join("")}
        </div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container">
        ${sectionHeading({
          eyebrow: "Methodological principles",
          title: "How evidence should be interpreted",
          description:
            "Before a dataset is used to support a claim, the following questions should be addressed.",
        })}

        <div class="interpretation-list">
          ${INTERPRETATION_RULES.map(renderInterpretationRule).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        ${sectionHeading({
          eyebrow: "Source-specific considerations",
          title: "Important limitations to remember",
          description:
            "Different data types answer different questions. Combining them requires careful interpretation.",
        })}

        <div class="limitation-grid">
          <article class="limitation-card">
            <h3>Satellite tree-cover products</h3>
            <p>
              Tree-cover loss is not automatically equivalent to permanent
              deforestation. Thresholds, forest definitions, observation
              periods, and classification methods matter.
            </p>
          </article>

          <article class="limitation-card">
            <h3>Active fire observations</h3>
            <p>
              FIRMS fire detections indicate satellite-observed active fire
              locations. They are not burned-area measurements and do not
              establish that deforestation occurred.
            </p>
          </article>

          <article class="limitation-card">
            <h3>Protected-area boundaries</h3>
            <p>
              A protected-area designation does not demonstrate effective
              protection, enforcement, ecological condition, or the absence
              of human pressure.
            </p>
          </article>

          <article class="limitation-card">
            <h3>Biodiversity records</h3>
            <p>
              GBIF occurrence records document observations and records.
              They do not provide a complete inventory or direct population
              estimates for every species and location.
            </p>
          </article>

          <article class="limitation-card">
            <h3>Population grids</h3>
            <p>
              WorldPop products are modelled population estimates. Their
              resolution and modelling assumptions must be considered, and
              they should not be represented as direct census counts.
            </p>
          </article>

          <article class="limitation-card">
            <h3>Forest degradation</h3>
            <p>
              Degradation can be difficult to identify using simple
              tree-cover measurements. A validated dataset and methodology
              are required before this platform can quantify it.
            </p>
          </article>
        </div>

        ${callout({
          type: "warning",
          title: "Licensing is part of data quality",
          message:
            "A dataset being publicly accessible does not automatically permit redistribution, modification, or commercial reuse. The exact product, version, and applicable licence must be verified before integration.",
        })}
      </div>
    </section>

    <section class="section section-dark">
      <div class="container closing-message">
        <span class="eyebrow">Transparency commitment</span>
        <h2>Every environmental claim should have a traceable basis.</h2>
        <p>
          The platform aims to make its sources, definitions, methods,
          uncertainty, and limitations understandable rather than hide them
          behind visualisations or simplified scores.
        </p>
        <a class="btn btn-light" href="#explore">Return to exploration</a>
      </div>
    </section>

    <section class="section">
      <div class="container attribution-note">
        <h2>Project attribution</h2>
        <p>
          This project originated in the context of NASA Space Apps Challenge
          participation. It is an independent project and is not an official
          NASA product, service, or position. References to NASA datasets do
          not imply NASA endorsement.
        </p>
      </div>
    </section>
  `;
}

export function init() {
  // Source register and methodology content are currently static.
}
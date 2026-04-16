(function () {
  const data = window.DiveDownData;
  if (!data) {
    return;
  }

  const heroStats = document.getElementById("hero-stats");
  const quickLinks = document.getElementById("quick-links");
  const gallery = document.getElementById("gallery");
  const mutations = document.getElementById("mutations");
  const zoneNav = document.getElementById("zone-nav");
  const zonesContainer = document.getElementById("zones-container");
  const tipsGrid = document.getElementById("tips-grid");
  const faqList = document.getElementById("faq-list");
  const searchInput = document.getElementById("fish-search");
  const searchResults = document.getElementById("search-results");

  const groupedZones = data.getGroupedZones();
  const zoneNames = Object.keys(groupedZones);

  heroStats.innerHTML = [
    { label: "Fish", value: data.fishDatabase.length },
    { label: "Zones", value: zoneNames.length },
    { label: "Rebirths", value: data.rebirthData.length },
  ]
    .map(
      (item) => `
        <div class="stat-card">
          <span class="stat-value">${item.value}</span>
          <span class="stat-label">${item.label}</span>
        </div>
      `,
    )
    .join("");

  quickLinks.innerHTML = data.quickLinks
    .map((item) => {
      const href = item.page === "rebirth" ? "./rebirth.html" : `#${item.target}`;
      return `
        <a class="card" href="${href}">
          <h3>${item.label}</h3>
          <p>${item.description}</p>
        </a>
      `;
    })
    .join("");

  gallery.innerHTML = data.galleryImages
    .map(
      (image) => `
        <figure>
          <img src="${image.src}" alt="${image.alt}" />
          <figcaption>${image.alt}</figcaption>
        </figure>
      `,
    )
    .join("");

  mutations.innerHTML = data.mutationGroups
    .map(
      (group) => `
        <article class="card">
          <h3>${group.title}</h3>
          <ul>
            ${group.items
              .map((item) => `<li><strong>${item.name}</strong>: ${item.val}</li>`)
              .join("")}
          </ul>
        </article>
      `,
    )
    .join("");

  zoneNav.innerHTML = zoneNames
    .map((zone) => `<a class="pill" href="#${data.slugify(zone)}">${zone}</a>`)
    .join("");

  zonesContainer.innerHTML = zoneNames
    .map((zone) => {
      const fishList = groupedZones[zone];
      return `
        <section class="zone-card" id="${data.slugify(zone)}">
          <div class="zone-card-head">
            <h3>${zone}</h3>
            <p>${fishList.length} fish listed</p>
          </div>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Fish Name</th>
                  <th>Rarity</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                ${fishList
                  .map(
                    (entry) => `
                      <tr id="${data.getFishEntryId(entry)}">
                        <td>
                          <div class="fish-cell">
                            <img class="fish-icon" src="${entry.icon}" alt="${entry.fish}" />
                            <span>${entry.fish}</span>
                          </div>
                        </td>
                        <td>
                          <span class="rarity-badge rarity-${data.slugify(entry.rarity)}">${entry.rarity}</span>
                        </td>
                        <td>${entry.note}</td>
                      </tr>
                    `,
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </section>
      `;
    })
    .join("");

  tipsGrid.innerHTML = data.tips
    .map(
      (tip) => `
        <article class="card">
          <h3>${tip.title}</h3>
          <p>${tip.text}</p>
        </article>
      `,
    )
    .join("");

  faqList.innerHTML = data.faqItems
    .map(
      (item) => `
        <article class="faq-item">
          <button class="faq-button" type="button">
            <strong>${item.q}</strong>
            <span>+</span>
          </button>
          <div class="faq-answer">
            <p>${item.a}</p>
          </div>
        </article>
      `,
    )
    .join("");

  faqList.querySelectorAll(".faq-item").forEach((item) => {
    const button = item.querySelector(".faq-button");
    button.addEventListener("click", () => {
      item.classList.toggle("open");
      button.querySelector("span").textContent = item.classList.contains("open") ? "-" : "+";
    });
  });

  function highlightRow(row) {
    if (!row) {
      return;
    }
    row.classList.remove("row-highlight");
    void row.offsetWidth;
    row.classList.add("row-highlight");
  }

  function focusHashTarget() {
    if (!window.location.hash) {
      return;
    }
    const target = document.getElementById(window.location.hash.slice(1));
    if (!target) {
      return;
    }
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    if (target.tagName === "TR") {
      highlightRow(target);
    }
  }

  function renderSearchResults(value) {
    const query = value.trim().toLowerCase();
    if (!query) {
      searchResults.innerHTML = "";
      searchResults.classList.remove("active");
      return;
    }

    const matches = data.fishDatabase
      .filter((entry) => entry.fish.toLowerCase().includes(query) || entry.zone.toLowerCase().includes(query))
      .slice(0, 12);

    if (matches.length === 0) {
      searchResults.innerHTML = `
        <div class="search-item">
          <div class="search-meta">
            <span class="search-title">No fish matched that search.</span>
          </div>
        </div>
      `;
      searchResults.classList.add("active");
      return;
    }

    searchResults.innerHTML = matches
      .map(
        (entry) => `
          <button class="search-item" type="button" data-target="${data.getFishEntryId(entry)}">
            <img class="fish-icon" src="${entry.icon}" alt="${entry.fish}" />
            <div class="search-meta">
              <span class="search-title">${entry.fish}</span>
              <span class="search-subtitle">${entry.zone}</span>
            </div>
            <span class="rarity-badge rarity-${data.slugify(entry.rarity)}">${entry.rarity}</span>
          </button>
        `,
      )
      .join("");
    searchResults.classList.add("active");

    searchResults.querySelectorAll(".search-item[data-target]").forEach((button) => {
      button.addEventListener("click", () => {
        const row = document.getElementById(button.dataset.target);
        if (!row) {
          return;
        }
        row.scrollIntoView({ behavior: "smooth", block: "center" });
        highlightRow(row);
        searchInput.value = "";
        searchResults.innerHTML = "";
        searchResults.classList.remove("active");
        window.location.hash = button.dataset.target;
      });
    });
  }

  searchInput.addEventListener("input", (event) => {
    renderSearchResults(event.target.value);
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".hero-search")) {
      searchResults.classList.remove("active");
    }
  });

  window.addEventListener("hashchange", focusHashTarget);
  window.setTimeout(focusHashTarget, 100);
})();

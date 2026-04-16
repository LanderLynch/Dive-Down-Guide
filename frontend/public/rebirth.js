(function () {
  const data = window.DiveDownData;
  if (!data) {
    return;
  }

  const tipsContainer = document.getElementById("rebirth-tips");
  const rebirthGrid = document.getElementById("rebirth-grid");
  const totalsGrid = document.getElementById("totals-grid");

  tipsContainer.innerHTML = data.rebirthTips
    .map(
      (tip) => `
        <article class="card">
          <h3>${tip.title}</h3>
          <p>${tip.text}</p>
        </article>
      `,
    )
    .join("");

  rebirthGrid.innerHTML = data.rebirthData
    .map((rebirth) => {
      const fishItems = rebirth.fish
        .map((fishName) => {
          const fish = data.findFish(fishName);
          if (!fish) {
            return `
              <li class="fish-item">
                <span class="fish-name">${fishName}</span>
              </li>
            `;
          }

          return `
            <li class="fish-item">
              <a class="fish-link fish-name" href="./index.html#${data.getFishEntryId(fish)}">${fishName}</a>
              <div class="fish-meta">${fish.zone} · ${fish.rarity}</div>
            </li>
          `;
        })
        .join("");

      const rewardItems = rebirth.rewards.map((reward) => `<li>${reward}</li>`).join("");

      return `
        <article class="rebirth-card">
          <span class="rebirth-badge">${rebirth.badge}</span>
          <h3>${rebirth.tier}</h3>
          <p class="rebirth-price">${rebirth.money}</p>
          <span class="label">Required Fish</span>
          <ul class="fish-list">${fishItems}</ul>
          <span class="label">Rewards</span>
          <ul class="reward-list">${rewardItems}</ul>
        </article>
      `;
    })
    .join("");

  totalsGrid.innerHTML = data.rebirthTotals
    .map(
      (total) => `
        <article class="total-card">
          <h3>${total.label}</h3>
          <p>${total.value}</p>
        </article>
      `,
    )
    .join("");
})();

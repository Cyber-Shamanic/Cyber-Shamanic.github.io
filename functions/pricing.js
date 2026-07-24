const { categories, money } = window.CS_DATA;

const target = document.querySelector("[data-pricing]");

if (target) {
  target.innerHTML = categories.map((category, index) => `
    <section class="pricing-group" data-reveal>
      <header>
        <span>${String(index + 1).padStart(2, "0")}</span>
        <div><small>${category.english}</small><h2>${category.name}</h2></div>
      </header>
      <div class="price-table">
        ${category.services.map(([, name, description, price, unit]) => `
          <article>
            <div><strong>${name}</strong><p>${description}</p></div>
            <div class="table-price"><strong>${money(price)}</strong><span>${unit}</span></div>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");
}

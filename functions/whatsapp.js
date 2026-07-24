const { allServices, categories, money } = window.CS_DATA;

const form = document.querySelector("[data-service-form]");
const categoriesTarget = document.querySelector("[data-service-categories]");
const countTarget = document.querySelector("[data-selected-count]");
const totalTarget = document.querySelector("[data-selected-total]");
const warning = document.querySelector("[data-form-warning]");

if (form && categoriesTarget) {
  categoriesTarget.innerHTML = categories.map((category) => `
    <fieldset class="service-category">
      <legend><span>${category.icon}</span><strong>${category.name}<small>${category.english}</small></strong></legend>
      <div class="choice-grid">
        ${category.services.map(([id, name, description, price, unit]) => `
          <label class="service-choice">
            <input type="checkbox" name="services" value="${id}">
            <span class="check" aria-hidden="true"></span>
            <span class="choice-copy"><strong>${name}</strong><small>${description}</small></span>
            <span class="choice-price">${money(price)}<small>${unit}</small></span>
          </label>
        `).join("")}
      </div>
    </fieldset>
  `).join("");

  const update = () => {
    const selectedIds = [...form.querySelectorAll('input[name="services"]:checked')].map((item) => item.value);
    const selected = allServices.filter((service) => selectedIds.includes(service.id));
    const total = selected.reduce((sum, service) => sum + service.price, 0);
    if (countTarget) countTarget.textContent = String(selected.length);
    if (totalTarget) totalTarget.textContent = money(total);
    form.querySelectorAll(".service-choice").forEach((label) => {
      const input = label.querySelector("input");
      label.classList.toggle("selected", Boolean(input?.checked));
      const check = label.querySelector(".check");
      if (check) check.textContent = input?.checked ? "✓" : "";
    });
  };

  form.addEventListener("change", update);
  update();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const selectedIds = data.getAll("services");
    const selected = allServices.filter((service) => selectedIds.includes(service.id));
    if (!selected.length) {
      warning.hidden = false;
      warning.focus();
      return;
    }
    warning.hidden = true;
    const total = selected.reduce((sum, service) => sum + service.price, 0);
    const list = selected.map((service, index) =>
      `${index + 1}. ${service.name} — ${money(service.price)}`,
    ).join("\n");
    const message = [
      "⚡ *בקשת הצעה חדשה — Cyber Shamanic*",
      "━━━━━━━━━━━━━━━━━━",
      `👤 *שם:* ${data.get("name")}`,
      `🏢 *עסק / פרויקט:* ${data.get("business") || "לא צוין"}`,
      `⏱️ *דחיפות:* ${data.get("urgency")}`,
      `💳 *מסגרת תקציב:* ${data.get("budget")}`,
      "",
      "🧩 *השירותים שנבחרו:*",
      list,
      "",
      `💎 *אומדן בסיס:* ${money(total)}`,
      "המחיר הסופי ייקבע לאחר אפיון קצר.",
      "",
      `📝 *מידע נוסף:* ${data.get("notes") || "אין הערות נוספות"}`,
      "━━━━━━━━━━━━━━━━━━",
      "נשלח מאתר Cyber Shamanic v0.0.2",
    ].join("\n");
    window.open(`https://wa.me/972535366687?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
}

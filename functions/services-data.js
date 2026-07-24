const categories = [
  {
    id: "cyber", icon: "⌁", name: "אבטחת סייבר", english: "Cyber Security",
    services: [
      ["security-review", "סקירת אבטחה ראשונית", "מיפוי נכסים, סיכונים והמלצות פעולה.", 1200, "לפרויקט"],
      ["hardening", "הקשחת שרת או מערכת", "הרשאות, שירותים, לוגים ובקרות.", 2400, "למערכת"],
      ["security-architecture", "תכנון ארכיטקטורה מאובטחת", "מודל איומים, שכבות הגנה ותוכנית יישום.", 4800, "לפרויקט"],
      ["security-training", "הדרכת מודעות והגנה", "מפגש מעשי המותאם לצוות או לקהילה.", 950, "למפגש"],
    ],
  },
  {
    id: "ai", icon: "✦", name: "בינה מלאכותית", english: "Artificial Intelligence",
    services: [
      ["ai-strategy", "אפיון אסטרטגיית AI", "בחירת שימושים, כלים ומדדים.", 1800, "למסמך"],
      ["ai-agent", "סוכן AI מותאם", "סוכן עבודה ממוקד ידע, תהליך או שירות.", 5500, "החל מ־"],
      ["knowledge-base", "מאגר ידע חכם", "ארגון תכנים, חיפוש ותשובות.", 3900, "החל מ־"],
      ["prompt-system", "מערכת הנחיות מקצועית", "ספריית פרומפטים, בדיקות ותיעוד.", 1400, "למערכת"],
    ],
  },
  {
    id: "automation", icon: "⚡", name: "אוטומציה", english: "Automation",
    services: [
      ["workflow-map", "מיפוי תהליך לאוטומציה", "איתור צווארי בקבוק ובניית מסלול.", 900, "לתהליך"],
      ["workflow-build", "בניית אוטומציה מלאה", "חיבור מערכות, תנאים והתראות.", 3200, "החל מ־"],
      ["integration", "חיבור API בין מערכות", "אינטגרציה מאובטחת עם ניטור שגיאות.", 2600, "לחיבור"],
      ["maintenance", "תחזוקת אוטומציות", "ניטור, תיקונים ושיפור מתמשך.", 690, "לחודש"],
    ],
  },
  {
    id: "osint", icon: "◎", name: "מחקר OSINT", english: "Open Source Intelligence",
    services: [
      ["osint-brief", "דוח מודיעין ממוקד", "איסוף, אימות, ציר זמן ומסקנות.", 1600, "לדוח"],
      ["digital-footprint", "מיפוי נוכחות דיגיטלית", "איתור חשיפות ונכסים ציבוריים.", 1300, "למיפוי"],
      ["source-verification", "אימות מקורות ותוכן", "בדיקת טענות, הצלבות ומדד אמינות.", 750, "לבדיקה"],
      ["research-workshop", "סדנת מחקר מעשי", "מתודולוגיה, כלים ואתיקה.", 1200, "למפגש"],
    ],
  },
  {
    id: "web", icon: "◈", name: "אתרים וחוויות", english: "Web Experiences",
    services: [
      ["landing-page", "דף נחיתה מעוצב", "עמוד רספונסיבי עם הנעה לפעולה.", 2800, "החל מ־"],
      ["portfolio-site", "אתר תדמית רב־עמודי", "זהות חזותית, תוכן, דפים וטפסים.", 6200, "החל מ־"],
      ["interactive-tool", "כלי אינטראקטיבי באתר", "מחשבון, שאלון, מחולל או מערכת.", 3400, "החל מ־"],
      ["visual-system", "מערכת עיצוב דיגיטלית", "צבעים, טיפוגרפיה ורכיבים.", 2200, "למערכת"],
    ],
  },
  {
    id: "open-source", icon: "↗", name: "קוד פתוח ותיעוד", english: "Open Source",
    services: [
      ["repo-setup", "הקמת מאגר מקצועי", "מבנה, רישיון, תבניות ואבטחה.", 850, "למאגר"],
      ["documentation", "תיעוד טכני מלא", "מדריכי שימוש, API, התקנה ותרומה.", 1700, "החל מ־"],
      ["github-profile", "פרופיל GitHub ממותג", "README, מדדים, פרויקטים וזהות.", 650, "לפרופיל"],
      ["project-audit", "סקירת איכות מאגר", "מבנה, קוד, תיעוד ואבטחה.", 1100, "למאגר"],
    ],
  },
];

const allServices = categories.flatMap((category) =>
  category.services.map(([id, name, description, price, unit]) => ({
    id, name, description, price, unit, category: category.name,
  })),
);

const money = (amount) =>
  new Intl.NumberFormat("he-IL", {
    style: "currency", currency: "ILS", maximumFractionDigits: 0,
  }).format(amount);

window.CS_DATA = { categories, allServices, money };

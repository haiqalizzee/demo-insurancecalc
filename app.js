// Small helper: currency formatter MYR
const formatMYR = (value) => {
  if (Number.isNaN(value)) return "-";
  return new Intl.NumberFormat("ms-MY", { style: "currency", currency: "MYR", minimumFractionDigits: 2 }).format(value);
};

const embeddedCsv = `umur,5M,5F,10M,10F,20M,20F
17,30.98,25.81,35.18,30.63,35.88,33.60
18,33.95,26.86,36.58,32.11,36.75,34.21
19,37.01,28.53,37.89,33.69,37.89,35.00
20,39.38,30.90,39.55,35.18,39.15,35.79
21,41.13,33.95,41.13,36.58,41.13,36.66
22,41.65,41.65,41.65,39.80,41.65,37.89
23,41.65,39.38,41.65,39.55,41.65,39.55
24,41.65,41.65,41.65,41.63,41.65,41.63
25,41.65,41.65,41.65,41.65,41.65,41.65
26,41.65,41.65,41.65,41.65,41.65,41.65
27,41.65,41.65,41.65,41.65,41.65,41.65
28,41.65,41.65,41.65,41.65,41.65,41.65
29,41.65,41.65,41.65,41.65,41.65,41.65
30,41.65,41.65,41.65,41.65,41.65,41.65
31,41.65,41.65,41.65,41.65,41.65,41.65
32,41.65,41.65,41.65,41.65,54.16,43.40
33,41.65,41.65,41.65,41.65,56.88,46.40
34,41.65,41.65,41.65,41.65,64.93,49.70
35,41.65,41.65,41.65,41.65,71.58,53.99
36,41.65,41.65,46.46,41.65,79.01,59.06
37,41.65,41.65,51.19,41.65,87.33,64.93
38,43.84,41.65,56.61,42.35,96.51,71.58
39,48.13,41.65,62.83,46.46,106.66,79.01
40,53.29,41.65,70.00,51.19,117.59,87.33
41,59.41,43.84,78.05,56.61,129.85,96.51
42,66.62,48.13,87.15,62.83,143.06,106.66
43,74.83,53.29,97.30,70.00,157.50,117.69
44,84.83,59.41,108.59,78.05,173.03,129.85
45,93.80,66.59,120.93,87.15,191.04,143.06
46,104.74,74.73,134.90,97.30,210.44,157.50
47,116.64,83.83,149.10,108.59,231.79,173.25
48,129.68,93.30,164.90,120.93,255.14,190.43
49,143.85,104.74,181.83,134.40,281.40,209.21
50,159.16,117.69,199.76,149.10,310.00,229.69
51,176.75,129.68,218.75,164.94,336.45,251.43
52,196.29,142.29,238.78,182.35,369.84,274.19
53,215.25,159.60,260.58,199.76,402.85,299.95
54,235.25,176.96,284.32,218.75,429.68,327.55
55,256.90,195.39,310.71,238.95,479.68,357.53
56,278.01,215.25,339.76,260.58,523.61,390.08
57,299.98,235.90,372.14,283.85,571.11,425.25
58,323.58,256.90,408.63,308.88,622.91,463.31
59,351.40,278.08,450.28,336.08,679.70,504.44
60,382.00,296.92,498.40,365.84,742.35,548.89
61,425.31,323.49,543.99,396.20,-,-
62,471.57,349.73,593.18,430.06,-,-
63,530.23,380.63,652.40,468.04,-,-
64,593.34,416.83,714.79,510.62,-,-
65,663.95,457.63,782.60,558.25,-,-`;

const lindungiCsv = `umur,50000M,100000M,150000M,200000M,250000M,50000F,100000F,150000F,200000F,250000F
18,46.00,92.00,138.00,184.00,230.00,36.40,72.75,109.15,145.50,181.90
19,46.00,92.00,138.00,184.00,230.00,36.40,72.75,109.15,145.50,181.90
20,46.00,92.00,138.00,184.00,230.00,36.40,72.75,109.15,145.50,181.90
21,46.00,92.00,138.00,184.00,230.00,36.40,72.75,109.15,145.50,181.90
22,46.00,92.00,138.00,184.00,230.00,36.40,72.75,109.15,145.50,181.90
23,46.00,92.00,138.00,184.00,230.00,36.40,72.75,109.15,145.50,181.90
24,46.00,92.00,138.00,184.00,230.00,36.40,72.75,109.15,145.50,181.90
25,46.00,92.00,138.00,184.00,230.00,36.40,72.75,109.15,145.50,181.90
26,54.15,108.53,162.50,216.65,270.85,40.10,80.15,120.25,160.35,200.40
27,54.15,108.53,162.50,216.65,270.85,40.10,80.15,120.25,160.35,200.40
28,54.15,108.53,162.50,216.65,270.85,40.10,80.15,120.25,160.35,200.40
29,54.15,108.53,162.50,216.65,270.85,40.10,80.15,120.25,160.35,200.40
30,54.15,108.53,162.50,216.65,270.85,40.10,80.15,120.25,160.35,200.40
31,67.90,135.85,203.75,271.65,339.60,47.00,94.00,141.00,188.00,235.00
32,67.90,135.85,203.75,271.65,339.60,47.00,94.00,141.00,188.00,235.00
33,67.90,135.85,203.75,271.65,339.60,47.00,94.00,141.00,188.00,235.00
34,67.90,135.85,203.75,271.65,339.60,47.00,94.00,141.00,188.00,235.00
35,67.90,135.85,203.75,271.65,339.60,47.00,94.00,141.00,188.00,235.00
36,84.55,169.10,253.65,338.15,422.70,59.00,118.00,177.00,236.00,295.00
37,84.55,169.10,253.65,338.15,422.70,59.00,118.00,177.00,236.00,295.00
38,84.55,169.10,253.65,338.15,422.70,59.00,118.00,177.00,236.00,295.00
39,84.55,169.10,253.65,338.15,422.70,59.00,118.00,177.00,236.00,295.00
40,84.55,169.10,253.65,338.15,422.70,59.00,118.00,177.00,236.00,295.00
41,108.55,217.10,325.65,434.15,542.70,74.90,149.75,224.65,299.50,374.40
42,108.55,217.10,325.65,434.15,542.70,74.90,149.75,224.65,299.50,374.40
43,108.55,217.10,325.65,434.15,542.70,74.90,149.75,224.65,299.50,374.40
44,108.55,217.10,325.65,434.15,542.70,74.90,149.75,224.65,299.50,374.40
45,108.55,217.10,325.65,434.15,542.70,74.90,149.75,224.65,299.50,374.40
46,142.85,285.65,428.5,571.35,714.15,95.15,190.25,285.40,380.50,475.65
47,142.85,285.65,428.5,571.35,714.15,95.15,190.25,285.40,380.50,475.65
48,142.85,285.65,428.5,571.35,714.15,95.15,190.25,285.40,380.50,475.65
49,142.85,285.65,428.5,571.35,714.15,95.15,190.25,285.40,380.50,475.65
50,142.85,285.65,428.5,571.35,714.15,95.15,190.25,285.40,380.50,475.65
51,196.20,392.40,588.65,784.85,981.05,126.90,253.85,380.75,507.65,634.60
52,196.20,392.40,588.65,784.85,981.05,126.90,253.85,380.75,507.65,634.60
53,196.20,392.40,588.65,784.85,981.05,126.90,253.85,380.75,507.65,634.60
54,196.20,392.40,588.65,784.85,981.05,126.90,253.85,380.75,507.65,634.60
55,196.20,392.40,588.65,784.85,981.05,126.90,253.85,380.75,507.65,634.60
56,244.45,492.90,739.40,985.85,1232.30,171.95,343.90,515.90,687.85,859.80
57,244.45,492.90,739.40,985.85,1232.30,171.95,343.90,515.90,687.85,859.80
58,244.45,492.90,739.40,985.85,1232.30,171.95,343.90,515.90,687.85,859.80
59,244.45,492.90,739.40,985.85,1232.30,171.95,343.90,515.90,687.85,859.80
60,244.45,492.90,739.40,985.85,1232.30,171.95,343.90,515.90,687.85,859.80`;

const darikuCsv = `umur,100000M,100000F,200000M,200000F,300000M,300000F
25,80,80,120,83,173,114
26,80,80,120,83,173,114
27,80,80,120,83,173,114
28,80,80,120,83,173,114
29,80,80,120,83,173,114
30,80,80,120,83,173,114
31,85,90,130,93,184,132
32,85,90,130,93,184,132
33,85,90,130,93,184,132
34,85,90,130,93,184,132
35,85,90,130,93,184,132
36,90,90,180,125,255,191
37,90,90,180,125,255,191
38,100,90,180,125,255,191
39,100,90,180,125,255,191
40,100,90,180,125,255,191
41,115,100,217,162,303,235
42,115,100,217,162,303,235
43,115,100,217,162,303,235
44,115,100,217,162,303,235
45,115,100,217,162,303,235
46,150,113,260,165,374,277
47,150,113,260,165,374,277
48,150,113,260,165,374,277
49,150,113,260,165,374,277
50,150,113,260,165,374,277
51,190,134,332,245,480,340
52,190,134,332,245,480,340
53,190,134,332,245,480,340
54,190,134,332,245,480,340
55,190,134,332,245,480,340
56,220,180,450,320,580,470
57,220,180,450,320,580,470
58,220,180,450,320,580,470
59,220,180,450,320,580,470
60,220,180,450,320,580,470`;

// Package definitions with benefits
const PACKAGES = [
  { 
    id: "ikhlas-value-term", 
    name: "IKHLAS VALUE TERM TAKAFUL", 
    csv: embeddedCsv, 
    type: "term",
    tagline: "Perlindungan asas yang padat dan mampu milik",
    highlights: [
      { icon: "💰", label: "Pelepasan Cukai", value: "Sehingga RM3,000" },
      { icon: "⚡", label: "Cover Pantas", value: "24 Jam (Kemalangan)" },
      { icon: "🏥", label: "Penyakit Kritikal", value: "36 Jenis Dilindungi" },
      { icon: "⏱️", label: "Tuntutan Pantas", value: "14 Hari Bekerja" }
    ],
    features: [
      { icon: "✓", title: "Pampasan Kematian", subtitle: "Semua sebab dilindungi" },
      { icon: "✓", title: "Lumpuh Kekal (TPD)", subtitle: "Perlindungan menyeluruh" },
      { icon: "✓", title: "Badal Haji", subtitle: "Pilihan tersedia" },
      { icon: "✓", title: "Tempoh 10 Tahun", subtitle: "Sambung sehingga umur 80" }
    ]
  },
  { 
    id: "ikhlas-lindungi", 
    name: "IKHLAS LINDUNGI", 
    csv: lindungiCsv, 
    type: "coverage",
    tagline: "Mudah lulus tanpa medical check-up - Khas untuk ada sejarah sakit",
    highlights: [
      { icon: "🚀", label: "Khairat Kematian", value: "10% dalam 48 Jam" },
      { icon: "4️⃣", label: "Pampasan Berganda", value: "Sehingga 4x" },
      { icon: "🔒", label: "Harga Tetap", value: "Tiada Kenaikan" },
      { icon: "🌍", label: "Luar Negara", value: "4x Pampasan" }
    ],
    features: [
      { icon: "1x", title: "Kematian Biasa", subtitle: "Pampasan penuh" },
      { icon: "2x", title: "Kemalangan", subtitle: "Gandaan 2x" },
      { icon: "3x", title: "Tempat Awam", subtitle: "Gandaan 3x" },
      { icon: "4x", title: "Luar Negara", subtitle: "Gandaan 4x" }
    ]
  },
  { 
    id: "ikhlas-dariku", 
    name: "IKHLAS DARIKU", 
    csv: darikuCsv, 
    type: "coverage",
    tagline: "Pelan hibah dengan pampasan berganda & manfaat tunai",
    highlights: [
      { icon: "💎", label: "Khairat Kematian", value: "RM10,000" },
      { icon: "4️⃣", label: "Pampasan Maksimum", value: "4x Gandaan" },
      { icon: "💵", label: "Nilai Tunai", value: "Tersedia" },
      { icon: "🕋", label: "Badal Haji", value: "Termasuk" }
    ],
    features: [
      { icon: "1x", title: "Kematian Biasa", subtitle: "Pampasan standard" },
      { icon: "2x", title: "Kanser", subtitle: "Gandaan 2x" },
      { icon: "3x", title: "Kemalangan", subtitle: "Gandaan 3x" },
      { icon: "4x", title: "Haji/Umrah", subtitle: "Gandaan 4x ketika ibadah" }
    ],
    cashBenefits: [
      "💍 Berkahwin",
      "👶 Melahirkan anak", 
      "🏠 Membeli rumah",
      "✈️ Melancong",
      "🕋 Menunaikan haji"
    ]
  }
];
let currentPackageId = PACKAGES[0].id;

// Data model: rates[umur][`${term}${gender}`] => number
// We'll seed with a minimal sample, and allow importing full CSV.
const sampleRates = {
  17: { "5M": 30.98, "5F": 25.81, "10M": 35.18, "10F": 30.63, "20M": 35.88, "20F": 33.6 },
  18: { "5M": 33.95, "5F": 26.86, "10M": 38.08, "10F": 33.18, "20M": 38.88, "20F": 35.88 },
  19: { "5M": 37.01, "5F": 28.59, "10M": 37.89, "10F": 33.16, "20M": 37.89, "20F": 39.02 },
  20: { "5M": 39.98, "5F": 30.34, "10M": 37.89, "10F": 33.16, "20M": 39.15, "20F": 40.26 },
  21: { "5M": 41.13, "5F": 33.95, "10M": 39.28, "10F": 37.89, "20M": 41.65, "20F": 41.65 },
  22: { "5M": 41.65, "5F": 41.65, "10M": 41.65, "10F": 39.80, "20M": 41.65, "20F": 41.65 },
  23: { "5M": 41.65, "5F": 41.65, "10M": 41.65, "10F": 41.65, "20M": 41.65, "20F": 41.65 }
};

const STORAGE_KEY = "takaful_rates_v1";
const storageKeyFor = (pkgId) => `${STORAGE_KEY}::${pkgId}`;

function getStoredRates(pkgId = currentPackageId) {
  try {
    const raw = localStorage.getItem(storageKeyFor(pkgId));
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function setStoredRates(rates, pkgId = currentPackageId) {
  localStorage.setItem(storageKeyFor(pkgId), JSON.stringify(rates));
}

function getRates(pkgId = currentPackageId) {
  return getStoredRates(pkgId) || sampleRates;
}

function ensureUmurOptions() {
  const umurSelect = document.getElementById("umur");
  umurSelect.innerHTML = "";
  const pkg = PACKAGES.find(p => p.id === currentPackageId);
  
  // Determine age range based on package
  let startAge = 17;
  let endAge = 65;
  
  if (pkg) {
    if (pkg.id === "ikhlas-lindungi") {
      startAge = 18;
      endAge = 60;
    } else if (pkg.id === "ikhlas-dariku") {
      startAge = 25;
      endAge = 60;
    } else if (pkg.type === "term") {
      startAge = 17;
      endAge = 65;
    }
  }
  
  for (let age = startAge; age <= endAge; age++) {
    const opt = document.createElement("option");
    opt.value = String(age);
    opt.textContent = String(age);
    umurSelect.appendChild(opt);
  }
}

function updateFormForPackage() {
  const pkg = PACKAGES.find(p => p.id === currentPackageId);
  const termField = document.querySelector('.form-field:has(#term)');
  
  if (pkg && pkg.type === "coverage") {
    // Hide term field for coverage-based packages
    if (termField) termField.style.display = "none";
  } else {
    // Show term field for term-based packages
    if (termField) termField.style.display = "block";
  }
  
  ensureUmurOptions();
}

function calculatePremium(umur, jantina, term) {
  const rates = getRates(currentPackageId);
  const ageRow = rates[umur];
  if (!ageRow) return null;
  const key = `${term}${jantina}`; // e.g., "5M"
  const value = ageRow[key];
  if (typeof value !== "number") return null;
  return value;
}

function updateResultText(amount, { umur, jantina, term }) {
  const container = document.getElementById("result");
  const pkg = PACKAGES.find(p => p.id === currentPackageId);
  const genderLabel = jantina === "M" ? "Lelaki" : "Perempuan";
  
  // For coverage-based packages, show table of all amounts
  if (pkg && pkg.type === "coverage") {
    const rates = getRates(currentPackageId);
    const ageRow = rates[umur];
    
    if (!ageRow) {
      container.innerHTML = `<div style="text-align: center; color: var(--text-light);">Tiada kadar tersedia untuk pilihan ini.</div>`;
      return;
    }
    
    // Determine coverage amounts based on package
    let coverages = [];
    if (pkg.id === "ikhlas-dariku") {
      coverages = [100000, 200000, 300000];
    } else if (pkg.id === "ikhlas-lindungi") {
      coverages = [50000, 100000, 150000, 200000, 250000];
    }
    
    let tableHtml = `
      <div class="coverage-table-header">
        <h3>Jadual Sumbangan Bulanan</h3>
        <p class="meta">Umur ${umur}, ${genderLabel}</p>
      </div>
      <table class="coverage-table">
        <thead>
          <tr>
            <th>Manfaat Takaful (RM)</th>
            <th>Sumbangan Bulanan</th>
          </tr>
        </thead>
        <tbody>
    `;
    
    coverages.forEach(coverage => {
      const key = `${coverage}${jantina}`;
      const rate = ageRow[key];
      if (typeof rate === "number") {
        tableHtml += `
          <tr>
            <td>${formatMYR(coverage)}</td>
            <td class="amount">${formatMYR(rate)}</td>
          </tr>
        `;
      }
    });
    
    tableHtml += `
        </tbody>
      </table>
    `;
    
    container.innerHTML = tableHtml;
    container.style.display = "block";
  } else {
    // For term-based packages, show single amount
    if (amount == null) {
      container.innerHTML = `<div style="text-align: center; color: var(--text-light);">Tiada kadar tersedia untuk pilihan ini.</div>`;
      container.style.display = "flex";
      return;
    }
    container.innerHTML = `
      <div style="text-align: center;">
        <div style="margin-bottom: 10px; font-size: 18px; color: var(--text-light);">Bayaran bulanan:</div>
        <div class="amount">${formatMYR(amount)}</div>
        <div class="meta" style="margin-top: 10px;">(Umur ${umur}, ${genderLabel}, Term ${term} tahun)</div>
      </div>
    `;
    container.style.display = "flex";
  }
}

function wireForm() {
  const form = document.getElementById("takafulForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const umur = parseInt(document.getElementById("umur").value, 10);
    const jantina = document.getElementById("jantina").value; // "M"|"F"
    const pkg = PACKAGES.find(p => p.id === currentPackageId);
    
    if (pkg && pkg.type === "coverage") {
      // For coverage packages, show table - no term needed
      updateResultText(null, { umur, jantina, term: 0 });
    } else {
      // For term packages, calculate single amount
      const term = parseInt(document.getElementById("term").value, 10); // 10|20
      const amount = calculatePremium(umur, jantina, term);
      updateResultText(amount, { umur, jantina, term });
    }
  });
}

// CSV handling: flexible parser for any column format
function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/).filter(Boolean);
  if (lines.length === 0) return {};
  const header = lines[0].split(/,|;|\t/).map((h) => h.trim());
  
  // First column must be umur/age
  const lowerHeader = header.map((h) => h.toLowerCase());
  if (!lowerHeader.includes("umur")) {
    throw new Error("Header mesti ada kolum 'umur'");
  }
  
  // Build index map
  const idx = Object.fromEntries(header.map((h, i) => [h.toUpperCase(), i]));
  const result = {};
  
  // Get all column keys except 'umur'
  const dataKeys = header.filter(h => h.toLowerCase() !== "umur");
  
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(/,|;|\t/).map((c) => c.trim());
    const age = parseInt(cols[idx["UMUR"]], 10);
    if (!Number.isFinite(age)) continue;
    const row = {};
    
    // Parse all data columns dynamically
    dataKeys.forEach((k) => {
      const v = parseFloat(cols[idx[k.toUpperCase()]]);
      if (Number.isFinite(v)) {
        row[k] = v;
      }
    });
    result[age] = row;
  }
  return result;
}

function mergeRates(current, incoming) {
  const out = { ...current };
  for (const age of Object.keys(incoming)) {
    out[age] = { ...(current[age] || {}), ...(incoming[age] || {}) };
  }
  return out;
}

// Build tabs dynamically
function buildTabs() {
  const tabsContainer = document.getElementById("packageTabs");
  if (!tabsContainer) return;
  tabsContainer.innerHTML = "";
  PACKAGES.forEach((pkg, index) => {
    const btn = document.createElement("button");
    btn.className = "tab";
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", String(pkg.id === currentPackageId));
    btn.setAttribute("data-pkg", pkg.id);
    btn.textContent = pkg.name;
    btn.addEventListener("click", () => selectPackage(pkg.id));
    tabsContainer.appendChild(btn);
  });
}

function selectPackage(pkgId) {
  currentPackageId = pkgId;
  ensurePackageDataLoaded(pkgId);
  updateFormForPackage();
  // Update tab selection UI
  const tabs = document.querySelectorAll("#packageTabs .tab");
  tabs.forEach((el) => {
    el.setAttribute("aria-selected", String(el.getAttribute("data-pkg") === pkgId));
  });
  // Clear the current result
  document.getElementById("result").innerHTML = "";
  // Update benefits display
  displayPackageBenefits(pkgId);
}

function ensurePackageDataLoaded(pkgId) {
  if (!getStoredRates(pkgId)) {
    const pkg = PACKAGES.find((p) => p.id === pkgId);
    if (pkg && pkg.csv) {
      try {
        const incoming = parseCsv(pkg.csv);
        setStoredRates(incoming, pkgId);
      } catch {}
    }
  }
}

function wireImporters() {
  const fileInput = document.getElementById("csvFile");
  const loadBtn = document.getElementById("loadCsvBtn");
  const pasteArea = document.getElementById("pasteArea");
  const parsePasteBtn = document.getElementById("parsePasteBtn");
  const downloadTemplateBtn = document.getElementById("downloadTemplateBtn");
  const exportBtn = document.getElementById("exportBtn");
  const clearBtn = document.getElementById("clearRatesBtn");

  loadBtn.addEventListener("click", () => {
    const file = fileInput.files && fileInput.files[0];
    if (!file) return alert("Sila pilih fail CSV dahulu");
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const incoming = parseCsv(String(reader.result));
        const merged = mergeRates(getRates(), incoming);
        setStoredRates(merged);
        alert("Kadar berjaya diimport.");
      } catch (err) {
        alert(err.message || String(err));
      }
    };
    reader.readAsText(file);
  });

  parsePasteBtn.addEventListener("click", () => {
    const text = pasteArea.value;
    if (!text.trim()) return alert("Tiada data untuk diimport");
    try {
      const incoming = parseCsv(text);
      const merged = mergeRates(getRates(), incoming);
      setStoredRates(merged);
      alert("Kadar berjaya diimport dari tampal.");
    } catch (err) {
      alert(err.message || String(err));
    }
  });

  downloadTemplateBtn.addEventListener("click", () => {
    const csv = generateTemplateCsv();
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "rates-template.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });

  exportBtn.addEventListener("click", () => {
    const csv = exportRatesCsv(getRates());
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "rates-export.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });

  clearBtn.addEventListener("click", () => {
    if (confirm("Padam semua kadar yang disimpan?")) {
      localStorage.removeItem(STORAGE_KEY);
      alert("Kadar dikosongkan. Dataset contoh akan digunakan.");
    }
  });
}

function generateTemplateCsv() {
  const header = "umur,5M,5F,10M,10F,20M,20F";
  let body = "";
  for (let age = 17; age <= 65; age++) {
    body += `\n${age},,,, , ,`;
  }
  return header + body;
}

function exportRatesCsv(rates) {
  const header = "umur,5M,5F,10M,10F,20M,20F";
  const ages = Object.keys(rates).map((n) => parseInt(n, 10)).sort((a, b) => a - b);
  const rows = ages.map((age) => {
    const r = rates[age] || {};
    const get = (k) => (typeof r[k] === "number" ? r[k] : "");
    return `${age},${get("5M")},${get("5F")},${get("10M")},${get("10F")},${get("20M")},${get("20F")}`;
  });
  return [header, ...rows].join("\n");
}

// Display benefits for selected package
function displayPackageBenefits(pkgId) {
  const pkg = PACKAGES.find(p => p.id === pkgId);
  const benefitsContainer = document.getElementById("packageBenefits");
  const packageTitle = document.getElementById("packageTitle");
  
  if (!pkg || !benefitsContainer) return;
  
  // Update title with package name and tagline
  if (packageTitle) {
    packageTitle.innerHTML = `
      <div class="package-name">${pkg.name}</div>
      ${pkg.tagline ? `<div class="package-tagline">${pkg.tagline}</div>` : ''}
    `;
  }
  
  benefitsContainer.innerHTML = "";
  
  // Add highlights section
  if (pkg.highlights) {
    const highlightsSection = document.createElement("div");
    highlightsSection.className = "highlights-grid";
    pkg.highlights.forEach(highlight => {
      const highlightCard = document.createElement("div");
      highlightCard.className = "highlight-card";
      highlightCard.innerHTML = `
        <div class="highlight-icon">${highlight.icon}</div>
        <div class="highlight-content">
          <div class="highlight-label">${highlight.label}</div>
          <div class="highlight-value">${highlight.value}</div>
        </div>
      `;
      highlightsSection.appendChild(highlightCard);
    });
    benefitsContainer.appendChild(highlightsSection);
  }
  
  // Add features section
  if (pkg.features) {
    const featuresTitle = document.createElement("h3");
    featuresTitle.className = "features-title";
    featuresTitle.textContent = "Manfaat Utama";
    benefitsContainer.appendChild(featuresTitle);
    
    const featuresGrid = document.createElement("div");
    featuresGrid.className = "features-grid";
    pkg.features.forEach(feature => {
      const featureCard = document.createElement("div");
      featureCard.className = "feature-item";
      featureCard.innerHTML = `
        <span class="feature-icon">${feature.icon}</span>
        <div class="feature-content">
          <div class="feature-title">${feature.title}</div>
          <div class="feature-subtitle">${feature.subtitle}</div>
        </div>
      `;
      featuresGrid.appendChild(featureCard);
    });
    benefitsContainer.appendChild(featuresGrid);
  }
  
  // Add cash benefits for Dariku package
  if (pkg.cashBenefits) {
    const cashTitle = document.createElement("h3");
    cashTitle.className = "features-title";
    cashTitle.textContent = "Manfaat Tunai (Selepas 3 Tahun)";
    benefitsContainer.appendChild(cashTitle);
    
    const cashList = document.createElement("div");
    cashList.className = "cash-benefits-list";
    pkg.cashBenefits.forEach(benefit => {
      const cashItem = document.createElement("div");
      cashItem.className = "cash-benefit-item";
      cashItem.textContent = benefit;
      cashList.appendChild(cashItem);
    });
    benefitsContainer.appendChild(cashList);
  }
}

// Scroll to form smoothly (make it globally accessible)
window.scrollToForm = function() {
  const mainSection = document.querySelector(".main-content-section");
  if (mainSection) {
    mainSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Wire up navigation menu
function wireNavigation() {
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  
  // Hamburger menu toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const packageId = link.getAttribute('data-package');
      if (packageId) {
        e.preventDefault();
        // Select the package
        selectPackage(packageId);
        // Close mobile menu
        if (hamburger && navMenu) {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
        }
        // Scroll to main content section
        setTimeout(() => {
          const mainSection = document.querySelector('.main-content-section');
          if (mainSection) {
            mainSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
      // Update active state
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

function init() {
  buildTabs();
  ensurePackageDataLoaded(currentPackageId);
  updateFormForPackage();
  wireForm();
  wireNavigation();
  displayPackageBenefits(currentPackageId);
  
  // Set first nav link as active on page load
  const firstNavLink = document.querySelector('.nav-menu .nav-link[data-package="ikhlas-value-term"]');
  if (firstNavLink) {
    firstNavLink.classList.add('active');
  }
  
  // Clear the result container on initial load
  const resultContainer = document.getElementById("result");
  if (resultContainer) {
    resultContainer.innerHTML = "";
    resultContainer.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", init);



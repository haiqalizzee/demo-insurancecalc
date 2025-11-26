// Small helper: currency formatter MYR
const formatMYR = (value) => {
  if (Number.isNaN(value)) return "-";
  return new Intl.NumberFormat("ms-MY", { style: "currency", currency: "MYR", minimumFractionDigits: 2 }).format(value);
};


// verified
//value term
const embeddedCsv = `umur,5M,5F,10M,10F,20M,20F
17,30.98,25.81,35.18,30.63,35.88,33.60
18,33.95,26.86,36.58,32.11,36.75,34.21
19,37.01,28.53,37.89,33.69,37.89,35.00
20,39.38,30.98,39.55,35.18,39.55,35.79
21,41.13,33.95,41.13,36.58,41.13,36.66
22,41.65,37.01,41.65,37.89,41.65,37.89
23,41.65,39.38,41.65,39.55,41.65,39.55
24,41.65,41.13,41.65,41.13,41.65,41.63
25,41.65,41.65,41.65,41.65,41.65,41.65
26,41.65,41.65,41.65,41.65,41.65,41.65
27,41.65,41.65,41.65,41.65,41.65,41.65
28,41.65,41.65,41.65,41.65,41.65,41.65
29,41.65,41.65,41.65,41.65,43.58,41.65
30,41.65,41.65,41.65,41.65,46.38,41.65
31,41.65,41.65,41.65,41.65,49.88,41.65
32,41.65,41.65,41.65,41.65,54.16,43.40
33,41.65,41.65,41.65,41.65,59.15,46.40
34,41.65,41.65,41.65,41.65,64.93,49.70
35,41.65,41.65,41.65,41.65,71.58,53.99
36,41.65,41.65,46.46,41.65,79.01,59.06
37,41.65,41.65,51.19,41.65,87.33,64.93
38,43.84,41.65,56.61,42.35,96.51,71.58
39,48.13,41.65,62.83,46.46,106.66,79.01
40,53.29,41.65,70.00,51.19,117.69,87.33
41,59.41,43.84,78.05,56.61,129.85,96.51
42,66.59,48.13,87.15,62.83,143.06,106.66
43,74.83,53.29,97.30,70.00,157.50,117.69
44,83.83,59.41,108.59,78.05,173.43,129.85
45,93.80,66.59,120.93,87.15,191.01,143.06
46,104.74,74.73,134.40,97.30,210.44,157.50
47,116.64,83.83,149.10,108.59,231.79,173.25
48,129.68,93.80,164.94,120.93,255.41,190.40
49,143.85,104.74,181.83,134.40,281.40,209.21
50,159.60,116.64,199.76,149.10,310.10,229.69
51,176.75,129.68,218.75,164.94,338.45,251.13
52,195.39,143.85,238.96,181.83,369.34,274.49
53,215.25,159.60,260.58,199.76,402.85,299.95
54,235.90,176.75,284.38,218.75,439.51,327.51
55,256.90,195.39,310.71,2385.96,479.68,357.53
56,278.08,215.25,339.76,260.58,523.51,390.08
57,299.95,235.90,372.14,283.85,571.11,425.25
58,323.58,256.90,408.63,308.88,622.91,463.31
59,351.40,278.08,450.28,336.09,679.70,504.44
60,385.00,299.95,498.40,365.84,742.35,548.89`;

// verified
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
56,246.45,492.90,739.40,985.85,1232.30,171.95,343.90,515.90,687.85,859.80
57,246.45,492.90,739.40,985.85,1232.30,171.95,343.90,515.90,687.85,859.80
58,246.45,492.90,739.40,985.85,1232.30,171.95,343.90,515.90,687.85,859.80
59,246.45,492.90,739.40,985.85,1232.30,171.95,343.90,515.90,687.85,859.80
60,246.45,492.90,739.40,985.85,1232.30,171.95,343.90,515.90,687.85,859.80`;

//verified
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
36,90,90,180,135,255,191
37,90,90,180,135,255,191
38,100,90,180,135,255,191
39,100,90,180,135,255,191
40,100,90,180,135,255,191
41,118,100,217,162,303,235
42,118,100,217,162,303,235
43,118,100,217,162,303,235
44,118,100,217,162,303,235
45,118,100,217,162,303,235
46,150,113,260,195,374,277
47,150,113,260,195,374,277
48,150,113,260,195,374,277
49,150,113,260,195,374,277
50,150,113,260,195,374,277
51,190,134,332,245,480,340
52,190,134,332,245,480,340
53,190,134,332,245,480,340
54,190,134,332,245,480,340
55,190,134,332,245,480,340
56,230,180,450,320,590,475
57,230,180,450,320,590,475
58,230,180,450,320,590,475
59,230,180,450,320,590,475
60,230,180,450,320,590,475`;

//verified
const elaunWad = `umur,M,F
1,90,90
2,90,90
3,90,90
4,90,90
5,90,90
6,90,90
7,90,90
8,90,90
9,90,90
10,90,90
11,90,90
12,90,90
13,90,90
14,90,90
15,90,90
16,90,90
17,90,90
18,90,90
19,90,90
20,90,90
21,90,90
22,90,90
23,90,90
24,90,90
25,90,90
26,90,90
27,90,90
28,90,90
29,90,90
30,90,90
31,90,90
32,90,90
33,90,90
34,90,90
35,90,90
36,90,90
37,90,90
38,90,90
39,90,90
40,90,90
41,90,90
42,90,90
43,99,99
44,99,99
45,99,99
46,99,99
47,119,119
48,119,119
49,119,119
50,119,119
51,139,139
52,139,139
53,139,139
54,139,139
55,139,139
56,149,149
57,149,149
58,159,159
59,159,159
60,159,159`;

// Package definitions with benefits
const PACKAGES = [
  {
    id: "ikhlas-value-term",
    name: "IKHLAS VALUE TERM",
    csv: embeddedCsv,
    type: "term",
    tagline: "Pakej ini menawarkan sumbangan yang rendah dan mampu milik, sesuai untuk mereka yang sudah berkahwin (hibah couple).",
    highlights: [
      { icon: "💰", label: "Perlindungan Minimum", value: "RM200,000" },
      { icon: "⚡", label: "Pelepasan Cukai", value: "Sehingga RM3,000" },
      { icon: "🕋", label: "Badal Haji" },
      { icon: "⏱️", label: "Pampasan", value: "Semua Sebab" }
    ],
    features: [
      { icon: "✓", title: "Pampasan Kematian", subtitle: "Atas SEMUA SEBAB" },
      { icon: "✓", title: "Lumpuh Kekal (TPD)", subtitle: "Perlindungan menyeluruh" },
      { icon: "✓", title: "Badal Haji", subtitle: "(optional)" },
      { icon: "✓", title: "Pelepasan Income Tax", subtitle: "Sehingga RM3,000" }
    ]
  },
  {
    id: "ikhlas-lindung",
    name: "IKHLAS LINDUNG",
    csv: lindungiCsv,
    type: "coverage",
    tagline: "Pakej ini menawarkan perlindungan asas dengan gandaan pampasan kematian mengikut situasi.",
    highlights: [
      { icon: "🚀", label: "Pampasan Kematian", value: "Sehingga RM250,000" },
      { icon: "🎁", label: "Khairat Kematian", value: "10% dari Hibah" },
      { icon: "🔒", label: "Harga Tetap", value: "Tiada Kenaikan" },
      { icon: "🌍", label: "Perlindungan", value: "Sehingga Umur 80" }
    ],
    features: [
      { icon: "1x", title: "Kematian Biasa", subtitle: "Pampasan penuh" },
      { icon: "2x", title: "Kematian Kemalangan", subtitle: "Gandaan 2x" },
      { icon: "3x", title: "Kemalangan Tempat Awam", subtitle: "Gandaan 2x" },
      { icon: "4x", title: "Kemalangan Luar Negara", subtitle: "Gandaan 2x" },
      { icon: "✓", title: "Pampasan Hilang Upaya", subtitle: "Termasuk" },
      { icon: "✓", title: "Khairat Kematian", subtitle: "Dapat dalam 48 jam" },
      { icon: "✓", title: "Badal Haji", subtitle: "(bagi muslim)" }
    ]
  },
  {
    id: "ikhlas-dariku",
    name: "IKHLAS DARIKU",
    csv: darikuCsv,
    type: "coverage",
    tagline: "Pakej ini menawarkan pampasan kematian berganda mengikut situasi serta manfaat tunai mengikut fasa kehidupan.",
    highlights: [
      { icon: "💎", label: "Khairat Kematian", value: "10% atau RM20k" },
      { icon: "4️⃣", label: "Pampasan Maksimum", value: "4x Gandaan" },
      { icon: "💵", label: "Nilai Tunai", value: "Tersedia" },
      { icon: "🕋", label: "Badal Haji", value: "Termasuk" }
    ],
    features: [
      { icon: "1x", title: "Kematian Semua Sebab", subtitle: "Semulajadi" },
      { icon: "2x", title: "Kematian Kanser", subtitle: "Gandaan 2x" },
      { icon: "3x", title: "Kematian Kemalangan", subtitle: "Gandaan 3x" },
      { icon: "4x", title: "Haji @ Umrah", subtitle: "Gandaan 4x" },
      { icon: "✓", title: "Perlindungan", subtitle: "Sehingga umur 70 tahun" },
      { icon: "✓", title: "Tiada kenaikan harga", subtitle: "Kadar rata" }
    ],
    cashBenefits: [
      "Berkahwin",
      "Melahirkan anak",
      "Membeli rumah",
      "Melancong ke 5 buah negara",
      "Menunaikan haji"
    ]
  },
  {
    id: "elaun-wad",
    name: "ELAUN WAD",
    csv: elaunWad,
    type: "allowance",
    tagline: "Pelan Takaful ini dikhaskan kepada mereka yang mempunyai kad perubatan peribadi, mempunyai manfaat perubatan dari syarikat, atau yang tiada apa-apa pelan takaful.",
    highlights: [
      { icon: "💎", label: "Elaun Hospital", value: "RM300 sehari" },
      { icon: "4️⃣", label: "Pampasan Kematian", value: "RM50,000" },
      { icon: "💵", label: "Nilai Tunai", value: "Tinggi" },
      { icon: "🕋", label: "Badal Haji", value: "Termasuk" }
    ],
    features: [
      { icon: "✓", title: "Elaun hospital", subtitle: "RM300 sehari" },
      { icon: "✓", title: "Pampasan kematian", subtitle: "RM50,000" },
      { icon: "✓", title: "Khairat Kematian", subtitle: "10% dari pampasan (48 jam)" },
      { icon: "✓", title: "Badal Haji", subtitle: "(bagi muslim)" },
      { icon: "✓", title: "Perlindungan (Hibah)", subtitle: "Sehingga umur 70 tahun" },
      { icon: "✓", title: "Perlindungan (Elaun Wad)", subtitle: "Sehingga umur 65 tahun" },
      { icon: "✓", title: "TIADA kenaikan harga", subtitle: "Kadar rata" },
      { icon: "✓", title: "Nilai tunai Tersedia", subtitle: "(Simpanan)" }
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
    if (pkg.id === "ikhlas-lindung") {
      startAge = 18;
      endAge = 60;
    } else if (pkg.id === "ikhlas-dariku") {
      startAge = 25;
      endAge = 60;
    } else if (pkg.type === "term") {
      startAge = 17;
      endAge = 65;
    } else if (pkg.type === "allowance") {
      startAge = 1;
      endAge = 60;
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
  // Use closest to find the wrapper div
  const termWrapper = document.getElementById('term').closest('.form-field');
  const manfaatWrapper = document.getElementById('manfaat-wrapper');
  const manfaatSelect = document.getElementById('manfaat');

  if (pkg && (pkg.id === "ikhlas-lindung" || pkg.id === "ikhlas-dariku")) {
    // Show Manfaat, Hide Term
    if (termWrapper) termWrapper.style.display = "none";
    if (manfaatWrapper) {
      manfaatWrapper.style.display = "block";
      manfaatSelect.innerHTML = "";

      let options = [];
      if (pkg.id === "ikhlas-lindung") {
        options = [50000, 100000, 150000, 200000, 250000];
      } else {
        options = [100000, 200000, 300000];
      }

      options.forEach(opt => {
        const el = document.createElement("option");
        el.value = opt;
        el.textContent = formatMYR(opt);
        manfaatSelect.appendChild(el);
      });
    }
  } else if (pkg && pkg.type === "allowance") {
    // Hide Term, Hide Manfaat
    if (termWrapper) termWrapper.style.display = "none";
    if (manfaatWrapper) manfaatWrapper.style.display = "none";
  } else {
    // Show Term, Hide Manfaat (default for term packages)
    if (termWrapper) termWrapper.style.display = "block";
    if (manfaatWrapper) manfaatWrapper.style.display = "none";
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

function updateResultText(amount, { umur, jantina, term, manfaat }) {
  const container = document.getElementById("result");
  const pkg = PACKAGES.find(p => p.id === currentPackageId);
  const genderLabel = jantina === "M" ? "Lelaki" : "Perempuan";

  // Special handling for Manfaat Takaful packages (single result)
  if (pkg && (pkg.id === "ikhlas-lindung" || pkg.id === "ikhlas-dariku")) {
    if (amount == null) {
      container.innerHTML = `<div style="text-align: center; color: var(--text-light);">Tiada kadar tersedia untuk pilihan ini.</div>`;
      container.style.display = "flex";
      return;
    }
    container.innerHTML = `
      <div style="text-align: center;">
        <div style="margin-bottom: 10px; font-size: 18px; color: var(--text-light);">Sumbangan Bulanan:</div>
        <div class="amount">${formatMYR(amount)}</div>
        <div class="meta" style="margin-top: 10px;">
          (Umur ${umur}, ${genderLabel})<br>
          Manfaat: ${formatMYR(manfaat)}
        </div>
      </div>
    `;
    container.style.display = "flex";
    return;
  }

  // For coverage-based packages (fallback if any other coverage types exist)
  if (pkg && pkg.type === "coverage") {
    // This block might not be reached for lindung/dariku anymore due to above check
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
    } else if (pkg.id === "ikhlas-lindung") {
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
  } else if (pkg && pkg.type === "allowance") {

    const dataAllowance = parseCsv(elaunWad);

    const amount = dataAllowance[umur] ? dataAllowance[umur][jantina] : null;

    container.innerHTML = `
      <div style="text-align: center;">
        <div style="margin-bottom: 10px; font-size: 18px; color: var(--text-light);">Bayaran bulanan:</div>
        <div class="amount">${formatMYR(amount)}</div>
        <div class="meta" style="margin-top: 10px;">(Umur ${umur}, ${genderLabel})</div>
      </div>
    `;
    container.style.display = "flex";

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

    if (pkg && (pkg.id === "ikhlas-lindung" || pkg.id === "ikhlas-dariku")) {
      // For these packages, use selected Manfaat
      const manfaat = parseInt(document.getElementById("manfaat").value, 10);
      const rates = getRates(currentPackageId);
      const ageRow = rates[umur];

      if (!ageRow) {
        updateResultText(null, { umur, jantina, term: 0, manfaat });
        return;
      }

      const key = `${manfaat}${jantina}`;
      const amount = ageRow[key];
      updateResultText(amount, { umur, jantina, term: 0, manfaat });

    } else if (pkg && pkg.type === "coverage") {
      // Fallback for other coverage packages (if any)
      updateResultText(null, { umur, jantina, term: 0 });
    } else if (pkg && pkg.type === "allowance") {
      // Allowance logic
      const dataAllowance = parseCsv(elaunWad);
      const amount = dataAllowance[umur] ? dataAllowance[umur][jantina] : null;
      updateResultText(amount, { umur, jantina, term: 0 });
    } else {
      // For term packages, calculate single amount
      const term = parseInt(document.getElementById("term").value, 10); // 10|20
      const amount = calculatePremium(umur, jantina, term);
      updateResultText(amount, { umur, jantina, term });
    }
  });

  form.addEventListener("reset", () => {
    const container = document.getElementById("result");
    if (container) {
      container.innerHTML = "";
      container.style.display = "none";
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
      } catch { }
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
window.scrollToForm = function () {
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



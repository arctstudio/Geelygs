// Geely Gading Serpong Mobile App Data & Interactivity

const carModels = [
  {
    id: "ex5",
    tag: "EX5 EV",
    name: "Geely EX5 EV",
    shortName: "Geely EX5 EV",
    price: "Rp458.000.000",
    image: "assets/Geely-EX5.webp?v=2",
    thumb: "assets/Geely-EX5.webp?v=2",
    bgClass: "bg-slate-900",
    description: "Premium Electric SUV berarsitektur canggih GEEA 3.0 & GEA Platform dengan Short-Blade Battery 60.22 kWh. Memiliki jarak tempuh hingga 495 km (NEDC), DC Fast Charging 20 menit, 15.4\" HD Touch-Screen FLYME AUTO, E04 7nm Chip, serta fitur V2L & V2V.",
    keyHighlights: [
      { top: "Jarak Tempuh", value: "495km", sub: "NEDC Combined Range" },
      { top: "Pengisian Cepat", value: "20min", sub: "DC Fast Charge 30-80%" },
      { top: "Akselerasi", value: "6.9s", sub: "0 - 100 km/h (PRO)" }
    ],
    gallery: [
      "assets/ex5/16_1778576328-ex5-skyview-large.jpg.jpeg",
      "assets/ex5/23_1766025537-exterior-sleek-sihouette.jpg",
      "assets/ex5/26_1778577901-ex5-hud.jpg",
      "assets/ex5/17_1778576599-ex5-smartech-large.jpg.jpeg",
      "assets/ex5/25_1776152433-eight-airbags.jpeg",
      "assets/ex5/30_1776269600-ex5-performance-1.jpg.jpeg",
      "assets/ex5/21_1778581323-slide-3.jpeg"
    ],
    specs: {
      "MOTOR LISTRIK & PERFORMA": [
        { label: "Sistem Penggerak", value: "FWD (Front-Wheel Drive)" },
        { label: "Tipe Motor Listrik", value: "Permanent Magnetic Synchronous Machine (11-in-1 Electrical Drive)" },
        { label: "Tenaga Maksimal", value: "160 kW (218 PS)" },
        { label: "Torsi Maksimal", value: "320 Nm" },
        { label: "Kecepatan Maksimal", value: "175 km/h" },
        { label: "Akselerasi 0-100 km/h", value: "6.9 Detik (PRO) / 7.1 Detik (MAX)" }
      ],
      "BATERAI & PENGISIAN DAYA": [
        { label: "Tipe Baterai", value: "Lithium Iron Phosphate (Geely Short-Blade Battery)" },
        { label: "Kapasitas Baterai", value: "60.22 kWh" },
        { label: "Jarak Tempuh (NEDC)", value: "495 km (PRO) / 490 km (MAX)" },
        { label: "DC Fast Charging (30-80%)", value: "20 Menit" },
        { label: "AC Slow Charging (10-100%)", value: "6.1 Jam" },
        { label: "Fitur V2L & V2V", value: "Tersedia (Vehicle-to-Load & Vehicle-to-Vehicle)" },
        { label: "Jadwal Pengisian Daya Remote", value: "Tersedia (Remote Scheduled Charging)" }
      ],
      "DIMENSI & KAPASITAS": [
        { label: "Panjang x Lebar x Tinggi", value: "4.615 x 1.901 x 1.670 mm" },
        { label: "Wheelbase", value: "2.750 mm" },
        { label: "Radius Putar Min.", value: "5.4 m" },
        { label: "Ground Clearance (Unladen/Laden)", value: "173 / 145 mm" },
        { label: "Kapasitas Bagasi (Min/Max)", value: "461 L / 1.877 L (33 Smart Storage Solutions)" },
        { label: "Berat Kosong (Curb Weight)", value: "1.715 kg (PRO) / 1.765 kg (MAX)" },
        { label: "Kapasitas Penumpang", value: "5 Kursi" }
      ],
      "SASIS, KEMUDI & REM": [
        { label: "Suspensi Depan / Belakang", value: "F-MacPherson / R-Multi-Link Independent" },
        { label: "Sistem Kemudi", value: "Electric Power Steering (EPS)" },
        { label: "Sistem Pengereman", value: "Ventilated Disc (Depan) / Solid Disc (Belakang)" },
        { label: "Regenerasi Energi", value: "Adjustable Braking Energy Recovery System" },
        { label: "Rem Parkir Elektronik", value: "EPB dengan Auto-Hold" },
        { label: "Ukuran Velg & Ban", value: "18-inch Alloy Wheels" }
      ],
      "INTERIOR & TEKNOLOGI PINTAR": [
        { label: "Sistem Infotainment", value: "FLYME AUTO In-vehicle Infotainment System" },
        { label: "Processor / Chipset", value: "7nm E04 High Performance Chipset" },
        { label: "Layar Utama", value: "15.4-inch HD Touch-Screen" },
        { label: "Panel Instrumen", value: "10.2-inch LCD Instrument Cluster" },
        { label: "Head-Up Display", value: "13.8-inch Windshield W-HUD (MAX)" },
        { label: "Asisten Suara", value: "\"Halo Geely\" Dual-Zone Voice Control (200+ Commands)" },
        { label: "Sistem Audio", value: "6 Speakers (PRO) / FLYME SOUND 16-Speaker Premium System (MAX)" },
        { label: "Konektivitas & Cas", value: "Wireless Charging, USB Type-A & Type-C, Bluetooth & OTA" },
        { label: "Fitur Kenyamanan", value: "Panorama Power Sunroof (MAX), Power Tailgate (MAX), Heat Pump A/C" }
      ],
      "KESELAMATAN & ADAS": [
        { label: "Jumlah Airbag", value: "6 Safety Airbags (Front, Side & Curtain Airbags)" },
        { label: "Kamera Parkir & Sensor", value: "360° Surround Vision dengan Transparent Chassis & Front Radars" },
        { label: "Fitur ADAS", value: "Level 2 ADAS 13 Fitur Lengkap (ACC, ICC, AEB, LKA, BSD, LCA, RCTA, RCTB, CMSF, CMSR, TSI, DOW, ELKA) (MAX)" },
        { label: "Kontrol Keselamatan & Rem", value: "ESC, G-TCS, ABS, ARP, HAC, HDC, TPMS Digital & Multi-collision Braking (PIB)" }
      ]
    }
  },
  {
    id: "ex2-ev",
    tag: "EX2 EV",
    name: "Geely EX2 EV",
    shortName: "Geely EX2 EV",
    price: "Rp239.900.000",
    image: "assets/Geely-EX2.webp?v=2",
    thumb: "assets/Geely-EX2.webp?v=2",
    bgClass: "bg-slate-800",
    description: "City car listrik RWD canggih berbasis platform EV modern. Dilengkapi baterai LFP 40.8 kWh berjarak tempuh 395 km (NEDC), DC Fast Charging 25 menit, layar 14.6\" FLYME AUTO, serta bagasi depan (Frunk) 70 L.",
    keyHighlights: [
      { top: "Jarak Tempuh", value: "395km", sub: "NEDC Combined Range" },
      { top: "Pengisian Cepat", value: "25min", sub: "DC Fast Charge 30-80%" },
      { top: "Sistem Penggerak", value: "85 kW", sub: "RWD (Rear-Wheel Drive)" }
    ],
    gallery: [
      "assets/ex2/008_1789359132-ex2-1.png",
      "assets/ex2/009_1789358805-ex2-1.png",
      "assets/ex2/012_1789357891-ex2-1.png",
      "assets/ex2/014_1789358332-ex2-1.png",
      "assets/ex2/016_1789358698-ex2-1.png",
      "assets/Photo/07_geely-ex2---cover-picture.jpg"
    ],
    specs: {
      "MOTOR LISTRIK & PERFORMA": [
        { label: "Sistem Penggerak", value: "Rear-Wheel Drive (RWD)" },
        { label: "Tipe Motor Listrik", value: "Permanent Magnet Synchronous Motor (11-in-1 Electrical Drive)" },
        { label: "Tenaga Maksimal", value: "85 kW (116 PS)" },
        { label: "Torsi Maksimal", value: "150 Nm" },
        { label: "Kecepatan Maksimal", value: "130 km/h" },
        { label: "Akselerasi 0-100 km/h", value: "11.5 Detik" }
      ],
      "BATERAI & PENGISIAN DAYA": [
        { label: "Tipe Baterai", value: "Lithium Iron Phosphate (LFP)" },
        { label: "Kapasitas Baterai", value: "40.8 kWh" },
        { label: "Jarak Tempuh (NEDC)", value: "395 km" },
        { label: "Konsumsi Energi (NEDC)", value: "11.8 kWh / 100 km" },
        { label: "DC Fast Charging (30-80%)", value: "25 Menit (Daya Maks. 70 kW)" },
        { label: "AC Slow Charging (10-100%)", value: "6.5 Jam" },
        { label: "Fitur V2L (Vehicle-to-Load)", value: "Tersedia (Standard)" }
      ],
      "DIMENSI & KAPASITAS": [
        { label: "Panjang x Lebar x Tinggi", value: "4.135 x 1.805 x 1.580 mm" },
        { label: "Wheelbase", value: "2.650 mm" },
        { label: "Ground Clearance", value: "160.8 mm (PRO) / 162 mm (MAX)" },
        { label: "Bagasi Belakang (Min/Max)", value: "375 L / 1.320 L" },
        { label: "Bagasi Depan (Frunk)", value: "70 L" },
        { label: "Kapasitas Penumpang", value: "5 Kursi" }
      ],
      "SASIS, REM & RODA": [
        { label: "Suspensi Depan / Belakang", value: "F-MacPherson / R-Multi-Link Independent" },
        { label: "Sistem Pengereman", value: "Ventilated Disc (Depan) / Solid Disc (Belakang)" },
        { label: "Rem Parkir Elektronik", value: "EPB dengan Auto-Hold" },
        { label: "Ukuran Velg & Ban", value: "15-inch Steel (PRO) / 16-inch Alloy (MAX)" }
      ],
      "INTERIOR & TEKNOLOGI": [
        { label: "Sistem Infotainment", value: "FLYME AUTO In-vehicle Infotainment System" },
        { label: "Layar Utama", value: "14.6-inch HD Touchscreen" },
        { label: "Panel Instrumen", value: "8.8-inch LCD Instrument Cluster" },
        { label: "Remote App Control", value: "Tersedia (App Vehicle Control)" },
        { label: "Pengaturan Kursi Pengemudi", value: "6-Way (Manual PRO / Power MAX)" },
        { label: "Pencahayaan Kabin", value: "256-Color Urban Starlight Ambient Light (MAX)" },
        { label: "Sistem Keselamatan & ADAS", value: "Airbags, 540° Camera & 12-Function ADAS (MAX)" }
      ]
    }
  },
  {
    id: "starray-em-i",
    tag: "STARRAY EM-i",
    name: "Geely Starray EM-i",
    shortName: "Geely Starray EM-i",
    price: "Rp498.000.000",
    image: "assets/Geely-starray-em-i.webp?v=2",
    thumb: "assets/Geely-starray-em-i.webp?v=2",
    bgClass: "bg-slate-900",
    description: "Super Hybrid SUV revolusioner berteknologi NordThor Powertrain. Jarak jelajah ekstra irit hingga 1.420 km sekali isi, performa instan bertenaga, serta kenyamanan kabin pintar kelas atas.",
    keyHighlights: [
      { top: "Jarak Jelajah", value: "1.420km", sub: "Kombinasi Total" },
      { top: "Mode Listrik", value: "105km", sub: "Pure EV Range" },
      { top: "Akselerasi", value: "7.5s", sub: "0 - 100 km/h" }
    ],
    gallery: [
      "assets/starray em-i/05_1778503301-exterior-1.jpeg",
      "assets/starray em-i/06_1778503477-exterior-2.jpeg",
      "assets/starray em-i/07_1778503665-exterior-4.jpeg",
      "assets/starray em-i/09_1778503633-exterior-3.jpeg",
      "assets/starray em-i/12_1778504040-interior-2.jpeg",
      "assets/starray em-i/14_1778504337-interior-5.jpeg",
      "assets/starray em-i/68_1778566865-flyme-sound.jpeg",
      "assets/starray em-i/75_1766552789-driving-safety-540-parking-assist.jpeg"
    ],
    specs: {
      "MESIN & PERFORMA HYBRID": [
        { label: "Tipe Mesin", value: "1.5L NordThor Hybrid Powertrain" },
        { label: "Tenaga Maksimal", value: "218 PS (160 kW)" },
        { label: "Torsi Maksimal", value: "310 Nm" },
        { label: "Transmisi", value: "DHT (Dedicated Hybrid Transmission)" },
        { label: "Akselerasi 0-100 km/h", value: "7.5 Detik" }
      ],
      "BATERAI & JARAK TEMPUH": [
        { label: "Tipe Baterai", value: "Aegis Short Blade Battery" },
        { label: "Kapasitas Baterai", value: "19.09 kWh" },
        { label: "Jarak Tempuh EV", value: "105 km (Pure EV)" },
        { label: "Jarak Tempuh Total", value: "1.420 km (Kombinasi)" },
        { label: "Efisiensi Bahan Bakar", value: "3.75 L / 100 km" }
      ],
      "DIMENSI & KAPASITAS": [
        { label: "Panjang x Lebar x Tinggi", value: "4.670 x 1.900 x 1.705 mm" },
        { label: "Wheelbase", value: "2.775 mm" },
        { label: "Ground Clearance", value: "172 mm" },
        { label: "Kapasitas Penumpang", value: "5 Kursi Premium" }
      ],
      "SASIS & PENGEREMAN": [
        { label: "Suspensi Depan", value: "MacPherson Independent" },
        { label: "Suspensi Belakang", value: "Multi-Link Independent" },
        { label: "Sistem Pengereman", value: "Ventilated Disc (Depan & Belakang)" },
        { label: "Ukuran Velg & Ban", value: "19-inch Two-Tone Alloy" }
      ],
      "INTERIOR & HIBURAN": [
        { label: "Layar Utama", value: "15.4\" 2.5K HD Touchscreen Display" },
        { label: "Sistem Audio", value: "Flyme Sound 16 Speakers" },
        { label: "Head-Up Display", value: "W-HUD Full Color Display" },
        { label: "Konektivitas", value: "Apple CarPlay & Android Auto" }
      ],
      "KESELAMATAN & ADAS": [
        { label: "Sistem ADAS", value: "Level 2+ Intelligent Driver Assistance" },
        { label: "Kamera Parkir", value: "540° HD Camera dengan Transparent Chassis" },
        { label: "Jumlah Airbag", value: "6 Safety Airbags" }
      ]
    }
  },
  {
    id: "coolray",
    tag: "COOLRAY",
    name: "Geely Coolray",
    shortName: "Geely Coolray",
    price: "Rp385.000.000",
    image: "assets/Geely-Coolray.webp?v=2",
    thumb: "assets/Geely-Coolray.webp?v=2",
    bgClass: "bg-slate-800",
    description: "Compact SUV sporty berkinerja tinggi dengan mesin 1.5L Turbo Leishen Power. Akselerasi instan 0-100 km/h dalam 7,6 detik dan gaya aerodinamis yang membakar semangat.",
    keyHighlights: [
      { top: "Tenaga Mesin", value: "177PS", sub: "1.5L Turbo Leishen" },
      { top: "Torsi Maksimal", value: "255Nm", sub: "1.500 - 4.000 rpm" },
      { top: "Akselerasi", value: "7.6s", sub: "0 - 100 km/h" }
    ],
    gallery: [
      "assets/coolray/23_1782959284-coolray-headlight-frontgrille-large.jpg.jpeg",
      "assets/coolray/18_1782975931-coolray-frontseat.jpg.jpeg",
      "assets/coolray/20_1784114429-coolray-central-display-2.png.jpeg",
      "assets/coolray/15_1782974228-coolray-wheel.jpg.jpeg",
      "assets/coolray/21_1782974359-coolray-taillight.jpg.jpeg",
      "assets/coolray/36_1782119097-new-coolray-leishen-power-engine.png",
      "assets/coolray/44_1784113005-coolray-wireless-charging.jpg.jpeg"
    ],
    specs: {
      "MESIN & PERFORMA TURBO": [
        { label: "Tipe Mesin", value: "1.5L 4-Cylinder Turbocharged Leishen" },
        { label: "Tenaga Maksimal", value: "177 PS @ 5.500 rpm" },
        { label: "Torsi Maksimal", value: "255 Nm @ 1.500-4.000 rpm" },
        { label: "Transmisi", value: "7-Speed Wet Dual Clutch (7DCT)" },
        { label: "Akselerasi 0-100 km/h", value: "7.6 Detik" }
      ],
      "DIMENSI & DESAIN": [
        { label: "Panjang x Lebar x Tinggi", value: "4.380 x 1.800 x 1.609 mm" },
        { label: "Wheelbase", value: "2.600 mm" },
        { label: "Sunroof", value: "Panoramic Sunroof dengan Electric Shade" }
      ],
      "INTERIOR & TEKNOLOGI": [
        { label: "Layar Infotainment", value: "12.3-inch HD Display Screen" },
        { label: "Panel Instrumen", value: "10.25-inch Full Digital LCD" },
        { label: "Wireless Charger", value: "Available 15W Fast Charging" }
      ],
      "KESELAMATAN & PARKIR": [
        { label: "Kamera Parkir", value: "540° HD Panoramic Camera" },
        { label: "Parkir Otomatis", value: "APA (Automated Parking Assist)" }
      ]
    }
  }
];

let currentIndex = 0;
let currentLightboxIndex = 0;
let currentGalleryList = [];

document.addEventListener("DOMContentLoaded", () => {
  renderModel(currentIndex);
  setupEventListeners();
  initHeroVideo();
  initTicketPass();
  initFooterShader();
  initScrollRevealAnimations();
  initDesktopStickyMagnet();
});

function initHeroVideo() {
  const videos = [
    document.getElementById("hero-bg-video"),
    document.getElementById("desktop-hero-bg-video")
  ];
  videos.forEach(v => {
    if (v) {
      v.play().then(() => {
        v.classList.remove("opacity-0");
        v.classList.add("opacity-100");
      }).catch(err => {
        console.log("Video autoplay fallback to poster image:", err);
      });

      v.addEventListener("canplay", () => {
        v.classList.remove("opacity-0");
        v.classList.add("opacity-100");
      });
    }
  });
}

function renderModel(index) {
  const model = carModels[index];
  currentGalleryList = model.gallery || [];
  
  // Update Tab Active States (Mobile & Desktop)
  const tabs = document.querySelectorAll(".model-tab");
  tabs.forEach((tab, i) => {
    const isTarget = (i % carModels.length) === index;
    if (isTarget) {
      tab.classList.add("active", "bg-slate-900", "text-white", "shadow-lg", "border-slate-900");
      tab.classList.remove("bg-white", "text-slate-700", "border-slate-200", "bg-transparent", "border-slate-300/80");
    } else {
      tab.classList.remove("active", "bg-slate-900", "text-white", "shadow-lg", "border-slate-900", "bg-white");
      if (tab.classList.contains("desktop-model-tab")) {
        tab.classList.add("bg-transparent", "text-slate-700", "border-slate-300/80");
      } else {
        tab.classList.add("bg-white", "text-slate-700", "border-slate-200");
      }
    }
  });

  // Update Mobile & Desktop Model Nav Header
  [document.getElementById("active-model-nav-name"), document.getElementById("desktop-active-model-name")].forEach(navNameEl => {
    if (navNameEl) {
      navNameEl.classList.remove("title-entrance");
      void navNameEl.offsetWidth; // trigger reflow
      navNameEl.textContent = model.shortName;
      navNameEl.classList.add("title-entrance");
    }
  });

  // Update Mobile & Desktop Car Showcase Image
  [document.getElementById("active-car-img"), document.getElementById("desktop-active-car-img")].forEach(carImgEl => {
    if (carImgEl) {
      carImgEl.classList.remove("car-image-enter");
      void carImgEl.offsetWidth; // trigger reflow
      carImgEl.src = model.image;
      carImgEl.alt = model.name;
      carImgEl.classList.add("car-image-enter");
    }
  });

  // Update Mobile Key Highlights
  const highlightsContainer = document.getElementById("active-key-highlights");
  if (highlightsContainer && model.keyHighlights) {
    highlightsContainer.innerHTML = "";
    model.keyHighlights.forEach(h => {
      const col = document.createElement("div");
      col.className = "px-1 text-center";
      col.innerHTML = `
        <div class="text-[9px] sm:text-[10px] font-medium text-slate-400 leading-tight">${h.top}</div>
        <div class="font-michroma font-bold text-sm sm:text-base text-slate-900 my-0.5 tracking-tight val-number">0</div>
        <div class="text-[8px] sm:text-[9px] font-medium text-slate-400 leading-tight">${h.sub}</div>
      `;
      highlightsContainer.appendChild(col);
      const valEl = col.querySelector(".val-number");
      animateNumberCounter(valEl, h.value);
    });
  }

  // Update Desktop Key Highlights
  const desktopHighlights = document.getElementById("desktop-active-key-highlights");
  if (desktopHighlights && model.keyHighlights) {
    desktopHighlights.innerHTML = "";
    model.keyHighlights.forEach(h => {
      const col = document.createElement("div");
      col.className = "px-1 text-center";
      col.innerHTML = `
        <div class="text-[9px] sm:text-[10px] font-medium text-slate-400 leading-tight">${h.top}</div>
        <div class="font-michroma font-bold text-sm sm:text-base text-slate-900 my-0.5 tracking-tight val-number-desk">0</div>
        <div class="text-[8px] sm:text-[9px] font-medium text-slate-400 leading-tight">${h.sub}</div>
      `;
      desktopHighlights.appendChild(col);
      const valEl = col.querySelector(".val-number-desk");
      animateNumberCounter(valEl, h.value);
    });
  }

  // Update Mobile & Desktop Price Tags
  [document.getElementById("active-car-price"), document.getElementById("desktop-active-car-price")].forEach(priceEl => {
    if (priceEl) {
      animatePriceNumber(priceEl, model.price);
    }
  });

  // Update Spec Card Header & Description
  const specTitleEl = document.getElementById("spec-card-title");
  if (specTitleEl) {
    specTitleEl.classList.remove("title-entrance");
    void specTitleEl.offsetWidth;
    specTitleEl.textContent = model.name;
    specTitleEl.classList.add("title-entrance");
  }

  const specDescEl = document.getElementById("spec-card-desc");
  if (specDescEl) {
    typeWriterEffect(specDescEl, model.description);
  }

  // Update Mobile Spec List / Accordion Content
  const specContainer = document.getElementById("spec-details-container");
  if (specContainer) {
    specContainer.innerHTML = "";
    Object.entries(model.specs).forEach(([category, items]) => {
      const catBlock = document.createElement("div");
      catBlock.className = "border-t border-slate-100 pt-4 first:border-0 first:pt-0";
      const catHeader = document.createElement("h4");
      catHeader.className = "text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2.5 font-michroma title-entrance";
      catHeader.textContent = category;
      catBlock.appendChild(catHeader);

      const table = document.createElement("div");
      table.className = "space-y-2";
      items.forEach(item => {
        const row = document.createElement("div");
        row.className = "flex justify-between items-start text-xs sm:text-sm transition-all duration-300 hover:px-1 hover:bg-slate-50 rounded-lg p-1";
        row.innerHTML = `
          <span class="text-slate-500 font-medium w-1/2 pr-2">${item.label}</span>
          <span class="text-slate-900 font-bold w-1/2 text-right">${item.value}</span>
        `;
        table.appendChild(row);
      });
      catBlock.appendChild(table);
      specContainer.appendChild(catBlock);
    });
  }

  // Update Desktop Spec Details Container
  const desktopSpecContainer = document.getElementById("desktop-spec-details-container");
  if (desktopSpecContainer) {
    desktopSpecContainer.innerHTML = "";
    Object.entries(model.specs).forEach(([category, items]) => {
      const catBlock = document.createElement("div");
      catBlock.className = "border-t border-slate-100 pt-3 first:border-0 first:pt-0";
      const catHeader = document.createElement("h4");
      catHeader.className = "text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2 font-michroma title-entrance";
      catHeader.textContent = category;
      catBlock.appendChild(catHeader);

      const table = document.createElement("div");
      table.className = "space-y-1.5";
      items.forEach(item => {
        const row = document.createElement("div");
        row.className = "flex justify-between items-start text-xs transition-all duration-300 hover:px-1 hover:bg-slate-50 rounded-lg p-1";
        row.innerHTML = `
          <span class="text-slate-500 font-medium w-1/2 pr-2">${item.label}</span>
          <span class="text-slate-900 font-bold w-1/2 text-right">${item.value}</span>
        `;
        table.appendChild(row);
      });
      catBlock.appendChild(table);
      desktopSpecContainer.appendChild(catBlock);
    });
  }

  // Update Mobile Gallery
  const galleryContainer = document.getElementById("model-gallery-container");
  if (galleryContainer && model.gallery) {
    galleryContainer.innerHTML = "";
    model.gallery.forEach((imgUrl, imgIdx) => {
      const card = document.createElement("div");
      card.className = "snap-start shrink-0 w-64 h-40 sm:w-72 sm:h-44 rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200/80 cursor-pointer group transition-transform";
      card.onclick = () => openLightbox(imgIdx);
      card.innerHTML = `
        <img src="${imgUrl}" alt="Geely Gallery Photo" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
      `;
      galleryContainer.appendChild(card);
    });
  }

  // Update Desktop Gallery
  const desktopGalleryContainer = document.getElementById("desktop-model-gallery-container");
  if (desktopGalleryContainer && model.gallery) {
    desktopGalleryContainer.innerHTML = "";
    model.gallery.forEach((imgUrl, imgIdx) => {
      const card = document.createElement("div");
      card.className = "snap-start shrink-0 w-44 h-28 rounded-xl overflow-hidden bg-slate-100 shadow-sm border border-slate-200/80 cursor-pointer group transition-transform";
      card.onclick = () => openLightbox(imgIdx);
      card.innerHTML = `
        <img src="${imgUrl}" alt="Geely Gallery Photo" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
      `;
      desktopGalleryContainer.appendChild(card);
    });
  }

  // Reset Accordion Collapse state on model switch
  resetSpecAccordion();
}

function prevModel() {
  currentIndex = (currentIndex - 1 + carModels.length) % carModels.length;
  renderModel(currentIndex);
}

function nextModel() {
  currentIndex = (currentIndex + 1) % carModels.length;
  renderModel(currentIndex);
}

function selectModel(index) {
  currentIndex = index;
  renderModel(currentIndex);
}

function toggleSpecAccordion() {
  const content = document.getElementById("spec-accordion-wrapper");
  const btnText = document.getElementById("accordion-btn-text");
  const btnIcon = document.getElementById("accordion-btn-icon");

  if (content.classList.contains("expanded")) {
    content.classList.remove("expanded");
    btnText.textContent = "Lihat Spesifikasi Lengkap";
    btnIcon.className = "fa-solid fa-chevron-down text-xs transition-transform duration-300";
  } else {
    content.classList.add("expanded");
    btnText.textContent = "Sembunyikan Spesifikasi";
    btnIcon.className = "fa-solid fa-chevron-up text-xs transition-transform duration-300";
  }
}

function resetSpecAccordion() {
  const content = document.getElementById("spec-accordion-wrapper");
  const btnText = document.getElementById("accordion-btn-text");
  const btnIcon = document.getElementById("accordion-btn-icon");
  if (content) content.classList.remove("expanded");
  if (btnText) btnText.textContent = "Lihat Spesifikasi Lengkap";
  if (btnIcon) btnIcon.className = "fa-solid fa-chevron-down text-xs transition-transform duration-300";
}

function openLightbox(imgIdx) {
  currentLightboxIndex = imgIdx;
  updateLightboxContent();
  const lightbox = document.getElementById("gallery-lightbox");
  if (lightbox) {
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("gallery-lightbox");
  if (lightbox) {
    lightbox.classList.add("hidden");
    lightbox.classList.remove("flex");
  }
}

function updateLightboxContent() {
  if (!currentGalleryList || currentGalleryList.length === 0) return;
  const imgEl = document.getElementById("lightbox-img");
  const counterEl = document.getElementById("lightbox-counter");

  if (imgEl) {
    imgEl.src = currentGalleryList[currentLightboxIndex];
  }
  if (counterEl) {
    counterEl.textContent = `${currentLightboxIndex + 1} / ${currentGalleryList.length}`;
  }
}

function prevLightboxImg(e) {
  if (e) e.stopPropagation();
  if (!currentGalleryList.length) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + currentGalleryList.length) % currentGalleryList.length;
  updateLightboxContent();
}

function nextLightboxImg(e) {
  if (e) e.stopPropagation();
  if (!currentGalleryList.length) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % currentGalleryList.length;
  updateLightboxContent();
}

function setupEventListeners() {
  // Arrow buttons for model selector
  const prevBtn = document.getElementById("btn-prev-model");
  const nextBtn = document.getElementById("btn-next-model");
  if (prevBtn) prevBtn.addEventListener("click", prevModel);
  if (nextBtn) nextBtn.addEventListener("click", nextModel);

  // Accordion Button
  const accordionBtn = document.getElementById("btn-toggle-spec");
  if (accordionBtn) accordionBtn.addEventListener("click", toggleSpecAccordion);

  // Keyboard navigation for Lightbox modal
  document.addEventListener("keydown", (e) => {
    const lightbox = document.getElementById("gallery-lightbox");
    if (lightbox && !lightbox.classList.contains("hidden")) {
      if (e.key === "ArrowLeft") prevLightboxImg();
      if (e.key === "ArrowRight") nextLightboxImg();
      if (e.key === "Escape") closeLightbox();
    }
  });

  // WhatsApp click handler helper
  window.openWhatsApp = function(customText) {
    const defaultModel = carModels[currentIndex].name;
    const phone = "6285111038416";
    let message = customText;
    if (!message) {
      message = `Halo Toto Kusumah, saya tertarik dengan ${defaultModel} di Geely Gading Serpong. Boleh minta info promo & simulasi kredit terbaru?`;
    }
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Modal test drive logic
  const modal = document.getElementById("test-drive-modal");
  window.openTestDriveModal = function(modelName) {
    if (modal) {
      if (modelName) {
        const selectEl = document.getElementById("modal-car-select");
        if (selectEl) selectEl.value = modelName;
      }
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    }
  };

  window.closeTestDriveModal = function() {
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  };

  // Modal form submit
  const form = document.getElementById("test-drive-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("modal-name").value;
      const phone = document.getElementById("modal-phone").value;
      const car = document.getElementById("modal-car-select").value;
      const date = document.getElementById("modal-date").value;
      const note = document.getElementById("modal-note").value;

      const message = `Halo Toto Kusumah (Geely Gading Serpong),\nSaya mau daftar Test Drive:\n- Nama: ${name}\n- No WA: ${phone}\n- Unit Pilihan: ${car}\n- Rencana Tanggal: ${date}\n- Catatan: ${note || '-'}`;

      window.openWhatsApp(message);
      closeTestDriveModal();
    });
  }
}

// ==================== WEBGLE DITHER SHADER UTILITY ====================
function createDitherShader(mountEl, colors = { back: "#0f172a", front: "#334155" }) {
  if (!mountEl) return null;

  try {
    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    mountEl.prepend(canvas);

    const gl = canvas.getContext("webgl2");
    if (!gl) return null;

    function hexToRgb(hex) {
      hex = hex.replace(/^#/, '');
      if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
      const num = parseInt(hex, 16);
      return [(num >> 16 & 255) / 255, (num >> 8 & 255) / 255, (num & 255) / 255];
    }

    const vertSrc = `#version 300 es
    precision mediump float;
    layout(location = 0) in vec4 a_position;
    void main() {
      gl_Position = a_position;
    }`;

    const fragSrc = `#version 300 es
    precision mediump float;
    uniform float u_time;
    uniform vec2 u_resolution;
    uniform vec3 u_colorBack;
    uniform vec3 u_colorFront;
    out vec4 fragColor;

    float hash21(vec2 p) {
      p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
      p += dot(p, p + 19.19);
      return fract(p.x * p.y);
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution;
      float t = u_time * 0.5;
      
      vec2 shapeUV = uv * 3.0;
      for (float i = 1.0; i < 5.0; i++) {
        shapeUV.x += 0.5 / i * cos(i * 2.5 * shapeUV.y + t);
        shapeUV.y += 0.5 / i * cos(i * 1.5 * shapeUV.x + t);
      }
      float shape = 0.5 + 0.5 * sin(t - shapeUV.y - shapeUV.x);
      shape = smoothstep(0.1, 0.9, shape);

      float dither = hash21(gl_FragCoord.xy);
      float res = step(0.5, shape + (dither - 0.5) * 0.35);

      vec3 color = mix(u_colorBack, u_colorFront, res);
      fragColor = vec4(color, 1.0);
    }`;

    function createShader(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const vert = createShader(gl.VERTEX_SHADER, vertSrc);
    const frag = createShader(gl.FRAGMENT_SHADER, fragSrc);
    if (!vert || !frag) return null;

    const prog = gl.createProgram();
    gl.attachShader(prog, vert);
    gl.attachShader(prog, frag);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);

    const aPos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uColorBack = gl.getUniformLocation(prog, "u_colorBack");
    const uColorFront = gl.getUniformLocation(prog, "u_colorFront");

    const rgbBack = hexToRgb(colors.back);
    const rgbFront = hexToRgb(colors.front);
    gl.uniform3f(uColorBack, rgbBack[0], rgbBack[1], rgbBack[2]);
    gl.uniform3f(uColorFront, rgbFront[0], rgbFront[1], rgbFront[2]);

    function resize() {
      const w = mountEl.clientWidth || 380;
      const h = mountEl.clientHeight || 220;
      canvas.width = Math.max(1, Math.floor(w * window.devicePixelRatio));
      canvas.height = Math.max(1, Math.floor(h * window.devicePixelRatio));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener("resize", resize);
    if (window.ResizeObserver) {
      const ro = new ResizeObserver(() => resize());
      ro.observe(mountEl);
    }

    let startTime = performance.now();
    function render(now) {
      const elapsed = (now - startTime) / 1000;
      gl.uniform1f(uTime, elapsed);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
    return canvas;
  } catch (err) {
    console.warn("WebGL ShaderMount fallback active:", err);
    return null;
  }
}

// ==================== ADMIT ONE TICKET WEBGLE ENGINE & TILT ====================
function initTicketPass() {
  const mounts = [
    document.getElementById("ticket-shader-mount"),
    document.getElementById("desktop-ticket-shader-mount")
  ];
  mounts.forEach(m => {
    if (m) createDitherShader(m, { back: "#0f172a", front: "#334155" });
  });

  const tiltItems = [
    { wrapper: document.getElementById("ticket-tilt-wrapper"), glare: document.getElementById("ticket-glare-effect") },
    { wrapper: document.getElementById("desktop-ticket-tilt-wrapper"), glare: document.getElementById("desktop-ticket-glare-effect") }
  ];

  tiltItems.forEach(({ wrapper, glare }) => {
    if (!wrapper) return;
    const maxTilt = 9;

    wrapper.addEventListener("pointerenter", () => {
      if (glare) glare.classList.remove("opacity-0");
    });

    wrapper.addEventListener("pointermove", (e) => {
      const rect = wrapper.getBoundingClientRect();
      const dx = (e.clientX - rect.left) / rect.width - 0.5;
      const dy = (e.clientY - rect.top) / rect.height - 0.5;

      const rotX = -(dy * 2) * maxTilt;
      const rotY = (dx * 2) * maxTilt;

      wrapper.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;

      if (glare) {
        glare.style.background = `radial-gradient(38% 55% at ${(dx + 0.5) * 100}% ${(dy + 0.5) * 100}%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 70%)`;
      }
    });

    wrapper.addEventListener("pointerleave", () => {
      wrapper.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
      if (glare) glare.classList.add("opacity-0");
    });
  });
}

// ==================== FOOTER WEBGLE SHADER DITHER ====================
function initFooterShader() {
  const mountEl = document.getElementById("footer-shader-mount");
  if (mountEl) {
    createDitherShader(mountEl, { back: "#0f172a", front: "#334155" });
  }
}

// ==================== SCROLL REVEAL ANIMATIONS OBSERVATION ====================
function initScrollRevealAnimations() {
  const sections = document.querySelectorAll("section");
  sections.forEach((sec, idx) => {
    sec.classList.add("reveal-on-scroll");
    if (idx % 2 === 1) {
      sec.classList.add("delay-100");
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -20% 0px"
  });

  document.querySelectorAll(".reveal-on-scroll").forEach(el => observer.observe(el));
}

// ==================== NUMBER COUNTING UP TICKER ENGINE ====================
function animatePriceNumber(element, priceStr) {
  if (!element) return;
  
  const numericVal = parseInt(priceStr.replace(/[^0-9]/g, ""), 10);
  if (isNaN(numericVal)) {
    element.textContent = priceStr;
    return;
  }

  const duration = 850;
  const startTime = performance.now();
  element.classList.add("number-count-glow");

  function updatePrice(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease out quad curve
    const easeProgress = 1 - (1 - progress) * (1 - progress);
    const currentVal = Math.floor(easeProgress * numericVal);

    element.textContent = "Rp" + currentVal.toLocaleString("id-ID");

    if (progress < 1) {
      requestAnimationFrame(updatePrice);
    } else {
      element.textContent = priceStr;
      setTimeout(() => element.classList.remove("number-count-glow"), 400);
    }
  }

  requestAnimationFrame(updatePrice);
}

function animateNumberCounter(element, valStr) {
  if (!element) return;

  const cleanStr = valStr.replace(/\./g, ""); 
  const match = cleanStr.match(/([0-9]+(?:\.[0-9]+)?)/);
  
  if (!match) {
    element.textContent = valStr;
    return;
  }

  const targetNum = parseFloat(match[1]);
  const isDecimal = valStr.includes(".") && !valStr.includes("km");
  const prefix = valStr.substring(0, match.index);
  const suffix = valStr.substring(match.index + match[0].length);

  const duration = 750;
  const startTime = performance.now();

  function updateCounter(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - (1 - progress) * (1 - progress);
    const currentNum = easeProgress * targetNum;

    let formattedNum = "";
    if (isDecimal) {
      formattedNum = currentNum.toFixed(1);
    } else {
      formattedNum = Math.floor(currentNum).toLocaleString("id-ID");
    }

    element.textContent = prefix + formattedNum + suffix;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = valStr;
    }
  }

  requestAnimationFrame(updateCounter);
}

// ==================== TYPING TEXT EFFECT ENGINE ====================
let activeTypingTimeout = null;

function typeWriterEffect(element, text, speed = 15) {
  if (!element) return;

  if (activeTypingTimeout) {
    clearTimeout(activeTypingTimeout);
    activeTypingTimeout = null;
  }

  element.innerHTML = '<span class="typing-text"></span>';
  const span = element.querySelector(".typing-text");
  
  let index = 0;

  function typeChar() {
    if (index < text.length) {
      span.textContent += text.charAt(index);
      index++;
      activeTypingTimeout = setTimeout(typeChar, speed);
    } else {
      span.classList.add("typing-done");
    }
  }

  typeChar();
}

// ==================== DESKTOP STICKY MAGNET SCROLL ENGINE ====================
function initDesktopStickyMagnet() {
  const container = document.getElementById("desktop-app-container");
  if (!container) return;

  let isScrolling = false;
  let activeScene = 0;
  const scenes = Array.from(document.querySelectorAll("#desktop-app-container > section"));
  let cooldownTimer = null;

  // Sync activeScene index with scroll position / nav links
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const idx = scenes.indexOf(entry.target);
        if (idx !== -1 && !isScrolling) {
          activeScene = idx;
        }
      }
    });
  }, {
    root: container,
    threshold: 0.5
  });

  scenes.forEach(sec => observer.observe(sec));

  container.addEventListener("wheel", (e) => {
    // Check if user is scrolling inside a scrollable sub-element
    const scrollableEl = e.target.closest('.overflow-y-auto, .overflow-x-auto');
    if (scrollableEl) {
      const atTop = scrollableEl.scrollTop <= 1 && e.deltaY < 0;
      const atBottom = Math.abs(scrollableEl.scrollHeight - scrollableEl.clientHeight - scrollableEl.scrollTop) <= 3 && e.deltaY > 0;
      if (!atTop && !atBottom) {
        return; // Allow internal element scrolling
      }
    }

    // Always block scroll when transition lock is active to swallow trackpad inertia
    if (isScrolling) {
      e.preventDefault();
      return;
    }

    // Require intentional, higher effort scroll force (deltaY >= 65)
    const threshold = 65;
    if (Math.abs(e.deltaY) >= threshold) {
      if (e.deltaY > 0 && activeScene < scenes.length - 1) {
        e.preventDefault();
        triggerSceneChange(activeScene + 1);
      } else if (e.deltaY < 0 && activeScene > 0) {
        e.preventDefault();
        triggerSceneChange(activeScene - 1);
      }
    }
  }, { passive: false });

  function triggerSceneChange(targetIndex) {
    isScrolling = true;
    activeScene = targetIndex;
    scenes[targetIndex].scrollIntoView({ behavior: "smooth" });

    if (cooldownTimer) clearTimeout(cooldownTimer);
    // Lockout timer set to 1250ms to completely absorb trackpad momentum/inertia
    cooldownTimer = setTimeout(() => {
      isScrolling = false;
    }, 1250);
  }
}

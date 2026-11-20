/**
 * ============================================================================
 * CENTRAL GEOSPATIAL PORTFOLIO CONFIGURATION (EDIT THIS FILE ONLY)
 * ============================================================================
 * How to customize your portfolio without touching HTML or CSS:
 * 1. Update `profile`, `skills`, and `contact` below with your personal details.
 * 2. Replace the sample PNG files in the project folders with your own exported
 *    maps from ArcGIS Pro or QGIS, OR update the `src` paths and `caption` text
 *    inside `projects` below.
 * 3. To add a new map to an existing project, copy one `{ title, src, caption }`
 *    item inside that project's `maps` array.
 * 4. To add a brand-new project category, copy one project object inside
 *    `projects` and give it a unique `id`.
 * ============================================================================
 */

const PORTFOLIO_CONFIG = {
  profile: {
    authorName: "Remote Sensing & GIS Portfolio",
    specialisation: "Remote Sensing & Geographic Information Systems Specialist",
    heroTitle: "Spatial Intelligence, Environmental Assessment & Cartographic Design",
    bio: "Graduate in Remote Sensing and GIS specializing in multi-criteria spatial decision analysis, environmental threat modelling, land-cover change detection, and publication-grade cartographic visualization using ArcGIS Pro and QGIS.",
    featuredMap: {
      src: "01_Environmental_Heritage_Assessment/maps/01_unesco_composite_threat_index.png",
      title: "Composite Environmental Threat Index: Heritage Buffers (SW Nigeria)",
      meta: "Illustrative Static Cartographic Layout • ArcGIS Pro / QGIS"
    },
    stats: [
      { value: "6 Thematic Domains", label: "Environmental, Ecological & Terrain GIS Projects" },
      { value: "16 Sample Maps", label: "300 DPI Static Cartographic PNG Templates" },
      { value: "ArcGIS Pro & QGIS", label: "Primary Spatial Analysis & Layout Suite" },
      { value: "GitHub Pages Ready", label: "Lightweight Static Image Architecture" }
    ]
  },

  contact: {
    githubProfileUrl: "https://github.com/your-username",
    repositoryUrl: "https://github.com/your-username/geospatial-remote-sensing-portfolio",
    linkedinUrl: "https://www.linkedin.com/in/your-profile",
    email: "your.email@example.com",
    location: "South-West Nigeria / Open to Remote & Field Roles"
  },

  skills: [
    {
      domain: "GIS & Spatial Modelling",
      items: [
        "ArcGIS Pro & QGIS Cartographic Layout Design",
        "Multi-Criteria Decision Analysis (AHP & Weighted Overlay)",
        "Spatial Statistics & Hotspot Clustering (Getis-Ord Gi*)",
        "Geostatistical Interpolation (Ordinary Kriging & IDW)",
        "Least-Cost Path & Accessibility Surface Modelling"
      ]
    },
    {
      domain: "Remote Sensing & Earth Observation",
      items: [
        "Supervised LULC Classification (Random Forest / SVM)",
        "Multi-Temporal Change Detection & Buffer Analysis",
        "Spectral Indices (NDVI, NDWI, NDBI, SAVI)",
        "Sentinel-2 MSI & Landsat 8/9 OLI Preprocessing",
        "Google Earth Engine (GEE) Cloud Workflows"
      ]
    },
    {
      domain: "Hydrology, Terrain & Soil Models",
      items: [
        "RUSLE Soil Erosion Modelling (R, K, LS, C, P Factors)",
        "Watershed Delineation & Topographic Wetness Index (TWI)",
        "DEM Hypsometric, Slope, Aspect & Hillshade Analysis",
        "Soil Fertility & Physicochemical Nutrient Zoning",
        "Flood Susceptibility & Floodplain Risk Mapping"
      ]
    },
    {
      domain: "Cartography & Geospatial Scripting",
      items: [
        "Publication-Grade 300 DPI Map Production",
        "Colorblind-Safe Symbology & Hierarchical Legends",
        "Coordinate Reference Systems (WGS 84 / UTM Zones)",
        "Python Geospatial Stack (GeoPandas, Rasterio, Matplotlib)",
        "Git & GitHub Documentation for Reproducible GIS"
      ]
    }
  ],

  projects: [
    {
      id: "heritage-assessment",
      number: "01",
      category: "Cultural & Natural Heritage",
      title: "Geospatial Assessment of Environmental Threats to Cultural and Natural Heritage UNESCO Sites in South-West Nigeria",
      description: "Multi-criteria spatial overlay and multi-temporal land-cover encroachment modelling evaluating environmental pressures around cultural and natural heritage buffer zones in South-West Nigeria.",
      software: "ArcGIS Pro 3.x, QGIS 3.34 LTR, Google Earth Engine",
      datasets: "Sentinel-2 MSI (10m), Landsat 8/9 OLI, SRTM 30m DEM, Heritage Buffer Boundaries (Illustrative Placeholders)",
      readmeUrl: "01_Environmental_Heritage_Assessment/README.md",
      objectives: [
        "Delineate core heritage boundaries and multi-ring buffer zones for spatial threat evaluation.",
        "Quantify urban expansion and agricultural encroachment within peripheral buffer corridors.",
        "Synthesize biophysical and anthropogenic pressure indicators into a Composite Environmental Threat Index.",
        "Deliver clear cartographic layouts supporting heritage site conservation planning."
      ],
      methodology: [
        "Preprocess multi-temporal optical satellite imagery and extract LULC classes via supervised classification.",
        "Compute Euclidean proximity surfaces from road networks, expanding settlements, and drainage channels.",
        "Standardize threat criteria and execute weighted overlay analysis to classify composite risk tiers.",
        "Design standardized 300 DPI map layouts with coordinate grids, scale bars, and regional locator insets."
      ],
      maps: [
        {
          title: "Composite Environmental Threat Index (Illustrative Sample)",
          src: "01_Environmental_Heritage_Assessment/maps/01_unesco_composite_threat_index.png",
          caption: "Illustrative portfolio template depicting spatial zonation from Very Low Threat to Critical Multi-Hazard Zones around heritage buffers."
        },
        {
          title: "Buffer Zone Land-Use Encroachment Trajectory (Illustrative Sample)",
          src: "01_Environmental_Heritage_Assessment/maps/02_heritage_buffer_encroachment_change.png",
          caption: "Illustrative multi-temporal simulation contrasting intact core vegetation buffers against rapid built-up edge expansion."
        }
      ]
    },
    {
      id: "okomu-poaching",
      number: "02",
      category: "Conservation & Wildlife GIS",
      title: "Poaching Hotspots in Okomu National Park, Nigeria",
      description: "Spatial clustering (Getis-Ord Gi*) and least-cost accessibility modelling to identify anthropogenic wildlife threat hotspots and support anti-poaching patrol planning in Okomu National Park.",
      software: "ArcGIS Pro (Spatial Statistics), QGIS, Python (GeoPandas)",
      datasets: "Protected Area Boundaries, SRTM 30m DEM, Sentinel-2 Canopy Cover, Perimeter Roads & Synthetic Sample Coordinates",
      readmeUrl: "02_Okomu_Poaching_Hotspots/README.md",
      objectives: [
        "Identify statistically significant spatial clusters (hotspots and coldspots) of anthropogenic incursion.",
        "Model landscape entry friction and patrol accessibility across varying terrain slopes and canopy densities.",
        "Assess spatial alignment between high-risk perimeter corridors and ranger patrol sectors.",
        "Produce operational cartographic outputs while safeguarding sensitive conservation coordinates."
      ],
      methodology: [
        "Aggregate spatial incident indicators across uniform hexagonal/grid cells covering the park and buffer.",
        "Execute Getis-Ord Gi* hotspot analysis to isolate 95% and 99% confidence spatial clusters.",
        "Construct a friction surface from slope, land cover, and road distance to compute cost-distance accessibility.",
        "Symbolize statistical z-scores and continuous accessibility surfaces using colorblind-safe diverging palettes."
      ],
      maps: [
        {
          title: "Spatial Hotspot Analysis (Getis-Ord Gi*) (Illustrative Sample)",
          src: "02_Okomu_Poaching_Hotspots/maps/01_okomu_poaching_hotspot_gi_star.png",
          caption: "Illustrative Getis-Ord Gi* hotspot and coldspot clustering output across Okomu National Park boundary sectors."
        },
        {
          title: "Anti-Poaching Patrol Cost-Distance Surface (Illustrative Sample)",
          src: "02_Okomu_Poaching_Hotspots/maps/02_okomu_patrol_accessibility_surface.png",
          caption: "Illustrative least-cost accessibility surface combining terrain slope, vegetation density, and perimeter access routes."
        }
      ]
    },
    {
      id: "soil-fertility",
      number: "03",
      category: "Agricultural & Soil GIS",
      title: "Soil Fertility Assessment",
      description: "Geostatistical interpolation (Ordinary Kriging) and multi-parameter soil nutrient indexing to map spatial variability in topsoil fertility status and soil reaction (pH).",
      software: "ArcGIS Pro (Geostatistical Analyst), QGIS, R (gstat)",
      datasets: "Topsoil (0–20 cm) Physicochemical Sample Points, SRTM 30m DEM, FAO Soil Reference Layers (Illustrative Placeholders)",
      readmeUrl: "03_Soil_Fertility_Assessment/README.md",
      objectives: [
        "Model spatial autocorrelation of key soil fertility indicators (pH, Organic Carbon, Nitrogen, Phosphorus, Potassium).",
        "Interpolate continuous nutrient surfaces using Ordinary Kriging with cross-validation.",
        "Classify agricultural land into fertility suitability zones (S1 to S3/N) via weighted index overlay.",
        "Generate clear agronomic maps to support site-specific soil nutrient management."
      ],
      methodology: [
        "Perform exploratory spatial data analysis and fit empirical semivariogram models to soil sample observations.",
        "Interpolate continuous raster surfaces for individual physicochemical parameters.",
        "Reclassify parameter rasters against agronomic thresholds and combine into a Composite Soil Fertility Index.",
        "Export high-resolution thematic layouts depicting discrete suitability classes and continuous pH gradients."
      ],
      maps: [
        {
          title: "Composite Soil Fertility Index (SFI) Map (Illustrative Sample)",
          src: "03_Soil_Fertility_Assessment/maps/01_soil_fertility_index_map.png",
          caption: "Illustrative spatial classification of agricultural soil fertility ranging from Very Low (S3/N) to Very High Nutrient Status."
        },
        {
          title: "Topsoil pH Spatial Variability Surface (Illustrative Sample)",
          src: "03_Soil_Fertility_Assessment/maps/02_soil_ph_organic_carbon_surface.png",
          caption: "Illustrative Ordinary Kriging prediction surface showing continuous spatial variation in topsoil pH (0–20 cm)."
        }
      ]
    },
    {
      id: "flood-risk",
      number: "04",
      category: "Hydrology & Hazard Mapping",
      title: "Flood Risk Assessment",
      description: "Analytical Hierarchy Process (AHP) and hydrological terrain modelling integrating elevation, slope, drainage density, Topographic Wetness Index (TWI), and rainfall to map flood susceptibility.",
      software: "QGIS (GRASS / SAGA Hydrology), ArcGIS Pro (Spatial Analyst)",
      datasets: "SRTM 30m DEM, CHIRPS Gridded Rainfall, Sentinel-2 Impervious/LULC Layer, Soil Hydrologic Groups (Illustrative Placeholders)",
      readmeUrl: "04_Flood_Risk_Assessment/README.md",
      objectives: [
        "Extract drainage networks, flow accumulation, and Topographic Wetness Index (TWI) from conditioned DEMs.",
        "Derive consistent criterion weights using an AHP pairwise comparison matrix (CR < 0.10).",
        "Delineate five flood susceptibility tiers from Very Low to Very High Floodplain Risk.",
        "Provide clear spatial hazard maps for watershed planning and flood mitigation."
      ],
      methodology: [
        "Hydrologically condition the DEM (fill sinks) and derive slope, drainage density, and TWI rasters.",
        "Standardize conditioning factors onto a common 1–5 susceptibility scale.",
        "Apply AHP weights in a weighted linear overlay to compute the composite Flood Susceptibility Index.",
        "Cartographically style floodplain hazard zones with clear hydrological legends and coordinate grids."
      ],
      maps: [
        {
          title: "Multi-Criteria Flood Susceptibility Zonation (AHP-GIS) (Illustrative Sample)",
          src: "04_Flood_Risk_Assessment/maps/01_flood_susceptibility_ahp_map.png",
          caption: "Illustrative five-tier flood susceptibility map generated via AHP-weighted multi-criteria overlay."
        },
        {
          title: "Topographic Wetness Index (TWI) Surface (Illustrative Sample)",
          src: "04_Flood_Risk_Assessment/maps/02_topographic_wetness_index_twi.png",
          caption: "Illustrative DEM-derived hydrological moisture accumulation surface highlighting low-lying convergence zones."
        }
      ]
    },
    {
      id: "soil-erosion",
      number: "05",
      category: "Watershed & Land Degradation",
      title: "Soil Erosion Assessment",
      description: "Raster-based implementation of the Revised Universal Soil Loss Equation (RUSLE) integrating rainfall erosivity (R), soil erodibility (K), slope length/steepness (LS), cover (C), and support practice (P) factors.",
      software: "ArcGIS Pro (Raster Calculator), QGIS (SAGA GIS Terrain Tools)",
      datasets: "CHIRPS Precipitation, SoilGrids / FAO Soil Texture, SRTM 30m DEM, Sentinel-2 NDVI (Illustrative Placeholders)",
      readmeUrl: "05_Soil_Erosion_Assessment/README.md",
      objectives: [
        "Model spatially distributed RUSLE erosion factors (R, K, LS, C, P) at 30m spatial resolution.",
        "Quantify topographic erosion potential through DEM-derived Slope Length and Steepness (LS) surfaces.",
        "Classify potential annual soil loss (t/ha/yr) into severity tiers from Very Low to Severe.",
        "Identify priority sub-catchments for soil conservation and vegetative buffer interventions."
      ],
      methodology: [
        "Compute rainfall erosivity (R) from gridded precipitation and soil erodibility (K) from topsoil texture fractions.",
        "Derive the dimensionless LS factor from flow accumulation and terrain slope.",
        "Estimate cover management (C) from multispectral NDVI and multiply all factor grids via map algebra.",
        "Produce cartographic layouts for both composite annual soil loss and topographic LS susceptibility."
      ],
      maps: [
        {
          title: "Potential Soil Erosion Risk Map (RUSLE Model) (Illustrative Sample)",
          src: "05_Soil_Erosion_Assessment/maps/01_rusle_soil_loss_erosion_map.png",
          caption: "Illustrative spatial distribution of estimated annual soil loss classified from Very Low (<5 t/ha/yr) to Severe (>50 t/ha/yr)."
        },
        {
          title: "RUSLE Slope Length & Steepness (LS) Factor (Illustrative Sample)",
          src: "05_Soil_Erosion_Assessment/maps/02_rusle_ls_topographic_factor.png",
          caption: "Illustrative continuous topographic erosion potential surface computed from a 30m Digital Elevation Model."
        }
      ]
    },
    {
      id: "other-geospatial-maps",
      number: "06",
      category: "Foundational Cartography & RS",
      title: "Other Geospatial & Remote Sensing Maps",
      description: "A curated collection of foundational cartographic and Earth Observation outputs including Study Area context maps, supervised LULC classifications, SRTM DEM relief, Slope gradients, NDVI, and NDWI.",
      software: "QGIS 3.34 LTR, ArcGIS Pro 3.x, Google Earth Engine, SNAP",
      datasets: "Sentinel-2 Level-2A (10m), SRTM 30m DEM, Administrative & Sub-Basin Vectors (Illustrative Placeholders)",
      readmeUrl: "06_Other_Geospatial_Maps/README.md",
      objectives: [
        "Demonstrate clean base-map hierarchy for Study Area Location & Administrative Context maps.",
        "Execute supervised Random Forest classification for multi-class Land Use/Land Cover mapping.",
        "Derive geomorphometric elevation (DEM) and slope gradient surfaces for terrain characterization.",
        "Compute spectral vegetation (NDVI) and surface water (NDWI) indices from multispectral bands."
      ],
      methodology: [
        "Standardize map frames, graticules, locator insets, and scale bars across diverse thematic layers.",
        "Train and validate supervised LULC classifiers on cloud-masked multispectral composites.",
        "Apply hypsometric color ramps to elevation surfaces and classify planar slope in degrees.",
        "Compute normalized band ratios (NDVI and NDWI) with diverging scientific color schemes."
      ],
      maps: [
        {
          title: "Study Area Location & Administrative Context Map (Illustrative Sample)",
          src: "06_Other_Geospatial_Maps/Study_Area_Maps/study_area_location_map.png",
          caption: "Illustrative base map showing sub-basin divisions, reference stations, coordinate grid, and regional locator."
        },
        {
          title: "Land Use / Land Cover (LULC) Classification Map (Illustrative Sample)",
          src: "06_Other_Geospatial_Maps/LULC_Maps/lulc_supervised_classification.png",
          caption: "Illustrative five-class supervised Land Use / Land Cover map derived from multispectral satellite imagery."
        },
        {
          title: "Digital Elevation Model (DEM) & Hypsometric Relief (Illustrative Sample)",
          src: "06_Other_Geospatial_Maps/Terrain_Maps/dem_elevation_model.png",
          caption: "Illustrative 30m Digital Elevation Model styled with hypsometric tinting and elevation contours."
        },
        {
          title: "Terrain Slope Gradient Classification (Degrees) (Illustrative Sample)",
          src: "06_Other_Geospatial_Maps/Terrain_Maps/terrain_slope_degrees.png",
          caption: "Illustrative geomorphometric slope classification ranging from Flat/Gentle (0°–2°) to Steep Escarpments (>22°)."
        },
        {
          title: "Normalized Difference Vegetation Index (NDVI) (Illustrative Sample)",
          src: "06_Other_Geospatial_Maps/Vegetation_Maps/ndvi_vegetation_vigor.png",
          caption: "Illustrative multispectral NDVI surface highlighting photosynthetic canopy vigor and biomass gradients."
        },
        {
          title: "Normalized Difference Water Index (NDWI) (Illustrative Sample)",
          src: "06_Other_Geospatial_Maps/Vegetation_Maps/ndwi_surface_water_index.png",
          caption: "Illustrative NDWI surface delineating open water bodies, wetlands, and moisture-rich riparian zones."
        }
      ]
    }
  ]
};

/* ============================================================================
   PORTFOLIO RENDERING & INTERACTIVE STATIC PNG VIEWER LOGIC
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Populate Profile, Hero, Stats, Skills, and Contact Info
  const { profile, contact, skills, projects } = PORTFOLIO_CONFIG;

  document.getElementById("nav-author-name").textContent = profile.authorName;
  document.getElementById("hero-specialisation").textContent = profile.specialisation;
  document.getElementById("hero-title").textContent = profile.heroTitle;
  document.getElementById("hero-bio").textContent = profile.bio;

  const navGithub = document.getElementById("nav-github-link");
  const heroRepoBtn = document.getElementById("hero-repo-btn");
  navGithub.href = contact.repositoryUrl;
  heroRepoBtn.href = contact.repositoryUrl;

  const featuredImg = document.getElementById("hero-featured-img");
  featuredImg.src = profile.featuredMap.src;
  featuredImg.alt = profile.featuredMap.title;
  document.getElementById("hero-featured-title").textContent = profile.featuredMap.title;
  document.getElementById("hero-featured-meta").textContent = profile.featuredMap.meta;

  document.getElementById("hero-featured-preview").addEventListener("click", () => {
    openLightbox([{
      title: profile.featuredMap.title,
      src: profile.featuredMap.src,
      caption: profile.featuredMap.meta
    }], 0);
  });

  // Stats Bar
  const statsBar = document.getElementById("stats-bar");
  statsBar.innerHTML = profile.stats.map(s => `
    <div class="stat-item">
      <span class="stat-value">${escapeHtml(s.value)}</span>
      <span class="stat-label">${escapeHtml(s.label)}</span>
    </div>
  `).join("");

  // Skills Grid
  const skillsGrid = document.getElementById("skills-grid");
  skillsGrid.innerHTML = skills.map(group => `
    <div class="skill-card">
      <h3>${escapeHtml(group.domain)}</h3>
      <ul class="skill-list">
        ${group.items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>
  `).join("");

  // Contact Links
  const contactLinks = document.getElementById("contact-links");
  contactLinks.innerHTML = `
    <a class="contact-pill" href="mailto:${escapeHtml(contact.email)}">&#9993; ${escapeHtml(contact.email)}</a>
    <a class="contact-pill" href="${escapeHtml(contact.githubProfileUrl)}" target="_blank" rel="noopener noreferrer">GitHub Profile &nearr;</a>
    <a class="contact-pill" href="${escapeHtml(contact.linkedinUrl)}" target="_blank" rel="noopener noreferrer">LinkedIn &nearr;</a>
    <span class="contact-pill">&#128205; ${escapeHtml(contact.location)}</span>
  `;

  // Footer
  document.getElementById("footer-year").textContent = new Date().getFullYear();
  document.getElementById("footer-name").textContent = profile.authorName;

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mainNav = document.getElementById("main-nav");
  mobileBtn.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    mobileBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // 2. Render Category Filters & Project Cards
  const filterContainer = document.getElementById("category-filters");
  const projectsGrid = document.getElementById("projects-grid");
  const categories = ["All Projects", ...new Set(projects.map(p => p.category))];
  let activeCategory = "All Projects";

  function renderFilters() {
    filterContainer.innerHTML = categories.map(cat => `
      <button type="button" class="filter-btn ${cat === activeCategory ? "active" : ""}" data-category="${escapeHtml(cat)}">
        ${escapeHtml(cat)}
      </button>
    `).join("");

    filterContainer.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        activeCategory = btn.getAttribute("data-category");
        renderFilters();
        renderProjects();
      });
    });
  }

  function renderProjects() {
    const filtered = activeCategory === "All Projects"
      ? projects
      : projects.filter(p => p.category === activeCategory);

    projectsGrid.innerHTML = filtered.map(proj => {
      const thumbMap = proj.maps[0] || { src: "", title: proj.title };
      const toolPills = proj.software.split(",").slice(0, 3).map(t => `<span class="tech-pill">${escapeHtml(t.trim())}</span>`).join("");
      return `
        <article class="project-card">
          <div class="card-thumb-wrap" data-project-id="${escapeHtml(proj.id)}" data-action="zoom-first" title="Click to preview map">
            <span class="card-number-tag">Project ${escapeHtml(proj.number)}</span>
            <img src="${escapeHtml(thumbMap.src)}" alt="${escapeHtml(thumbMap.title)}" loading="lazy" />
            <span class="card-map-count">${proj.maps.length} PNG Map${proj.maps.length > 1 ? "s" : ""}</span>
          </div>
          <div class="card-body">
            <div class="card-category">${escapeHtml(proj.category)}</div>
            <h3 class="card-title">${escapeHtml(proj.title)}</h3>
            <p class="card-desc">${escapeHtml(proj.description)}</p>
            <div class="card-tags">${toolPills}</div>
            <div class="card-actions">
              <button type="button" class="btn-card-primary" data-project-id="${escapeHtml(proj.id)}" data-action="open-details">
                View Project &amp; Maps
              </button>
              <button type="button" class="btn-card-quickzoom" data-project-id="${escapeHtml(proj.id)}" data-action="zoom-first" title="Enlarge sample map">
                &#128269; Zoom
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");

    projectsGrid.querySelectorAll("[data-action='open-details']").forEach(el => {
      el.addEventListener("click", () => openProjectModal(el.getAttribute("data-project-id")));
    });

    projectsGrid.querySelectorAll("[data-action='zoom-first']").forEach(el => {
      el.addEventListener("click", () => {
        const proj = projects.find(p => p.id === el.getAttribute("data-project-id"));
        if (proj && proj.maps.length) {
          openLightbox(proj.maps, 0);
        }
      });
    });
  }

  renderFilters();
  renderProjects();

  // 3. Project Details Modal Logic
  const projectModal = document.getElementById("project-modal");
  const closeProjectModalBtn = document.getElementById("close-project-modal");

  function openProjectModal(projectId) {
    const proj = projects.find(p => p.id === projectId);
    if (!proj) return;

    document.getElementById("modal-category").textContent = `Project ${proj.number} • ${proj.category}`;
    document.getElementById("modal-project-title").textContent = proj.title;
    document.getElementById("modal-overview").textContent = proj.description;
    document.getElementById("modal-software").textContent = proj.software;
    document.getElementById("modal-datasets").textContent = proj.datasets;
    document.getElementById("modal-readme-link").href = proj.readmeUrl;

    document.getElementById("modal-objectives").innerHTML = proj.objectives
      .map(o => `<li>${escapeHtml(o)}</li>`).join("");
    document.getElementById("modal-methodology").innerHTML = proj.methodology
      .map(m => `<li>${escapeHtml(m)}</li>`).join("");

    const mapsGrid = document.getElementById("modal-maps-grid");
    mapsGrid.innerHTML = proj.maps.map((m, idx) => `
      <div class="modal-map-card" data-map-index="${idx}" role="button" tabindex="0">
        <img src="${escapeHtml(m.src)}" alt="${escapeHtml(m.title)}" />
        <div class="modal-map-info">
          <strong>${escapeHtml(m.title)}</strong>
          <p>${escapeHtml(m.caption)}</p>
        </div>
      </div>
    `).join("");

    mapsGrid.querySelectorAll(".modal-map-card").forEach(card => {
      const idx = Number(card.getAttribute("data-map-index"));
      card.addEventListener("click", () => openLightbox(proj.maps, idx));
      card.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(proj.maps, idx);
        }
      });
    });

    projectModal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeProjectModal() {
    projectModal.hidden = true;
    if (lightbox.hidden) {
      document.body.style.overflow = "";
    }
  }

  closeProjectModalBtn.addEventListener("click", closeProjectModal);
  projectModal.addEventListener("click", e => {
    if (e.target === projectModal) closeProjectModal();
  });

  // 4. Static PNG Lightbox Viewer (Zoom, Pan, Fullscreen, Prev/Next)
  const lightbox = document.getElementById("map-lightbox");
  const lbImg = document.getElementById("lb-img");
  const lbTitle = document.getElementById("lb-title");
  const lbCounter = document.getElementById("lb-counter");
  const lbCaption = document.getElementById("lb-caption");
  const lbZoomLabel = document.getElementById("lb-zoom-label");
  const lbWrapper = document.getElementById("lb-image-wrapper");

  let lbMaps = [];
  let lbIndex = 0;
  let zoomScale = 1;
  let panX = 0;
  let panY = 0;
  let isDragging = false;
  let startX = 0;
  let startY = 0;

  function applyTransform() {
    lbImg.style.transform = `translate(${panX}px, ${panY}px) scale(${zoomScale})`;
    lbZoomLabel.textContent = `${Math.round(zoomScale * 100)}%`;
  }

  function resetZoom() {
    zoomScale = 1;
    panX = 0;
    panY = 0;
    applyTransform();
  }

  function updateLightboxSlide() {
    const item = lbMaps[lbIndex];
    if (!item) return;
    resetZoom();
    lbImg.src = item.src;
    lbImg.alt = item.title;
    lbTitle.textContent = item.title;
    lbCounter.textContent = `Map ${lbIndex + 1} of ${lbMaps.length}`;
    lbCaption.textContent = item.caption || "";
    document.getElementById("lb-prev").style.display = lbMaps.length > 1 ? "block" : "none";
    document.getElementById("lb-next").style.display = lbMaps.length > 1 ? "block" : "none";
  }

  function openLightbox(mapsArray, startIndex = 0) {
    lbMaps = mapsArray;
    lbIndex = startIndex;
    updateLightboxSlide();
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    lightbox.hidden = true;
    if (projectModal.hidden) {
      document.body.style.overflow = "";
    }
  }

  document.getElementById("lb-close").addEventListener("click", closeLightbox);
  document.getElementById("lb-prev").addEventListener("click", () => {
    lbIndex = (lbIndex - 1 + lbMaps.length) % lbMaps.length;
    updateLightboxSlide();
  });
  document.getElementById("lb-next").addEventListener("click", () => {
    lbIndex = (lbIndex + 1) % lbMaps.length;
    updateLightboxSlide();
  });

  document.getElementById("lb-zoom-in").addEventListener("click", () => {
    zoomScale = Math.min(4, +(zoomScale + 0.35).toFixed(2));
    applyTransform();
  });

  document.getElementById("lb-zoom-out").addEventListener("click", () => {
    zoomScale = Math.max(0.75, +(zoomScale - 0.35).toFixed(2));
    if (zoomScale === 1) { panX = 0; panY = 0; }
    applyTransform();
  });

  document.getElementById("lb-zoom-reset").addEventListener("click", resetZoom);

  document.getElementById("lb-fullscreen").addEventListener("click", () => {
    if (!document.fullscreenElement) {
      lightbox.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  });

  // Mouse wheel zoom inside lightbox
  lbWrapper.addEventListener("wheel", e => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.2 : -0.2;
    zoomScale = Math.min(4, Math.max(0.75, +(zoomScale + delta).toFixed(2)));
    if (zoomScale <= 1) { panX = 0; panY = 0; }
    applyTransform();
  }, { passive: false });

  // Panning when zoomed
  lbWrapper.addEventListener("mousedown", e => {
    if (zoomScale <= 1) return;
    isDragging = true;
    startX = e.clientX - panX;
    startY = e.clientY - panY;
  });

  window.addEventListener("mousemove", e => {
    if (!isDragging) return;
    panX = e.clientX - startX;
    panY = e.clientY - startY;
    applyTransform();
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Keyboard shortcuts
  document.addEventListener("keydown", e => {
    if (!lightbox.hidden) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight" && lbMaps.length > 1) {
        lbIndex = (lbIndex + 1) % lbMaps.length;
        updateLightboxSlide();
      }
      if (e.key === "ArrowLeft" && lbMaps.length > 1) {
        lbIndex = (lbIndex - 1 + lbMaps.length) % lbMaps.length;
        updateLightboxSlide();
      }
      if (e.key === "+" || e.key === "=") {
        zoomScale = Math.min(4, +(zoomScale + 0.35).toFixed(2));
        applyTransform();
      }
      if (e.key === "-") {
        zoomScale = Math.max(0.75, +(zoomScale - 0.35).toFixed(2));
        applyTransform();
      }
    } else if (!projectModal.hidden && e.key === "Escape") {
      closeProjectModal();
    }
  });

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
});

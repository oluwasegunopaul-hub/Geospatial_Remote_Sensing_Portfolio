# Remote Sensing & GIS Cartographic Portfolio

![Portfolio Banner](assets/portfolio-images/portfolio_banner.png)



---

## Overview

Welcome to my **Remote Sensing & Geographic Information Systems (GIS) Portfolio**. This repository is structured specifically around **high-resolution static PNG map exports** produced in **ArcGIS Pro** and **ARCMAP**, eliminating the need to upload large raw shapefiles, geodatabases, or multi-gigabyte GeoTIFF rasters to GitHub.



---

## Repository Directory Structure

```text
geospatial-remote-sensing-portfolio/
│
├── README.md                                  # Main repository documentation & overview
├── DEPLOYMENT_AND_EDITING_GUIDE.md            # Step-by-step GitHub Pages & editing manual
├── index.html                                 # Main responsive portfolio website
├── style.css                                  # Institutional cartographic styling (Navy/Forest/Earth)
├── script.js                                  # Central project configuration & lightbox viewer
│
├── 01_Environmental_Heritage_Assessment/
│   ├── maps/
│   │   ├── 01_unesco_composite_threat_index.png
│   │   └── 02_heritage_buffer_encroachment_change.png
│   ├── README.md
│   └── project_information.md
│
├── 02_Okomu_Poaching_Hotspots/
│   ├── maps/
│   │   ├── 01_okomu_poaching_hotspot_gi_star.png
│   │   └── 02_okomu_patrol_accessibility_surface.png
│   ├── README.md
│   └── project_information.md
│
├── 03_Soil_Fertility_Assessment/
│   ├── maps/
│   │   ├── 01_soil_fertility_index_map.png
│   │   └── 02_soil_ph_organic_carbon_surface.png
│   ├── README.md
│   └── project_information.md
│
├── 04_Flood_Risk_Assessment/
│   ├── maps/
│   │   ├── 01_flood_susceptibility_ahp_map.png
│   │   └── 02_topographic_wetness_index_twi.png
│   ├── README.md
│   └── project_information.md
│
├── 05_Soil_Erosion_Assessment/
│   ├── maps/
│   │   ├── 01_rusle_soil_loss_erosion_map.png
│   │   └── 02_rusle_ls_topographic_factor.png
│   ├── README.md
│   └── project_information.md
│
├── 06_Other_Geospatial_Maps/
│   ├── Study_Area_Maps/
│   │   └── study_area_location_map.png
│   ├── LULC_Maps/
│   │   └── lulc_supervised_classification.png
│   ├── Terrain_Maps/
│   │   ├── dem_elevation_model.png
│   │   └── terrain_slope_degrees.png
│   ├── Vegetation_Maps/
│   │   ├── ndvi_vegetation_vigor.png
│   │   └── ndwi_surface_water_index.png
│   └── README.md
│
└── assets/
    └── portfolio-images/
        └── portfolio_banner.png
```

---

## Featured Project Categories

| # | Project Category | Focus & Techniques | Folder Link |
|---|---|---|---|
| **01** | **Environmental Threats to UNESCO Heritage Sites (SW Nigeria)** | Multi-criteria spatial overlay, buffer encroachment analysis, LULC change detection | [View Project](./01_Environmental_Heritage_Assessment/README.md) |
| **02** | **Poaching Hotspots in Okomu National Park, Nigeria** | Getis-Ord Gi* spatial clustering, Kernel Density Estimation, least-cost patrol modelling | [View Project](./02_Okomu_Poaching_Hotspots/README.md) |
| **03** | **Soil Fertility Assessment** | Geostatistical interpolation (Ordinary Kriging), soil nutrient & pH index mapping | [View Project](./03_Soil_Fertility_Assessment/README.md) |
| **04** | **Flood Risk Assessment** | Analytical Hierarchy Process (AHP), Topographic Wetness Index (TWI), hydrological modelling | [View Project](./04_Flood_Risk_Assessment/README.md) |
| **05** | **Soil Erosion Assessment** | Revised Universal Soil Loss Equation (RUSLE), R, K, LS, C, and P factor raster modelling | [View Project](./05_Soil_Erosion_Assessment/README.md) |
| **06** | **Other Geospatial & Remote Sensing Maps** | Study area maps, Random Forest LULC, SRTM DEM, Slope, NDVI, and NDWI outputs | [View Gallery](./06_Other_Geospatial_Maps/README.md) |

---

## Sample Cartographic Previews

### 01. UNESCO Heritage Environmental Threat Index (Illustrative Sample)
![UNESCO Threat Sample](01_Environmental_Heritage_Assessment/maps/01_unesco_composite_threat_index.png)

### 02. Okomu National Park Poaching Hotspot Analysis (Illustrative Sample)
![Okomu Hotspot Sample](02_Okomu_Poaching_Hotspots/maps/01_okomu_poaching_hotspot_gi_star.png)

### 04. Multi-Criteria Flood Susceptibility Zonation (Illustrative Sample)
![Flood Risk Sample](04_Flood_Risk_Assessment/maps/01_flood_susceptibility_ahp_map.png)

---

## Quick Customisation Guide

1. **Replace Sample PNGs:** Export your map from ArcGIS Pro or QGIS at **300 DPI (PNG format)** and overwrite the matching file inside the project's `maps/` directory—or add a new file name and update `script.js`.
2. **Edit Website Content:** Open `script.js` and edit the `PORTFOLIO_CONFIG` object at the top of the file to update your name, bio, skills, contact links, map paths, and captions without touching HTML or CSS.
3. **Publish Online:** Push the repository to GitHub and turn on **GitHub Pages** under `Settings > Pages > Deploy from branch (main)`. See [`DEPLOYMENT_AND_EDITING_GUIDE.md`](./DEPLOYMENT_AND_EDITING_GUIDE.md) for complete step-by-step instructions.

---

## Author & Contact

- **Name:** `[Your Full Name]`
- **Qualification:** B.Sc. / M.Sc. Remote Sensing & Geographic Information Systems
- **Core Tools:** ArcGIS Pro, QGIS, Google Earth Engine (GEE), ERDAS IMAGINE, Python (GeoPandas/Rasterio), R
- **GitHub:** `https://github.com/<your-username>`
- **Email:** `[your.email@example.com]`

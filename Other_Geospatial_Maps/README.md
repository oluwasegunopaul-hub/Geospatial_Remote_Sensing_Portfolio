# Other Geospatial & Remote Sensing Thematic Maps



---

## 1. Overview
Beyond single-topic research projects, a strong Remote Sensing and GIS portfolio demonstrates mastery of core cartographic, terrain, land-cover, and spectral index workflows. This directory organizes foundational spatial outputs into dedicated thematic subfolders.

## 2. Objectives
- Demonstrate clean cartographic design for **Study Area Location & Context Maps**.
- Showcase supervised multispectral classification workflows for **Land Use / Land Cover (LULC)** mapping.
- Derive geomorphometric terrain parameters (**DEM** and **Slope**) from elevation datasets.
- Compute and visualize optical spectral indices (**NDVI** and **NDWI**) for vegetation vigor and surface water delineation.


## 4. Data Sources 
- **Optical Multispectral Imagery:** Sentinel-2 Level-2A (10m) & Landsat 8/9 OLI (30m)
- **Elevation Dataset:** SRTM 1 Arc-Second Global (30m) Digital Elevation Model
- **Administrative & Reference Vectors:** Grid3

## 5. Software Used
- Arcmap/ArcGIS Pro, Google Earth Engine (GEE)

## 6. Methodology
1. **Base Cartography (Study Area):** Hierarchical symbolization of administrative boundaries, hydrological features, reference stations, and regional locator insets.
2. **LULC Classification:** Training sample collection
3. **Terrain Analysis:** DEM sink filling, and planar/geodesic slope computation in degrees.
4. **Spectral Index Modelling:** Band arithmetic ($NDVI = (NIR - Red)/(NIR + Red)$; $NDWI = (Green - NIR)/(Green + NIR)$) with standardized diverging color ramps.

## 7. Maps Produced
| Subfolder | Filename | Thematic Output |
|---|---|---|
| `Study_Area_Maps/` | `study_area_location_map.png` | Study Area Location & Administrative Context Map |
| `LULC_Maps/` | `lulc_supervised_classification.png` | Supervised Land Use / Land Cover Classification |
| `Terrain_Maps/` | `dem_elevation_model.png` | Digital Elevation Model (DEM) |
| `Terrain_Maps/` | `terrain_slope_degrees.png` | Terrain Slope Gradient Classification (Degrees) |
| `Vegetation_Maps/` | `ndvi_vegetation_vigor.png` | Normalized Difference Vegetation Index (NDVI) |
| `Vegetation_Maps/` | `ndwi_surface_water_index.png` | Normalized Difference Water Index (NDWI) |

## 8. Map Preview Gallery

### Study Area Location & Administrative Context Map
![Study Area Map](Study_Area_Maps/study_area_location_map.png)

### Land Use / Land Cover (LULC) Classification Map 
![LULC Map](LULC_Maps/lulc_supervised_classification.png)

### Digital Elevation Model (DEM)
![DEM Map](Terrain_Maps/dem_elevation_model.png)

### Terrain Slope Gradient Classification 
![Slope Map](Terrain_Maps/terrain_slope_degrees.png)

### Normalized Difference Vegetation Index (NDVI) 
![NDVI Map](Vegetation_Maps/ndvi_vegetation_vigor.png)

### Normalized Difference Water Index (NDWI) 
![NDWI Map](Vegetation_Maps/ndwi_surface_water_index.png)



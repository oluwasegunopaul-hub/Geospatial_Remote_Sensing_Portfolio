# Impacts of Climate Change and Public Perception on Oil Palm Production in Ekiti State, Nigeria

[![Project Category](https://img.shields.io/badge/Domain-Remote%20Sensing%20%26%20GIS-2E7D32)](#)
[![Application](https://img.shields.io/badge/Focus-Agro--Climatology%20%26%20LULC-1565C0)](#)
[![GIS Platform](https://img.shields.io/badge/GIS%20Platform-ArcGIS%2010.7.1-6A1B9A)](#)
[![Study Area](https://img.shields.io/badge/Study%20Area-Ekiti%20State%2C%20Nigeria-EF6C00)](#)

---

## Table of Contents
- [Project Overview](#project-overview)
- [Research Objectives](#research-objectives)
- [Study Area](#study-area)
- [Data Sources and Datasets](#data-sources-and-datasets)
- [Software and Technologies](#software-and-technologies)
- [Methodology](#methodology)
- [Maps and Cartographic Outputs](#maps-and-cartographic-outputs)
- [Results and Key Findings](#results-and-key-findings)
- [Discussion](#discussion)
- [Research Limitations](#research-limitations)
- [Conclusion and Recommendations](#conclusion-and-recommendations)
- [Repository Structure](#repository-structure)
- [Author and Project Information](#author-and-project-information)

---

## Project Overview

Oil palm (*Elaeis guineensis*) is a vital perennial cash crop in Ekiti State, southwestern Nigeria, whose physiological development, canopy vigor, and fruit yield depend heavily on stable thermal and hydrological regimes as well as available agricultural land. Over recent decades, changing climatic conditions—characterized by rising temperatures, fluctuating precipitation patterns, and shifts in atmospheric moisture—alongside rapid urban expansion have introduced compounding environmental pressures on agricultural landscapes.

This project integrates **Remote Sensing (RS)**, **Geographic Information System (GIS)** spatial analysis, and **multi-decadal agro-climatic time-series modeling** to evaluate environmental and climatic changes affecting oil palm production across **Ado-Ekiti** and **Ikere** Local Government Areas (LGAs) in Ekiti State, Nigeria. Using multi-temporal **Landsat 8 Operational Land Imager (OLI)** imagery ($30\text{ m}$ resolution) for **2014** and **2024**, spatial distribution maps were generated for the Normalized Difference Vegetation Index ($\text{NDVI}$), Enhanced Vegetation Index ($\text{EVI}$), Land Surface Temperature ($\text{LST}$), Normalized Difference Water Index ($\text{NDWI}$), and Land Use and Land Cover ($\text{LULC}$). These decadal spatial assessments were combined with a 30-year (**1994–2024**) climatic record from the **ECMWF ERA-Interim** archive covering rainfall, maximum and minimum temperatures ($T_{\max}$, $T_{\min}$), incident solar radiation, relative humidity ($\text{RH}$), and wind speed.

The primary purpose of this analysis is to quantify decadal land-cover transformation, surface warming, vegetation stress, and long-term climatic anomalies, providing an empirical geospatial baseline to support climate-resilient oil palm management and agricultural land-use planning in Ekiti State.

> **Documentation Note:** The geospatial and climatic analyses documented below reflect the technical chapters provided in the source manuscript. Sections covering the introductory problem statement, formal research objectives, public perception survey methodology/results, and final recommendations include clearly marked placeholders (`[Information to be provided]`) where those chapters were omitted from the uploaded excerpt.

---

## Research Objectives

**Research Aim:**  
`[Information to be provided — insert the exact overarching aim statement from Chapter One of your manuscript]`

**Specific Objectives:**
1. Assess decadal spatial and temporal variations in vegetation health and canopy vigor ($2014$ vs. $2024$) across Ado-Ekiti and Ikere LGAs using Landsat 8-derived $\text{NDVI}$ and $\text{EVI}$.
2. Quantify decadal changes in Land Surface Temperature ($\text{LST}$) and landscape moisture conditions ($\text{NDWI}$) between $2014$ and $2024$ to evaluate thermal and water stress on vegetated and agricultural zones.
3. Map Land Use and Land Cover ($\text{LULC}$) transitions between $2014$ and $2024$ to examine urban encroachment and land competition affecting vegetation and oil palm cultivation areas.
4. Analyze 30-year ($1994\text{--}2024$) historical trends and standardized anomalies in rainfall, temperature ($T_{\max}$ and $T_{\min}$), solar radiation, relative humidity, and wind speed.
5. `[Information to be provided — insert the specific objective(s) addressing public/farmer perception of climate change impacts on oil palm production]`

---

## Study Area

The study area comprises **Ado-Ekiti** and **Ikere** Local Government Areas (LGAs) in **Ekiti State, southwestern Nigeria**.

* **Geographic Coordinates:** Approximately Latitudes $7^\circ 26'\text{ N}$ to $7^\circ 40'\text{ N}$ and Longitudes $5^\circ 07'\text{ E}$ to $5^\circ 24'\text{ E}$
* **Administrative Context:** Encompasses Ado-Ekiti LGA (the state capital in the northern sector of the study area) and contiguous Ikere LGA (in the southern sector), situated within central-southern Ekiti State.
* **Total Study Area Extent:** `[Information to be provided — e.g., total area in km² or hectares]`
* **Climate & Agro-Ecological Context:** Tropical climate supporting dense forest vegetation and perennial cash-crop agriculture, notably oil palm plantations. Settlement and built-up infrastructure are concentrated in the northwestern (Ado-Ekiti) and south-central (Ikere) urban corridors, surrounded by vegetated agricultural belts in the eastern, central, and southern sectors.

### Study Area Reference Map
![Study Area Map of Ado-Ekiti and Ikere LGAs, Ekiti State](maps/01_study_area_map.png)
*Figure 1: Geographical location of the study area (Ado-Ekiti and Ikere LGAs) within Ekiti State and Nigeria.*

---

## Data Sources and Datasets

| Dataset | Source | Acquisition Year / Period | Spatial Resolution | Application in the Research |
| :--- | :--- | :--- | :--- | :--- |
| **Landsat 8 OLI Satellite Imagery** | United States Geological Survey (USGS EarthExplorer) | $2014$ and $2024$ *(exact scene dates `[To be provided]`)* | $30\text{ m} \times 30\text{ m}$ | Derivation of $\text{NDVI}$, $\text{EVI}$, $\text{LST}$ (Band 10 thermal infrared), $\text{NDWI}$, and $\text{LULC}$ classification maps for $2014$ and $2024$. |
| **Annual Rainfall Data** | European Centre for Medium-Range Weather Forecasts (ECMWF) — ERA-Interim | $1994\text{--}2024$ (and $2014$, $2024$ spatial layers) | `[Information to be provided]` | 30-year annual precipitation and standardized anomaly analysis ($1994\text{--}2024$) and spatial rainfall distribution mapping ($2014$ and $2024$). |
| **Temperature Data ($T_{\max}$ & $T_{\min}$)** | ECMWF — ERA-Interim | $1994\text{--}2024$ | `[Information to be provided]` | Multi-decadal time-series and standardized anomaly analysis of annual highest ($T_{\max}$) and lowest ($T_{\min}$) temperatures. |
| **Incident Solar Radiation Data** | ECMWF — ERA-Interim | $1994\text{--}2024$ | `[Information to be provided]` | Assessment of 30-year temporal variability in annual surface solar radiation ($\text{J m}^{-2}$). |
| **Relative Humidity ($\text{RH}$) Data** | ECMWF — ERA-Interim | $1994\text{--}2024$ | `[Information to be provided]` | Trend evaluation of annual lowest and highest relative humidity ($\%$) and atmospheric evaporative demand. |
| **Wind Speed Data** | ECMWF — ERA-Interim | $1994\text{--}2024$ | `[Information to be provided]` | Evaluation of inter-annual variations in annual wind speed ($\text{m s}^{-1}$) and boundary-layer evapotranspiration effects. |
| **Administrative Boundary Shapefiles** | `[Information to be provided]` | `[Information to be provided]` | Vector | Spatial delineation of Nigeria states, Ekiti State, and Ado-Ekiti / Ikere LGA boundaries. |
| **Public Perception Survey Data** | `[Information to be provided]` | `[Information to be provided]` | Field / Survey | `[Information to be provided — questionnaire/interview dataset on farmer and public perceptions]` |

---

## Software and Technologies

The spatial analysis, remote sensing index computation, climatic charting, and cartographic visualization workflows were executed using the following tools:

* **ArcGIS 10.7.1:** Primary GIS and remote sensing platform used for raster band math ($\text{NDVI}$, $\text{EVI}$, $\text{NDWI}$, and thermal $\text{LST}$ retrieval), Land Use and Land Cover ($\text{LULC}$) classification, spatial rainfall mapping, clipping to study area boundaries, and cartographic map layout production.
* **Microsoft Excel:** Used for organizing 30-year ($1994\text{--}2024$) ECMWF ERA-Interim climatic datasets, computing standardized climatic anomalies, and producing statistical time-series charts.

---

## Methodology

### Workflow Architecture

```mermaid
flowchart TD
    A[USGS Landsat 8 OLI Imagery: 2014 & 2024 - 30m] --> B[Study Area Clipping & Preprocessing]
    B --> C["Vegetation Indices: NDVI & EVI"]
    B --> D["Water Index: NDWI"]
    B --> E["Thermal Retrieval (Band 10): TOA -> BT -> Pv -> Emissivity -> LST"]
    B --> F["LULC Classification (4 Classes)"]

    G[ECMWF ERA-Interim Climatic Data: 1994-2024] --> H[Excel Time-Series & Standardized Anomaly Analysis]
    G --> I[Spatial Rainfall Mapping: 2014 & 2024]

    C & D & E & F & I --> J[Decadal Spatial Comparison & Cartographic Map Production in ArcGIS 10.7.1]
    H & J --> K[Integrated Assessment of Climatic & Environmental Stress on Oil Palm Production]
```

### 1. Data Acquisition and Preprocessing
Multi-temporal **Landsat 8 OLI** scenes ($30\text{ m} \times 30\text{ m}$ spatial resolution) for **2014** and **2024** were downloaded from the USGS EarthExplorer repository, and 30-year (**1994–2024**) climatic records (annual rainfall, temperature, relative humidity, solar radiation, and wind speed) were obtained from the **ECMWF ERA-Interim** archive. Satellite raster bands were clipped to the administrative boundary of Ado-Ekiti and Ikere LGAs within **ArcGIS 10.7.1**.

### 2. Vegetation Indices ($\text{NDVI}$ and $\text{EVI}$)
To evaluate vegetation condition, canopy density, and spatial-temporal stress across oil palm plantations and surrounding land cover, two spectral vegetation indices were derived in ArcGIS 10.7.1 for $2014$ and $2024$:

* **Normalized Difference Vegetation Index ($\text{NDVI}$):** Computed from Near-Infrared (Band 5) and Red (Band 4) surface/top-of-atmosphere reflectance:

$$\text{NDVI} = \frac{\text{NIR} - \text{RED}}{\text{NIR} + \text{RED}} = \frac{\text{Band 5} - \text{Band 4}}{\text{Band 5} + \text{Band 4}}$$

* **Enhanced Vegetation Index ($\text{EVI}$):** Derived using the Blue, Red, and Near-Infrared spectral bands to minimize soil background brightness and atmospheric interference while maintaining sensitivity over high-biomass canopies such as mature oil palm stands and dense forest cover.

### 3. Normalized Difference Water Index ($\text{NDWI}$)
$\text{NDWI}$ rasters were generated in ArcGIS 10.7.1 for $2014$ and $2024$ to assess vegetation water content, canopy hydration, and spatial patterns of landscape moisture deficit.

### 4. Land Surface Temperature ($\text{LST}$) Retrieval
Land Surface Temperature ($^\circ\text{C}$) was retrieved from Landsat 8 thermal infrared data (**Band 10**) and optical bands (**Band 4** and **Band 5**) for $2014$ and $2024$ using the following four-stage radiative transfer procedure:

1. **Top of Atmosphere ($\text{TOA}$) Spectral Radiance ($L$):**

$$L = M_L \times Q_{\text{cal}} + A_L$$

where $M_L$ is the band-specific multiplicative rescaling factor (`RADIANCE_MULT_BAND_10`), $Q_{\text{cal}}$ corresponds to quantized pixel values of Band 10, and $A_L$ is the band-specific additive rescaling factor (`RADIANCE_ADD_BAND_10`).

2. **Brightness Temperature ($BT$, in $^\circ\text{C}$):**

$$BT = \frac{K_2}{\ln\left(\frac{K_1}{L}\right) + 1} - 273.15$$

where $K_1$ (`K1_CONSTANT_BAND_10`) and $K_2$ (`K2_CONSTANT_BAND_10`) are band-specific thermal conversion constants obtained from the Landsat metadata file.

3. **Proportion of Vegetation ($P_v$) and Land Surface Emissivity ($\varepsilon$):**

$$P_v = \left(\frac{\text{NDVI} - \text{NDVI}_{\min}}{\text{NDVI}_{\max} - \text{NDVI}_{\min}}\right)^2$$

$$\varepsilon = 0.004 \times P_v + 0.986$$

4. **Land Surface Temperature ($\text{LST}$, in $^\circ\text{C}$):**

$$\text{LST} = \frac{BT}{1 + \left(\frac{0.00115 \times BT}{1.4388}\right) \times \ln(\varepsilon)}$$

### 5. Land Use and Land Cover ($\text{LULC}$) Classification and Spatial Rainfall Mapping
* **LULC Classification:** The $2014$ and $2024$ Landsat 8 OLI images were classified in ArcGIS 10.7.1 into four discrete land-cover categories: `Water body`, `Vegetation`, `Built-up Area`, and `Bare land` *(Classification algorithm and accuracy assessment metrics: `[Information to be provided]`)*.
* **Spatial Rainfall Mapping:** Continuous rainfall distribution maps ($\text{mm}$) were generated for $2014$ and $2024$ in ArcGIS 10.7.1 and categorized into five precipitation intervals.

### 6. Multi-Decadal Climatic Time-Series and Anomaly Analysis
Historical annual climatic variables from ECMWF ERA-Interim ($1994\text{--}2024$) were compiled in **Microsoft Excel**. Standardized anomalies were calculated relative to the 30-year long-term mean for annual rainfall, maximum temperature ($T_{\max}$), and minimum temperature ($T_{\min}$), alongside multi-decadal trend evaluations for incident solar radiation ($\text{J m}^{-2}$), minimum and maximum relative humidity ($\%$), and wind speed ($\text{m s}^{-1}$).

---

## Maps and Cartographic Outputs

### Map Inventory

| No. | Map Title | Paper Figure Ref. | Suggested Filename | Category |
| :---: | :--- | :---: | :--- | :--- |
| 1 | Study Area Map (Ado-Ekiti & Ikere LGAs) | Study Area | `01_study_area_map.png` | Reference |
| 2 | 2014 NDVI Map of the Study Area | Fig. 4.1a | `02_ndvi_2014_map.png` | Vegetation Index |
| 3 | 2024 NDVI Map of the Study Area | Fig. 4.1b | `03_ndvi_2024_map.png` | Vegetation Index |
| 4 | 2014 EVI Map of the Study Area | Fig. 4.2a | `04_evi_2014_map.png` | Vegetation Index |
| 5 | 2024 EVI Map of the Study Area | Fig. 4.2b | `05_evi_2024_map.png` | Vegetation Index |
| 6 | 2014 Land Surface Temperature (LST) Map | Fig. 4.3a | `06_lst_2014_map.png` | Thermal Analysis |
| 7 | 2024 Land Surface Temperature (LST) Map | Fig. 4.3b | `07_lst_2024_map.png` | Thermal Analysis |
| 8 | 2014 NDWI Map of the Study Area | Fig. 4.4a | `08_ndwi_2014_map.png` | Moisture / Water Index |
| 9 | 2024 NDWI Map of the Study Area | Fig. 4.4b | `09_ndwi_2024_map.png` | Moisture / Water Index |
| 10 | 2014 Rainfall Distribution Map | Fig. 4.5a | `10_rainfall_2014_map.png` | Climatic Spatial |
| 11 | 2024 Rainfall Distribution Map | Fig. 4.5b | `11_rainfall_2024_map.png` | Climatic Spatial |
| 12 | 2014 Land Use / Land Cover (LULC) Map | Fig. 4.6a | `12_lulc_2014_map.png` | Thematic Classification |
| 13 | 2024 Land Use / Land Cover (LULC) Map | Fig. 4.6b | `13_lulc_2024_map.png` | Thematic Classification |

---

### Cartographic Gallery & Technical Descriptions

#### 1. Normalized Difference Vegetation Index ($\text{NDVI}$) Maps ($2014$ vs. $2024$)
* **Technical Description:** Continuous $30\text{ m}$ spatial distribution rasters of $\text{NDVI}$ derived from Landsat 8 OLI Bands 4 and 5 for $2014$ (range: $0.0239$ to $0.5813$) and $2024$ (range: $-0.0356$ to $0.6100$).
* **Purpose:** Evaluates decadal spatial changes in green vegetation vigor, canopy density, and potential vegetation stress across oil palm and forest landscapes.
* **Interpretation:** While healthy dense vegetation persists in the eastern and southern sectors, low-$\text{NDVI}$ zones expanded notably in the northwestern (Ado-Ekiti) and south-central (Ikere) corridors by $2024$, reflecting localized vegetation degradation and land-cover conversion.

| 2014 NDVI Map (Fig. 4.1a) | 2024 NDVI Map (Fig. 4.1b) |
| :---: | :---: |
| ![2014 NDVI Map of the Study Area](maps/02_ndvi_2014_map.png) | ![2024 NDVI Map of the Study Area](maps/03_ndvi_2024_map.png) |

---

#### 2. Enhanced Vegetation Index ($\text{EVI}$) Maps ($2014$ vs. $2024$)
* **Technical Description:** Continuous $30\text{ m}$ $\text{EVI}$ rasters computed for $2014$ (range: $0.0149$ to $0.6847$) and $2024$ (range: $-0.0212$ to $0.7361$) with reduced soil and atmospheric background interference.
* **Purpose:** Complements $\text{NDVI}$ by isolating canopy structural and photosynthetic variations in high-biomass vegetation such as mature oil palm plantations.
* **Interpretation:** Consistent with $\text{NDVI}$, high-$\text{EVI}$ zones remain concentrated in the eastern and southwestern sectors, whereas low-$\text{EVI}$ zones intensified and expanded in the northwest and south-central areas between $2014$ and $2024$.

| 2014 EVI Map (Fig. 4.2a) | 2024 EVI Map (Fig. 4.2b) |
| :---: | :---: |
| ![2014 EVI Map of the Study Area](maps/04_evi_2014_map.png) | ![2024 EVI Map of the Study Area](maps/05_evi_2024_map.png) |

---

#### 3. Land Surface Temperature ($\text{LST}$) Maps ($2014$ vs. $2024$)
* **Technical Description:** Emissivity-corrected thermal surface temperature rasters ($^\circ\text{C}$) derived from Landsat 8 Band 10 for $2014$ ($29.21^\circ\text{C}$ to $30.31^\circ\text{C}$) and $2024$ ($29.71^\circ\text{C}$ to $31.11^\circ\text{C}$).
* **Purpose:** Quantifies spatial thermal patterns and decadal surface warming affecting agricultural microclimates and crop heat stress.
* **Interpretation:** Both minimum ($+0.50^\circ\text{C}$) and maximum ($+0.80^\circ\text{C}$) surface temperatures increased over the decade. Elevated $\text{LST}$ zones expanded outward from the northwestern and south-central urban centers, displaying a clear inverse spatial correlation with dense vegetation cover.

| 2014 LST Map (Fig. 4.3a) | 2024 LST Map (Fig. 4.3b) |
| :---: | :---: |
| ![2014 LST Map of the Study Area](maps/06_lst_2014_map.png) | ![2024 LST Map of the Study Area](maps/07_lst_2024_map.png) |

---

#### 4. Normalized Difference Water Index ($\text{NDWI}$) Maps ($2014$ vs. $2024$)
* **Technical Description:** Spatial moisture index rasters for $2014$ (range: $-0.3043$ to $0.3959$) and $2024$ (range: $-0.2671$ to $0.3872$).
* **Purpose:** Monitors spatial variations in canopy hydration and landscape water stress across the study area.
* **Interpretation:** Contiguous zones of high $\text{NDWI}$ observed in $2014$ became visibly fragmented by $2024$, accompanied by an expansion of lower-$\text{NDWI}$ areas indicative of increased landscape water stress.

| 2014 NDWI Map (Fig. 4.4a) | 2024 NDWI Map (Fig. 4.4b) |
| :---: | :---: |
| ![2014 NDWI Map of the Study Area](maps/08_ndwi_2014_map.png) | ![2024 NDWI Map of the Study Area](maps/09_ndwi_2024_map.png) |

---

#### 5. Spatial Rainfall Distribution Maps ($2014$ vs. $2024$)
* **Technical Description:** Classified spatial rainfall surfaces ($\text{mm}$) across five precipitation intervals for $2014$ ($122.01\text{--}155.49\text{ mm}$) and $2024$ ($173.5\text{--}222.8\text{ mm}$).
* **Purpose:** Depicts west-to-east spatial precipitation gradients and decadal shifts in rainfall magnitude across the study area.
* **Interpretation:** Rainfall consistently increases from the northwestern sector toward the eastern and southeastern boundaries in both years, with $2024$ exhibiting substantially higher precipitation totals across the entire study area than $2014$.

| 2014 Rainfall Map (Fig. 4.5a) | 2024 Rainfall Map (Fig. 4.5b) |
| :---: | :---: |
| ![2014 Rainfall Map of the Study Area](maps/10_rainfall_2014_map.png) | ![2024 Rainfall Map of the Study Area](maps/11_rainfall_2024_map.png) |

---

#### 6. Land Use and Land Cover ($\text{LULC}$) Maps ($2014$ vs. $2024$)
* **Technical Description:** Categorical $30\text{ m}$ land-cover maps depicting four classes (`Water body`, `Vegetation`, `Built-up Area`, and `Bare land`) for $2014$ and $2024$.
* **Purpose:** Tracks decadal land-cover conversion, urban settlement expansion, and agricultural land loss.
* **Interpretation:** Between $2014$ and $2024$, substantial areas of `Vegetation` were converted into `Built-up Area` and `Bare land`, particularly around Ado-Ekiti in the north and Ikere in the south, directly encroaching upon potential and existing oil palm cultivation zones.

| 2014 LULC Map (Fig. 4.6a) | 2024 LULC Map (Fig. 4.6b) |
| :---: | :---: |
| ![2014 Land Use/Land Cover Map](maps/12_lulc_2014_map.png) | ![2024 Land Use/Land Cover Map](maps/13_lulc_2024_map.png) |

---

## Results and Key Findings

### Decadal Remote Sensing & Spatial Parameter Comparison ($2014$ vs. $2024$)

| Parameter / Index | Unit | 2014 Minimum | 2014 Maximum | 2024 Minimum | 2024 Maximum | Observed Decadal Shift |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **NDVI** | Dimensionless | $0.0239$ | $0.5813$ | $-0.0356$ | $0.6100$ | Minimum decreased by $-0.0595$; expansion of low-NDVI zones in NW and south-central sectors. |
| **EVI** | Dimensionless | $0.0149$ | $0.6847$ | $-0.0212$ | $0.7361$ | Minimum decreased by $-0.0361$; intensification of low-EVI stress/clearance corridors. |
| **Land Surface Temperature ($\text{LST}$)** | $^\circ\text{C}$ | $29.21^\circ\text{C}$ | $30.31^\circ\text{C}$ | $29.71^\circ\text{C}$ | $31.11^\circ\text{C}$ | $+0.50^\circ\text{C}$ rise in min LST and $+0.80^\circ\text{C}$ rise in max LST; expanded urban heat footprint. |
| **NDWI** | Dimensionless | $-0.3043$ | $0.3959$ | $-0.2671$ | $0.3872$ | Fragmentation of contiguous high-NDWI vegetation zones; increased landscape water stress. |
| **Spatial Rainfall** | $\text{mm}$ | $122.01$ | $155.49$ | $173.50$ | $222.80$ | Entire 2024 rainfall range exceeded the 2014 maximum ($+51.49\text{ mm}$ min; $+67.31\text{ mm}$ max). |

### Multi-Decadal Climatic Trends ($1994\text{--}2024$, ECMWF ERA-Interim)

| Climatic Variable | Period | Key Temporal Behavior & Notable Extremes | Agro-Climatic Implication for Oil Palm |
| :--- | :---: | :--- | :--- |
| **Annual Rainfall & Anomaly** | $1994\text{--}2024$ | High inter-annual variability; strong positive anomalies in **$1995$** and **$2023$**; marked drought/negative anomalies in **$2001$**, **$2013$**, and **$2017$**. | Drought years induce water stress and depress fruit development; extreme wet years risk waterlogging, soil erosion, and nutrient leaching. |
| **Maximum Temperature ($T_{\max}$)** | $1994\text{--}2024$ | Distinct upward warming trend from **$\approx 2012$ onwards**, with highest positive anomalies in **$2020\text{--}2024$**. | Elevated peak temperatures increase heat stress, impair photosynthesis/flowering, and reduce bunch yields. |
| **Minimum Temperature ($T_{\min}$)** | $1994\text{--}2024$ | Shift from predominantly negative anomalies before **$\approx 2004$** to predominantly positive anomalies thereafter. | Warmer nighttime/minimum temperatures can favor pest and pathogen survival and proliferation. |
| **Incident Solar Radiation** | $1994\text{--}2024$ | Fluctuated without linear trend ($1994\text{--}2019$), followed by a notable rise in **$2020\text{--}2024$**, peaking in **$2022$**. | Higher radiation increases photosynthetic potential only if water and temperature are non-limiting; otherwise amplifies evaporative demand. |
| **Relative Humidity ($\text{RH}$)** | $1994\text{--}2024$ | Sharp drop in annual lowest $\text{RH}$ starting around **$2020$**, reaching unprecedented 30-year lows in **$2020\text{--}2024$**. | Low $\text{RH}$ combined with high $T_{\max}$ elevates Vapour Pressure Deficit ($\text{VPD}$), triggering stomatal closure and water stress. |
| **Annual Wind Speed** | $1994\text{--}2024$ | Inter-annual fluctuation without long-term monotonic trend; peaks in **$1994, 2002, 2006, 2015$**; lows in **$1996, 2004, 2009, 2021$**. | Higher wind speeds reduce leaf boundary-layer resistance, compounding evapotranspirative water loss during hot, dry periods. |

### Land Use and Land Cover ($\text{LULC}$) Transition Summary ($2014\text{--}2024$)
* **Categories Mapped:** `Water body`, `Vegetation`, `Built-up Area`, and `Bare land`.
* **Observed Spatial Dynamics:** Significant loss of `Vegetation` cover and corresponding expansion of `Built-up Area` and `Bare land` between $2014$ and $2024$, concentrated around Ado-Ekiti and Ikere urban centers.
* **Quantitative Area & Accuracy Metrics:** `[Information to be provided — insert LULC class area table in km²/ha, percentage change, and classification accuracy metrics if available]`

### Public Perception Findings
* `[Information to be provided — summarize key statistical findings from the farmer/public perception survey regarding observed climate changes, yield impacts, and adaptation practices]`

---

## Discussion

The integration of multi-temporal satellite remote sensing ($2014\text{--}2024$) and 30-year reanalysis climate records ($1994\text{--}2024$) highlights dual environmental pressures on oil palm production in Ado-Ekiti and Ikere LGAs:

1. **Synergistic Climatic Stress:** Although recent spatial rainfall totals ($2024$) and extreme wet years ($2023$) indicate higher precipitation volume, simultaneous post-$2012$/$2020$ increases in $T_{\max}$, Land Surface Temperature ($+0.80^\circ\text{C}$ maximum $\text{LST}$), and solar radiation—paired with unprecedented drops in minimum relative humidity ($2020\text{--}2024$)—substantially elevate Vapour Pressure Deficit ($\text{VPD}$) and atmospheric evaporative demand. Even when annual rainfall increases, episodic dry spells and high $\text{VPD}$ can induce stomatal closure and constrain oil palm productivity.
2. **Urban Encroachment & Land Competition:** The spatial coincidence of declining $\text{NDVI}/\text{EVI}$, fragmented $\text{NDWI}$, rising $\text{LST}$, and expanding `Built-up Area` / `Bare land` around Ado-Ekiti and Ikere demonstrates that rapid urbanization is directly displacing vegetative cover and competing with perennial agricultural land.
3. **Relevance to Agricultural & Spatial Planning:** Combining satellite biophysical monitoring with local farmer perception provides agricultural extension agencies and state land-use planners with actionable spatial evidence to protect prime oil palm corridors and promote climate-smart plantation management.

---

## Research Limitations

The following methodological considerations and data limitations are noted from the research text:

* **Sensor and Atmospheric Sensitivity:** $\text{NDVI}$ effectiveness can be influenced by atmospheric interference, sensor calibration, and canopy saturation in dense vegetation (addressed in part by complementing $\text{NDVI}$ with $\text{EVI}$).
* **Highest Relative Humidity Scaling:** Assessment of long-term trends in annual maximum relative humidity was constrained by chart scaling limitations and high inter-annual variability.
* **Landscape-Wide Vegetation Scope:** The $2014$ and $2024$ spectral indices ($\text{NDVI}$, $\text{EVI}$, $\text{NDWI}$) and $\text{LULC}$ classifications characterize overall landscape vegetation rather than isolating oil palm plantations exclusively from surrounding forest and crop cover.
* **Additional Manuscript Limitations:** `[Information to be provided — insert any survey sample size, field validation, or reanalysis resolution limitations discussed in the full manuscript]`

---

## Conclusion and Recommendations

### Conclusion
`[Information to be provided — summarize the overarching conclusions integrating both the geospatial/climatic analysis and the public perception findings from Chapter Five]`

### Recommendations
`[Information to be provided — insert the specific agronomic, climate adaptation, and land-use policy recommendations from Chapter Five of your manuscript]`

---

## Repository Structure

```text
ekiti-oil-palm-climate-change-gis/
├── README.md                                  # Complete project technical documentation
├── maps/                                      # Exported cartographic outputs (PNG)
│   ├── 01_study_area_map.png                  # Study area map (Ado-Ekiti & Ikere LGAs)
│   ├── 02_ndvi_2014_map.png                   # Fig. 4.1a: 2014 NDVI map
│   ├── 03_ndvi_2024_map.png                   # Fig. 4.1b: 2024 NDVI map
│   ├── 04_evi_2014_map.png                    # Fig. 4.2a: 2014 EVI map
│   ├── 05_evi_2024_map.png                    # Fig. 4.2b: 2024 EVI map
│   ├── 06_lst_2014_map.png                    # Fig. 4.3a: 2014 Land Surface Temperature map
│   ├── 07_lst_2024_map.png                    # Fig. 4.3b: 2024 Land Surface Temperature map
│   ├── 08_ndwi_2014_map.png                   # Fig. 4.4a: 2014 NDWI map
│   ├── 09_ndwi_2024_map.png                   # Fig. 4.4b: 2024 NDWI map
│   ├── 10_rainfall_2014_map.png               # Fig. 4.5a: 2014 Spatial rainfall map
│   ├── 11_rainfall_2024_map.png               # Fig. 4.5b: 2024 Spatial rainfall map
│   ├── 12_lulc_2014_map.png                   # Fig. 4.6a: 2014 Land Use / Land Cover map
│   └── 13_lulc_2024_map.png                   # Fig. 4.6b: 2024 Land Use / Land Cover map
└── docs/                                      # Supporting research manuscript
    └── oseni_emmanuel_oluwatobi_2.docx        # Source research document
```

---

## Author and Project Information

* **Author:** Oseni Emmanuel Oluwatobi
* **Academic Qualification:** `[Information to be provided — e.g., B.Tech / B.Sc. / M.Tech in Remote Sensing & GIS / Geography]`
* **Department & Institution:** `[Information to be provided]`
* **Research Supervisor:** `[Information to be provided]`
* **Completion Date:** `[Information to be provided]`
* **Project Category:** Agro-Climatology, Land Use / Land Cover Change, Remote Sensing & GIS
* **GitHub Profile:** `[Information to be provided — e.g., https://github.com/yourusername]`
* **LinkedIn / Portfolio:** `[Information to be provided]`
* **Contact Email:** `[Information to be provided]`

---

### Citation
> Oseni, E. O. (`[Year]`). *Impacts of Climate Change and Public Perception on Oil Palm Production in Ekiti State, Nigeria*. `[Degree / Institution Information to be provided]`.
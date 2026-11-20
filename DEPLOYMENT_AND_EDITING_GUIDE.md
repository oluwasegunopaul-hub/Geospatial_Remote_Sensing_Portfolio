# Complete Editing & GitHub Pages Deployment Guide

This guide explains how to customize your geospatial portfolio with your own ArcGIS Pro / QGIS PNG maps and publish the website for free using **GitHub Pages**.

---

## Part 1: Exporting Maps Properly from ArcGIS Pro & QGIS

Because this portfolio uses **static PNG images** (rather than heavy raw shapefiles or GeoTIFFs), your exported maps load fast on any device while preserving crisp cartographic typography:

1. **Resolution:** Export at **300 DPI** (or **200–250 DPI** if file size exceeds 5 MB). Keep each PNG under **4–6 MB** for fast web loading on mobile networks.
2. **Color Profile:** Export in **RGB (sRGB)** rather than CMYK so colors look vibrant and accurate in web browsers.
3. **Dimensions:** Landscape layouts (e.g., A4 or Letter Landscape, ~3300 × 2400 px at 300 DPI) display best inside both GitHub READMEs and the website's lightbox viewer.
4. **Essential Map Elements:** Ensure every exported PNG includes a clear **Title, Legend, North Arrow, Scale Bar, Coordinate Grid/Graticule, Data Source Attribution, and Neatline Border**.

---

## Part 2: How to Edit Your Portfolio Without Rewriting Website Code

All website text, profile details, project descriptions, map paths, and captions are stored in a single configuration block at the top of **`script.js`** (`PORTFOLIO_CONFIG`).

### 1. Replace a Sample PNG with Your Own Map
- **Option A (Zero Code Changes):** Export your map as a `.png` file and rename it to match an existing sample filename (for example, overwrite `01_Environmental_Heritage_Assessment/maps/01_unesco_composite_threat_index.png`). Refresh the browser and your map appears automatically.
- **Option B (Custom Filename):** Place your PNG inside the appropriate project `maps/` folder (e.g., `03_Soil_Fertility_Assessment/maps/nitrogen_kriging_map.png`), open `script.js`, locate that project in `PORTFOLIO_CONFIG.projects`, and update the `src` path in its `maps` array.

### 2. Add Another Map to an Existing Project
1. Save your new PNG inside the project's `maps/` directory (e.g., `04_Flood_Risk_Assessment/maps/03_rainfall_erosivity_surface.png`).
2. Open `script.js` and find the project's `maps: [ ... ]` list.
3. Copy an existing map block `{ title: "...", src: "...", caption: "...", metadata: "..." }`, paste it after a comma, and update the `title`, `src`, and `caption`.
4. *(Optional)* Also add the Markdown image link `![Map Title](maps/03_rainfall_erosivity_surface.png)` to that project's `README.md`.

### 3. Create a New Project Category
1. Create a new folder in the root directory, e.g., `07_Urban_Heat_Island_Analysis/maps/`, and place your PNG maps inside.
2. Open `script.js`, copy one complete project object `{ id: "...", ... }` inside `PORTFOLIO_CONFIG.projects`, paste it at the end of the array, and give it a unique `id`, `number: "07"`, `category`, `title`, `description`, `methodology`, `software`, `datasets`, and `maps`.
3. The website automatically generates the new filter pill, project card, and project detail modal!

### 4. Change Project Descriptions, Objectives & Methodology
- Open `script.js`, locate the project inside `PORTFOLIO_CONFIG.projects`, and edit the strings for `title`, `description`, `objectives`, `methodology`, `software`, and `datasets`.
- Remember to keep quotes (`"..."`) intact and separate array items with commas.

### 5. Edit Your Biography and Technical Skills
- Open `script.js` and edit `PORTFOLIO_CONFIG.profile` (`name`, `role`, `location`, `tagline`, `bio`, `stats`) and `PORTFOLIO_CONFIG.skills` (`gisSoftware`, `remoteSensing`, `spatialAnalysis`, `programmingCartography`).

### 6. Add Your GitHub Profile and Contact Information
- In `script.js`, update `PORTFOLIO_CONFIG.contact` (`githubUrl`, `repoUrl`, `linkedinUrl`, `email`, `orcidOrScholar`). All navigation links, hero buttons, and footer contact cards will update automatically.

---

## Part 3: Step-by-Step GitHub Repository & GitHub Pages Deployment

### Step 1: Create a GitHub Account & New Repository
1. Go to [github.com](https://github.com) and sign in (or create a free account).
2. Click the **`+`** icon in the top-right corner and select **New repository**.
3. Name the repository `geospatial-remote-sensing-portfolio` (or `<your-username>.github.io` if you want it at your root domain).
4. Set visibility to **Public** (required for free GitHub Pages hosting).
5. Do **not** initialize with a README (since you already have a complete repository folder). Click **Create repository**.

### Step 2: Upload the Portfolio Folder Structure
- **Method A: Browser Upload (Beginner-Friendly, No Terminal Needed)**
  1. Unzip the downloaded `geospatial-remote-sensing-portfolio.zip` folder on your computer.
  2. Open your newly created repository on GitHub and click **uploading an existing file**.
  3. Drag and drop **all contents inside** `geospatial-remote-sensing-portfolio/` (`index.html`, `style.css`, `script.js`, `README.md`, `DEPLOYMENT_AND_EDITING_GUIDE.md`, `assets/`, and folders `01_...` through `06_...`) directly into the upload area. *(Important: Upload the contents inside the root folder so `index.html` sits at the top level of the repository!)*
  4. Type a commit message such as `Initial commit: Geospatial & Remote Sensing portfolio` and click **Commit changes**.

- **Method B: Using Git CLI (Recommended for Ongoing Updates)**
  ```bash
  cd geospatial-remote-sensing-portfolio
  git init
  git add .
  git commit -m "Initial commit: Geospatial & Remote Sensing portfolio"
  git branch -M main
  git remote add origin https://github.com/<your-username>/geospatial-remote-sensing-portfolio.git
  git push -u origin main
  ```

### Step 3: Enable GitHub Pages
1. In your GitHub repository, click the **Settings** tab (top navigation bar).
2. In the left sidebar, click **Pages** (under the *Code and automation* section).
3. Under **Build and deployment > Source**, select **Deploy from a branch**.
4. Under **Branch**, choose **`main`** and folder **`/ (root)`**, then click **Save**.
5. Wait **1 to 3 minutes**, then refresh the **Pages** settings page. A banner will appear at the top reading:
   > *Your site is live at `https://<your-username>.github.io/geospatial-remote-sensing-portfolio/`*

### Step 4: Updating the Website When You Add New Maps
1. Navigate to the target project's `maps/` folder on GitHub (or locally in your Git folder), upload your new PNG file, and update `script.js` and `README.md`.
2. Commit and push your changes (`git add . && git commit -m "Add new flood susceptibility map" && git push`).
3. GitHub Pages automatically rebuilds and updates your live portfolio within 1–2 minutes.

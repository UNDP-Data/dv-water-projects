# Project Title
#### Visualizing South South projects [Click here to see the interface](https://calm-grass-0e3382b10.4.azurestaticapps.net).

## Table of Contents
* [Link for the visualization](#section-01)
* [Deployment](#deployment)
* [Steps to integrate the vis in static page](#section-02)
* [Pages on DFP where This Viz is Used](#section-03)
* [Related Repos](#section-04)
* [Global CSS Files and Repo](#section-05)
* [Build With](#section-06)
* [Installation](#section-07)
* [Local Deployment](#section-08)
* [Available Scripts](#section-09)
* [Tooling Setup](#section-10)

## Link for the visualization<a name="section-01"></a>
[https://calm-grass-0e3382b10.4.azurestaticapps.net](https://calm-grass-0e3382b10.4.azurestaticapps.net)

## Deployment<a name="deployment"></a>
The Production site deployed using Azure Static Web App and work flow can be found [here](https://github.com/UNDP-Data/dv-water-projects/blob/master/.github/workflows/azure-static-web-apps-calm-grass-0e3382b10.yml)

## Steps to Integrating the Visualization in the Data Future Platform or Any Other Page<a name="section-02"></a>
Add the following div in the page
```
<div id="root"></div>

Apart from the mentioned `div` above the following `script` and `link` needs to be added to the `head` or in the embed code
```
<script defer src="https://calm-grass-0e3382b10.4.azurestaticapps.net/index.js"></script>
<link rel="stylesheet" href="https://undp-data.github.io/stylesheets-for-viz/style/mainStyleSheet.css" />
<link rel="stylesheet" href="https://undp-data.github.io/stylesheets-for-viz/style/StyleForGraphingInterface.css" />
<link rel="stylesheet" href="https://undp-data.github.io/stylesheets-for-viz/style/StyleForGraph.css" />
```

## Pages on DFP Where the Visualization is Used<a name="section-03"></a>
[Water and Sustainable Development](https://data.undp.org/insights/water-and-sustainable-development)

## Related Repos<a name="section-04"></a>
* [__country-taxonomy-from-azure__](https://github.com/UNDP-Data/country-taxonomy-from-azure): This is data sheet with meta data for Countries
* [__dv-water-projects-data-repo__](https://github.com/UNDP-Data/dv-water-projects-data-repo): This is the data sheet for visualization
* [__dv-world-map-geojson-data__](https://github.com/UNDP-Data/dv-world-map-geojson-data): This is geoJson file for world map
* [__stylesheet-for-viz__](https://github.com/UNDP-Data/stylesheets-for-viz): Repo which defines the css settings for the project

## Global CSS for UI and Graphs<a name="section-05"></a>
__Git Repo__: https://github.com/UNDP-Data/stylesheets-for-viz

__Link for stylesheets__
* https://undp-data.github.io/stylesheets-for-viz/style/mainStyleSheet.css
* https://undp-data.github.io/stylesheets-for-viz/style/StyleForGraphingInterface.css
* https://undp-data.github.io/stylesheets-for-viz/style/StyleForGraph.css

## Build with<a name="section-06"></a>
* __React__: Used as MVC framework.
* __styled-components__: Utilizes tagged template literals and the power of CSS, allows to write actual CSS code to style the components in JS/TS.
* __Various D3 Libraries__: Used for visualizations, adding interaction and reading the csv data file.
* __lodash__: Used for manipulating and iterating arrays and objects.
* __undp-viz-colors__: This is package for defining the visualization color palette.

## Installation<a name="section-07"></a>
This project uses `npm`. For installation you will need to install `node` and `npm`, if you don't already have it. `node` and `npm` can be installed from [here](https://nodejs.org/en/download/).

To install the project, simply clone the the repo and them run `npm install` in the project folder. You can use terminal on Mac and Command Prompt on Windows.

This project is bootstrapped with [`Vite`](https://vitejs.dev/) and was created using `npm create vite@latest` command.

Run the terminal or command prompt and then run the following

```
git clone https://github.com/UNDP-Data/dv-water-projects.git
cd dv-water-projects
npm install
```

## Local Development<a name="section-08"></a>
To start the project locally, you can run `npm run dev` in the project folder in terminal or command prompt.

This is run the app in development mode. Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## Available Scripts<a name="section-09"></a>
* `npm run dev`: Executes `vite` and start the local server for local deployment.
* `npm run build`: Executes `tsc && vite build` and builds the app for production and deployment.

## Tooling Setup<a name="section-10"></a>
This project uses ESLint integrated with prettier, which verifies and formats your code so you don't have to do it manually. You should have your editor set up to display lint errors and automatically fix those which it is possible to fix. See [http://eslint.org/docs/user-guide/integrations](http://eslint.org/docs/user-guide/integrations).

This project is build in Visual Studio Code, therefore the project is already set up to work with. Install it from [here](https://code.visualstudio.com/) and then install this [eslint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and you should be good to go.

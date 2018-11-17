# Neighborhood Map(React) Project
This project is developed using Google Map API and React. The initial location data (to load onto the map)
is being fetched from [Foursquare third party API](#thirt-party-apis). You can filter the location from
the text filter section and the map markers & place listings will be updated on real-time based on the
input text. Also you will be able to get the details about each place by selecting the place from the
listing or by clicking on the individual map markers.

## Table of Contents

- [Getting Started](#getting-started)
- [Project URL](#project-url)
- [Create React App](#create-react-app)
- [How to launch the app locally](#how-to-launch-the-app-locally)
  - [Installation](#installation)
- [Deploy to gh-pages](#deploy-to-gh-pages)
- [Thirt Party APIs](#thirt-party-apis)
- [Resources](#resources)

## Getting Started

You need to set up the application before you can see it running live in your browser.
Please check the [installation](#how-to-launch-the-app-locally) section to know more.

## Create React App
This project was bootstrapped with [Create React App](https://github.com/SG-04/Neighborhood-Map.git). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

### Installation

1. Clone the Project - `https://github.com/SG-04/Neighborhood-Map.git`
2. Go into the directory where the project now lives - `cd Neighborhood-Map`
3. Install the dependencies - `npm install`
4. Start the app - `npm start`
```
The application will be running at http://localhost:3000 URL
```

## Thirt Party APIs
* Foursquare API
	We are loading the neighbouring locations for a given place (using its lattitude, longitude)
	from this API. The places received are shown in the place listing and hence on the Map.
```
Foursquare fetch API url
"https://api.foursquare.com/v2/venues/search?ll=26.14,78.10&client_id=<YOUR_CLIENT_ID>&client_secret=<YOUR_CLIENT_SECRET>&limit=25&v=20181117"

* Wiki API
We are fetching the wiki data from this API about each place and hence showing in the infowindow
when marker is clicked on the map.

Wiki fetch API url
"https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=Belgium&limit=5"
```
## Resources
- [Google Maps JavaScript API V3 Reference](https://developers.google.com/maps/documentation/javascript/reference)
- [Google Maps Markers](https://developers.google.com/maps/documentation/javascript/markers)
- [Google Maps Infowindow](https://developers.google.com/maps/documentation/javascript/infowindows)
- [All aria-* attribute](https://www.w3.org/TR/wai-aria-1.1/#state_prop_def)
- [WebAIM Checklist for Accessibility](https://webaim.org/standards/wcag/checklist#sc1.4.6)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MediaWiki API help](https://en.wikipedia.org/w/api.php)
- [Foursquare API endpoints](https://developer.foursquare.com/docs/api/endpoints)
- [Google Map and React](https://stackoverflow.com/questions/34779489/rendering-a-google-map-without-react-google-map)
- [React componentDidUpdate lifecycle event](https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops)
- [Writing Scalable React Apps with the Component Folder Pattern](https://medium.com/styled-components/component-folder-pattern-ee42df37ec68)
- [Throttle and Debounce used for input field](https://lodash.com/docs/4.17.10#debounce)
- [react-throttle](https://github.com/gmcquistin/react-throttle)
- [Refs in React](https://reactjs.org/docs/refs-and-the-dom.html)
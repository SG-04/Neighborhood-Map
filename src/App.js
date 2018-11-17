import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    venues: []
  }

  componentDidMount(){
    this.getVenues()
  }

  loadMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD6VCMBe5VKBrf0lING4q0wpmrwc3UYuwU&callback=initMap")
    window.initMap=this.initMap
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "MFWBYGLPDEHOGIVGLHV5NJ15OKXXHGKDQU0VJEROPTKWGVSO",
      client_secret: "KUJCYLVMHE4XX0YINYCEJ0ITW4EQBEHYWLN3C5RDBR5QW43S",
      query:"food",
      near: "Sydney",
      v:"20181117"
    }

    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      this.setState({venues:response.data.response.groups[0].items},
      this.loadMap())
    })
    .catch(error => {
      console.log("ERROR!!" + error)
    })

  }
  
  initMap = () => {

    //Create a map
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });

    //Create an Infowindow
    var infowindow = new window.google.maps.InfoWindow();

    //Display dynamic markers
    this.state.venues.map(myVenue => {

      var contentString = `${ myVenue.venue.name}`;

      //Create a Marker
      var marker = new window.google.maps.Marker({
        position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
        map: map,
        title: myVenue.venue.name
      })

      //Click on a marker
      marker.addListener('click', function() {

        //Change the content
        infowindow.setContent(contentString);
        
        //Open an Infowindow
        infowindow.open(map, marker);
      });
    });
  }

  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
    );
  }
}

function loadScript(url){
  var index=window.document.getElementsByTagName("script")[0]
  var script=window.document.createElement("script")
  script.src=url
  script.async=true
  script.defer=true
  index.parentNode.insertBefore(script,index)
}
export default App;

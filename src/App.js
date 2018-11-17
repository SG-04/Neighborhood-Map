import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    venues: []
  }

  componentDidMount(){
    this.getVenues()
    this.loadMap()
  }

  loadMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD6VCMBe5VKBrf0lING4q0wpmrwc3UYuwU&callback=initMap")
    window.initMap=this.initMap
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore"
    const parameters = {
      client_id: "MFWBYGLPDEHOGIVGLHV5NJ15OKXXHGKDQU0VJEROPTKWGVSO",
      client_secret: "KUJCYLVMHE4XX0YINYCEJ0ITW4EQBEHYWLN3C5RDBR5QW43S",
      query:"food",
      near: "Sydney",
      v:"20181117"
    }

    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      this.setState({venues:response.data.response.groups[0].items})
    })
    .catch(error => {
      console.log("ERROR!!" + error)
    })

  }
  
  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
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

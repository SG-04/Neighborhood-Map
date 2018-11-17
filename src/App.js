import React, { Component } from 'react';
import './App.css';
import { Header, Search } from './components';

class App extends Component {
// App's internal state
  state = {
    isListOpen: false,
  }

  /**
   * Even handler for Toggle component,it sets the app state to
   * indicate if list view is open or closed based on hamburger menu icon
   * @param:
   *      None
   * @returns:
   *      None
   */
  componentDidMount() {
    fetch(`https://api.foursquare.com/v2/venues/search?ll=26.14,78.10&client_id=MFWBYGLPDEHOGIVGLHV5NJ15OKXXHGKDQU0VJEROPTKWGVSO&client_secret=KUJCYLVMHE4XX0YINYCEJ0ITW4EQBEHYWLN3C5RDBR5QW43S&limit=25&v=20181117`)
    .then( response => response.json())
    .then( data => {
      let locations = data.response.venues;
      this.setState({ locations });
    })
    .catch(error => console.log(error));
  }      	
  
  showListView = () => {
    this.setState(prevState => ({
      isListOpen: !prevState.isListOpen,
    }));
  }

  render() {
    const { isListOpen } = this.state;
    return (
      <div className="App">
        <Header showPlaceList={this.showListView} />
        <Search isListOpen={isListOpen} />
      </div>
    );
  }
}

export default App;
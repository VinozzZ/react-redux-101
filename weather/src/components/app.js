import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list.js';

export default class App extends Component {
  render() {
    return (
    <Router>
      <div>
      	<SearchBar />
      		<Route exact path="/" component={WeatherList} />
      		<Route path="/ordered/:category" component={WeatherList}/>
      </div>
     </Router>
    );
  }
}

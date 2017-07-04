import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDVs1mFbY-LuW3NQIb55VRB6RvHOpz7Yvc';


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('food');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term:term}, (videos) => {
      this.setState({ 
        videos:videos, 
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    return (
      <div className="App">
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
      </div>
    );
  }
}

export default App;

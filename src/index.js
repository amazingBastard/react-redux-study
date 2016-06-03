import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

// const (use define things that dont change)
// usually start with caps and employ underscores
const API_KEY = 'AIzaSyDGxBKjefeiJrJ4hJhPH821UBJIO-ufMSw';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'scifi'}, (videos) => {
      this.setState({ videos }); // this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <div className="jumbotron">
        <SearchBar />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));

import React, { Component } from 'react';

// define a new class called SearchBar and
// give it access to all the functionality that React.Component has
class SearchBar extends Component {
  // only class based components have states (have access to constructor method)
  constructor(props) {
    // call parent method with super
    super(props);

    // set the default state of the input's search term to blank
    this.state = { term: '' };
  }

  render() {
    // on input change, set the state to the current value of the input as event occurs
    return (
      <div className="form-group search-bar">
        <input
          className="form-control"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;

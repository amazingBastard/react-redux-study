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
    // on input change, set the state term to the current target value of the event
    return (
      <div className="input-container">
        <input onChange={event => this.setState({ term: event.target.value })} />
        <p>Value of the input: <strong>{this.state.term}</strong></p>
      </div>
    );
  }

}

export default SearchBar;

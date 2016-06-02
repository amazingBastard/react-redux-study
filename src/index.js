import React from 'react';
import ReactDOM from 'react-dom'

// const vars usually start with caps and employ underscores
const API_KEY = 'AIzaSyDGxBKjefeiJrJ4hJhPH821UBJIO-ufMSw';

// create a new component. this component should produce some HTML
const App = () => {
  return <h1 className="title">Hello World!</h1>;
}

// take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  // only called once before the component will be rendered
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        List of blog posts
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);

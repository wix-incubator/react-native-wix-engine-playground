import React, {Component} from 'react';
import {Text} from 'react-native-ui-lib';
import {connect} from 'remx';
import {postsStore} from '../posts.store';

class PostsCountBanner extends Component {
  render() {
    return <Text>Total Posts: {this.props.posts.length}</Text>;
  }
}

function mapStateToProps() {
  return {
    posts: postsStore.getPosts(),
  };
}

export default connect(mapStateToProps)(PostsCountBanner);

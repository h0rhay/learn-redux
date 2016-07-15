import React from 'react';
import Photo from './Photo';
// import Comments from './Comments';

const Single = React.createClass({
  render () {
    // index of the post
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    console.log(i);
    // get the post
    const post = this.props.posts[i];
    console.log(post);
    return(
      <div className="single-photo">
      I'm Single
      </div>
    )
  }
});

export default Single;

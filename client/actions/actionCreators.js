// increment like
export function increment (index) {
  return {
    type: 'InCREMENT_LIKES',
    index
  }
}

// add comments
export function addComment (postId, author, comment) {
  console.log('dispatching comment');
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment (postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i
  }
}

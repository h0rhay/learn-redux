// increment like
export function increment (index) {
  return {
    type: 'InCREMENT_LIKES',
    index
  }
}

// add comments
export function addComment (postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postID,
    author,
    comment
  }
}

// remove comment
export function removeComment (postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    iexport 
  }
}

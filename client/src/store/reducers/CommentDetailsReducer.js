const { GET_COMMENT_DETAILS } = require('../types')

const initialState = {
  commentDetails: {}
}

const CommentDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENT_DETAILS:
      return { ...state, commentDetails: action.payload }
    default:
      return { ...state }
  }
}

export default CommentDetailsReducer

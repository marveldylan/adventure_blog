const { GET_COMMENT, ADD_COMMENT } = require('../types')

const initialState = {
  comments: [],
  newComment: ''
}

const CommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return { ...state, reviews: [...state, action.payload], newComment: '' }
    case GET_COMMENT:
      return { ...state, newreview: action.payload }
    default:
      return { ...state }
  }
}

export default CommentsReducer

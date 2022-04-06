const { ADD_COMMENT, NEW_COMMENT } = require('../types')

const initialState = {
  comments: ['HELLO'],
  newComment: ''
}

const CommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
        newComment: ''
      }
    case NEW_COMMENT:
      return { ...state, newComment: action.payload }
    default:
      return { ...state }
  }
}

export default CommentsReducer

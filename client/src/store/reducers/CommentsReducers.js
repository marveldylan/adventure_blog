const { COMMENTS_LOADING, NEW_COMMENT, ADD_COMMENT } = require('../types')

const initialState = {
  comments: [],
  newComment: ''
}

const CommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_LOADING:
      return { ...state, newComment: action.payload }
    case NEW_COMMENT:
      return { ...state, newComment: action.payload }
    case ADD_COMMENT:
      return {
        ...state,
        comments: [ ...state.comments, action.payload ],
        newComment: ''
      }
    default:
      return { ...state }
  }
}

export default CommentsReducer

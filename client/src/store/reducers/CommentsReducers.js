const { COMMENTS_LOADING, NEW_COMMENT, ADD_COMMENT } = require('../types')

const initialState = {
  comments: [],
  newComment: ''
}

<<<<<<< HEAD
const updateComments = (arr, comment) => {
  let newArr = arr
  newArr.push(comment)
  return newArr
}

=======
>>>>>>> 7ede55d1ead2291fa23a45deb90875cb92b539ef
const CommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case COMMENTS_LOADING:
    //   return { ...state, newComment: action.payload }
    case NEW_COMMENT:
<<<<<<< HEAD
        // return {...state, }
      return { comments: updateComments(state.comments, action.payload)}
    // case ADD_COMMENT:
    //   return {
    //     ...state,
    //     comments: [...state.comments, action.payload],
    //     newComment: ''
    //   }
=======
      return { ...state, newComment: action.payload }
    case ADD_COMMENT:
      return {
        ...state,
        comments: [ ...state.comments, action.payload ],
        newComment: ''
      }
>>>>>>> 7ede55d1ead2291fa23a45deb90875cb92b539ef
    default:
      return { ...state }
  }
}

export default CommentsReducer

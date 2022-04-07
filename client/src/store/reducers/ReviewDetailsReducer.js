const { GET_REVIEW_DETAILS } = require('../types')

const initialState = {
  reviewDetails: []
}

const ReviewDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEW_DETAILS:
      return { ...state, reviewDetails: action.payload }
    default:
      return { ...state }
  }
}

export default ReviewDetailsReducer

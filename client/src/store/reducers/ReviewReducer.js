import { useParams } from 'react-router-dom'

const { ADD_REVIEW, GET_REVIEW } = require('../types')

const initialState = {
  reviews: [
    {
      name: '',
      comment: '',
      rating: ''
    }
  ],
  newreview: ''
}

const ReviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return { ...state, reviews: [...state, action.payload], newreview: '' }
    case GET_REVIEW:
      return { ...state, newreview: action.payload }
    default:
      return { ...state }
  }
}

export default ReviewReducer

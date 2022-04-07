import {
  GetReviewDetails,
  GetReviews,
  CreateNewReview
} from '../../services/ReviewServices'
import { GET_REVIEW, GET_REVIEW_DETAILS, ADD_REVIEW } from '../types'

export const LoadReviews = () => {
  return async (dispatch) => {
    try {
      const reviews = await GetReviews()
      dispatch({
        type: GET_REVIEW,
        payload: reviews
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadReviewDetails = (id) => {
  return async (dispatch) => {
    try {
      const reviewDetails = await GetReviewDetails(id)
      dispatch({
        type: GET_REVIEW_DETAILS,
        payload: reviewDetails
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadNewReview = () => {
  return async (dispatch) => {
    try {
      const newReview = await CreateNewReview()
      dispatch({
        type: ADD_REVIEW,
        payload: newReview
      })
    } catch (error) {
      throw error
    }
  }
}

import { GetComments, GetCommentDetails } from '../../services/CommentsServices'
import { COMMENTS_LOADING, NEW_COMMENT, GET_COMMENT_DETAILS } from '../types'

export const LoadComments = () => {
  return async (dispatch) => {
    try {
      const comments = await GetComments()
      dispatch({
        type: NEW_COMMENT,
        payload: comments
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadCommentDetails = (id) => {
  return async (dispatch) => {
    try {
      const commentDetails = await GetCommentDetails(id)
      dispatch({
        type: GET_COMMENT_DETAILS,
        payload: commentDetails
      })
    } catch (error) {
      throw error
    }
  }
}

import {
  GetComments,
  GetCommentDetails,
  AddNewComment
} from '../../services/CommentsServices'
import {
  COMMENTS_LOADING,
  ADD_COMMENT,
  GET_COMMENT,
  GET_COMMENT_DETAILS
} from '../types'

export const LoadComments = () => {
  return async (dispatch) => {
    try {
      const comments = await GetComments()
      dispatch({
        type: GET_COMMENT,
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

export const LoadNewComment = (formValue) => {
  return async (dispatch) => {
    try {
      const postComment = await AddNewComment(formValue).then((res) => {
        dispatch({
          type: ADD_COMMENT,
          payload: res
        })
      })
    } catch (error) {
      throw error
    }
  }
}

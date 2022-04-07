import { GetPostDetails, GetPosts, AddNewPost } from '../../services/PostServices'
import {
  GET_POSTS,
  ADD_POST,
  NEW_POST,
  GET_POST_DETAILS
} from '../types'

export const LoadPosts = () => {
  return async (dispatch) => {
    try {
      const posts = await GetPosts()
      dispatch({
        type: GET_POSTS,
        payload: posts
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadPostDetails = (id) => {
  return async (dispatch) => {
    try {
      const postDetails = await GetPostDetails(id)
      dispatch({
        type: GET_POST_DETAILS,
        payload: postDetails
      })
    } catch (error) {
      throw error
    }
  }
}

export const CreateNewPost = (formValue) => ({
      type: NEW_POST,
      payload: formValue
})

export const LoadNewPost = () => {
  return async (dispatch) => {
    try {
      const newPost = await AddNewPost()
      dispatch({
        type: ADD_POST,
        payload: newPost
      })
    } catch (error) {
      throw error
    }
  }
}

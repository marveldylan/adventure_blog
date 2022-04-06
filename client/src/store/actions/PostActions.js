import { GetPostDetails, GetPosts } from '../../services/PostServices'
import { GetComments } from '../../services/CommentsServices'
import { POSTS_LOADING, GET_POSTS, GET_COMMENTS, GET_POST_DETAILS } from '../types'

export const LoadPosts = () => {
    return async (dispatch) => {
        try {
            const posts = await GetPosts()
            dispatch({
                type: GET_POSTS,
                payload: posts
            })
        } catch(error) {
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
        } catch(error) {
            throw error
        }
    }
}

export const LoadComments = () => {
    return async (dispatch) => {
        try {
            const comments = await GetComments()
            dispatch({
                type: GET_COMMENTS,
                payload: comments
            })
        } catch(error) {
            throw error
        }
    }
}
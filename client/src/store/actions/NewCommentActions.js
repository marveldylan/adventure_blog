import { GetComments } from '../../services/CommentsServices'
import { NEW_COMMENT } from '../types'

export const LoadComments = () => {
  const comments = GetComments()
  dispatch({
    type: NEW_COMMENT,
    payload: comments
  })
}

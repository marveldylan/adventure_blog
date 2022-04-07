import Client from './'

export const GetComments = async () => {
  try {
    const res = await Client.get('/comment')
    console.log(res.data, 'COMMENT')
    return res.data[0]
  } catch (error) {
    throw error
  }
}

export const GetCommentDetails = async (commentId) => {
  try {
    const res = await Client.get(`/comment/${commentId}`)
    console.log(res.data, 'COMMENT DETAILS')
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddNewComment = async (formValue) => {
  try {
    const res = await Client.post(`/comment`, formValue)
    console.log(res.status, 'RESPONSE COMMENTS')
    return res.data
  } catch (error) {
    throw error
  }
}

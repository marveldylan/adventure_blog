import Client from './'

export const GetComments = async () => {
  try {
    const res = await Client.get('/comment')
    console.log(res.data, 'COMMENT')
    return res.data
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

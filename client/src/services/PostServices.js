import Client from '.'

export const GetPosts = async () => {
  try {
    const res = await Client.get('/blogpost')
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetPostDetails = async (postId) => {
  try {
    const res = await Client.get(`/blogpost/${postId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

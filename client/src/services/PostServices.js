import Client from '.'

export const GetPosts = async () => {
    try {
      const res = await Client.get('/blogpost')
      return res.data
    } catch (error) {
      throw error
    }
  }
  
  export const GetBlogPost = async (postId) => {
    try {
      const res = await Client.get(`/blogpost/${postId}`)
      return res.data
    } catch (error) {
      throw error
    }
  }

  
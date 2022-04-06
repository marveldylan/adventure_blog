import Client from "./"

export const GetComments = async () => {
    try {
      const res = await Client.get('/comment')
      return res.data
    } catch (error) {
      throw error
    }
  }

 
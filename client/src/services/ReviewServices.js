import Client from './'

export const GetReviews = async () => {
  try {
    const res = await Client.get('/review')
    console.log(res.data, 'REVIEW')
    return res.data[0]
  } catch (error) {
    throw error
  }
}

export const GetReviewDetails = async (id) => {
  try {
    const res = await Client.get(`/review/${id}`)
    console.log(res.data, 'REVIEW DETAILS')
    return res.data
  } catch (error) {
    throw error
  }
}

// export const CreateNewReview = async () => {
//     try {
//       const res = await Client.post(`/review`).then(function (response) {
//         console.log(response, 'CREATE REVIEW AXIOS');
//         return res.data
//       })
//       .catch(function(error) {
//         console.log(error)
//       });
//     }
//   }

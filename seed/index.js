const db = require('../db')

const { Blog, Comment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB Connection Error'))

const main = async () => {
  // const comments1 = await new Comment({
  //   msg: 'Samoa is nice'
  // })
  // await comments1.save()

  const blogPost1 = await new Blog({
    image:
      'https://i1.wp.com/mylifesamovie.com/wp-content/uploads/2019/05/979EDA3F-F391-47E2-B5F9-FDA1D2C2098B.jpg?resize=800%2C450&ssl=1',
    title: '7 Day Samoa Island Itinerary',
    // comments: [comments1._id],
    post: `Samoa has been on my bucketlist for quite some time now, and I’m beyond fulfilled after finally traveling there! Chances are if you’re reading this you already know where it is and what’s mostly there, but for generality, I’ll start from the top!    For starters, there are two 'Samoa’s' and they’re separated by the International Date Line; one that’s it’s own independent country, and one that’s governed by America (obv named 'American Samoa'). In this post, I am talking about independent Samoa. So this Samoa is located across the International Date Line which is important when booking flights from the U.S. and eastward, because you gain an entire day. This is mostly only important when booking flights and attempting to schedule calls back home (if you’re a work-a-holic like me).`,
    rating: 5
  })
  await blogPost1.save()
}

const run = async () => {
  await Blog.deleteMany()
  await Comment.deleteMany()
  await main()
  db.close
}

run()

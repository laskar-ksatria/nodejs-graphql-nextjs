// const Post = require('../../models/Post')
// const checkAuth = require('../../util/checkAuth')

// module.exports = {
//     Query: {
//         getPosts: async() => {
//             try {
//                 const posts = await Post.find({})
//                 return posts
//             } catch (error) {
//                 throw new Error(err)
//             }
//         },
//         getPost: async(_, { postId }) => {
//             try {
//                 const post = await Post.findById(postId)
//                 if (post) {
//                     return post
//                 }else {
//                     throw new Error('Post not found')
//                 }
//             } catch (error) {
//                 throw new Error(error)
//             }
//         }
//     },
//     mutation: {
//        createPost: async (_, {body}, context) => {
//         const user = checkAuth(context)
        


//        } 
//     }
// }
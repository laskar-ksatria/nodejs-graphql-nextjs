// const User = require("../../models/User");
// const bcr = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const { SECRET_KEY } = require('../../config')
// const { UserInputError } = require('apollo-server')
// const {validateRegisterInput, validateLoginInput} = require('../../util/validator')
// const { generateToken } = require('../../util/jwt')

// module.exports = {
//     Mutation: {
//         async login(_, {loginInput: {username, password}}) {
//             const { errors, valid } = validateLoginInput(username, password)
//             const user = await User.findOne({username})
//             if (!user) {
//                 errors.general = 'Invalid username / password'
//                 throw new UserInputError('Wrong credentials', {errors})
//             } 
//             const match = await bcr.compare(password, user.password);
//             if (!match) {
//                 errors.general = 'Wrong credential';
//                 throw new UserInputError('Wrong credentials', {errors});
//             }
//             const token = generateToken({id: user._id, username: user.username, email: user.email})
//             return {
//                 ...user._doc, id: user._id, token
//             }
//         },

//         async register(_, {registerInput: {username, email, password, confirmPassword} },) {
//             const { valid, errors } = validateRegisterInput(username, email, password, confirmPassword)

//             if (!valid) {
//                 throw new UserInputError('Errors', { errors });
//             } 

//             const user = await User.findOne({username});
//             if (user) {
//                 throw new UserInputError('Username is taken', {
//                     errors: {
//                         username: "This username is taken"
//                     }
//                 })
//             }
            
//             password = await bcr.hash(password, 12);
//             const newUser = new User({
//                 email,
//                 username,
//                 password,
//                 createdAt: new Date().toISOString()
//             })
//             const res = await newUser.save();
//             const token = jwt.sign({
//                 id: res.id,
//                 email: res.email,
//                 username: res.username
//             }, SECRET_KEY, {expiresIn:'1h' })
//             return {
//                 ...res._doc,
//                 id: res.id,
//                 token
//             }
//         },
//     }
// }
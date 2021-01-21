import User from '../models/user';
import { generateToken } from '../helpers/jwt'
import { checkPassword } from '../helpers/bcr'

class UserController {

    static readAll(req, res,next) {
        User.find({})
            .then(users => res.status(200).json(users))
    }

    static readOne(req,res,next) {
        let _id = req.decoded.id
        User.findOne({_id})
            .then(user => res.status(200).json(user))
    }

    static create(req,res,next) {
        let { full_name, email, password } = req.body;
        User.create({full_name, email, password})
            .then(newUser => res.status(200).json(newUser))
            .catch(err => console.log(err))
    }

    static login(req,res,next) {
        let { email, password } = req.body
        User.findOne({email})
            .then(user => {
                if (user) {
                    checkPassword(password, user.password, (err, result) => {
                        if (result) {
                            generateToken({id: user.id}, (err, token) => {
                                if (token) {
                                    res.status(200).json({token: `Bearer ${token}`})
                                }else {
                                    res.status(400).json({message: "Oops, something wrong with authentication process"})
                                }
                            })
                        }else {
                            res.status(400).json({message: "Invalid email / password"})
                        }
                    })
                }else {
                    res.status(400).json({message: "Invalid email / password"})
                }
                
            })
    }

}   

export default UserController;
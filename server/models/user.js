import mongoose from 'mongoose';
import { hashPassword } from '../helpers/bcr';

const userSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: [true, "Full name cannot be empty"]
    },
    email: {
        type: String,
        required: [true, "Email cannot be empty"],
        validate: [
            {
                validator: function (value) {
                    this.model('User').findOne({email: value})
                        .then(user => {
                            if (user) return false;
                            return true
                        })
                },
                message: props => `${props.value} already taken, choose another one`
            },
            {
                validator: function (value) {
                    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return emailRegex.test(value)
                },
                message: props => `${props.value} is not valid email`
            }
        ]
    },
    password: {
        type: String,
        required:[true, "Password cannot be empty"]
    }
})

userSchema.pre('save', function (next) {
    let pass = this.password
    hashPassword(pass, (err, encPass) => {

        this.password = encPass;
        next();
    })
})

const user = mongoose.model('User', userSchema);

export default user;
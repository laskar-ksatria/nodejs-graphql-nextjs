import jwt from 'jsonwebtoken'

const SECRET_CODE = 'owlking'

export const generateToken = (payload, cb) => {
    jwt.sign(payload, SECRET_CODE, (err, token) => {
        if (token) return cb(null, token)
        return cb(err, null)
    })
}

export const verifyToken = (token) => {
    jwt.verify(token, SECRET_CODE, (err, decoded) => {
        if (decoded) return (null, decoded)
        return cb(err, null)
    })
}

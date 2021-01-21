import bcr from 'bcryptjs';

export function hashPassword(password, cb) {
    let salt = bcr.genSaltSync(10)
    console.log(password)
    bcr.hash(password, salt, (err, encrypt) => {
        if (encrypt) {
            cb(null, encrypt)
        }else {
            cb(err, null)
        }
    })
}

export function checkPassword(password, encPassword, cb) {
    bcr.compare(password, encPassword, (err, result) => {
        if (result) {
            cb(null, result)
        }else if (err) {
            cb(err, null)
        }else {
            cb(true, null)
        }
    })
}

import * as Type from './type'

const initialState = {
    user: null,
    message: "Message from reducer"
}

const userReducer = (state=initialState, action) => {
    let { type, payload } = action;
    switch(type) {
        case Type.SET_USERS:
            return {...state, users: payload}
        case Type.SET_MESSAGE:
            return {...state, message: payload}
        default:
            return state;
    }
}

export default userReducer
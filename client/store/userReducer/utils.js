import { SET_MESSAGE, SET_USERS } from './type'

export const F_CHANGE_MESSAGE = (dispatch, message, cb) => {
    dispatch({type: SET_MESSAGE, payload: message})
    if (cb) cb()
};



import * as Type from './type';

const initialState = {
    posts: [],
}

const postReducer = (state, action) => {
    let { type, payload } = action;

    switch(type) {

        case Type.SET_POSTS:
            return {...state, posts: payload}

        default:
            return state;
    }
}


export default postReducer;
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

//importing reducers
import userReducer from './userReducer'

//export all function
export * from './userReducer/utils'

const initialState = {}
const middleware = [thunk]
const rootReducer = combineReducers({ userReducer })

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;
import { combineReducers } from 'redux'

import { loadingBarReducer } from 'react-redux-loading-bar'
import {users} from './users'
import { auth } from './auth'
import { questions } from './questions'

export default combineReducers({
    users,
    auth,
    questions,
    loadingBar:loadingBarReducer,
})
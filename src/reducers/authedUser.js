import {SET_AUTHED_USER} from '../actions/authedUser'


export const authedUser = (state={}, action) => {
    switch (action.type) {
        case SET_AUTHED_USER :
            return {
               ...state,
               ...action.authedUser
        }
        default: 
        return state;
    }
} 
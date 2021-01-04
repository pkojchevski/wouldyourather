import {SET_AUTHED_USER} from '../actions/auth'
import { LOGOUT } from '../actions/auth'

export const auth = (state = {}, action) => {
    switch (action.type) {
        case SET_AUTHED_USER :
            return {
               ...state,
               authedUser:action.authedUser
        };
        case LOGOUT :
            return {
               ...state,
              authedUser:null
        };    
        default: 
        return state;
    }
} 
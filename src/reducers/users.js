import {GET_USERS} from '../actions/users'
import { bindActionCreators } from 'redux';

export const users = (state={}, action) => {
    switch (action.type) {
        case GET_USERS :
            return {
               ...state,
               ...action.users
        }
        default: 
        return state;
    }
} 
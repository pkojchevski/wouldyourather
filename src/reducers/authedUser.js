import {SET_AUTHED_USER} from '../actions/authedUser'
import { getAnsweredQuestionsFromUser, GET_UNANSWERED_QUESTIONS_FROM_USER } from '../actions/questions';
import { GET_QUESTIONS } from '../actions/questions'
import { LOGOUT } from '../actions/authedUser'

export const authedUser = (state={}, action) => {
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
        // case GET_QUESTIONS: 
        //      return {
        //          ...state,
        //          answeredQuestions: action.questions,
        //          unansweredQuestions: action.questions
        //      };
            
        default: 
        return state;
    }
} 
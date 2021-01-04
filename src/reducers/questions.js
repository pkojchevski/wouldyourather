
import { GET_QUESTIONS, ADD_QUESTION, REDIRECT_TO } from '../actions/questions'

export const questions = (state={}, action) => {
   switch(action.type) {
        case GET_QUESTIONS:
           return {
               ...state,
               questions:action.questions,
               redirectTo:null
           };
           case ADD_QUESTION:
            return Object.assign(state, {[action.question.id]:action.question});

           case REDIRECT_TO: 
           return {
               ...state,
               redirectTo:action.link
           }
        default: {
            return state;
        }
   }
}
 
export default questions;
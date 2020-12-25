
import { GET_QUESTIONS } from '../actions/questions'

export const questions = (state={}, action) => {
   switch(action.type) {
       case GET_QUESTIONS:
           return {
               ...state,
               ...action.questions
           };
        default: {
            return state;
        }
   }
}
 
export default questions;
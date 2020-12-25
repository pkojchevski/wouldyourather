import { showLoading, hideLoading } from 'react-redux-loading'
import { _getQuestions } from '../_DATA'

export const  GET_UNANSWERED_QUESTIONS_FROM_USER = 'GET_UNANSWERED_QUESTIONS_FROM_USER'
export const  GET_ANSWERED_QUESTIONS_FROM_USER = 'GET_ANSWERED_QUESTIONS_FROM_USER'
export const GET_QUESTIONS = 'GET_QUESTIONS'

export const getAnsweredQuestionsFromUser = (questions) => ({
    type: GET_ANSWERED_QUESTIONS_FROM_USER,
    answeredQuestions: questions
})
 
const getUnansweredQuestionsFromUser = (user) => ({
    type:GET_ANSWERED_QUESTIONS_FROM_USER,
    unansweredQuestions: user
})

const getQuestions = questions => {
    return {
        type: GET_QUESTIONS,
        questions
    };
}
  export const getQuestionsAsync = () => dispatch => {
      dispatch(showLoading())
      _getQuestions()
        .then(questions => {
            console.log('questions:', questions)
            dispatch(getQuestions(questions))

            
        })
        .then(() => dispatch(hideLoading()))

  }
   
  export default getQuestionsAsync;




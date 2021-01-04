import { showLoading, hideLoading } from 'react-redux-loading'
import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../_DATA'

export const GET_UNANSWERED_QUESTIONS_FROM_USER = 'GET_UNANSWERED_QUESTIONS_FROM_USER'
export const GET_ANSWERED_QUESTIONS_FROM_USER = 'GET_ANSWERED_QUESTIONS_FROM_USER'
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER"
export const REDIRECT_TO = "REDIRECT_TO"

export const getAnsweredQuestionsFromUser = (questions) => ({
    type: GET_ANSWERED_QUESTIONS_FROM_USER,
    answeredQuestions: questions
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
            dispatch(getQuestions(questions))
        })
        .then(() => dispatch(hideLoading()))

  }

  const addQuestion = question => ({
      type: ADD_QUESTION,
      question
  })


  export const addQuestionAsync = question => dispatch => {
    dispatch(showLoading())

    _saveQuestion(question)

        .then((question) => {
            dispatch(addQuestion(question))
        })
        .then(() => dispatch(hideLoading()))
  }

  const redirectTo = link => ({
      type:REDIRECT_TO,
      link
  })

  export const addQuestionAnswerAsync = ({ authedUser, qid, answer }) => async dispatch => {
      try {
        dispatch(showLoading())
        await _saveQuestionAnswer({ authedUser, qid, answer })
        const questions = await _getQuestions()

        dispatch(getQuestions(questions))
        dispatch(redirectTo(`/question/${qid}/report`))
        dispatch(showLoading())
      } catch(err) {
          console.log(err)
      }
  }


   





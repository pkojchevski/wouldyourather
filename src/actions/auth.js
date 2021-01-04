import { showLoading, hideLoading } from 'react-redux-loading'
import { _getQuestions } from '../_DATA'


export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const LOGOUT = 'LOGOUT'

export const setAuthedUser = (authedUser) => ({
    type:SET_AUTHED_USER,
    authedUser
})

export const getAuthedUser = (authedUser) => ({
    type:SET_AUTHED_USER,
    authedUser
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
        .then(questions => 
        dispatch(getQuestions(questions)))
        .then(() => dispatch(hideLoading()))
  }

export const logout = () => ({
    type:LOGOUT
})


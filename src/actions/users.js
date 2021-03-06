import { _getUsers } from '../_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const GET_USERS = "GET_USERS"
export const GET_USER_FROM_AUTHOR = "GET_USER_FROM_AUTHOR"

const getUsers = (users) => ({
    type:GET_USERS,
    users
})

export const getUsersAsync = () => dispatch => {
    dispatch(showLoading())
     _getUsers().then((users) => {
         dispatch(getUsers(users))
        })
    .then(() => dispatch(hideLoading()))
}






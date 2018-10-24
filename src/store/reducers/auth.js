import {handleActions, combineActions } from 'redux-actions'
import {login, logout, register, resetPassword, changeCredentials} from '@src/store/actions'

const initialState = {
  userName: '',
  userEmail: '',
  loading: false
}

const authReducer = handleActions({
  [combineActions(
    login.START,
    logout.START,
    register.START,
    resetPassword.START,
    changeCredentials.START
  )]: state => ({...state, loading: true}),
  [login.SUCCEEDED]:
  (state, {payload: {name, email}}) =>
  ({...state, userName: name, userEmail: email})
})

export default authReducer
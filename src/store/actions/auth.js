import {createActions} from 'redux-action'

const {login, logout} = createActions({
  LOGIN: credentials => ({credentials}),
  REGISTER,
  RESET_PASSWORD,
  CHANGE_CREDENTIALS,
  LOGOUT
})
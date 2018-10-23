import {createActionThunk} from 'redux-thunk-actions'
import api from '@src/api'

export const login = createActionThunk('LOGIN', credentials => api.login(credentials))
export const logout = createActionThunk('LOGOUT', api.logout)
export const register = createActionThunk('REGISTER', user => api.register(user))
export const resetPassword = createActionThunk('RESET_PASSWORD', api.resetPassword)
export const changeCredentials = createActionThunk(
  'CHANGE_CREDENTIALS',
  newCredentials => api.changeCredentials(newCredentials)
)

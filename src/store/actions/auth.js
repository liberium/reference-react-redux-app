import { createActionThunk } from 'redux-thunk-actions'
import api from 'api'

export const signIn = createActionThunk('SIGN_IN', credentials => api.signIn(credentials))
export const signOut = createActionThunk('SIGN_OUT', () => api.signOut())
export const signUp = createActionThunk('SIGN_UP', user => api.signUp(user))
export const resetPassword = createActionThunk('RESET_PASSWORD', () => api.resetPassword())
export const requestResetPasswordLink = createActionThunk('REQUEST_RESET_PASSWORD_LINK', () =>
  api.requestResetPasswordLink()
)
export const changeCredentials = createActionThunk('CHANGE_CREDENTIALS', newCredentials =>
  api.changeCredentials(newCredentials)
)

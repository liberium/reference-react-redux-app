import { handleActions, combineActions } from 'redux-actions'
import {
  login,
  logout,
  register,
  resetPassword,
  requestResetPasswordLink,
  changeCredentials
} from 'store/actions'

const initialState = {
  userFullName: undefined,
  userEmail: undefined,
  loading: false,
  error: null
}

const auth = handleActions(
  {
    [combineActions(
      login.START,
      logout.START,
      register.START,
      resetPassword.START,
      requestResetPasswordLink.START,
      changeCredentials.START
    )]: state => ({ ...state, loading: true }),
    [login.SUCCEEDED]: (
      state,
      {
        payload: {
          data: { name, email }
        }
      }
    ) => ({
      ...state,
      userFullName: name,
      userEmail: email
    }),
    [logout.SUCCEEDED]: state => ({ ...state, userFullName: null, userEmail: null }),
    [register.SUCCEEDED]: (
      state,
      {
        payload: {
          data: {
            data: { name, email }
          }
        }
      }
    ) => ({ ...state, userFullName: name, userEmail: email }),
    [resetPassword.SUCCEEDED]: state => ({ ...state }),
    [changeCredentials.SUCCEEDED]: state => ({ ...state }),
    [combineActions(
      login.FAILED,
      logout.FAILED,
      register.FAILED,
      resetPassword.FAILED,
      requestResetPasswordLink.FAILED,
      changeCredentials.FAILED
    )]: (state, { error: { data: error } }) => ({ ...state, error }),
    [combineActions(
      login.ENDED,
      logout.ENDED,
      register.ENDED,
      resetPassword.ENDED,
      requestResetPasswordLink.ENDED,
      changeCredentials.ENDED
    )]: state => ({ ...state, loading: false })
  },
  initialState
)

export default auth

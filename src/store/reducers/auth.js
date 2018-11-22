import { handleActions, combineActions } from 'redux-actions'
import {
  signIn,
  signOut,
  signUp,
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
      signIn.START,
      signOut.START,
      signUp.START,
      resetPassword.START,
      requestResetPasswordLink.START,
      changeCredentials.START
    )]: state => ({ ...state, loading: true }),
    [signIn.SUCCEEDED]: (
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
    [signOut.SUCCEEDED]: state => ({ ...state, userFullName: null, userEmail: null }),
    [signUp.SUCCEEDED]: (
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
      signIn.FAILED,
      signOut.FAILED,
      signUp.FAILED,
      resetPassword.FAILED,
      requestResetPasswordLink.FAILED,
      changeCredentials.FAILED
    )]: (state, { error: { data: error } }) => ({ ...state, error }),
    [combineActions(
      signIn.ENDED,
      signOut.ENDED,
      signUp.ENDED,
      resetPassword.ENDED,
      requestResetPasswordLink.ENDED,
      changeCredentials.ENDED
    )]: state => ({ ...state, loading: false })
  },
  initialState
)

export default auth

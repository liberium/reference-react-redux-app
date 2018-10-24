import { handleActions, combineActions } from 'redux-actions'
import { login, logout, register, resetPassword, changeCredentials } from '@src/store/actions'

const initialState = {
  userFullName: null,
  userEmail: null,
  loading: false,
  error: null
}

const authReducer = handleActions(
  {
    [combineActions(
      login.START,
      logout.START,
      register.START,
      resetPassword.START,
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
    [register.SUCCEEDED]: state => ({ ...state }),
    [resetPassword.SUCCEEDED]: state => ({ ...state }),
    [changeCredentials.SUCCEEDED]: state => ({ ...state }),
    [combineActions(
      login.FAILED,
      logout.FAILED,
      register.FAILED,
      resetPassword.FAILED,
      changeCredentials.FAILED
    )]: (state, { error: { data: error } }) => ({ ...state, error }),
    [combineActions(
      login.ENDED,
      logout.ENDED,
      register.ENDED,
      resetPassword.ENDED,
      changeCredentials.ENDED
    )]: state => ({ ...state, loading: false })
  },
  initialState
)

export default authReducer

import { connect } from 'react-redux'
import { login } from 'store/actions'
import { SignInForm } from 'components'

export default connect(
  null,
  dispatch => ({
    login: credentials => dispatch(login(credentials))
  })
)(SignInForm)

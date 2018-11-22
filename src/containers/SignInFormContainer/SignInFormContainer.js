import { connect } from 'react-redux'
import { signIn } from 'store/actions'
import { SignInForm } from 'components'

export default connect(
  null,
  dispatch => ({
    signIn: credentials => dispatch(signIn(credentials))
  })
)(SignInForm)

import { connect } from 'react-redux'
import { signUp } from 'store/actions'
import { SignUpForm } from 'components'

export default connect(
  null,
  dispatch => ({
    signUp: user => dispatch(signUp(user))
  })
)(SignUpForm)

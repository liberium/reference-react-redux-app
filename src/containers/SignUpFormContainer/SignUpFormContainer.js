import { connect } from 'react-redux'
import { register } from 'store/actions'
import { SignUpForm } from 'components'

export default connect(
  null,
  dispatch => ({
    register: user => dispatch(register(user))
  })
)(SignUpForm)

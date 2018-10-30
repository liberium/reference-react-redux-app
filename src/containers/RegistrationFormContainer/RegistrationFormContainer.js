import { connect } from 'react-redux'
import { register } from '@src/store/actions'
import { RegistrationForm } from '@src/components'

export default connect(
  null,
  dispatch => {
    register: user => dispatch(register(user))
  }
)(RegistrationForm)

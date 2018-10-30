import { connect } from 'react-redux'
import { login } from 'store/actions'
import { LoginForm } from 'components'

export default connect(
  null,
  dispatch => ({
    login: credentials => dispatch(login(credentials))
  })
)(LoginForm)

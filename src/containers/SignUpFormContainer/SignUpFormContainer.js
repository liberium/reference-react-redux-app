import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import store from 'store'
import { signUp } from 'store/actions'
import { SignUpForm } from 'components'

export default connect(
  null,
  bindActionCreators({ signUp }, store.dispatch)
)(SignUpForm)

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import store from 'store'
import { signIn } from 'store/actions'
import SignInForm from 'components/SignInForm'

export default connect(
  null,
  bindActionCreators({ signIn }, store.dispatch)
)(SignInForm)

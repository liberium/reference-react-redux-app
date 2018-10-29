import React from 'react'
import { connect } from 'react-redux'
import { LoginForm } from '@src/components'

class LoginScreen extends React.Component {
  render() {
    return <LoginForm />
  }
}

export default connect()(LoginScreen)

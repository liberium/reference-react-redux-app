import React from 'react'
import { connect } from 'react-redux'
import { RegistrationForm } from '@src/components'

class RegistrationScreen extends React.Component {
  render() {
    return <RegistrationForm />
  }
}

export default connect()(RegistrationScreen)

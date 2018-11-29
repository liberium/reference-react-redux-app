import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { SignInFormContainer, SignUpFormContainer } from 'containers'

export default function Main() {
  return (
    <React.Fragment>
      <Route exact path="/">
        <Redirect to="/sign-in" />
      </Route>
      <Route path="/sign-in" component={SignInFormContainer} />
      <Route path="/sign-up" component={SignUpFormContainer} />
    </React.Fragment>
  )
}

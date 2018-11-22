import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Header, Sidebar, Main, Footer } from 'components'
import { SignInFormContainer, SignUpFormContainer } from 'containers'

export default function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Main>
        <Route exact path="/">
          <Redirect to="/sign-in" />
        </Route>
        <Route path="/sign-in" component={SignInFormContainer} />
        <Route path="/sign-up" component={SignUpFormContainer} />
      </Main>
      <Footer />
    </>
  )
}

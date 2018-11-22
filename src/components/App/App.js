import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Header, Sidebar, Main, Footer } from 'components'
import { LoginFormContainer } from 'containers'

export default function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Main>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/register" component={LoginFormContainer} />
      </Main>
      <Footer />
    </>
  )
}

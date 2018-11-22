import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import store from 'store'
import { Header, Sidebar, Main, Footer } from 'components'
import { LoginFormContainer } from 'containers'

function App() {
  return (
    <Provider store={store}>
      <Router>
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
      </Router>
    </Provider>
  )
}

export default App

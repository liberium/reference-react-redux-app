import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { LoginScreen } from '@src/components'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={LoginScreen} />
      </Router>
    </Provider>
  )
}

export default App

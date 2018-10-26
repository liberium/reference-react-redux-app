import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { LoginScreen } from '@src/containers'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={LoginScreen} />
      </Router>
    </Provider>
  )
}

export default App

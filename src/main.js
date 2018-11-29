import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { IntlProvider, addLocaleData } from 'react-intl'
import { en, ru } from 'react-intl/locale-data'
import store from 'store'
import { App } from 'components'
import translations from 'i18n'

addLocaleData([...en, ...ru])

const locale =
  (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage

const localeWithoutRegionCode = locale.toLowerCase().split(/[_-]+/)[0]

/* Try full locale; try locale without region code; fallback to 'en'. */
const messages = translations[localeWithoutRegionCode] || translations[locale] || translations.en

const appRef = ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </IntlProvider>,
  document.getElementById('reference-react-redux-app-root')
)

export default appRef

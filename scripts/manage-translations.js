const path = require('path')
const manageTranslations = require('react-intl-translations-manager').default

const i18nPath = path.join(__dirname, '..', 'src/i18n')

manageTranslations({
  messagesDirectory: path.join(i18nPath, 'messages'),
  translationsDirectory: path.join(i18nPath, 'translations'),
  languages: ['en', 'ru'],
  singleMessagesFile: true
})

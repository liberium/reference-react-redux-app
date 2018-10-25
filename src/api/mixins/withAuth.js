const withAuth = sup =>
  class extends sup {
    login(credentials) {
      return this.post('/login', credentials)
    }

    logout() {
      return this.post('/logout')
    }

    register(user) {
      return this.post('/register', user)
    }

    resetPassword(newPasswordWithToken) {
      return this.post('/password/reset', newPasswordWithToken)
    }

    requestResetPasswordLink(email) {
      return this.post('/password/email', email)
    }

    changeCredentials(newCredentials) {
      return this.post('/profile', newCredentials)
    }
  }

export default withAuth

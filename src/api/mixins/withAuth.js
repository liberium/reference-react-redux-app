export default function withAuth(superclass) {
  return class extends superclass {
    signIn(credentials) {
      return this.post('/sign-in', credentials)
    }

    signOut() {
      return this.post('/sign-out')
    }

    signUp(user) {
      return this.post('/sign-up', user)
    }

    resetPassword(newPasswordWithToken) {
      return this.post('/reset-password', newPasswordWithToken)
    }

    requestResetPasswordLink(email) {
      return this.post('/request-reset-password-link', email)
    }

    changeCredentials(newCredentials) {
      return this.post('/users/me/change-credentials', newCredentials)
    }
  }
}

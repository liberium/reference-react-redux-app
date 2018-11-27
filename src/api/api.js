import { compose } from 'lodash/fp'
import mixins from './mixins'

const MixinComposition = compose(...mixins)

class Api extends MixinComposition(Object) {
  baseUrl = 'https://domain.com/api/v3'

  makeUrl(path) {
    return `${this.baseUrl}${path}`
  }

  requestApi(path, options) {
    return fetch(this.makeUrl(path), options)
  }

  get(path, options) {
    return this.requestApi(path, { method: 'get', ...options })
  }

  post(path, options) {
    return this.requestApi(path, { method: 'post', ...options })
  }

  put(path, options) {
    return this.requestApi(path, { method: 'put', ...options })
  }

  delete(path, options) {
    return this.requestApi(path, { method: 'delete', ...options })
  }
}

export default new Api()

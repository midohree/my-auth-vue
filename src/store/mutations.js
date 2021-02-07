import * as types from './mutation_types'

export default {
  [types.EMAIL] (state, email) {
    console.log(state, email, 'in mutation email')
    state.email = email
  },
  [types.STATUS_MESSAGE] (state, statusMessage) {
    state.statusMessage = statusMessage
  },
  [types.IS_AUTH] (state, isAuth) {
    state.isAuth = isAuth
  },
  [types.PASSWORD] (state, password) {
    state.password = password
  },
  [types.AUTH_CODE] (state, authCode) {
    state.authCode = authCode
  },
  [types.SUCCESS_STATE] (state, successState) {
    console.log(successState)
    state.successState = successState
  }
}

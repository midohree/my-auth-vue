import {
  fetchAuthCodeRequest,
  fetchAuthCode,
  fetchNewPassword,
} from "../utils/api.js";
import * as types from './mutation_types'

let setEmail = ({ commit }, data) => {
  commit(types.EMAIL, data)
}

let setStatusMessage = ({ commit }, data) => {
  commit(types.STATUS_MESSAGE, data)
}

let setSuccessState = ({ commit }, data) => {
  commit(types.SUCCESS_STATE, data)
}

export default {
  async requestAuthCode(store, { email }) {
    try {
      const result = await fetchAuthCodeRequest(email)
      const { data } = result;

      console.log(data)

      setSuccessState(store, data)
      setStatusMessage(store, '인증코드를 성공적으로 받아왔습니다.')

      return { data: store.state.successState, message: store.state.statusMessage }
    } catch (err) {
      setStatusMessage(store, '인증코드를 받아오는데 실패했습니다. 이메일을 다시 입력해주세요.')
    }
  },
  async verifyAuthCode({ commit, state }) {
    const options = { authCode: state.authCode }

    try {
      const result = await fetchAuthCode(options)
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  },
  async changeNewPassword({ commit, state }) {
    const options = { password: state.password }
    try {
      const result = await fetchNewPassword(options)
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }
}
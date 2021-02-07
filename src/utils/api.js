import axios from 'axios'

const baseUrl = 'https://ably-frontend-interview-server.vercel.app'
const requestOptions = {
  headers: {
    'Content-Type': 'application/json'
  }
}

// 인증 코드 발급 요청 페이지
export const fetchAuthCodeRequest = async email => {
  const result = await axios.get(
    `${baseUrl}/api/reset-password?email=${email}`,
    {
      params: {
        'email': email
      }
    },
    requestOptions
  )

  return result
}

// 인증 코드 검증 페이지
export const fetchAuthCode = async data => {
  const payload = {
    email: data.email,
    authCode: data.authCode,
    issueToken: data.issueToken
  }

  const result = await fetch(`${baseUrl}/api/reset-password`, {
    method: 'POST',
    body: JSON.stringify(payload),
    requestOptions
  })

  console.log(result, 'fetchAuthCode')
  return result.json()
}

// 비밀번호 변경 페이지
export const fetchNewPassword = async data => {
  const payload = {
    email: data.email,
    confirmToken: data.confirmToken,
    newPassword: data.newPassword,
    newPasswordConfirm: data.newPasswordConfirm
  }

  const result = await fetch(`${baseUrl}/api/reset-password`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
    requestOptions
  })

  console.log(result, 'fetchAuthCode')
  return result.json()
}

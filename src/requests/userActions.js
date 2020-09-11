import { get, post } from './request'

export async function postLoginRequest(params) {
  let user = await post('api/login', params)

  return user.data
}

export async function postSignUpRequest(params) {
  let newUser = await post('api/signUp', params)

  return newUser.data
}
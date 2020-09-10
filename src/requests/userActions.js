import { get, post } from './request'

export async function postLoginRequest(params) {
  let user = await post('api/login', params)

  return user.data
}

// export async function postTweetRequest(params) {
//   let newTweet = await post('api/tweet', params)

//   return newTweet.data
// }
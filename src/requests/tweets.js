import { get, post } from './request'

export async function getTweetsRequest() {
  let tweets = await get('api/tweets')

  return tweets.data
}

// export async function getOnePostRequest(id) {
//   let postWithComments = await get(`api/tweets/${id}`)

//   return postWithComments.data
// }

export async function postTweetRequest(params) {
  let newTweet = await post('api/tweet', params)

  return newTweet.data
}
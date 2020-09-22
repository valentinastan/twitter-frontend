import { get, post } from './request'

export async function getTweetsRequest(params = {}, headers) {
  let tweets = await get('api/tweets', params, headers)

  return tweets.data
}

// export async function getOnePostRequest(id) {
//   let postWithComments = await get(`api/tweets/${id}`)

//   return postWithComments.data
// }

export async function postTweetRequest(params, headers) {
  let newTweet = await post('api/tweet', params, headers)
  
  console.log('params: ', params)
  console.log('post: ', newTweet) //req.config.headers

  return newTweet.data
}
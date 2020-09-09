export default function tweetReducer(state, action) {
  console.log("state", state)
  switch(action.type) {
    case 'GET_TWEETS':
      console.log(action)
      state.tweets = action.tweet

      return {...state}
    case 'NEW_TWEET':
      console.log(state)
      //state.tweets = action.tweet

      return state = {...state, tweets: action.tweet}
    default:

      return {...state}
  }
}
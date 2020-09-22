import React, { useState } from 'react'
import Tweet from './tweet'
import CreateTweet from './createTweet'
import { getTweetsRequest } from '../requests/tweets'
import { useStore } from '../state-management/stores/store'


const Tweets = () => {

  const [state, setState] = useState([]);
  const [store] = useStore()

  React.useEffect(() => {
    getTweetsRequest(
      {}, 
      { 'Authorization': store.user.authToken }
    ).then(tweets => setState(tweets))
  }, [])

  const addNewTweetToState = (newTweet) => {
    let newState = []
    Object.assign(newState, state)
    newState.push(newTweet) 
    setState(newState)
  }

  return(
    <React.Fragment>
      {(state || []).map(tweet => <Tweet key={`idTweet_${tweet.id}`} {...tweet}></Tweet> )}
      <CreateTweet addTweet = {addNewTweetToState}></CreateTweet>
    </React.Fragment>
  )
}

export default Tweets
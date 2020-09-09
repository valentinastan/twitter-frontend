import React, { useState } from 'react'
import Tweet from './tweet'
import CreateTweet from './createTweet'
import { getTweetsRequest } from '../requests/tweets'


const Tweets = () => {

  const [state, setState] = useState([]);

  React.useEffect(() => {
    getTweetsRequest().then(tweets => setState(tweets))
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
import React, { useState } from 'react'
import Tweet from './tweet'
import CreateTweet from './createTweet'
import { getTweetsRequest } from '../requests/tweets'

const Tweets = () => {

  const [state, setState] = useState([]);
  
  React.useEffect(() => {
    getTweetsRequest().then(tweets => setState(tweets))
  }, [])

  return(
    <React.Fragment>
      <CreateTweet></CreateTweet>
      { (state || []).map(tweet => <Tweet key={`idTweet_${tweet.id}`} {...tweet}></Tweet> )}
    </React.Fragment>
  )
}

export default Tweets
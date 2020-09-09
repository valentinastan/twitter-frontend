import React, { useState } from 'react'
import { useDispatch } from '../state-management/stores/store'
import { postTweetRequest } from '../requests/tweets'

const CreateTweet = () => {
  const [state, setState] = useState('')
  const dispatch = useDispatch()

  const newTweet = () => {
    postTweetRequest({
      text: state,
    }).then((tweet) => dispatch({
      type: 'NEW_TWEET',
      tweet
    }))
  }

  return(
    <React.Fragment>
      <textarea id="newTweet" rows="4" cols="30" onChange={(event) => setState(event.target.value)}></textarea>
      <button type='button' onClick = {newTweet}>Adauga tweet</button>
    </React.Fragment>
  )
}

export default CreateTweet

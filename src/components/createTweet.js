import React, { useState } from 'react'
import { useDispatch } from '../state-management/stores/store'
import { postTweetRequest } from '../requests/tweets'

const CreateTweet = (props) => {
  const [state, setState] = useState('')
  const dispatch = useDispatch()

  const newTweet = () => {
    postTweetRequest({
      text: state,
    }).then((tweet) => props.addTweet(tweet))
  }

  const clearTextarea = () => {
    if(document.getElementById("newTweet").value)
    document.getElementById("newTweet").value = ''
  }

  return(
    <React.Fragment>
      <textarea id="newTweet" rows="4" cols="30" onChange={(event) => setState(event.target.value)}></textarea>
      <button type='button' onClick = {() => {
        clearTextarea()
        return newTweet()
      }}>Add tweet</button>
    </React.Fragment>
  )
}

export default CreateTweet

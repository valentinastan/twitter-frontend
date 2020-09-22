import React, { useState } from 'react'
import { useStore } from '../state-management/stores/store'
import { postTweetRequest } from '../requests/tweets'
import { clearUserText } from '../helpers/functionsOnText'

const CreateTweet = (props) => {
  const [state, setState] = useState('')
  const [store] = useStore()
  console.log('store userrrrrrrrrrrrr', store)

  const newTweet = () => {
    postTweetRequest({
      text: state,
    }, {
      'Authorization': store.user.authToken,
    }).then((tweet) => props.addTweet(tweet))
  }

  return(
    <React.Fragment>
      <textarea id="newTweet" rows="4" cols="30" onChange={(event) => setState(event.target.value)}></textarea>
      <button type='button' onClick = {() => {
        clearUserText()
        return newTweet()
      }}>Add tweet</button>
    </React.Fragment>
  )
}

export default CreateTweet

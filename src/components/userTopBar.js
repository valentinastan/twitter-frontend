import React from 'react'
import { useState, useDispatch } from '../state-management/stores/store'


const UserTopBar = () => {
  const dispatch = useDispatch()
  const username = useState().user.username

  const store = useState()
  let storeToken = store.user.authToken
  let localStorageToken = JSON.parse(localStorage.getItem('userLogged')).authToken

  const isAuthenticated =  (() => storeToken ? true : false)

  const giveToken = (() => {
    if(!storeToken) {
      if(!localStorageToken) {
        dispatch({
          type: 'SAVE_TOKEN',
          localStorageToken
        }) 
        return localStorageToken
      }
      else return ''
    }
    else return storeToken
  })

  return(
    <React.Fragment>
      {console.log(isAuthenticated())}

      {console.log(giveToken())}
      <div className='user-topbar'>
       {(username) ? <div>Your username: {username}</div> : <div></div>}
      </div>
    </React.Fragment>
  )
}

export default UserTopBar
import React from 'react'
import { useState } from '../state-management/stores/store'

const UserTopBar = () => {
  const store = useState()

  return(
    <React.Fragment>
      <div className='user-topbar'>
       {(store.user.username) ? <div>Your username: {store.user.username}</div> : <div></div>}
      </div>
    </React.Fragment>
  )
}

export default UserTopBar
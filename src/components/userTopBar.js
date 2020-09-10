import React from 'react'
import { useState } from '../state-management/stores/store'

const UserTopBar = () => {
  const username = useState().user[0]

  return(
    <React.Fragment>
      <div className='user-topbar'>
       {(username) ? <div>Username: {username}</div> : <div></div>}
      </div>
    </React.Fragment>
  )
}

export default UserTopBar
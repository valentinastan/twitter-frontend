import React from 'react'

const Tweet = (props) => {
  return(
    <React.Fragment>
      <h3>id: {props.id}, text: {props.text}, user: {props.userId}</h3>
    </React.Fragment>
  )
}

export default Tweet
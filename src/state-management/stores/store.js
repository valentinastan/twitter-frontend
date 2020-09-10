import React from 'react';
import tweetReducer from '../reducers/tweetReducer'
import userReducer from '../reducers/userReducer'

const initialState = {
  tweets: {},
  user: []
}

const Store = React.createContext();
const Dispatch = React.createContext();

// const combinedReducers = (state, action) => ({
//   tweetsState: tweetReducer(state.tweets, action),
//   userState: userReducer(state.user, action),
// })

function StateProvider({ children }) {
  const [state, dispatch] = React.useReducer(userReducer, initialState)

  return (
    <Store.Provider value={state}>
      <Dispatch.Provider value={dispatch}>
        {children}
      </Dispatch.Provider>
    </Store.Provider>
  )
}

function useState() {
  const context = React.useContext(Store)
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}

function useDispatch() {
  const context = React.useContext(Dispatch)
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider')
  }
  return context
}

function useStore() {
  return [useState(), useDispatch()]
}

export { StateProvider, useState, useDispatch, useStore }
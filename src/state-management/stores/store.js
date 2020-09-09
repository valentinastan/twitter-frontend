import React from 'react';
import tweetReducer from '../reducers/tweetReducer'

const initialState = {
  tweets: {}
}

const Store = React.createContext();
const Dispatch = React.createContext();

// const combinedReducers = (state, action) => ({
//   postState: postReducer(state.postState, action),
//   commentState: commentReducer(state.commentState, action),
// })

function StateProvider({ children }) {
  const [state, dispatch] = React.useReducer(tweetReducer, initialState)

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
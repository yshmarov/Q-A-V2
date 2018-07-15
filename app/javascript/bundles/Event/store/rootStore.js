import React from 'react'
import ReactOnRails from 'react-on-rails'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducer, { initialStates } from '../reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'

const DevTools = require('packs/devTools').default
const isDevEnv = process.env.NODE_ENV === 'development'

export default props => {
  const { user } = props

  const { userState, eventState } = initialStates
  const initialState = {
    userStore: { ...userState, email: user.email},
    eventStore: eventState
  }

  console.log(initialState, 'INIT STATE')

  const store = () => {
    if (isDevEnv) {
      const composedStore = compose(
        applyMiddleware(thunkMiddleware, logger),
        DevTools.instrument()
      )
      return createStore(reducer, initialState, composedStore)
    } else {
      const composedStore = compose(applyMiddleware(thunkMiddleware))
      return createStore(reducer, initialState, composedStore)
    }
  }
  return store()
}

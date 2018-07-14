import React from 'react'
import ReactOnRails from 'react-on-rails'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducer, { initialStates } from '../bundles/Event/reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'

import Event from '../bundles/Event/components/Event'

const DevTools = require('./devTools').default
const isDevEnv = process.env.NODE_ENV === 'development'

const EventApp = (props, _railsContext) => {
  const { user } = props

  const { userState, eventState } = initialStates
  const initialState = {
    userStore: { ...userState, email: user.email},
    eventStore: eventState
  }

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

  const reactComponent = (
    <Provider store={store()}>
      <Event />
    </Provider>
  )
  return reactComponent
}

ReactOnRails.register({ EventApp })

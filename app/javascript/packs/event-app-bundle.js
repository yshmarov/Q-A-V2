import React from 'react'
import ReactOnRails from 'react-on-rails'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducer, { initialStates } from '../bundles/Event/reducers'
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'

import Event from '../bundles/Event/components/Event'

const EventApp = (props, _railsContext) => {
  // const DevTools = require('./components/devTools').default
  const isDevEnv = true || process.env.NODE_ENV === 'development'

  const { userState, eventState } = initialStates
  const initialState = {
    userStore: { ...userState, email: props.user.email},
    eventStore: eventState
  }

  console.log(initialState, "IN STATE")

  const store = () => {
    if (isDevEnv) {
      const composedStore = compose(
        applyMiddleware(thunkMiddleware, logger)
        // DevTools.instrument()
      )
      const storeCreator = composedStore(createStore)(reducer, initialState)
      return storeCreator
    } else {
      return createStore(reducers(props), compose(applyMiddleware(thunkMiddleware)))
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

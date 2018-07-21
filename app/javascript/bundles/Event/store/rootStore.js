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
  const user_attr = props.user.data.attributes
  const event_attr = props.event.data.attributes

  console.log(props, 'STATES')
  const { userState, eventState } = initialStates
  const initialState = {
    userStore: {...userState,
      email: user_attr.email
    },
    eventStore: {...eventState,
      id: event_attr.id,
      title: event_attr.title,
      description: event_attr.description,
      starts_at: event_attr.starts_at,
      ends_at: event_attr.ends_at
    }
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
  return store()
}

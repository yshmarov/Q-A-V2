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
  const userAttr = props.user.data
  const eventAttr = props.event.data.attributes
  const sessionAttr = props.session.data
  const eventQuestionsAttr = props.event
                                  .included
                                  .map(question => question.attributes)

  const { userState, eventState, alertState, sessionState } = initialStates

  const initialState = {
    userStore: {...userState,
      id: userAttr && userAttr.attributes && userAttr.attributes.id,
      email: userAttr && userAttr.attributes && userAttr.attributes.email
    },
    eventStore: {...eventState,
      id: eventAttr.id,
      title: eventAttr.title,
      description: eventAttr.description,
      starts_at: eventAttr.starts_at,
      ends_at: eventAttr.ends_at,
      questions: eventQuestionsAttr
    },
    sessionStore: {...sessionState,
      id: sessionAttr && sessionAttr.attributes && sessionAttr.attributes.id,
      ip: sessionAttr && sessionAttr.attributes && sessionAttr.attributes.ip
    },
    alertStore: {...alertState}
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

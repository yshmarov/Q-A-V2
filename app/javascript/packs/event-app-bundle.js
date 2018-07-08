import React from 'react'
import ReactOnRails from 'react-on-rails'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducers from '../bundles/Event/reducers'
import { createStore, applyMiddleware, compose } from 'redux'

import Event from '../bundles/Event/components/Event'

const EventApp = (props) => {

  console.log(props, 'HIGH LEVEL PROPS')

  const isDevEnv = false

  const store = () => {
    if (isDevEnv) {
      return createStore(
        reducers,
        compose(
          applyMiddleware(thunkMiddleware, logger),
          DevTools.instrument()
        )
      )
    } else {
      return createStore(reducers, compose(applyMiddleware(thunkMiddleware)))
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

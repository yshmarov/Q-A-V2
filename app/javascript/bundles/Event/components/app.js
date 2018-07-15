import React from 'react'
import ReactOnRails from 'react-on-rails'
import { Provider } from 'react-redux'

import Event from './Event'

const DevTools = require('packs/devTools').default

export default () => (
  <Provider store={ReactOnRails.getStore('eventStore')}>
    <Event />
    {isDevEnv && <DevTools />}
  </Provider>
)

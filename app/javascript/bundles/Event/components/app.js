import React from 'react'
import ReactOnRails from 'react-on-rails'
import { Provider } from 'react-redux'

import Event from './Event'

const DevTools = require('packs/devTools').default
const isDevEnv = process.env.NODE_ENV === 'development'

export default () => (
  <Provider store={ReactOnRails.getStore('eventStore')}>
    <div>
      <Event />
      {isDevEnv && <DevTools />}
    </div>  
  </Provider>
)

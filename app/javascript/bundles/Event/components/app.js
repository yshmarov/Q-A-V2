import React from 'react'
import ReactOnRails from 'react-on-rails'
import { Provider } from 'react-redux'

import Event from './Event'

export default () => (
  <Provider store={ReactOnRails.getStore('eventStore')}>
    <Event />
  </Provider>
)

import React from 'react'
import ReactOnRails from 'react-on-rails'
import { Provider } from 'react-redux'

import store from '../bundles/Event/store/rootStore'
import EventApp from '../bundles/Event/components/app'

ReactOnRails.registerStore({
  eventStore: (initialState) => store(initialState)
})
ReactOnRails.register({ EventApp })

import { combineReducers } from 'redux'

import event from './eventReducer'
import user from './userReducer'

const rootReducer = combineReducers({
  event,
  user
})

export default rootReducer

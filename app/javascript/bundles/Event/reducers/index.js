import { combineReducers } from 'redux'

import eventReducer, { initialState as eventState} from './eventReducer'
import userReducer, { initialState as userState } from './userReducer'
import alertReducer, { initialState as alertState } from './alertReducer'
import sessionReducer, { initialState as sessionState } from './sessionReducer'

export const initialStates = {
  eventState,
  userState,
  alertState,
  sessionState
}

export default combineReducers({
  userStore: userReducer,
  eventStore: eventReducer,
  alertStore: alertReducer,
  sessionStore: sessionReducer
})

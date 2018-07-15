import { combineReducers } from 'redux'

import eventReducer, { initialState as eventState} from './eventReducer'
import userReducer, { initialState as userState } from './userReducer'

export const initialStates = {
  eventState,
  userState
}

const rootReducer = () => {
  return combineReducers({
    userStore: userReducer,
    eventStore: eventReducer
  })
}

export default rootReducer

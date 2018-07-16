import actionTypes from 'constants/index'

export const initialState = {
  id: null,
  title: null,
  description: null,
  starts_at: null,
  ends_at: null
}

export default function (state = initialState, action) {
  switch (action.type) {

    default:
      return state
  }
}

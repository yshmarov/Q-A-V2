import actionTypes from 'constants'
import ReactOnRails from 'react-on-rails'
import headers from 'packs/headers'

import { showAlert } from './alertActions'

export default (question_id) => dispatch => {

  fetch('/vote_question.json', {
    method: 'PATCH',
    credentials: 'same-origin',
    body: JSON.stringify({ question: { id: question_id } }),
    headers: headers()
  })
    .then(response => {
      if (response.ok) {
        return response.json().then(res => {
          dispatch(submitVote(res))
          dispatch(showAlert('Vote counted!'))
        })
      } else {
        return response.json().then(res => {
          dispatch(showAlert(res.error))
        })
      }
    })
}

function submitVote (questions) {
  return {
    type: actionTypes.SUBMIT_VOTE_SUCCESS,
    payload: questions
  }
}

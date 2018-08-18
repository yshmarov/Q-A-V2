import actionTypes from 'constants'
import ReactOnRails from 'react-on-rails'
import headers from 'packs/headers'

import { showAlert } from './alertActions'

export default (questionId) => dispatch => {

  fetch('/delete_question.json', {
    method: 'DELETE',
    credentials: 'same-origin',
    body: JSON.stringify({ question: { id: questionId } }),
    headers: headers()
  })
    .then(response => {
      if (response.ok) {
        return response.json().then(res => {
          dispatch(deleteQuestionSuccess(res))
          dispatch(showAlert('Question Removed!'))
        })
      } else {
        return response.json().then(res => {
          dispatch(showAlert(res.error))
        })
      }
    })
}

function deleteQuestionSuccess (questions) {
  return {
    type: actionTypes.QUESTION_DELETE_SUCCESS,
    payload: questions
  }
}

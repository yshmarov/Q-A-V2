import actionTypes from 'constants'
import ReactOnRails from 'react-on-rails'
import headers from 'packs/headers'

export default (question_id) => dispatch => {

  console.log(question_id, 'SUBMITTED ID')

  fetch('/vote_question.json', {
    method: 'PATCH',
    credentials: 'same-origin',
    body: JSON.stringify({ question: { id: question_id } }),
    headers: headers()
  })
    .then(response => response.json())
    .then(response => {
      console.log(response, 'SUCCESSS')
      dispatch(submitVote(response))
    })
    .catch(error => error)
}

function submitVote (questions) {
  return {
    type: actionTypes.SUBMIT_VOTE_SUCCESS,
    payload: questions
  }
}

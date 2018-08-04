import actionTypes from 'constants'
import ReactOnRails from 'react-on-rails'
import headers from 'packs/headers'

export default (question_id) => dispatch => {

  console.log(question_id, 'SUBMITTED ID')
}

function submitVote (question) {
  return {
    type: actionTypes.SUBMIT_VOTE_SUCCESS,
    payload: question
  }
}

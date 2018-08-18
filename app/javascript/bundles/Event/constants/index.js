import mirrorCreator from 'mirror-creator'

const actionTypes = mirrorCreator([
  'SUBMIT_QUESTION_SUCCESS',
  'SUBMIT_VOTE_SUCCESS',
  'RESET_SHOULD_BE_DISPLAYED',
  'SHOW_ALERT',
  'QUESTION_DELETE_SUCCESS'
])

export default actionTypes

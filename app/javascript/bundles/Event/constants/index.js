import mirrorCreator from 'mirror-creator'

const actionTypes = mirrorCreator([
  'SUBMIT_QUESTION_SUCCESS',
  'SUBMIT_VOTE_SUCCESS'
])

export default actionTypes

import actionTypes from 'constants'

export default question_val => {
  console.log(question_val, 'question value')

  return {
    type: actionTypes.SUBMIT_QUESTION_SUCCESS,
    payload: 'question value'
  }
}

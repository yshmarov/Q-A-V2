import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Question = props => {
  return (
    <div className='question-content card-header bg-warning'>
      { props.contents }
    </div>
  )
}

Question.propTypes = {
  contents: PropTypes.string.isRequired
}

export default Question

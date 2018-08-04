import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './question.scss'

const Question = props => {
  const { weighted_score } = props
  const voteString = weighted_score === 1 ? 'vote' : 'votes'

  return (
    <div className={`card ${css.questionContent}`}>
      <div className='card-body row'>
        <div className='col-lg-auto'>
          <div className='col-md-12'>
            <i className='fa fa-thumbs-up' />
          </div>
          <span>
            { `${weighted_score} ${voteString}` }
          </span>
        </div>
        <div className='col-lg'>
          { props.contents }
        </div>
      </div>
    </div>
  )
}

Question.propTypes = {
  contents: PropTypes.string.isRequired,
  weighted_score: PropTypes.number.isRequired
}

export default Question

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import 'styles/question.scss'

import submitVote from 'actions/submitVote'
import deleteQuestion from 'actions/deleteQuestion'

class Question extends Component {
  constructor (props) {
    super(props)

    this.handleVoteSubmit = this.handleVoteSubmit.bind(this)
    this.handleQuestionDelete = this.handleQuestionDelete.bind(this)
    this.isMyQuestion = this.isMyQuestion.bind(this)
  }

  handleVoteSubmit() {
    this.props.submitVote(this.props.id)
  }

  handleQuestionDelete() {
    this.props.deleteQuestion(this.props.id)
  }

  isMyQuestion() {
    // check if question belongs to user for logged in and a guest
    if (this.props.userState.id === null) {
      return (this.props.sessionId === this.props.sessionState.id)
    } else {
      return (this.props.userId === this.props.userState.id)
    }
  }

  render() {
    const { weightedScore, contents } = this.props
    const voteString = weightedScore === 1 ? 'vote' : 'votes'

    const canRemove = this.isMyQuestion()

    return (
      <div className={'card question-content'}>
        <div className='card-body row'>
          <div className='col-md-2'>
            <div className='col-md-12' onClick={this.handleVoteSubmit}>
              <i className='fa fa-thumbs-up' />
            </div>
            <span>
              { `${weightedScore} ${voteString}` }
            </span>

          </div>
          <div className='col-md-8'>
            { contents }
          </div>
          {
            canRemove && <div onClick={this.handleQuestionDelete} className='col-md-2'>
              <i className='fa fa-trash question-trash-icon' />
            </div>
          }
        </div>
      </div>
    )
  }
}

Question.propTypes = {
  id: PropTypes.number.isRequired,
  contents: PropTypes.string.isRequired,
  weightedScore: PropTypes.number.isRequired,
  submitVote: PropTypes.func.isRequired,
  deleteQuestion: PropTypes.func.isRequired,
  sessionId: PropTypes.number,
  userId: PropTypes.number,
  sessionState: PropTypes.object,
  userState: PropTypes.object
}

const mapStateToProps = state => ({
  sessionState: state.sessionStore,
  userState: state.userStore
})

const mapDispatchToProps = {
  submitVote,
  deleteQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Question from './Question'
import submitQuestion from 'actions/submitQuestion'

class Event extends Component {
  constructor (props) {
    super(props)

    this.state = {
      question_val: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange (event) {
    this.setState({
      question_val: event.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    const event_id = this.props.eventState.id
    const question_val = this.state.question_val

    this.props.submitQuestion(question_val, event_id)
  }

  _questionsContainer (questions) {
    return (
      <div className='event-questions-container'>
        Questions:
        { questions.map(question => (
          <Question
            key={question.id}
            contents={question.contents}
          />
        ))}
      </div>
    )
  }

  _questionForm () {
    return (
      <div className='event-question-form'>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            id='question_id'
            value={this.state.question_val}
            onChange={this.handleInputChange}
            placeholder='Do You have a question?'
            maxLength='100'
          />
        </form>
      </div>
    )
  }

  _eventHeader (title, description) {
    return (
      <div className='event-header'>
        <div className='event-title'>
          Title: { title }
        </div>
        <div className='event-description'>
          Description: { description }
        </div>
      </div>
    )
  }

  render() {
    const { title, description, questions } = this.props.eventState

    return (
      <div className='event-container'>
        { this._eventHeader(title, description) }
        { this._questionsContainer(questions) }
        { this._questionForm() }
      </div>
    )
  }
}

Event.propTypes = {
  eventState: PropTypes.object.isRequired,
  userState: PropTypes.object.isRequired,
  submitQuestion: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  eventState: state.eventStore,
  userState: state.userStore
})

const mapDispatchToProps = {
  submitQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(Event)

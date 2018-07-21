import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Event extends Component {
  _eventContent() {
    const { eventState } = this.props

    return (
      <div className='event-content'>
        <div className='event-title'>
          Title: { eventState.title }
        </div>
        <div className='event-description'>
          Description: { eventState.description }
        </div>

        <div className='event-questions-container'>
          Questions:
          {eventState.questions.map(question => {
            return (
              <div key={question.id} className='question-content'>
                { question.attributes.contents }
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  render() {

    const eventContainer = this._eventContent()

    console.log(this.props.eventState, 'EVENT STATE')
    console.log(this.props.userState, 'USER STATE')

    return (
      <div className='event-container'>
        { eventContainer }
      </div>
    )
  }
}

Event.propTypes = {
  eventState: PropTypes.object.isRequired,
  userState: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  eventState: state.eventStore,
  userState: state.userStore
})

export default connect(mapStateToProps)(Event)

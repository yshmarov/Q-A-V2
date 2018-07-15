import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Event extends Component {
  _eventContent() {
    return (
      <div className='event-content'>
        <div className='event-title'>
          {eventState.title}
        </div>
        <div className='event-questions-container'>
          {/* {eventState.questions.map} */}
        </div>
      </div>
    )
  }

  render() {
    const { userState, eventState } = this.props
    const eventContainer = this._eventContent()

    return (
      <div className='event-container'>
        { eventContainer }
      </div>
    )
  }
}

Event.propTypes = {
  // eventState: PropTypes.string.isRequired,
  // userState: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  userState: state.userState,
  eventState: state.eventState
})

export default connect(mapStateToProps)(Event)

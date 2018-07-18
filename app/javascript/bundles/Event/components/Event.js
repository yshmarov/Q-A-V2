import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Event extends Component {
  _eventContent() {
    return (
      <div className='event-content'>
        <div className='event-title'>
          {/* {eventState.title} */}
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

    console.log(eventState, 'EVENT STATE')
    console.log(userState, 'USER STATE')

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

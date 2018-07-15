import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Event extends Component {

  render() {
    console.log(this.props, 'COMPONENTN PROPS')

    return (
      <div >
        Sample text
      </div>
    )
  }
}

Event.propTypes = {
  // state: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  userState: state
})

export default connect(mapStateToProps)(Event)

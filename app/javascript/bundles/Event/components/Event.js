import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Event = (props) => {
  console.log(props, 'Event PROPS')

  return (
    <div >
      Sample text
    </div>
  )
}

Event.propTypes = {
  // name: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  state: state
})

export default connect(mapStateToProps)(Event)

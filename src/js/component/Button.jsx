import PropTypes from 'prop-types'
import React from 'react'

function Button(props) {
  return (
    <button 
      className='btn' 
      style={{backgroundColor : props.bg}} 
      onClick={props.onClick}
      >{props.text}</button>
  )
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Button
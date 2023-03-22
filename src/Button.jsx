import React from "react"
import PropTypes from "prop-types"
import "./Button.css"

const FunButton = ({ className, text }) => (
  <div>
    <button type="button" className={className}>
      {text}
    </button>
  </div>
)

FunButton.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default FunButton

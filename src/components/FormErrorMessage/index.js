import React from 'react'
import './index.css'
 const FormErrorMessage = (props) => {
  const { errorMessage } = props
  return (
    <span className="error-message">{errorMessage}</span>
  )
}

export default FormErrorMessage
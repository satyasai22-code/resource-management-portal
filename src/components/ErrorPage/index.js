import React from 'react'
import './index.css'
import errorPage from '../../images/something_went_wrong.png'

const ErrorPage = (props) => {
    const { onClickTryAgain } = props
    const onClick = () => onClickTryAgain()
  return (
    <div className="home-failure">
    <img
      className="home-failure-image"
      src={errorPage}
      alt="failure view"
    />
    <p className="home-failure-description">
      Something went wrong, Please try again.
    </p>
    <button
      type="button"
      className="try-again-btn"
      onClick={onClick}
    >
      Try Again
    </button>
  </div>
  )
}

export default ErrorPage

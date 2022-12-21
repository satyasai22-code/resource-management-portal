import React from 'react'

const ErrorPage = (props) => {
    const { onClickTryAgain } = props
    onClick = () => onClickTryAgain()
  return (
    <div className="home-failure">
    <img
      className="home-failure-image"
      src="https://res.cloudinary.com/dinhpbueh/image/upload/v1662554492/SomethingWentWrong_qek4y3.png"
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

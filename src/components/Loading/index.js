import React from 'react'
import { HashLoader } from 'react-spinners'
import './index.css'

const Loading = () => {
  return (
    <div className="loader-container">
      <HashLoader color="#f4a460" />
    </div>
  )
}

export default Loading 
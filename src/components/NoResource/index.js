import React from 'react'
import resourceNotFound from '../../images/resource_not_found.png'

const NoResource = (props) => {
  const {message} = props
  return (
    <div className="no-resource-view-container">
    <img
      className="no-resource-view-image"
      src={resourceNotFound}
      alt="no resources"
    />
    <p className="no-resource-view-description">
      Your search for {message} did not find any matches.
    </p>
  </div>
  )
}

export default NoResource

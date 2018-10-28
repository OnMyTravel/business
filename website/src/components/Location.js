import React from 'react'

import '../styles/Location.css';

const Location = ({ name, address } = {}) => {
  return (
    <div className="location">
      <div className="location-container">
        <div className="logo">
          Logo
        </div>

        <div className="location-details">
          <div className="location-name">
            {name}
          </div>
          <div className="location-address">
            {address}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location
import React from 'react'

import '../styles/Trip.css';
import TripTimeline from './TripTimeline'

const Trip = ({
  tripId,
  trip,
  days,
  loadTrip
}) => {

  if (!trip) {
    loadTrip(tripId)
  }
  else {
    const shoudBeReloaded = false;
    if (shoudBeReloaded) {
      loadTrip(tripId)
    }
  }

  return (
    <section className="hero is-fullheight">
      <div className="trip__frame">
        <div className="column is-paddingless timeline">
          <TripTimeline
            tripId={tripId}
            trip={trip}
            days={days}
            reloadAction={loadTrip}
          />
        </div>
        <div className="column trip__map is-two-thirds-desktop"></div>
      </div>
    </section>
  )
}

export default Trip

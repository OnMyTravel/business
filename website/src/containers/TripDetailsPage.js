import React from 'react'
import { connect } from 'react-redux'
import Trip from '../components/Trip'

import { getTripDetailsFromId, getDayDetailsFromId, loadTripAndSubressources } from '../actions'
import { stat } from 'fs';

function getTripById(trips, id) {
  return trips[id];
}

const mapStateToProps = (state, ownProps) => {
  
  const tripId = ownProps.match.params.id;
  const trip = getTripById(state.trips, tripId)

  const dayIds = (trip) ? trip.days.map((day) => day.id) : []

  const days = []
  dayIds.forEach(dayId => {
    if(state.days.hasOwnProperty(dayId)) {
      days.push(state.days[dayId])
    }
  });

  return {
    tripId,
    trip,
    days
  }
}

const mapDispatchToProps = {
  loadTrip: loadTripAndSubressources
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trip)
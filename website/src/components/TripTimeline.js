import React from 'react';
import Day from './Day'

import '../styles/TripTimeline.css';

const Trip = ({
  tripId,
  trip,
  days = [],
  reloadAction
}) => {

  const daysElement = []
  const nbOfDays = days.length;
  days.reverse().forEach((day, index) => {
    const dayRender = (
      <Day id={nbOfDays - index} key={index} day={day} />
    );

    daysElement.push(dayRender)
  })

  const tripDescription = (!trip) ?
    (<div className="content-padding">Loading</div>)
    : (<div className="description">{trip.description}</div>)

  return (
    <div className="timeline__wrapper">

      {tripDescription}

      {daysElement}

    </div>
  );
}

export default Trip;

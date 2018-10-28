import React from 'react'

import '../styles/Offline.css'

const Offline = ({ todos, onTodoClick }) => {

  return (
    <section className="hero offline__wrapper is-fullheight">
      <div className="hero-body offline__overlay">
        <div className="container">
          <h1 className="title is-2 has-text-weight-light">Welcome to OnMyTravel</h1>
          <h2 className="title is-1">A new way to share your travel experiences.</h2>
        </div>
      </div>
    </section>
  )
}

export default Offline

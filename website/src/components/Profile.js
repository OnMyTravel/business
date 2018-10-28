import React from 'react';
import '../styles/Profile.css';

const Profile = ({
  logOut
}) => {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            My profile <a href="/">Back to home</a>
          </h1>
          <h2 className="subtitle">
            Not an existing page yet ...
            </h2>

          <p><b>Congratulation !</b> You now have an account on OnMyTravel. Unfortunately, this page is quite blank for the moment.</p>
          <p><button className="button is-primary" onClick={logOut}>Me deconnecter</button></p>
          <hr />
          <p><b>Any idea</b> on what should be on this page ? Tell me on Twitter with the hastag <a href="https://twitter.com">#OnMyTravel</a>.</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;

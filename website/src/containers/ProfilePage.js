import { connect } from 'react-redux'

import { logOut } from '../actions/index'

import Profile from '../components/Profile'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = {
  logOut
}

const ProfilePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)

export default ProfilePage

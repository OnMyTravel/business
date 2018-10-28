import { connect } from 'react-redux'
import Landing from '../components/Landing'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = {}

const LandingPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing)

export default LandingPage
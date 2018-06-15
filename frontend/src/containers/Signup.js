import { connect } from 'react-redux'
import SignupPage from '../components/pages/SignupPage'
import { signup } from '../store/actions/auth'

const mapStateToProps = (state) => {
  return {
    statefunction : state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPostSignup: (input) => {
    	dispatch(signup(input))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)

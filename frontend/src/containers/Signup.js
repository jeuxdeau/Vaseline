import { connect } from 'react-redux'
import Signup from "../components/molecules/Signup"
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
import { connect } from 'react-redux'
import Signup from "../components/molecules/Signup";
import { postSignupRequest } from "../store/signup/actions.js"

const mapStateToProps = (state) => {
  return {
    statefunction : state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPostSignup: (input) => {
      dispatch(postSignupRequest(input))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

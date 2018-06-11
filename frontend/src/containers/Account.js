import { connect } from 'react-redux'
import Account from "../components/molecules/Account"
import { account } from '../store/actions/auth'

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

export default connect(mapStateToProps, mapDispatchToProps)(Account)

import { connect } from 'react-redux'
import SearchPage from '../components/pages/SearchPage'
import { search } from '../store/actions/auth'

const mapStateToProps = (state) => {
  return {
    statefunction : state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    /*onPostSignup: (input) => {
    	dispatch(signup(input))
    }*/
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)

import { connect } from 'react-redux'
import Fileupload from '../components/molecules/Fileupload'
import { filePost } from '../store/actions/auth'

const mapStateToProps = (state) => {
  return {
    statefunction : state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFileSubmit: (input) => {
    	dispatch(filePost(input))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Fileupload)

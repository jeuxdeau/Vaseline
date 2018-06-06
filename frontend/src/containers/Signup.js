import React from 'react'
import { connect } from 'react-redux'
import SignupPage from '../components/molecules/Signup'
import { postSignup } from '../store/actions/signup'

const Signup = (props) => {
	return (
		<div className="signup-page">
			<SignupPage {...props} />
		</div>
	)
}

const mapStateToProps = (state) => ({
	statefunction : state
})

const mapDispatchToProps = (dispatch) => ({
	onPostSignup: (username, userpwd) => { dispatch(postSignup(username, userpwd)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
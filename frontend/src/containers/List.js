import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import SigninPage from '../components/pages/SigninPage'
import {login} from '../store/actions/auth'
import {authErrors, isAuthenticated} from '../store/reducers'

const List = (props) => {
	if(props.isAuthenticated) {
		return (
			<Redirect to='/' />
		)
	} else {
		return (
			<div className="login-page">
				<SigninPage {...props}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	errors: authErrors(state),
	isAuthenticated: isAuthenticated(state)	
})

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (username, password) => {
		dispatch(login(username, password))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
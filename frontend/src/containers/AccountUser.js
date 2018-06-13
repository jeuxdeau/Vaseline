import React from 'react'
import { connect } from 'react-redux'

import AccountUserMolecule from '../components/molecules/AccountUser'
import { user } from '../store/actions/user'
import { userInfo, userID } from '../store/reducers'

const AccountUser = (props) => {
	return (
		<div className="account">
			<AccountUserMolecule {...props}/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	user_info : userInfo(state),
	user_id : userID(state)
})

const mapDispatchToProps = (dispatch) => ({
	get_user_info: (id) => {
		dispatch(user(id))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountUser)

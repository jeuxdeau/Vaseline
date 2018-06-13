import React from 'react'
import { connect } from 'react-redux'

import AccountMolecule from '../components/molecules/Account'
import { user } from '../store/actions/user'
import { userInfo } from '../store/reducers'

const Account = (props) => {
	return (
		<div className="account">
			<AccountMolecule {...props}/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	user_info : userInfo(state)
})

const mapDispatchToProps = (dispatch) => ({
	get_user_info: (id) => {
		dispatch(user(id))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Account)

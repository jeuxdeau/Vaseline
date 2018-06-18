import React from 'react'
import { connect } from 'react-redux'

import AccountUserMolecule from '../components/molecules/AccountUser'
import { account_user_password, account_user_profile } from '../store/actions/auth'
import { logout } from '../store/actions/auth'
import { user } from '../store/actions/user'
import { userInfo, userID, accountUserPasswordErrors, accountUserProfileErrors } from '../store/reducers'

const AccountUser = (props) => {
	return (
		<div className="account">
			<AccountUserMolecule {...props}/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	errors_account_user_password: accountUserPasswordErrors(state),
	errors_account_user_profile: accountUserProfileErrors(state),
	user_info : userInfo(state),
	user_id : userID(state)
})

const mapDispatchToProps = (dispatch) => ({
	get_user_info: (id) => {
		dispatch(user(id))
	},
	post_signout: () => {
                dispatch(logout())
        },
	onSubmitPassword: (input, user_id) => {
                dispatch(account_user_password(input, user_id))
        },
	onSubmitProfile: (input, user_id) => {
		dispatch(account_user_profile(input, user_id))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountUser)

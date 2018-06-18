import React from 'react'
import { connect } from 'react-redux'

import AccountCreateCompanionMolecule from '../components/molecules/AccountCreateCompanion'
import { account_create_companion } from '../store/actions/auth'
import { logout } from '../store/actions/auth'
import { list } from '../store/actions/list'
import { user } from '../store/actions/user'
import { userID, userErrors } from '../store/reducers'


const AccountCreateCompanion = (props) => {
	return (
		<div className="account">
			<AccountCreateCompanionMolecule {...props}/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	errors: userErrors(state),
        user_id : userID(state)
})

const mapDispatchToProps = (dispatch) => ({
        get_user_info: (id) => {
                dispatch(user(id))
        },
	post_signout: () => {
                dispatch(logout())
        },
	onSubmit: (input, companion_id) => {
                dispatch(account_companion(input, companion_id))
        }
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountCreateCompanion)

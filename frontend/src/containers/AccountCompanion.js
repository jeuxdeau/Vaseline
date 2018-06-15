import React from 'react'
import { connect } from 'react-redux'

import AccountCompanionMolecule from '../components/molecules/AccountCompanion'
import { account_companion } from '../store/actions/auth'
import { logout } from '../store/actions/auth'
import { list } from '../store/actions/list'
import { currentCompanionList, listErrors } from '../store/reducers'

const AccountCompanion = (props) => {
	return (
		<div className="account">
			<AccountCompanionMolecule {...props}/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	companion_list: currentCompanionList(state),
        errors: listErrors(state)
})

const mapDispatchToProps = (dispatch) => ({
	get_companion_list: () => {
                dispatch(list())
        },
        post_signout: () => {
                dispatch(logout())
        }
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountCompanion)

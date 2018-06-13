import React from 'react'
import { connect } from 'react-redux'

import AccountMolecule from '../components/molecules/Account'
import { list } from '../store/actions/list'
import { user } from '../store/actions/user'
import { userInfo, userID } from '../store/reducers'
import { currentCompanionList, listErrors } from '../store/reducers'

const Account = (props) => {
	return (
		<div className="account">
			<AccountMolecule {...props}/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	companion_list: currentCompanionList(state),
	user_info : userInfo(state),
	user_id : userID(state)
})

const mapDispatchToProps = (dispatch) => ({
	get_user_info: (id) => {
		dispatch(user(id))
	},
	get_companion_list: () => {
                dispatch(list())
        },

})

export default connect(mapStateToProps, mapDispatchToProps)(Account)

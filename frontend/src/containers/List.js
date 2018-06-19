import React from 'react'
import { connect } from 'react-redux'

import ListPage from '../components/pages/ListPage'
import { logout } from '../store/actions/auth'
import { list } from '../store/actions/list'
import { address_list } from '../store/actions/auth'
import { currentCompanionAddressList, currentCompanionList, listErrors } from '../store/reducers'
import { user, user_repr, user_repr_update } from '../store/actions/user'
import { userInfo, userID } from '../store/reducers'
import { userRepr } from '../store/reducers'
const List = (props) => {
	return (
		<div className="list-page">
			<ListPage {...props}/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	companion_list: currentCompanionList(state),
	companion_address_list: currentCompanionAddressList(state),
	user_repr: userRepr(state),
        user_info : userInfo(state),
        user_id : userID(state),
	errors: listErrors(state)	
})

const mapDispatchToProps = (dispatch) => ({
	get_user_repr: (id) => {
                dispatch(user_repr(id))
	},
        get_user_info: (id) => {
                dispatch(user(id))
        },
	get_companion_list: () => {
		dispatch(list())
	},
	post_signout: () => {
		dispatch(logout())
	},
	get_companion_address_list: () => {
		dispatch(address_list())
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(List)

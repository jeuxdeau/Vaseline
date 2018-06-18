import React from 'react'
import { connect } from 'react-redux'

import ListPage from '../components/pages/ListPage'
import { logout } from '../store/actions/auth'
import { list } from '../store/actions/list'
import { address_list } from '../store/actions/auth'
import { currentCompanionAddressList, currentCompanionList, listErrors } from '../store/reducers'

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
	errors: listErrors(state)	
})

const mapDispatchToProps = (dispatch) => ({
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

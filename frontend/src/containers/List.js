import React from 'react'
import { connect } from 'react-redux'

import ListPage from '../components/pages/ListPage'
import { logout } from '../store/actions/auth'
import { list } from '../store/actions/list'
import { currentCompanionList, listErrors } from '../store/reducers'

const List = (props) => {
	return (
		<div className="list-page">
			<ListPage {...props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(List)

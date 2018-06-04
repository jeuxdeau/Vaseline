import React from 'react'
import { connect } from 'react-redux'

import SidebarMolecule from '../components/molecules/Sidebar'
import { user } from '../store/actions/user'
import { userID, userInfo } from '../store/reducers'

const Sidebar = (props) => {
	return (
		<div className="sidebar">
			<SidebarMolecule {...props}/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	user_id: userID(state),
	user: userInfo(state)
})

const mapDispatchToProps = (dispatch) => ({
	get_user_info: (id) => {
		dispatch(user(id))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
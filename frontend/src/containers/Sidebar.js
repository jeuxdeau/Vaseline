import React from 'react'
import { connect } from 'react-redux'

import SidebarMolecule from '../components/molecules/Sidebar'
import { user_news } from '../store/actions/user'
import { userID, userNews } from '../store/reducers'

const Sidebar = (props) => {
	return (
		<div className="sidebar">
			<SidebarMolecule {...props}/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	user_id: userID(state),
	user_news: userNews(state)
})

const mapDispatchToProps = (dispatch) => ({
	get_user_news: (id) => {
		dispatch(user_news(id))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
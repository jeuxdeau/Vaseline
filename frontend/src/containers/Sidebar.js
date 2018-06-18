import React from 'react'
import { connect } from 'react-redux'

import SidebarMolecule from '../components/molecules/Sidebar'
import { list } from '../store/actions/list'
import { user_news, user_repr, user_repr_update } from '../store/actions/user'
import { userID, userNews, userRepr, currentCompanionList } from '../store/reducers'

const Sidebar = (props) => {
	return (
		<div className="sidebar">
			<SidebarMolecule {...props}/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	user_id: userID(state),
	user_news: userNews(state),
	user_repr: userRepr(state),
	companion_list: currentCompanionList(state),
})

const mapDispatchToProps = (dispatch) => ({
	get_user_news: (id) => {
		dispatch(user_news(id))
	},
	get_user_repr: (id) => {
		dispatch(user_repr(id))
	},
	get_companion_list: () => {
		dispatch(list())
	},
	put_user_repr: (userId, reprId) => {
		dispatch(user_repr_update(userId, reprId))
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
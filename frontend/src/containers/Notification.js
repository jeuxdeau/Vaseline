import React from 'react'
import { connect } from 'react-redux'

import { mSend, mRead, lRead, pRead } from '../store/actions/interaction'
import { list } from '../store/actions/list'
import NotiPage from '../components/pages/NotiPage'
import { userNews } from '../store/reducers'
import { currentCompanionList } from '../store/reducers'


const Notification = (props) => {
	return (
		<div className="notification">
			<NotiPage {...props}/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	user_news: userNews(state),
	companion_list: currentCompanionList(state), 
})

const mapDispatchToProps = (dispatch) => ({
	post_message: (sender, receiver, message) => {
		dispatch(mSend(sender, receiver, message))
	},
	read_message: (id) => {
		dispatch(mRead(id))
	},
	read_like: (id) => {
		dispatch(lRead(id))
	},
	read_proposal: (id, granted)=> {
		dispatch(pRead(id, granted))
	},
	get_companion_list: () => {
		dispatch(list())
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
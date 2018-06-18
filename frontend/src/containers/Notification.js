import React from 'react'
import { connect } from 'react-redux'

import { mSend, mRead, lRead, pRead } from '../store/actions/interaction'
import NotiPage from '../components/pages/NotiPage'
import { userNews } from '../store/reducers'

const Notification = (props) => {
	return (
		<div className="notification">
			<NotiPage {...props}/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	user_news: userNews(state)
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
import React from 'react'
import { connect } from 'react-redux'

import { mSend } from '../store/actions/interaction'
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
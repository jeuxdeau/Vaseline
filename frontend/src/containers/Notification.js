import React from 'react'
import { connect } from 'react-redux'

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
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
import React from 'react'
import { connect } from 'react-redux'

import DetailPage from '../components/pages/DetailPage'
import { logout } from '../store/actions/auth'
import { list } from '../store/actions/list'
import { mSend, lSend, pSend } from '../store/actions/interaction'

import { userID, userRepr, userNews, currentCompanionList, listErrors } from '../store/reducers'

const Detail = (props) => {
	return (
		<div className="detail-page">
			<DetailPage {...props}/>
		</div>
	)
}

const mapStateToProps = (state) => ({
	user_id: userID(state),
	user_repr: userRepr(state),
	user_news: userNews(state),
	companion_list: currentCompanionList(state),
	errors: listErrors(state)
})

const mapDispatchToProps = (dispatch) => ({
	post_signout: () => {
		dispatch(logout())
	},
	post_message: (sender, receiver, message) => {
		dispatch(mSend(sender, receiver, message))
	},
	post_like: (sender, receiver) => {
		dispatch(lSend(sender, receiver))
	},
	post_proposal: (sender, receiver) => {
		dispatch(pSend(sender, receiver))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
import React, { Component } from 'react'
import { Jumbotron, Alert, Button, Modal, UncontrolledTooltip } from 'reactstrap'
import DetailCompanionBlock from '../../atoms/DetailCompanionBlock'
import Sidebar from '../../molecules/Sidebar'
import MessageApp from '../../atoms/MessageApp'

export default class DetailPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			messageAppActivated: false,
		}
	}

	onSendMessageBtnClick() {
		this.setState({
			messageAppActivated: !this.state.messageAppActivated
		})
	}

	onSendLikeBtnClick(sender, receiver) {
		this.props.post_like(sender, receiver)
	}

	onSendProposalBtnClick(sender, receiver) {
		this.props.post_proposal(sender, receiver)
	}

	onSignoutBtnClick() {
		this.props.post_signout()
	}

	MakeLikeBtn(sentArray, sender, receiver) {
		if(sentArray.includes(receiver)) {
			return (
				<Button size="sm" outline color="secondary" disabled>좋아요</Button>
			)
		}
		else {
			return (
				<Button size="sm" outline color="primary" onClick={()=>{this.onSendLikeBtnClick(sender, receiver)}}>좋아요</Button>
			)
		}

	}

	MakeProposalBtn(sentArray, sender, receiver) {
		if(sentArray.includes(receiver)) {
			return (
				<Button size="sm" outline color="secondary" disabled>결혼해요</Button>
			)
		}
		else {
			return (
				<Button size="sm" outline color="primary" onClick={()=>{this.onSendProposalBtnClick(sender, receiver)}}>결혼해요</Button>
			)
		}

	}

	render() {
		const companion_list = this.props.companion_list
		const user_repr = this.props.user_repr
		const user_news = this.props.user_news
		if(companion_list == undefined || user_repr == undefined || user_news == undefined) return null

		const name = this.props.match.params.name
		const errors = this.props.errors || {}

		const repr_news = user_news.companion.filter((singleCompanion) =>
			{ return (singleCompanion.id == user_repr.represent_companion)})[0]
		const like_sent = repr_news.like_sent
		const proposal_sent = repr_news.proposal_sent
		const like_sent_receiver_id = like_sent.map((singleLike, index) => { return (singleLike.receiver)})
		const proposal_sent_receiver_id = proposal_sent.map((singleProposal, index) => {return (singleProposal.receiver)})

		if(companion_list) {
			const companion = companion_list.find((element) => (element.name == name))
			return (
				<div>
				<Jumbotron className="container">
					<h1>
						VASELINE
						{this.MakeLikeBtn(like_sent_receiver_id, user_repr.represent_companion, companion.id)}{' '}

						<Button size="sm" outline color="primary" onClick={()=>this.onSendMessageBtnClick()}>쪽지보내기</Button>{' '}

						{this.MakeProposalBtn(proposal_sent_receiver_id, user_repr.represent_companion, companion.id)}{' '}

						<MessageApp messageAppOpen={this.state.messageAppActivated}
									messageSenderId={user_repr.represent_companion}
									messageReceiverName={companion.name}
									messageReceiverId={companion.id}
									messageToggle={()=>this.onSendMessageBtnClick()}
									messageSend={this.props.post_message}/>
					</h1>
					{
						errors.get_list_errors?
							<Alert color="danger">
								{errors.get_list_errors}
							</Alert>
							:""
					}
					<DetailCompanionBlock companion={companion} />
				</Jumbotron>
				</div>
			)
		}
		else {
			return (
				<Jumbotron className="container">
				</Jumbotron>
			)
		}
	}
}

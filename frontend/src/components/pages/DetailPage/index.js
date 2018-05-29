import React, { Component } from 'react'
import { Jumbotron, Alert, Button, Modal } from 'reactstrap'
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

	onSignoutBtnClick() {
		this.props.post_signout()
	}

	componentDidMount() {
		this.props.get_companion_list()
	}

	render() {
		const companion_list = this.props.companion_list
		const name = this.props.match.params.name
		const errors = this.props.errors || {}
		
		if(companion_list) {
			const companion = companion_list.find((element) => (element.name == name))
			return (
				<div>
				<Sidebar />
				<Jumbotron className="container">
					<h1>
						VASELINE 
						<Button size="sm" outline color="primary" onClick={()=>this.onSignoutBtnClick()}>Logout</Button>{' '}
						<Button size="sm" outline color="primary">좋아요</Button>{' '}
						<Button size="sm" outline color="primary" onClick={()=>this.onSendMessageBtnClick()}>쪽지보내기</Button>{' '}
						<Button size="sm" outline color="primary">결혼해요</Button>
						<MessageApp messageAppOpen={this.state.messageAppActivated}
									messageSender={this.props.user_id} 
									messageReceiverName={name} 
									messageReceiverId='1' 
									messageToggle={()=>this.onSendMessageBtnClick()}/>
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
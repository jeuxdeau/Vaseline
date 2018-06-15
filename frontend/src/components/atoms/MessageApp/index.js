import React, { Component } from 'react'
import { Label, Form, FormGroup, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class MessageApp extends Component {
	onSendBtnClick(message, sender, receiver) {
		//console.log(message)
		this.props.messageSend('message', sender, receiver, message)
	}	

	handleInputChange = (event) => {
		const target = event.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name

		this.setState({
			[name]: value
		})
	}

	render() {
		const messageAppOpen = this.props.messageAppOpen
		const messageSender = this.props.messageSender
		const messageReceiverName = this.props.messageReceiverName
		const messageReceiverId = this.props.messageReceiverId
		const messageToggle = this.props.messageToggle

		return (
				<Modal isOpen={messageAppOpen} toggle={messageToggle} centered={true} size="lg">
					<ModalHeader>받는 친구 : {messageReceiverId} Sender : {messageSender}</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup>
								<Label for="exampleMessage" size="lg">Message</Label>
								<Input type="textarea" name="message" id="exampleMessage" placeholder="사랑의 편지를 써보세요~" 
										bsSize="lg" onChange={this.handleInputChange}/>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button size="lg" outline color="primary" 
						onClick={()=>this.onSendBtnClick(this.state.message, messageSender, messageReceiverId)}>보내기</Button>
					</ModalFooter>
				</Modal>
		)		
	}

}

export default MessageApp
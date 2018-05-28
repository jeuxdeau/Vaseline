import React, { Component } from 'react'
import { Label, Form, FormGroup, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class MessageApp extends Component {

	render() {
		const messageAppOpen = this.props.messageAppOpen
		const messageReceiverName = this.props.messageReceiverName
		const messageReceiverId = this.props.messageReceiverId
		const messageToggle = this.props.messageToggle
		return (
				<Modal isOpen={messageAppOpen} toggle={messageToggle} centered={true} size="lg">
					<ModalHeader>받는 친구 : {messageReceiverName}</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup>
								<Label for="exampleMessage" size="lg">Message</Label>
								<Input type="textarea" name="message" id="exampleMessage" placeholder="사랑의 편지를 써보세요~" bsSize="lg"/>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button size="lg" outline color="primary">보내기</Button>
					</ModalFooter>
				</Modal>
		)		
	}

}

export default MessageApp
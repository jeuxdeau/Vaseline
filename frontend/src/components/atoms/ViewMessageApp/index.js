import React, { Component } from 'react'
import { Label, Form, FormGroup, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class ViewMessageApp extends Component {
	onAnswerBtnClick() {
		this.props.vMessageAnswer()
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
		const vMessageAppOpen = this.props.vMessageAppOpen
		const vMessageSenderId = this.props.vMessageSenderId
		const vMessageReceiverId = this.props.vMessageReceiverId
		const vMessageBody = this.props.vMessageBody
		const vMessageToggle = this.props.vMessageToggle

		return (
				<Modal isOpen={vMessageAppOpen} toggle={vMessageToggle} centered={true} size="lg">
					<ModalHeader>{vMessageSenderId} 친구가 {vMessageReceiverId} 친구에게</ModalHeader>
					<ModalBody>
						{vMessageBody}
					</ModalBody>
					<ModalFooter>
						<Button size="lg" outline color="success"
						onClick={()=>this.onAnswerBtnClick()}>답장하기</Button>
					</ModalFooter>
				</Modal>
		)
	}
}

export default ViewMessageApp

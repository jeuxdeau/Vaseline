import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class MessageApp extends Component {
	toggle() {
		console.log("toggle")
	}

	render() {
		const messageAppOpen = this.props.messageAppOpen
		const messageReceiverName = this.props.messageReceiverName
		const messageReceiverId = this.props.messageReceiverId
		console.log(messageAppOpen)
		return (
				<Modal isOpen={messageAppOpen} toggle={this.toggle} className={messageReceiverId}>
         			<ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          			<ModalBody>
            			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          			</ModalBody>
          			<ModalFooter>
            			<Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            			<Button color="secondary" onClick={this.toggle}>Cancel</Button>
          			</ModalFooter>
        		</Modal>
		)		
	}

}

export default MessageApp
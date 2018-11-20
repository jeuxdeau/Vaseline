import React, { PropTypes, Component } from 'react'
import Dropzone from 'react-dropzone'
import request from 'superagent'
import { Label, Form, FormGroup, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, Badge } from 'reactstrap'

class Fileupload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filename: undefined,
        }
    }

    onDrop(files) {
        const image = files[0]
        this.setState({
            filename: image,
        })
    }

    onSubmitBtnClick() {
        var file = new FormData()
        file.append('name', this.state.filename)
        file.append('owner', this.props.uploadOwnerId)
        var req=request
                    .post('/api/images/')
                    .send(file);
        req.end(function(err, response) {
            console.log("upload done!!!!");
        })
    }

    render() {
        const uploadAppOpen = this.props.uploadAppOpen
        const uploadOwnerName = this.props.uploadOwnerName
        const uploadOwnerId = this.props.uploadOwnerId
        const uploadToggle = this.props.uploadToggle

        return (
             <Modal isOpen={uploadAppOpen} toggle={uploadToggle} centered={true} size="sm">
                <ModalHeader>이미지를 업로드하세요!<Badge color="secondary">{uploadOwnerName}</Badge></ModalHeader>
                <ModalBody>
                    <Dropzone onDrop={this.onDrop.bind(this)}>
                        <div>Try dropping some files here, or click to select files to upload.</div>
                    </Dropzone>
                </ModalBody>
                <Button color="success" onClick={()=>{this.onSubmitBtnClick()}}>Upload</Button>
             </Modal>
        )
    }
}

export default Fileupload

//    onSendBtnClick(message, sender, receiver) {
  //      this.props.messageSend(sender, receiver, message)
    //    this.props.messageToggle()
   // }

//    handleInputChange = (event) => {
//        const target = event.target
//        const value = target.type === 'checkbox' ? target.checked : target.value
//        const name = target.name

//        this.setState({
//            [name]: value
//        })
//    }
/*
    render() {
        const messageAppOpen = this.props.messageAppOpen
        const messageSenderId = this.props.messageSenderId
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
                                <Input type="textarea" name="message" id="exampleMessage" placeholder="사랑의 편지를 써보세요~"
                                        bsSize="lg" onChange={this.handleInputChange}/>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button size="lg" outline color="primary"
                        onClick={()=>this.onSendBtnClick(this.state.message, messageSenderId, messageReceiverId)}>보내기</Button>
                    </ModalFooter>
                </Modal>
        )
    }
}
export default MessageApp*/

import React, { Component } from 'react'
import { Card, Col, Jumbotron, Alert, Button, Modal, Row, UncontrolledTooltip } from 'reactstrap'
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
          <Jumbotron className="container">
            <h1>
              VASELINE
              <Button size="sm" outline color="primary" onClick={() => this.onSignoutBtnClick()}>Logout</Button>{' '}
            </h1>
            {
              errors.get_list_errors ?
                <Alert color="danger">
                  {errors.get_list_errors}
                </Alert>
                : ''
            }
            <DetailCompanionBlock companion={companion} />
            <Col sm="10" md={{ size: 10, offset: 1 }}>
              <Card>
                <div>
                  <Row>
                    <Col xs="6" sm="4">
                      <a href="#" id="LikeButton">
                        <Button block size="sm" outline color="primary" onClick={() => this.onSendLikeBtnClick(this.props.user_id, companion.id)}>
                          <img src={require('../../../../Resources/Like.png')} height="100" width="100" alt={'Like!'} />
                        </Button>{' '}
                      </a>
                      <UncontrolledTooltip target="LikeButton">좋아요!</UncontrolledTooltip>
                    </Col>
                    <Col xs="6" sm="4">
                      <a href="#" id="MessageButton">
                        <Button block size="sm" outline color="primary" onClick={() => this.onSendMessageBtnClick()}>
                          <img src={require('../../../../Resources/message.png')} height="100" width="100" alt={'Send Message!'} />
                        </Button>{' '}
                      </a>
                      <UncontrolledTooltip target="MessageButton">메세지 보내기</UncontrolledTooltip>
                    </Col>
                    <Col sm="4">
                      <a href="#" id="ProposalButton">
                        <Button block size="sm" outline color="primary" onClick={() => this.onSendProposalBtnClick(this.props.user_id, companion.id)}>
                          <img src={require('../../../../Resources/heartbone.png')} height="100" width="100" alt={'Proposal!'} />
                        </Button>
                        <MessageApp
                          messageAppOpen={this.state.messageAppActivated}
                          messageSenderId={this.props.user_id}
                          messageReceiverName={companion.name}
                          messageReceiverId={companion.id}
                          messageToggle={() => this.onSendMessageBtnClick()}
                          messageSend={this.props.post_message}
                        />
                      </a>
                      <UncontrolledTooltip target="ProposalButton">결혼해요❤️</UncontrolledTooltip>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Jumbotron>
        </div>
      )
    }
    else {
      return (
        <Jumbotron className="container">
          멍멍!
        </Jumbotron>
      )
    }
  }
}

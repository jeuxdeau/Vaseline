import React, { Component } from 'react'
import { Badge, Alert, Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Form, FormGroup, Label, Input, FormText, Progress, Table,
    ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import ViewMessageApp from '../../atoms/ViewMessageApp'

const messageDoggy = "http://images.gawker.com/18m86puxpfjasjpg/original.jpg"
const likeDoggy = "https://barkpost.com/wp-content/uploads/2012/09/doglove.jpg?q=70&fit=crop&crop=entropy&w=808&h=500"
const proposalDoggy = "https://broadly-images.vice.com/images/2017/02/10/can-dogs-fall-in-love-body-image-1486692574.jpg?resize=1024:*"

export default class NotiPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			viewMessageAppActivated: false,
			viewMessageAppObject: {},
		}

		this.onBtnReadMessage = this.onBtnReadMessage.bind(this)
	}

	MakeBadgeForNewItem(item) {
		if(!item.is_read) {
			return (
				<Badge color="danger">신규</Badge>
			)
		}
	}

	MakeMessageListItem(messageItem) {
		const sender = messageItem.sender
		const receiver = messageItem.receiver
		return (
			<ListGroupItem>
				<ListGroupItemHeading> {sender} 친구가 {receiver} 친구에게 보냈어요! </ListGroupItemHeading>
				<div align="right">
					{this.MakeBadgeForNewItem(messageItem)}
					<Badge href="#" color="primary" onClick={()=>{this.onBtnReadMessage(messageItem)}}>자세히보기</Badge>
				</div>
			</ListGroupItem>
		)
	}

	MakeLikeListItem(likeItem) {
		const sender = likeItem.sender
		const receiver = likeItem.receiver
		return (
			<ListGroupItem>
				<ListGroupItemHeading> {sender} 친구가 {receiver} 친구를 좋아해요! </ListGroupItemHeading>
				<div align="right">
					{this.MakeBadgeForNewItem(likeItem)}
					<Badge href="#" color="primary">방문하기</Badge>
				</div>
			</ListGroupItem>
		)
	}

	MakeProposalListItem(proposalItem) {
		const sender = proposalItem.sender
		const receiver = proposalItem.receiver
		return (
			<ListGroupItem>
				<ListGroupItemHeading> {sender} 친구가 {receiver} 친구에게 청혼해요!(부끄) </ListGroupItemHeading>
				<div align="right">
					{this.MakeBadgeForNewItem(proposalItem)}
					<Badge href="#" color="primary">방문하기</Badge>
				</div>
			</ListGroupItem>
		)
	}

	GetWholeNotifications(news) {
		// get whole notifications of this user
	 	let wMessage = [], wLike = [], wProposal = []
	 	var i
	 	for(i = 0; i < news.companion.length; i++) {
	 		const comp = news.companion[i]
	 		wMessage = wMessage.concat(comp.message_received)
	 		wLike = wLike.concat(comp.like_received)
	 		wProposal = wProposal.concat(comp.proposal_received)
	 	}
	 	return {mess: wMessage, like: wLike, prop: wProposal}
	}

	onBtnReadMessage(messageItem) {
		const mSender = messageItem.sender
		const mReceiver = messageItem.receiver
		const mBody = messageItem.message
		this.setState({
			viewMessageAppActivated: !this.state.viewMessageAppActivated,
			viewMessageAppObject: {sender: mSender, receiver: mReceiver, body: mBody},
		})
		console.log(this.state)
	}

/*	GetOnlyNewNotifications(notifications) {
		// get only new notifications from given notifications object
		var i
		let nMessage = [], nLike = [], nProposal = []
		for(i = 0; i < notifications.mess.length; i++) {
			if(!notifications.mess[i].is_read) nMessage = nMessage.concat(notifications.mess[i])
		}
		for(i = 0; i < notifications.like.length; i++) {
			if(!notifications.like[i].is_read) nLike = nLike.concat(notifications.like[i])
		}
		for(i = 0; i < notifications.prop.length; i++) {
			if(!notifications.prop[i].is_read) nProp = nProp.concat(notifications.prop[i])
		}
		return {mess: nMessage, like: nLike, prop: nProposal}
	}
*/
	 render() {
	 	const news = this.props.user_news
	 	if(news == undefined) return null
	 	const notifications = this.GetWholeNotifications(news)
	 	return (
            <div>
            <h3><p /><center> 알림장 <Badge color="success">New!</Badge></center></h3>
            <Col>
            <Alert color="success">
            <h4 className="alert-heading">새로운 소식들을 확인해보세요!</h4>
            <p>
            멋진 짝을 기다리는 다른 동물들과 소통하세요! 새로운 소식들이 기다리고 있습니다.
            </p>
            <hr />
            <p className="mb-0">
            나에게 온 다양한 요청들에 적극적으로 응답해주세요.
            </p>
            </Alert>
            </Col>
            <Col>
            <CardDeck>
            <Card>
            <CardImg top width="100%" src={messageDoggy} alt="Card image cap" />
            <CardBody>
            <CardTitle>편지가 왔어요!</CardTitle>
            <CardSubtitle><b>친구들은 고운 말을 좋아한답니다@_@</b></CardSubtitle>
            <CardText><p />
            <h6><Badge color="secondary">편지를 눌러서 확인하고 답장을 보내주세요!</Badge></h6><p/ >
            
            <ListGroup>
            {notifications.mess.map((messageItem, index) => {
            	return (
            				this.MakeMessageListItem(messageItem)
            			)
            })}
            </ListGroup>
            
            </CardText>
            </CardBody>
            </Card>
            
            <Card>
            <CardImg top width="100%" src="https://barkpost.com/wp-content/uploads/2012/09/doglove.jpg?q=70&fit=crop&crop=entropy&w=808&h=500" alt="Card image cap" />
            <CardBody>
            <CardTitle>당신을 좋아하는 친구가 생겼어요!</CardTitle>
            <CardSubtitle><b>친절하게 응답해주면 더 좋아할지도...?</b></CardSubtitle>
            <CardText>
            <p />
            <h6><Badge color="secondary">친구에게 방문하여 서로를 알아가세요!</Badge></h6><p/ >
            
            <ListGroup>
            {notifications.like.map((likeItem, index) => {
            	return (
            				this.MakeLikeListItem(likeItem)
            			)
            })}
            </ListGroup>

            </CardText>
            </CardBody>
            </Card>

            <Card>
            <CardImg top width="100%" src="https://broadly-images.vice.com/images/2017/02/10/can-dogs-fall-in-love-body-image-1486692574.jpg?resize=1024:*" alt="Card image cap" />
            <CardBody>
            <CardTitle>헉! 청혼이 들어왔어요!</CardTitle>
            <CardSubtitle><b>진지한 만남을 가져보아요~</b></CardSubtitle>
            <CardText>
            <p />
            잘 고민해서 결정하세요! 메시지를 충분히 주고 받은 후에, 개인 정보를 교환하도록 해요.
            <p />
            <h6><Badge color="secondary">이메일을 통해 연락할 수 있어요!</Badge></h6><p/ >
            
            <ListGroup>
            {notifications.prop.map((proposalItem, index) => {
            	return (
            				this.MakeProposalListItem(proposalItem)
            			)
            })}
            </ListGroup>
            
            </CardText>
            </CardBody>
            </Card>
            </CardDeck>
            </Col>
            </div>
        )
	}
}

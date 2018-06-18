import React, { Component } from 'react'
import { Badge, Alert, Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Form, FormGroup, Label, Input, FormText, Progress, Table,
    ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Link } from 'react-router-dom'
import ViewMessageApp from '../../atoms/ViewMessageApp'
import MessageApp from '../../atoms/MessageApp'

const messageDoggy = "http://images.gawker.com/18m86puxpfjasjpg/original.jpg"
const likeDoggy = "https://barkpost.com/wp-content/uploads/2012/09/doglove.jpg?q=70&fit=crop&crop=entropy&w=808&h=500"
const proposalDoggy = "https://broadly-images.vice.com/images/2017/02/10/can-dogs-fall-in-love-body-image-1486692574.jpg?resize=1024:*"

export default class NotiPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			viewMessageAppActivated: false,
			viewMessageAppObject: {},
			sendMessageAppActivated: false,
			sendMessageAppObject: {},
		}

		this.onBtnReadMessage = this.onBtnReadMessage.bind(this)
	}

	componentDidMount() {
		this.props.get_companion_list()
	}

	/*componentDidMount() {
		console.log("HI")
	}*/

	/*componentWillUnmount() {
		const news = this.props.user_news
	 	if(news == undefined) return null
	 	const notifications = this.GetWholeNotifications(news)
	 	const newnotifications = this.GetOnlyNewNotifications(notifications)
	 	var i
	 	for(i = 0; i < newnotifications.like.length; i++) {
	 		this.props.read_like(newnotifications.like[i].id)
	 	}
	 	for(i = 0; i < newnotifications.proposal.length; i++) {
	 		this.props.read_proposal(newnotifications.proposal[i].id, newnotifications.proposal[i].granted)
	 	}
	}*/

	MakeBadgeForNewItem(item) {
		if(!item.is_read) {
			return (
				<Badge color="danger">신규</Badge>
			)
		}
	}

	MakeMessageListItem(messageItem) {
		if(this.props.companion_list == undefined) return null
		const sender = this.props.companion_list.filter((companion)=>{ return (companion.id == messageItem.sender )})[0]
		const receiver = this.props.companion_list.filter((companion)=>{ return (companion.id == messageItem.receiver )})[0]
		return (
			<ListGroupItem>
				<ListGroupItemHeading> {sender.name} 친구가 {receiver.name} 친구에게 보냈어요! </ListGroupItemHeading>
				<div align="right">
					{this.MakeBadgeForNewItem(messageItem)}
					<Badge color="primary" onClick={()=>{this.onBtnReadMessage(messageItem)}}>자세히보기</Badge>
				</div>
			</ListGroupItem>
		)
	}

	MakeLikeListItem(likeItem) {
		if(this.props.companion_list == undefined) return null
		const sender = this.props.companion_list.filter((companion)=>{ return (companion.id == likeItem.sender )})[0]
		const receiver = this.props.companion_list.filter((companion)=>{ return (companion.id == likeItem.receiver )})[0]
		return (
			<ListGroupItem>
				<ListGroupItemHeading> {sender.name} 친구가 {receiver.name} 친구를 좋아해요! </ListGroupItemHeading>
				<div align="right">
					{this.MakeBadgeForNewItem(likeItem)}
					<Badge color="primary" tag={Link} to={"/detail/"+sender.name}>방문하기</Badge>
				</div>
			</ListGroupItem>
		)
	}

	MakeConsentFromPropItem(proposalItem) {
		if(proposalItem.granted) {
			return (
				<Badge color="info">Already married!</Badge>
			)
		}
		else {
			return (
				<Badge href color="info" onClick={()=>{this.onBtnPropConsent(proposalItem)}}>수락하기</Badge>
			)
		}
	}

	MakeProposalListItem(proposalItem) {
		if(this.props.companion_list == undefined) return null
		const sender = this.props.companion_list.filter((companion)=>{ return (companion.id == proposalItem.sender )})[0]
		const receiver = this.props.companion_list.filter((companion)=>{ return (companion.id == proposalItem.receiver )})[0]
		return (
			<ListGroupItem>
				<ListGroupItemHeading> {sender.name} 친구가 {receiver.name} 친구에게 청혼해요!</ListGroupItemHeading>
				<div align="right">
					{this.MakeBadgeForNewItem(proposalItem)}
					<Badge href color="primary" tag={Link} to={"/detail/"+sender.name}>방문하기</Badge>
					{this.MakeConsentFromPropItem(proposalItem)}
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
		this.props.read_message(messageItem.id)
		this.setState({
			...this.state,
			viewMessageAppActivated: !this.state.viewMessageAppActivated,
			viewMessageAppObject: {sender: mSender, receiver: mReceiver, body: mBody},
		})
	}

	onBtnPropConsent(proposalItem) {
		this.props.read_proposal(proposalItem.id, true)
	}

	// Toggle apps : tApp could be "vMessage" for message view app, "sMessage" for message send app
	appToggle(tApp) {
		if(tApp == "vMessage") {
			this.setState({
				...this.state, 
				viewMessageAppActivated: !this.state.viewMessageAppActivated,
			})
		}
		else if(tApp == "sMessage") {
			this.setState({
				...this.state,
				sendMessageAppActivated: !this.state.sendMessageAppActivated,
			})
		}
	}

	// When user clicks "answer" button on view message app, close the app and open send message app
	answerMessage(mSender, mReceiver) {
		this.setState({
			...this.state,
			viewMessageAppActivated: false,
			sendMessageAppActivated: true,
			sendMessageAppObject: {sender: mSender, receiver: mReceiver}
		})
	}

	/*GetOnlyNewNotifications(notifications) {
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
	}*/

	render() {
	 	const news = this.props.user_news
	 	if(news == undefined) return null
	 	const notifications = this.GetWholeNotifications(news)
	 	return (
            <div>

            <ViewMessageApp vMessageAppOpen={this.state.viewMessageAppActivated} 
                            vMessageSenderId={this.state.viewMessageAppObject.sender}
                            vMessageReceiverId={this.state.viewMessageAppObject.receiver}
                            vMessageBody={this.state.viewMessageAppObject.body}
                            vMessageToggle={()=>this.appToggle("vMessage")}
                            vMessageAnswer={()=>this.answerMessage(this.state.viewMessageAppObject.receiver, 
                            	                                   this.state.viewMessageAppObject.sender )} />
            <MessageApp messageAppOpen={this.state.sendMessageAppActivated}
            			messageSenderId={this.state.sendMessageAppObject.sender}
            			messageReceiverId={this.state.sendMessageAppObject.receiver}
            			messageToggle={()=>this.appToggle("sMessage")}
            			messageSend={this.props.post_message} />

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
            <h6><Badge color="secondary">수락하면 이메일을 통해 연락할 수 있어요!</Badge></h6><p/ >
            
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

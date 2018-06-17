import React, { Component } from 'react'
import { Badge, Alert, Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Form, FormGroup, Label, Input, FormText, Progress, Table,
    ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const messageDoggy = "http://images.gawker.com/18m86puxpfjasjpg/original.jpg"
const likeDoggy = "https://barkpost.com/wp-content/uploads/2012/09/doglove.jpg?q=70&fit=crop&crop=entropy&w=808&h=500"
const proposalDoggy = "https://broadly-images.vice.com/images/2017/02/10/can-dogs-fall-in-love-body-image-1486692574.jpg?resize=1024:*"

export default class NotiPage extends Component {

	MakeMessageListItem(sender, receiver, body) {
		return (
			<ListGroupItem>
				<ListGroupItemHeading> {sender} 친구가 {receiver} 친구에게 보냈어요! </ListGroupItemHeading>
				<ListGroupItemText> {body} </ListGroupItemText>
				<div align="right">
					<Badge href="#" color="primary">자세히보기</Badge>
				</div>
			</ListGroupItem>
		)
	}

	MakeLikeListItem(sender, receiver) {
		return (
			<ListGroupItem>
				<ListGroupItemHeading> {sender} 친구가 {receiver} 친구에게 관심이 있어요! </ListGroupItemHeading>
				<div align="right">
					<Badge href="#" color="primary">방문하기</Badge>
				</div>
			</ListGroupItem>
		)
	}

	MakeProposalListItem(sender, receiver) {
		return (
			<ListGroupItem>
				<ListGroupItemHeading> {sender} 친구가 {receiver} 친구에게 청혼해요!(부끄) </ListGroupItemHeading>
				<div align="right">
					<Badge href="#" color="primary">방문하기</Badge>
				</div>
			</ListGroupItem>
		)
	}

	 render() {
	 	const news = this.props.user_news
	 	if(news == undefined) return null

	 	// get whole notifications of this user
	 	let wMessage = [], wLike = [], wProposal = []
	 	var i
	 	for(i = 0; i < news.companion.length; i++) {
	 		const comp = news.companion[i]
	 		wMessage = wMessage.concat(comp.message_received)
	 		wLike = wLike.concat(comp.like_received)
	 		wProposal = wProposal.concat(comp.proposal_received)
	 	}

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
            {wMessage.map((messageItem, index) => {
            	return (
            				this.MakeMessageListItem(messageItem.sender, messageItem.receiver, messageItem.message)
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
            <CardSubtitle><b>친절하게 응답해주면 더 좋아질지도...?</b></CardSubtitle>
            <CardText>
            <p />
            <h6><Badge color="secondary">친구에게 방문하여 서로를 알아가세요!</Badge></h6><p/ >
            
            <ListGroup>
            {wLike.map((likeItem, index) => {
            	return (
            				this.MakeLikeListItem(likeItem.sender, likeItem.receiver)
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
            {wProposal.map((proposalItem, index) => {
            	return (
            				this.MakeProposalListItem(proposalItem.sender, proposalItem.receiver)
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

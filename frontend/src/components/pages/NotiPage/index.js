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
				<Badge href="#" color="primary">자세히보기</Badge>
			</ListGroupItem>
		)
	}

	 render() {
	 	const news = this.props.user_news
	 	if(news == undefined) return null

	 	// get whole notifications of this user
	 	let wMessage = [], wLike = [], wProposal = []
	 	var i
	 	console.log(news)
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
            <CardTitle>편지가 왔어요</CardTitle>
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
            <CardImg top width="100%" src="http://images2.fanpop.com/image/photos/13900000/Pretty-Dog-in-Garden-puppies-13904291-500-375.jpg" alt="Card image cap" />
            <CardBody>
            <CardTitle>성격이 잘 맞는 것도 중요하죠!</CardTitle>
            <CardSubtitle><b>성격별 검색</b></CardSubtitle>
            <CardText>
            <p />
            <Progress multi>
            <Progress bar value="15">15%</Progress>
            <Progress bar color="success" value="30">30%</Progress>
            <Progress bar color="info" value="25">25%</Progress>
            <Progress bar color="warning" value="20">20%</Progress>
            <Progress bar color="danger" value="7">?</Progress>
            </Progress>
            <p />
            성격에서 중요하게 생각하는 것과 그렇지 않은 것은 무엇인가요?
            저희가 딱 맞는 상대를 찾아드릴게요!
            <p />
            <Table>
            <thead>
          <tr>
            <th>1에 가까움</th>
            <th></th>
            <th>5에 가까움</th>
          </tr>
        </thead>
  <tbody>
    <tr>
      <td>사람은 싫어요</td>
      <th scope="row">
        <Input type="select">
         <option>1</option>
         <option>2</option>
         <option>3</option>
         <option>4</option>
         <option>5</option>
       </Input>
      </th>
      <td>사람이 좋아요</td>
    </tr>
    <tr>
      <td>강아지는 싫어</td>
      <th scope="row">
          <Input type="select">
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
           <option>5</option>
          </Input>
      </th>
      <td>강아지가 좋아</td>
    </tr>
    <tr>
      <td>수줍지 않아요</td>
      <th scope="row">
          <Input type="select">
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
           <option>5</option>
          </Input>
      </th>
      <td>수줍어해요</td>
    </tr>
    <tr>
      <td>움직이기 싫어</td>
      <th scope="row">
          <Input type="select">
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
           <option>5</option>
          </Input>
      </th>
      <td>활동적이에요</td>
    </tr>
    <tr>
      <td>짖지 않아요</td>
      <th scope="row">
          <Input type="select">
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
           <option>5</option>
          </Input>
      </th>
      <td>많이 짖어요</td>
    </tr>
    <tr>
      <td>아주 순해요</td>
      <th scope="row">
          <Input type="select">
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
           <option>5</option>
          </Input>
      </th>
      <td>공격적이에요</td>
    </tr>
  </tbody>
</Table>

            </CardText>
            </CardBody>
            </Card>
            <Card>
            <CardImg top width="100%" src="http://images2.fanpop.com/image/photos/13900000/Pretty-Dog-in-Garden-puppies-13904176-500-375.jpg" alt="Card image cap" />
            <CardBody>
            <CardTitle>가까이 사는 친구면 좋을텐데...</CardTitle>
            <CardSubtitle><b>지역별 검색</b></CardSubtitle>
            <CardText>
            <p />
            특정 지역에 살고 있는 친구를 찾으시나요? 가까운 지역을 선택하고 동네에 사는 친구를 찾아보세요.
            <p />
            시/도 <Input type="select">
                <option>서울시</option>
            </Input><br/>
            시/군/구 <Input type="select">
                <option>서초구</option>
            </Input><br/>
            <div align="right">
                <Button align="right">새로 검색하기</Button>
            </div>
            </CardText>
            </CardBody>
            </Card>
            </CardDeck>
            </Col>
            </div>
        )
	}
}

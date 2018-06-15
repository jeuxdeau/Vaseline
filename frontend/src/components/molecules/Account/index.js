import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Alert, CardDeck, Card, Button, CardImg, CardTitle, CardText, CardBody } from 'reactstrap'
import CompanionUpdateBlock from '../../atoms/CompanionUpdateBlock'

class Account extends Component {
	onSignoutBtnClick() {
                this.props.post_signout()
        }
	componentDidMount() {
		this.props.get_companion_list()
		this.props.get_user_info(this.props.user_id)

	}
        render() {
		const user_info = this.props.user_info
		const companion_list = this.props.companion_list
		const my_companion_list_key = []
		// my_companion list to Companion_update_block_list
		console.log(user_info)
		if(user_info) {
			let companion_update_block_list = []
			for (var key in companion_list){
				if(companion_list[key].user == this.props.user_id)
					companion_update_block_list.push(<CompanionUpdateBlock companion={companion_list[key]} key={key+1} />)
			}

                	return (
				<Jumbotron className="container">
				<h1>
                                	VASELINE <Button size="sm" outline color="primary" onClick={()=>this.onSignoutBtnClick()}>Logout</Button>
                              	</h1>

                        	<Card>
                                	<CardBody>
						<h2>User Info</h2>
                                        	<Jumbotron className="container">
						<CardTitle>user_id : {this.props.user_id}</CardTitle>
						<CardTitle>username : {user_info.username}</CardTitle>
						<CardTitle>profile : {user_info.username}</CardTitle>
						<CardText>nickname : {user_info.profile.nickname}</CardText>
						<CardText>age : {user_info.profile.age}</CardText>
						<CardText>email : {user_info.profile.email}</CardText>
						<CardText>gender : {user_info.profile.gender}</CardText>
						<CardText>first_address : {user_info.profile.first_address}</CardText>
						<CardText>second_address : {user_info.profile.second_address}</CardText>
						<Button outline color="primary" tag={Link} to={"/account/user/"}>Update?</Button>
						</Jumbotron>
                                	</CardBody>
                        	</Card>
				<CardDeck>
					{companion_update_block_list}
				</CardDeck>
				</Jumbotron>
                	)
		}
		else {
                        return (
				<Card>
					<CardTitle>{1}</CardTitle>
					<CardText>not : {2}</CardText>
					<CardText>start : {3}</CardText>
				</Card>
                        )
                }

        }
}
export default Account

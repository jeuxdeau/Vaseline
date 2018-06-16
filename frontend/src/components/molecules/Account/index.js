import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Table, Jumbotron, Badge, Alert, CardDeck, Card, Button, CardImg, CardTitle, CardText, CardBody } from 'reactstrap'
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
						<Table>
						<thead>
						<tr><th><center>#</center></th><th><center>Info</center></th></tr>
						</thead>
						<tbody>
						<tr><th scope="row"><center>User ID</center></th><th><center>{this.props.user_id}</center></th></tr>
						<tr><th><center>Username</center></th><th><center>{user_info.username}</center></th></tr>
						<tr><th><center>Nickname</center></th><th><center>{user_info.profile.nickname}</center></th></tr>
						<tr><th><center>Age</center></th><th><center>{user_info.profile.age}</center></th></tr>
						<tr><th><center>Email</center></th><th><center>{user_info.profile.email}</center></th></tr>
                                                <tr><th><center>Gender</center></th><th><center>{user_info.profile.gender}</center></th></tr>
                                                <tr><th><center>FirstAddress</center></th><th><center>{user_info.profile.first_address}</center></th></tr>
						<tr><th><center>SecondAddress</center></th><th><center>{user_info.profile.second_address}</center></th></tr>
						</tbody>
						</Table>
						<center><Button outline color="primary" tag={Link} to={"/account/user/"}>Update User Info?</Button></center>
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

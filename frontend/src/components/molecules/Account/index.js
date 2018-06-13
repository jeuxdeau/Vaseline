import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Alert, CardDeck, Card, Button, CardImg, CardTitle, CardText, CardBody } from 'reactstrap'
import CompanionUpdateBlock from '../../atoms/CompanionUpdateBlock'

class Account extends Component {
	componentDidMount() {
		this.props.get_companion_list()
		this.props.get_user_info(this.props.user_id)

	}
        render() {
		const user_info = this.props.user_info
		const companion_list = this.props.companion_list
		const my_companion_list_key = []

		console.log(companion_list)
		console.log(user_info)
		if(user_info) {
			let companion_update_block_list = []
			for (var key in companion_list){
				if(companion_list[key].user == this.props.user_id)
					companion_update_block_list.push(<CompanionUpdateBlock companion={companion_list[key]} key={key+1} />)
			}

                	return (
				<Jumbotron className="container">
                        	<Card>
                                	<CardBody>
                                        	<CardTitle>user_id : {this.props.user_id}</CardTitle>
                                        	<CardText>username : {user_info.username}</CardText>
                                        	<CardText>password : {user_info.password}</CardText>
						<Button outline color="info" tag={Link} to={"/account/user/"}>Visit</Button>
                                	</CardBody>
                        	</Card>
				<CardDeck>
					{companion_update_block_list}
				</CardDeck>
				)
				</Jumbotron>
                	)
		}
		else {
                        return (
				<Card>
					<CardTitle>{1}</CardTitle>
					<CardText>age : {2}</CardText>
					<CardText>sex : {3}</CardText>
				</Card>
                        )
                }

        }
}
export default Account

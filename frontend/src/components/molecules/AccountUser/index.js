import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Alert, Card, Button, CardImg, CardTitle, CardText, CardBody } from 'reactstrap'

class AccountUser extends Component {
	componentDidMount() {
		this.props.get_user_info(this.props.user_id)
	}
        render() {
		const user_info = this.props.user_info
		console.log(user_info)
		if(user_info) {
                	return (
				<Jumbotron className="container">
                        	<Card>
                                	<CardBody>
						<CardTitle>You can update your data!</CardTitle>
                                        	<CardTitle>user_id : {this.props.user_id}</CardTitle>
                                        	<CardText>username : {user_info.username}</CardText>
                                        	<CardText>password : {user_info.password}</CardText>
                                	</CardBody>
                        	</Card>
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
export default AccountUser

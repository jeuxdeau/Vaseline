import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, CardImg, CardTitle, CardText, CardBody } from 'reactstrap'

class Account extends Component {
	componentDidMount() {
		this.props.get_user_info(1)
	}
        render() {
		const user_info = this.props.user_info
		console.log(user_info)
		if(user_info) {
                	return (
                        	<Card>
                                	<CardBody>
                                        	<CardTitle>{user_info.id}</CardTitle>
                                        	<CardText>username : {user_info.username}</CardText>
                                        	<CardText>password : {user_info.password}</CardText>
                                	</CardBody>
                        	</Card>
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

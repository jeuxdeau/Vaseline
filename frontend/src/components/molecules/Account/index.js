import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, CardImg, CardTitle, CardText, CardBody } from 'reactstrap'

class Account extends Component {
	componentDidMount() {
		this.props.get_user_info(this.props.user_id)
	}
        render() {
		const user_id = this.props.user_id
		console.log(user_id)
                return (
                        <Card>
                                <CardBody>
                                        <CardTitle>{user_id}</CardTitle>
                                        <CardText>age : {user_id}</CardText>
                                        <CardText>sex : {user_id}</CardText>
                                </CardBody>
                        </Card>
                )
        }
}
export default Account

import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Card, Button, CardImg, CardTitle, CardText, CardBody } from 'reactstrap'

class CompanionBlock extends Component {
	onDetailBtnClick({name}) {
		
	}

	render() {
		const companion = this.props.companion
		const name = companion.name

		return (
			<Card>
				<CardImg 	top width="100%" 
							src="http://www.petguide.com/wp-content/uploads/2013/05/cute-dog-names-12.jpg" 
							alt="Card image cap" />
				<CardBody>
					<CardTitle>{companion.name}</CardTitle>
					<CardText>age : {companion.age}</CardText>
					<CardText>sex : {companion.sex}</CardText>
					<Button outline color="secondary" onClick={() => this.onDetailBtnClick({name})} >Visit</Button>
				</CardBody>
			</Card>
		)
	}
}

export default CompanionBlock
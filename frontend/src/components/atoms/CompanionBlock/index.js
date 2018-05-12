import React from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardBody } from 'reactstrap'

export default ({name, age, sex}) => {
	return (
		<Card>
			<CardImg 	top width="100%" 
						src="http://www.petguide.com/wp-content/uploads/2013/05/cute-dog-names-12.jpg" 
						alt="Card image cap" />
			<CardBody>
				<CardTitle>{name}</CardTitle>
				<CardText>age : {age}</CardText>
				<CardText>sex : {sex}</CardText>
				<Button outline color="secondary">Visit</Button>
			</CardBody>
		</Card>
	)
}
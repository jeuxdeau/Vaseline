import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap'

export default ({receiver}) => {
	return (
		<div>
			<p>받는 사람 : {receiver}</p>
			
		</div>
	)
}
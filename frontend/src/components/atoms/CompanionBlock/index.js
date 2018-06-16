import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Badge, Button, CardImg, CardTitle, CardText, CardBody } from 'reactstrap'

class CompanionBlock extends Component {
	render() {
		const companion = this.props.companion
		const name = companion.name
		const btn_url = "/detail/" + name

		return (
			<Card>
				<CardImg 	top width="100%"
							src="http://www.petguide.com/wp-content/uploads/2013/05/cute-dog-names-12.jpg"
							alt="Card image cap" />
				<CardBody>
					<CardTitle>{companion.name}</CardTitle>
					<CardText>
					<Badge color="secondary">생년</Badge> {companion.birth_year}<br/>
					<Badge color="secondary">사이즈/품종</Badge> {companion.size} {companion.breed}<br/>
					<Badge color="secondary">마감일</Badge> {companion.mating_season.season_start}<br/>
					</CardText>
					<Button outline color="info" tag={Link} to={btn_url}>더 알아보기</Button>
				</CardBody>
			</Card>
		)
	}
}

export default CompanionBlock

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Badge, Button, CardImg, CardTitle, CardText, CardBody } from 'reactstrap'

class CompanionBlock extends Component {
	render() {
		const companion = this.props.companion
		const first_address = this.props.first_address
		const second_address = this.props.second_address
		const score = this.props.score
		const name = companion.name
		const btn_url = "/detail/" + name

		const imgList = this.props.imgList

		let reprImage = imgList.filter((img)=>{return (img.owner == companion.id)})
		reprImage = (reprImage.length == 0)? "http://www.petguide.com/wp-content/uploads/2013/05/cute-dog-names-12.jpg" :
											reprImage[0].name;

		return (
			<Card>
				<CardImg 	top width="100%"
							height="200px"
							src={reprImage}
							alt="Card image cap" />
				<CardBody>
					<CardTitle>{companion.name} <small>({2019 - companion.birth_year}살)</small></CardTitle>
					<CardText>
					<Badge color="secondary">거주지</Badge> {first_address} {second_address}<br/>
					<Badge color="secondary">사이즈/품종</Badge> {companion.size} {companion.breed}<br/>
					<Badge color="secondary">마감일</Badge> {companion.mating_season.season_start}<br/>
					<Badge color="secondary">성격일치도</Badge> {score}<br/>
					</CardText>
					<Button outline color="info" tag={Link} to={btn_url}>더 알아보기</Button>
				</CardBody>
			</Card>
		)
	}
}

export default CompanionBlock

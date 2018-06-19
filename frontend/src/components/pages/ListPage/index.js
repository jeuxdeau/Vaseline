import React, { Component } from 'react'
import { Jumbotron, Alert, Button, CardDeck, Container, Row, Col } from 'reactstrap'
import CompanionBlock from '../../atoms/CompanionBlock'

export default class ListPage extends Component {
	onSignoutBtnClick() {
		this.props.post_signout()
	}
	componentDidMount() {
		this.props.get_companion_list()
		this.props.get_companion_address_list()
	}

	render() {
		const companion_list = this.props.companion_list
		const companion_address_list = this.props.companion_address_list
		const image_list = this.props.image_list
		if(image_list == undefined) return null

		const errors = this.props.errors || {}
		if(companion_list && companion_address_list) {
			return (
				<Jumbotron className="container">
					<h1>
						VASELINE
					</h1>
					{
						errors.get_list_errors?
							<Alert color="danger">
								{errors.get_list_errors}
							</Alert>
							:""
					}
					<CardDeck>
						{companion_list.map((companion, index) =>
							{ return 	(
											<Col xs="4">
											<CompanionBlock companion={companion}
															key={index} 
															first_address={companion_address_list[index].user.profile.first_address} 
															second_address={companion_address_list[index].user.profile.second_address}
															imgList={image_list} />
											<p />
											</Col>
										)
										//(<ul key={companion.name}>{companion.name}
										//	<li>age : {companion.age}</li>
										//	<li>sex : {companion.sex}</li>
										//</ul>)
							})}
					</CardDeck>
				</Jumbotron>
			)
		}
		else {
			return (
				<Jumbotron className="container">
				</Jumbotron>
			)
		}

	}
}

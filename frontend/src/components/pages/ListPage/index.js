import React, { Component } from 'react'
import { Jumbotron, Alert, Button, CardDeck } from 'reactstrap'
import CompanionBlock from '../../atoms/CompanionBlock'

export default class ListPage extends Component {
	onSignoutBtnClick() {
		this.props.post_signout()
	}

	componentDidMount() {
		this.props.get_companion_list()
	}

	render() {
		const companion_list = this.props.companion_list
		const errors = this.props.errors || {}
		
		if(companion_list) {
			return (
				<Jumbotron className="container">
					<h1>
						VASELINE <Button size="sm" outline color="primary" onClick={()=>this.onSignoutBtnClick()}>Logout</Button>
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
											<CompanionBlock name={companion.name}
															age={companion.age}
															sex={companion.sex}
															key={index} />
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

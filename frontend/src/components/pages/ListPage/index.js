import React, { Component } from 'react'
import { Jumbotron, Alert, Button } from 'reactstrap'

export default class ListPage extends Component {
	componentDidMount() {
		this.props.get_companion_list()
	}

	render() {
		const companion_list = this.props.companion_list
		const errors = this.props.errors || {}
		
		if(companion_list) {
			return (
				<Jumbotron className="container">
					<h1>VASELINE</h1>
					{
						errors.get_list_errors?
							<Alert color="danger">
								{errors.get_list_errors}
							</Alert>
							:""
					}
					<h2>Companion List</h2>
					<h3>
						{companion_list.map((companion) => 
							{ return 	(<ul key={companion.name}>{companion.name}
											<li>age : {companion.age}</li>
											<li>sex : {companion.sex}</li>
										</ul>)})}
					</h3>
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

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
					<ul>
						{companion_list.map((companion) => { return (<li>{companion.name}</li>)})}
					</ul>
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

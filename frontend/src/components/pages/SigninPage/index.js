import React, {Component} from 'react'
import { Alert, Button, Jumbotron, Form, InputGroup, InputGroupAddon, Input } from 'reactstrap'
import { Link } from 'react-router-dom'
import './colorlib.css'

import TextInput from '../../atoms/TextInput'

export default class SigninPage extends Component {
	state = {
		username: '',
		password: ''
	}

	handleInputChange = (event) => {
		const target = event.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name

		this.setState({
			[name]: value
		})
	}

	onSubmit = (event) => {
		event.preventDefault()
		this.props.onSubmit(this.state.username, this.state.password)
	}

	render() {
		const errors = this.props.errors || {}
		return (
			<div> // 큰 div
			<div class="login-page">
			  <div class="form">
			    <form class="login-form" onSubmit={this.onSubmit}>
			      <input type="text" name="username" placeholder="username" onChange={this.handleInputChange}/>
			      <input type="password" name="password" placeholder="password" onChange={this.handleInputChange}/>
			      <button type="submit">login</button>
			      <p class="message">Not registered? <a href="/signup">Create an account</a></p>
			    </form>
			  </div>
			</div>

			<Jumbotron className="container">
				<Form class="form" onSubmit={this.onSubmit}>
					<h1>VASELINE</h1>
					{
						errors.non_field_errors?
							<Alert color="danger">
								{errors.non_field_errors}
							</Alert>: ""
					}
					<InputGroup>
						<InputGroupAddon addonType="prepend">
	  					<Button color="danger">아이디♥</Button>
						</InputGroupAddon>
						<Input name="username" label="Username" error={errors.username} onChange={this.handleInputChange} />
					</InputGroup>

					<InputGroup>
						<InputGroupAddon addonType="prepend">
						<Button color="danger">비밀번호</Button>
						</InputGroupAddon>
						<Input name="password" label="Password" error={errors.password} type="password"
								onChange={this.handleInputChange} />
					</InputGroup>

					<Button type="submit" color="secondary" size="lg">
						Log in
					</Button>
					&nbsp;
					<Button color="info" size="lg" tag={Link} to='/signup'>
						Sign Up
					</Button>
				</Form>
			</Jumbotron>
			</div> // 큰 div
		)
	}
}

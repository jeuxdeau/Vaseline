import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Alert, Card, Button, CardImg, CardTitle, CardText, CardBody, Form } from 'reactstrap'
import TextInput from '../../atoms/TextInput'

class AccountUser extends Component {
	onSignoutBtnClick() {
                this.props.post_signout()
        }
	componentDidMount() {
		this.props.get_user_info(this.props.user_id)
	}
	state = {
                username: undefined,
                password: undefined,
                nickname: undefined,
                first_address: undefined,
                second_address: undefined,
                age: undefined,
                gender: undefined,
                email: undefined
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
		console.log("!!")
		for (var key in this.state){
			if(this.state[key] == undefined)
			{
				if(this.props.user_info[key] == undefined)
					this.state[key]=this.props.user_info.profile[key]
				else
					this.state[key] = this.props.user_info[key]
				
			}
		}
		console.log(this.state)
                this.props.onSubmit(this.state, this.props.user_id)
        }
	
	render() {
                const errors = this.props.errors || {}
		const user_info = this.props.user_info
		if(user_info){
                	return (
                        <Jumbotron className="container">
                                <h1>
                                        VASELINE <Button size="sm" outline color="primary" onClick={()=>this.onSignoutBtnClick()}>Logout</Button>
                                </h1>
				<Form onSubmit={this.onSubmit}>
                                        {
                                                errors.non_field_errors?
                                                        <Alert color="danger">
                                                                {errors.non_field_errors}
                                                        </Alert>: ""
                                        }
                                        <TextInput name="username" label="Username" error={errors.username} onChange={this.handleInputChange} placeholder={user_info.username}/>
                                        <TextInput name="password" label="Password" error={errors.password} type="password"
                                                                onChange={this.handleInputChange} />
					<TextInput name="nickname" label="Nickname" error={errors.nickname} onChange={this.handleInputChange} placeholder={user_info.profile.nickname}/>
					<TextInput name="age" label="Age" error={errors.age} onChange={this.handleInputChange} placeholder={user_info.profile.age}/>
					<TextInput name="email" label="Email" error={errors.email} onChange={this.handleInputChange} placeholder={user_info.profile.email}/>
					<TextInput name="gender" label="Gender" error={errors.gender} onChange={this.handleInputChange} placeholder={user_info.profile.gender}/>
					<TextInput name="first_address" label="First_address" error={errors.first_address} onChange={this.handleInputChange} placeholder={user_info.profile.first_address}/>
					<TextInput name="second_address" label="Second_address" error={errors.second_address} onChange={this.handleInputChange} placeholder={user_info.profile.second_address}/>
                                        <Button type="submit" color="danger" size="lg">
                                                Log in
                                        </Button>
                                </Form>
                        </Jumbotron>
                )}
		else {
                        return (
                                <Card>
                                        <CardTitle>{1}</CardTitle>
                                        <CardText>age : {2}</CardText>
                                        <CardText>sex : {3}</CardText>
                                </Card>
                        )
                }
        }
}
export default AccountUser

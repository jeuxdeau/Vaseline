import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Alert, Card, CardDeck, Button, CardImg, CardTitle, CardText, CardBody, Form } from 'reactstrap'
import TextInput from '../../atoms/TextInput'

class AccountCompanion extends Component {
	onSignoutBtnClick() {
                this.props.post_signout()
        }
	componentDidMount() {
		this.props.get_companion_list()
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
		console.log("!!!!!!!!!!!!!!!!!!!")
		console.log(target)
                this.setState({
                        [name]: value
                })
        }
	onSubmitProfile = (event) => {
                event.preventDefault()
                console.log("??")
		const profile_info = {
			nickname: this.state.nickname,
                	first_address: this.state.first_address,
                	second_address: this.state.second_address,
                	age: this.state.age,
                	gender: this.state.gender,
                	email: this.state.email
		}
                for (var key in profile_info){
                	if(profile_info[key] == undefined)
                        	profile_info[key]=this.props.user_info.profile[key]
                }
                console.log(profile_info)
                this.props.onSubmitProfile(profile_info, this.props.user_id)
        }

		render() {
			const companion_id = this.props.match.params.id
			const companion_list = this.props.companion_list
			console.log(companion_id+"!!!")
			console.log(this.props)
                	const errors = this.props.errors || {}
			if(companion_list){
				const companion = companion_list[companion_id-1]
				console.log(companion.desired_mate)
                		return (
					<Jumbotron className="container">
	                                <h1>
        	                                VASELINE <Button size="sm" outline color="primary" onClick={()=>this.onSignoutBtnClick()}>Logout</Button>
                	                </h1>
					<Form onSubmit={this.onSubmitPassword}>
                                        {
                                                errors.non_field_errors?
                                                        <Alert color="danger">
                                                                {errors.non_field_errors}
                                                        </Alert>: ""
                                        }
                                        <CardDeck>
                                        <TextInput name="name" label="name" error={errors.name} onChange={this.handleInputChange} placeholder={companion.name}/>
					<TextInput name="sex" label="sex" error={errors.name} onChange={this.handleInputChange} placeholder={companion.sex}/>
					<TextInput name="birth_year" label="birth_year" error={errors.name} onChange={this.handleInputChange} placeholder={companion.birth_year}/>
					<TextInput name="breed" label="breed" error={errors.name} onChange={this.handleInputChange} placeholder={companion.breed}/>
					<TextInput name="size" label="size" error={errors.name} onChange={this.handleInputChange} placeholder={companion.size}/>
					<CardDeck>
					<h2>Desired_mate</h2>
					<CardDeck>
					<h3>Personality</h3>
					<CardDeck>
					<TextInput name="affinity_with_human" label="affinity_with_human" error={errors.name} onChange={this.handleInputChange} placeholder={companion.desired_mate.personality.affinity_with_human}/>
					<TextInput name="affinity_with_dog" label="affinity_with_dog" error={errors.name} onChange={this.handleInputChange} placeholder={companion.name}/>
					<TextInput name="name" label="name" error={errors.name} onChange={this.handleInputChange} placeholder={companion.name}/>
                                        <TextInput name="name" label="name" error={errors.name} onChange={this.handleInputChange} placeholder={companion.name}/>
                                        <TextInput name="name" label="name" error={errors.name} onChange={this.handleInputChange} placeholder={companion.name}/>
                                        <TextInput name="name" label="name" error={errors.name} onChange={this.handleInputChange} placeholder={companion.name}/>
                                        <TextInput name="name" label="name" error={errors.name} onChange={this.handleInputChange} placeholder={companion.name}/>
                                        <Button type="submit" color="danger" size="lg">
                                                Update Companion
                                        </Button>
					</CardDeck>
					</CardDeck>
					</CardDeck>
                                        </CardDeck>
                                </Form>

					<Card>
                                		<CardImg        top width="100%"
                                        		src="http://www.petguide.com/wp-content/uploads/2013/05/cute-dog-names-12.jpg"
                                         		alt="Card image cap" />
                                		<CardBody>
                                        		<CardTitle>{companion.name}</CardTitle>
                                        		<CardText>age : {companion.age}</CardText>
                                 		       	<CardText>sex : {companion.sex}</CardText>
                                		</CardBody>
                        		</Card>
					</Jumbotron>
				)}
			else {
                        return (
                                <Card>
                                        <CardTitle>{1}</CardTitle>
                                        <CardText>not : {2}</CardText>
                                        <CardText>start : {3}</CardText>
                                </Card>
                        )}
		}
}
export default AccountCompanion

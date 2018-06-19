import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, CardImg, CardTitle, CardText, CardBody } from 'reactstrap'
import Fileupload from '../../molecules/Fileupload'

class CompanionUpdateBlock extends Component {
	constructor(props) {
		super(props)
		this.state = {
			uploadAppActivated: false,
		}
	}

	onUploadBtnClick() {
		this.setState({
			uploadAppActivated: !this.state.uploadAppActivated
		})
	}

	render() {
		const companion = this.props.companion
		const name = companion.name
		const btn_visit_url = "/detail/" + name
		const btn_update_url = "/account/companion/"
		
		return (
			<Card>
				<CardImg 	top width="100%" 
							src="http://www.petguide.com/wp-content/uploads/2013/05/cute-dog-names-12.jpg" 
							alt="Card image cap" />
				<CardBody>
					<CardTitle>{companion.name}</CardTitle>
					<CardText>age : {companion.age}</CardText>
					<CardText>sex : {companion.sex}</CardText>
					<Button outline color="info" tag={Link} to={btn_visit_url}>Visit</Button>
					<Button outline color="primary" tag={Link} to={btn_update_url+companion.id+"/"}>Update?</Button>
					<Button outline color="danger" onClick={()=>{this.onUploadBtnClick()}}>Upload</Button>
					<Fileupload uploadAppOpen={this.state.uploadAppActivated}
								uploadOwnerName={name}
								uploadOwnerId={this.props.companion.id}
								uploadToggle={()=>this.onUploadBtnClick()} />
				</CardBody>
			</Card>
		)
	}
}

export default CompanionUpdateBlock

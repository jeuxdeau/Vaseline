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
		
		const imgList = this.props.imgList

		let reprImage = imgList.filter((img)=>{return (img.owner == companion.id)})
		reprImage = (reprImage.length == 0)? "http://www.petguide.com/wp-content/uploads/2013/05/cute-dog-names-12.jpg" :
											reprImage[0].name;

		return (
			<Card>
				<CardImg 	top width="100%" 
							height="300px"
							src={reprImage} 
							alt="Card image cap" />
				<CardBody>
					<CardTitle>{companion.name}</CardTitle>
					<CardText>age : {companion.age}</CardText>
					<CardText>sex : {companion.sex}</CardText>
					<Button outline color="info" tag={Link} to={btn_visit_url}>방문하기</Button>
					<Button outline color="primary" tag={Link} to={btn_update_url+companion.id+"/"}>수정하기</Button>
					<Button outline color="danger" onClick={()=>{this.onUploadBtnClick()}}>이미지 업로드</Button>
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

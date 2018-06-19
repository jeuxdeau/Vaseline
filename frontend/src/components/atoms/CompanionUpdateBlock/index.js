import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Badge, Card, Button, CardImg, CardTitle, CardText, CardBody } from 'reactstrap'
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
				<CardText>
				<Badge color="secondary">사이즈/품종</Badge> {companion.size} {companion.breed}<br/>
				<Badge color="secondary">나이 (생년)</Badge> {2019 - companion.birth_year}살 ({companion.birth_year}년생)<br/>
				<Badge color="secondary">성별</Badge> {companion.sex}<br/>
				<Badge color="secondary">마감일</Badge> {companion.mating_season.season_start}<br/>
				</CardText>
				<Button outline color="secondary" tag={Link} to={btn_visit_url}>방문하기</Button>{' '}
				<Button outline color="secondary" tag={Link} to={btn_update_url+companion.id+"/"}>정보 수정하기</Button><p />
				<Button outline color="danger" onClick={()=>{this.onUploadBtnClick()}}>사진 추가하기</Button>
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

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Table, Jumbotron, Badge, Alert, CardDeck, Card, Button, CardImg, CardTitle, CardText, CardBody } from 'reactstrap'
import CompanionUpdateBlock from '../../atoms/CompanionUpdateBlock'

class Account extends Component {
	onSignoutBtnClick() {
                this.props.post_signout()
        }
	componentDidMount() {
		this.props.get_companion_list()
		this.props.get_user_info(this.props.user_id)

	}
        render() {
		const user_info = this.props.user_info
		const companion_list = this.props.companion_list
		const my_companion_list_key = []
		const imgList = this.props.image_list
		if(imgList == undefined) return null
		// my_companion list to Companion_update_block_list
		console.log(user_info)
		if(user_info) {
			let companion_update_block_list = []
			for (var key in companion_list){
				if(companion_list[key].user == this.props.user_id)
					companion_update_block_list.push(<CompanionUpdateBlock companion={companion_list[key]} key={key+1} imgList={imgList}/>)
			}

                	return (
				<div>
				<p />
				<div class="form" style={{width:"1000px"}}><p />

                        	<Card>
                                	<CardBody>
						<h2>내 계정</h2><Button outline color="success" tag={Link} to={"/account/user/"}>개인정보 수정하기</Button><p />
						<Table>
						<thead>
						<tr><th><center>#</center></th><th><center>내용</center></th></tr>
						</thead>
						<tbody>
						<tr><th scope="row"><center>고유 ID</center></th><th><center>{this.props.user_id}</center></th></tr>
						<tr><th><center>유저네임</center></th><th><center>{user_info.username}</center></th></tr>
						<tr><th><center>닉네임</center></th><th><center>{user_info.profile.nickname}</center></th></tr>
						<tr><th><center>나이</center></th><th><center>{user_info.profile.age}</center></th></tr>
						<tr><th><center>이메일 주소</center></th><th><center>{user_info.profile.email}</center></th></tr>
                                                <tr><th><center>성별</center></th><th><center>{user_info.profile.gender}</center></th></tr>
                                                <tr><th><center>주소 (시/도)</center></th><th><center>{user_info.profile.first_address}</center></th></tr>
						<tr><th><center>주소(시/군/구)</center></th><th><center>{user_info.profile.second_address}</center></th></tr>
						</tbody>
						</Table>
						<center></center>
						<center><Button outline color="success" tag={Link} to={"/account/companion_create/"}>새로운 반려동물 추가하기</Button></center>
                                	</CardBody>
                        	</Card>
				<p />
				<CardDeck>
					{companion_update_block_list}
				</CardDeck>
				</div>
				</div>
                	)
		}
		else {
                        return (
				<Card>
					<CardTitle>{1}</CardTitle>
					<CardText>not : {2}</CardText>
					<CardText>start : {3}</CardText>
				</Card>
                        )
                }

        }
}
export default Account

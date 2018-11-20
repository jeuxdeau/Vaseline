import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Table, Jumbotron, Alert, Card, CardDeck, Button, CardImg, CardTitle, CardText, CardBody, Form } from 'reactstrap'
import TextInput from '../../atoms/TextInput'
import CompanionBlock from '../../atoms/CompanionBlock'
import { Redirect } from 'react-router-dom'

class AccountCreateCompanion extends Component {
	onSignoutBtnClick() {
                this.props.post_signout()
        }
	constructor(props) {
                super(props)
                this.state = {
			redirect:false,
			name: "companion_name",
                       	birth_year: 2018,
                        sex: 'female',
			size: 'small',
			breed: 'toy_poodle',
			desired_mate_sex: 'male',
			desired_mate_breed: 'toy_poodle',
			desired_mate_size: 'small',
			desired_mate_affinity_with_human: 0,
			desired_mate_affinity_with_dog: 1,
			desired_mate_shyness: 2,
			desired_mate_activity: 3,
			desired_mate_aggression: 4,
			desired_mate_loudness: 5,
			desired_mate_etc: "etc_example",
			affinity_with_human: 5,
			affinity_with_dog: 4,
			shyness: 3,
			activity: 2,
			aggression: 1,
			loudness: 2,
			etc: "etc_example",
			season_start:'2018-07-01',
			season_end:'2018-07-01',
			setting:false
                }
        }
        handleInputChange = (event) => {
                const target = event.target
                const value = target.type === 'checkbox' ? target.checked : target.value
                const name = target.name
		console.log(target)
                this.setState({
                        [name]: value
                })
        }
	onSubmit = (event) => {
                event.preventDefault()
                console.log("??")
                let companion_info = {
			name: this.state.name,
                        birth_year: this.state.birth_year,
                        sex: this.state.sex,
                        size: this.state.size,
                        breed: this.state.breed
		}
		for (var key in companion_info){
                        if(companion_info[key] == undefined)
                                companion_info[key]=this.props.companion_list[this.props.match.params.id-1][key]
		}
		let desired_mate_personality = {
			affinity_with_human: this.state.desired_mate_affinity_with_human,
                        affinity_with_dog: this.state.desired_mate_affinity_with_dog,
                        shyness: this.state.desired_mate_shyness,
                        activity: this.state.desired_mate_activity,
                        aggression: this.state.desired_mate_aggression,
                        loudness: this.state.desired_mate_loudness,
                        etc: this.state.desired_mate_etc
		}
		for (var key in desired_mate_personality){
                        if(desired_mate_personality[key] == undefined)
                                desired_mate_personality[key]=this.props.companion_list[this.props.match.params.id-1].desired_mate.personality[key]
                }
		let desired_mate = {
			sex: this.state.desired_mate_sex,
                        breed: this.state.desired_mate_breed,
                        size: this.state.desired_mate_size
		}
		for (var key in desired_mate){
                        if(desired_mate[key] == undefined)
                                desired_mate[key]=this.props.companion_list[this.props.match.params.id-1].desired_mate[key]
                }
		let personality = {
			affinity_with_human: this.state.affinity_with_human,
                        affinity_with_dog: this.state.affinity_with_dog,
                        shyness: this.state.shyness,
                        activity: this.state.activity,
                        aggression: this.state.aggression,
                        loudness: this.state.loudness,
                        etc: this.state.etc
		}
		for (var key in personality){
                        if(personality[key] == undefined)
                                personality[key]=this.props.companion_list[this.props.match.params.id-1].personality[key]
                }
		let mating_season = {
			season_start:this.state.season_start,
                        season_end:this.state.season_end
		}
		for (var key in mating_season){
                        if(mating_season[key] == undefined)
                                mating_season[key]=this.props.companion_list[this.props.match.params.id-1].mating_season[key]
                }
		let information = {
			companion_info:companion_info,
			desired_mate_personality:desired_mate_personality,
			desired_mate:desired_mate,
			personality:personality,
			mating_season, mating_season
		}
		console.log(information)
		this.setState({redirect:true})
                this.props.onSubmit(information, this.props.user_id)
        }

	render() {
			if(this.state.redirect){
   	                     return <Redirect to='/account'/>
         	       }

			const selectedOptionsStyles = {
        			color: "#3c763d",
            			backgroundColor: "#dff0d8"
			}
        		const optionsListStyles = {
            			backgroundColor: "#dff0d8",
            			color: "#3c763d"
        		}
			console.log(this.state)
			console.log(this.props.user_id)
                	const errors = this.props.errors || {}
			if(this.props.user_id){
				return (
					<div>
					<p />
					<div class="form" style={{width:"800px"}}>
					<Form onSubmit={this.onSubmit}>
                                        {
                                                errors.non_field_errors?
                                                        <Alert color="danger">
                                                                {errors.non_field_errors}
                                                        </Alert>: ""
                                        }
                                        <CardDeck>
					<h2>반려동물 추가하기</h2><p />
					<Table>
                                        <thead>
                                        <tr><th><center>#</center></th><th><center>내용</center></th></tr>
                                        </thead>
                                        <tbody>
                                        <tr><th><center>이름</center></th><th><center>
					<TextInput name="name" error={errors.name} onChange={this.handleInputChange}/>
					</center></th></tr>
					<tr><th><center>성별</center></th><th><center>

					<Input type="select" name="sex" error={errors.name} onChange={this.handleInputChange} value={this.state.sex}>
					<option value='female'>암컷</option>
                                        <option value='male'>수컷</option>
					</Input></center></th></tr>

					<tr><th><center>생년</center></th><th><center>
					<Input type="select" name="birth_year" error={errors.name} onChange={this.handleInputChange} value={this.state.birth_year}>
					<option value="2018">2018</option>
					<option value="2017">2017</option>
					<option value="2016">2016</option>
					<option value="2015">2015</option>
					<option value="2014">2014</option>
					<option value="2013">2013</option>
					<option value="2012">2012</option>
					<option value="2011">2011</option>
					<option value="2010">2010</option>
					<option value="2009">2009</option>
					<option value="2008">2008</option>
					<option value="2007">2007</option>
					<option value="2006">2006</option>
					<option value="2005">2005</option>
					<option value="2004">2004년 이전</option>
					</Input>
					</center></th></tr>
					<tr><th><center>품종</center></th><th><center>
					<Input type="select"  name="breed" error={errors.name} onChange={this.handleInputChange} value={this.state.breed}>
					<option value='mix'>믹스</option>
			          	<option value='dachshund'>닥스훈트</option>
          				<option value='dalmatian'>달마시안</option>
          				<option value='retriever'>리트리버</option>
          				<option value='malamute'>말라뮤트</option>
          				<option value='maltese'>말티즈</option>
          				<option value='miniature_pinscher'>미니핀</option>
          				<option value='bulldog'>불독</option>
          				<option value='beagle'>비글</option>
          				<option value='bichon_frise'>비숑프리제</option>
          				<option value='samoyed'>사모예드</option>
          				<option value='shar_pei'>샤페이</option>
          				<option value='shepherd'>세퍼트</option>
          				<option value='sapsal'>삽살</option>
          				<option value='sheepdog'>쉽독</option>
          				<option value='spitz'>스피츠</option>
          				<option value='siberian_husky'>시베리안 허스키</option>
          				<option value='shih_tzu'>시츄</option>
          				<option value='yorkshire_terrier'>요크셔 테리어</option>
          				<option value='welsh_corgi'>웰시코기</option>
          				<option value='jindo_dog'>진돗개</option>
          				<option value='chihuahua'>치와와</option>
					<option value='cocker_spaniel'>코카스파니엘</option>
					<option value='collie'>콜리</option>
					<option value='toy_poodle'>토이푸들</option>
					<option value='papillon'>파피용</option>
					<option value='pug'>퍼그</option>
					<option value='pekingese'>페키니즈</option>
					<option value='pomeranian'>포메라니안</option>
					<option value='poodle'>푸들</option>
					<option value='pyrenees'>피레니즈</option>
					<option value='hound'>하운드</option>
					<option value='etc'>기타</option>

					</Input></center></th></tr>
					<tr><th><center>사이즈</center></th><th><center>
					<Input type="select" name="size" error={errors.name} onChange={this.handleInputChange} value={this.state.size}>

					<option value="small">소형견</option>
				        <option value="medium">중형견</option>
        				<option value="large">대형견</option>

					</Input></center></th></tr>
					</tbody>
					</Table>
					<h2>원하는 교제 상대</h2>
					<Table>
                                        <thead>
                                        <tr><th><center>#</center></th><th><center>내용</center></th></tr>
                                        </thead>
                                        <tbody>
					<tr><th><center>성별</center></th><th><center>
					<Input type="select" name="desired_mate_sex" error={errors.name} onChange={this.handleInputChange} value={this.state.desired_mate_sex}>
                                        <option value='female'>암컷</option>
                                        <option value='male'>수컷</option>
                                        </Input></center></th></tr>
					<tr><th><center>품종</center></th><th><center>
                                        <Input type="select"  name="desired_mate_breed" error={errors.name} onChange={this.handleInputChange} value={this.state.desired_mate_breed}>
                                        <option value='mix'>믹스</option>
                                        <option value='dachshund'>닥스훈트</option>
                                        <option value='dalmatian'>달마시안</option>
                                        <option value='retriever'>리트리버</option>
                                        <option value='malamute'>말라뮤트</option>
                                        <option value='maltese'>말티즈</option>
                                        <option value='miniature_pinscher'>미니핀</option>
                                        <option value='bulldog'>불독</option>
                                        <option value='beagle'>비글</option>
                                        <option value='bichon_frise'>비숑프리제</option>
                                        <option value='samoyed'>사모예드</option>
                                        <option value='shar_pei'>샤페이</option>
                                        <option value='shepherd'>세퍼트</option>
                                        <option value='sapsal'>삽살</option>
                                        <option value='sheepdog'>쉽독</option>
                                        <option value='spitz'>스피츠</option>
                                        <option value='siberian_husky'>시베리안 허스키</option>
                                        <option value='shih_tzu'>시츄</option>
                                        <option value='yorkshire_terrier'>요크셔 테리어</option>
                                        <option value='welsh_corgi'>웰시코기</option>
                                        <option value='jindo_dog'>진돗개</option>
                                        <option value='chihuahua'>치와와</option>
                                        <option value='cocker_spaniel'>코카스파니엘</option>
                                        <option value='collie'>콜리</option>
                                        <option value='toy_poodle'>토이푸들</option>
                                        <option value='papillon'>파피용</option>
                                        <option value='pug'>퍼그</option>
                                        <option value='pekingese'>페키니즈</option>
                                        <option value='pomeranian'>포메라니안</option>
                                        <option value='poodle'>푸들</option>
                                        <option value='pyrenees'>피레니즈</option>
                                        <option value='hound'>하운드</option>
                                        <option value='etc'>기타</option>

                                        </Input></center></th></tr>

					<tr><th><center>사이즈</center></th><th><center>
                                        <Input type="select" name="desired_mate_size" error={errors.name} onChange={this.handleInputChange} value={this.state.desired_mate_size}>

                                        <option value="small">소형견</option>
                                        <option value="medium">중형견</option>
                                        <option value="large">대형견</option>

                                        </Input></center></th></tr>
					</tbody>
					</Table>

					<h3>원하는 성격</h3>

					<Table>
                                        <thead>
                                        <tr><th><center>#</center></th><th><center>Update</center></th></tr>
                                        </thead>
                                        <tbody>
					<tr><th><center>사람을 좋아해요</center></th><th><center>
					<Input type="select" name="사람을 좋아해요" error={errors.name} onChange={this.handleInputChange} value={this.state.desired_mate_affinity_with_human}>
					<option value="상관 없음">0</option>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>강아지 친구들과 친하게 지내요</center></th><th><center>
					<Input type="select" name="강아지 친구들과 친하게 지내요" error={errors.name} onChange={this.handleInputChange} value={this.state.desired_mate_affinity_with_dog}>
					<option value="상관 없음">0</option>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>수줍음이 많아요</center></th><th><center>
					<Input type="select" name="desired_mate_shyness" error={errors.name} onChange={this.handleInputChange} value={this.state.desired_mate_shyness}>
					<option value="상관 없음">0</option>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>활동적이에요</center></th><th><center>
					<Input type="select" name="desired_mate_activity" error={errors.name} onChange={this.handleInputChange} value={this.state.desired_mate_activity}>
					<option value="상관 없음">0</option>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>많이 짖어요</center></th><th><center>
					<Input type="select" name="desired_mate_loudness" error={errors.name} onChange={this.handleInputChange} value={this.state.desired_mate_loudness}>
					<option value="상관 없음">0</option>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>공격적인 편이에요</center></th><th><center>
					<Input type="select" name="desired_mate_aggression" error={errors.name} onChange={this.handleInputChange} value={this.state.desired_mate_aggression}>
					<option value="상관 없음">0</option>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>더 바라는 점은요...</center></th><th><center>
					<TextInput name="desired_mate_etc" error={errors.name} onChange={this.handleInputChange}/>
					</center></th></tr>
					</tbody>
					</Table>

					<h3>Personality</h3>

					<Table>
                                        <thead>
                                        <tr><th><center>#</center></th><th><center>Update</center></th></tr>
                                        </thead>
                                        <tbody>
					<tr><th><center>사람을 좋아해요</center></th><th><center>
					<Input type="select" name="affinity_with_human" error={errors.name} onChange={this.handleInputChange} value={this.state.affinity_with_human}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>강아지 친구를 좋아해요</center></th><th><center>
					<Input type="select" name="affinity_with_dog" error={errors.name} onChange={this.handleInputChange} value={this.state.affinity_with_dog}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>수줍음이 많아요</center></th><th><center>
					<Input type="select" name="shyness" error={errors.name} onChange={this.handleInputChange} value={this.state.shyness}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>활동적이에요</center></th><th><center>
					<Input type="select" name="activity" error={errors.name} onChange={this.handleInputChange} value={this.state.activity}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>많이 짖어요</center></th><th><center>
					<Input type="select" name="loudness" error={errors.name} onChange={this.handleInputChange} value={this.state.loudness}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>공격적인 편이에요</center></th><th><center>
					<Input type="select" name="aggression" error={errors.name} onChange={this.handleInputChange} value={this.state.aggression}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>더 바라는 점은요...</center></th><th><center>
					<TextInput name="etc" error={errors.name} onChange={this.handleInputChange}/>
					</center></th></tr>
					</tbody>
					</Table>
					<h2>만남 기간</h2>
					<Table>
                                        <thead>
                                        <tr><th><center>#</center></th><th><center>Update</center></th></tr>
                                        </thead>
                                        <tbody>
					<tr><th><center>시작일</center></th><th><center>
					<TextInput name="season_start" error={errors.name} onChange={this.handleInputChange} placeholder="2018-07-01"/></center></th></tr>
					<tr><th><center>종료일</center></th><th><center>
                                        <TextInput name="season_end" error={errors.name} onChange={this.handleInputChange} placeholder="2018-07-01"/></center></th></tr>
                                        </tbody>
					</Table>
					<center><Button type="submit" color="danger" size="lg">
                                                반려동물 추가하기
                                        </Button></center>
                                        </CardDeck>
                                </Form>

			</div>
			</div>
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
export default AccountCreateCompanion

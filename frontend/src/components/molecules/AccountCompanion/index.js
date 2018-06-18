import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Table, Jumbotron, Alert, Card, CardDeck, Button, CardImg, CardTitle, CardText, CardBody, Form } from 'reactstrap'
import TextInput from '../../atoms/TextInput'
import CompanionBlock from '../../atoms/CompanionBlock'
import { Redirect } from 'react-router-dom'

class AccountCompanion extends Component {
	onSignoutBtnClick() {
                this.props.post_signout()
        }
	componentDidMount() {
		this.props.get_companion_list()
	}
	constructor(props) {
                super(props)
                this.state = {
			redirect:false,
			setting:false,
			name: undefined,
                       	birth_year: undefined,
                        sex: undefined,
			size: undefined,
			breed: undefined,
			desired_mate_sex: undefined,
			desired_mate_breed: undefined,
			desired_mate_size: undefined,
			desired_mate_affinity_with_human: undefined,
			desired_mate_affinity_with_dog: undefined,
			desired_mate_shyness: undefined,
			desired_mate_activity: undefined,
			desired_mate_aggression: undefined,
			desired_mate_loudness: undefined,
			desired_mate_etc: undefined,
			affinity_with_human: undefined,
			affinity_with_dog: undefined,
			shyness: undefined,
			activity: undefined,
			aggression: undefined,
			loudness: undefined,
			etc: undefined,
			season_start:undefined,
			season_end:undefined,
			companion_update:undefined,
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
                this.props.onSubmit(information, this.props.match.params.id)
        }

	render() {
			console.log("$$$$$$$$$$$$$$$")
			console.log(this.state.redirect)
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
			let companion_id = this.props.match.params.id
			let companion_list = this.props.companion_list
			console.log(companion_id+"!!!")
			console.log(this.state)
                	let errors = this.props.errors || {}
			if(companion_list){
				let companion_imsi = companion_list[companion_id-1]
				if(!this.state.setting){
					this.setState({
						sex:companion_imsi.sex,
  	                        		breed:companion_imsi.breed,
						birth_year:companion_imsi.birth_year,
						size:companion_imsi.size,
						desired_mate_sex:companion_imsi.desired_mate.sex,
						desired_mate_breed:companion_imsi.desired_mate.breed,
						desired_mate_size:companion_imsi.desired_mate.size,
						desired_mate_affinity_with_human:companion_imsi.desired_mate.personality.affinity_with_human,
						desired_mate_affinity_with_dog:companion_imsi.desired_mate.personality.affinity_with_dog,
						desired_mate_shyness:companion_imsi.desired_mate.personality.shyness,
						desired_mate_activity:companion_imsi.desired_mate.personality.activity,
						desired_mate_loudness:companion_imsi.desired_mate.personality.loudness,
						desired_mate_aggression:companion_imsi.desired_mate.personality.aggression,
						desired_mate_etc:companion_imsi.desired_mate.personality.etc,

						affinity_with_human:companion_imsi.personality.affinity_with_human,
						affinity_with_dog:companion_imsi.personality.affinity_with_dog,
						shyness:companion_imsi.personality.shyness,
						activity:companion_imsi.personality.activity,
						loudness:companion_imsi.personality.loudness,
						aggression:companion_imsi.personality.aggression,
						etc:companion_imsi.personality.etc,
						setting:true,
						companion_update:companion_imsi
						})
                        	}
				if(this.state.companion_update){
					console.log("%%")
					console.log(this.state.companion_update)
                		return (

					<Jumbotron className="container">
	                                <h1>
        	                                VASELINE <Button size="sm" outline color="primary" onClick={()=>this.onSignoutBtnClick()}>Logout</Button>
                	                </h1>
					<CompanionBlock companion={this.state.companion_update} key={this.state.companion_update.id} />
					<Form onSubmit={this.onSubmit}>
                                        {
                                                errors.non_field_errors?
                                                        <Alert color="danger">
                                                                {errors.non_field_errors}
                                                        </Alert>: ""
                                        }
                                        <CardDeck>
					<h2>Companion Info</h2>
					<Table>
                                        <thead>
                                        <tr><th><center>#</center></th><th><center>Update</center></th></tr>
                                        </thead>
                                        <tbody>
                                        <tr><th><center>Name</center></th><th><center>{this.state.companion_update.name}</center></th></tr>
					<tr><th><center>Sex</center></th><th><center>
					
					<Input type="select" name="sex" error={errors.name} onChange={this.handleInputChange} value={this.state.sex}>
					<option value='female'>암컷</option>
                                        <option value='male'>수컷</option>
					</Input></center></th></tr>
					
					<tr><th><center>BirthYear</center></th><th><center>
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
					<tr><th><center>Breed</center></th><th><center>
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
					<tr><th><center>Size</center></th><th><center>
					<Input type="select" name="size" error={errors.name} onChange={this.handleInputChange} value={this.state.size}>
					
					<option value="small">소형견</option>
				        <option value="medium">중형견</option>
        				<option value="large">대형견</option>

					</Input></center></th></tr>
					</tbody>
					</Table>
					<h2>Desired_mate</h2>
					<Table>
                                        <thead>
                                        <tr><th><center>#</center></th><th><center>Update</center></th></tr>
                                        </thead>
                                        <tbody>
					<tr><th><center>Sex</center></th><th><center>
					<Input type="select" name="desired_mate_sex" error={errors.name} onChange={this.handleInputChange} value={this.state.desired_mate_sex}>
                                        <option value='female'>암컷</option>
                                        <option value='male'>수컷</option>
                                        </Input></center></th></tr>
					<tr><th><center>Breed</center></th><th><center>
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
					
					<tr><th><center>Size</center></th><th><center>
                                        <Input type="select" name="desired_mate_size" error={errors.name} onChange={this.handleInputChange} value={this.state.desired_mate_size}>

                                        <option value="small">소형견</option>
                                        <option value="medium">중형견</option>
                                        <option value="large">대형견</option>

                                        </Input></center></th></tr>
					</tbody>
					</Table>
					
					<h3>Personality (DesiredMate)</h3>
					
					<Table>
                                        <thead>
                                        <tr><th><center>#</center></th><th><center>Update</center></th></tr>
                                        </thead>
                                        <tbody>
					<tr><th><center>Affinity_with_human</center></th><th><center>
					<Input type="select" name="desired_mate_affinity_with_human" error={errors.name} onChange={this.handleInputChange} value={this.state.desired_mate_affinity_with_human}>
					<option value="0">"상관없음"</option>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Affinity_with_dog</center></th><th><center>
					<Input type="select" name="desired_mate_affinity_with_dog" error={errors.name} onChange={this.handleInputChange} value={this.state.desired_mate_affinity_with_dog}>
					<option value="0">상관없음</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Shyness</center></th><th><center>
					<Input type="select" name="desired_mate_shyness" error={errors.name} onChange={this.handleInputChange} value={this.state.desired_mate_shyness}>
					<option value="0">상관없음</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Activity</center></th><th><center>
					<Input type="select" name="desired_mate_activity" error={errors.name} onChange={this.handleInputChange} value={this.state.desired_mate_activity}>
					<option value="0">상관없음</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Loudness</center></th><th><center>
					<Input type="select" name="desired_mate_loudness" error={errors.name} onChange={this.handleInputChange} value={this.state.desired_mate_loudness}>
					<option value="0">상관없음</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Aggression</center></th><th><center>
					<Input type="select" name="desired_mate_aggression" error={errors.name} onChange={this.handleInputChange} value={this.state.desired_mate_aggression}>
					<option value="0">상관없음</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>ETC</center></th><th><center>
					<TextInput name="desired_mate_etc" error={errors.name} onChange={this.handleInputChange} placeholder={this.state.companion_update.desired_mate.personality.etc}/>
					</center></th></tr>
					</tbody>
					</Table>
					
					<h3>Personality</h3>
					
					<Table>
                                        <thead>
                                        <tr><th><center>#</center></th><th><center>Update</center></th></tr>
                                        </thead>
                                        <tbody>
					<tr><th><center>Affinity_with_human</center></th><th><center>
					<Input type="select" name="affinity_with_human" error={errors.name} onChange={this.handleInputChange} value={this.state.affinity_with_human}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Affinity_with_dog</center></th><th><center>
					<Input type="select" name="affinity_with_dog" error={errors.name} onChange={this.handleInputChange} value={this.state.affinity_with_dog}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Shyness</center></th><th><center>
					<Input type="select" name="shyness" error={errors.name} onChange={this.handleInputChange} value={this.state.shyness}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Activity</center></th><th><center>
					<Input type="select" name="activity" error={errors.name} onChange={this.handleInputChange} value={this.state.activity}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Loudness</center></th><th><center>
					<Input type="select" name="loudness" error={errors.name} onChange={this.handleInputChange} value={this.state.loudness}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Aggression</center></th><th><center>
					<Input type="select" name="aggression" error={errors.name} onChange={this.handleInputChange} value={this.state.aggression}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>ETC</center></th><th><center>
					<TextInput name="etc" error={errors.name} onChange={this.handleInputChange} placeholder={this.state.companion_update.personality.etc}/>
					</center></th></tr>
					</tbody>
					</Table>
					<h2>Mating Season</h2>
					<Table>
                                        <thead>
                                        <tr><th><center>#</center></th><th><center>Update</center></th></tr>
                                        </thead>
                                        <tbody>
					<tr><th><center>Season Start</center></th><th><center>
					<TextInput name="season_start" error={errors.name} onChange={this.handleInputChange} placeholder={this.state.companion_update.mating_season.season_start}/></center></th></tr>
					<tr><th><center>Season End</center></th><th><center>
                                        <TextInput name="season_end" error={errors.name} onChange={this.handleInputChange} placeholder={this.state.companion_update.mating_season.season_end}/></center></th></tr>
                                        </tbody>
					</Table>
					<center><Button type="submit" color="danger" size="lg">
                                                Update Companion
                                        </Button></center>
                                        </CardDeck>
                                </Form>

			</Jumbotron>
				)}
				else{
					return (
					<Card>
                                        <CardTitle>{1}</CardTitle>
                                        <CardText>not : {2}</CardText>
                                        <CardText>start : {3}</CardText>
                                </Card>
					)}
			}
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

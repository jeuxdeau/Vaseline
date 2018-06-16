import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Table, Jumbotron, Alert, Card, CardDeck, Button, CardImg, CardTitle, CardText, CardBody, Form } from 'reactstrap'
import TextInput from '../../atoms/TextInput'
import CompanionBlock from '../../atoms/CompanionBlock'

let breed_imsi = undefined
let sex_imsi = undefined
let birth_year_imsi = undefined
let size_imsi = undefined
let desired_mate_sex_imsi = undefined
let desired_mate_breed_imsi = undefined
let desired_mate_size_imsi = undefined
let desired_mate_affinity_with_human_imsi = undefined
let desired_mate_affinity_with_dog_imsi = undefined
let desired_mate_aggression_imsi = undefined
let desired_mate_shyness_imsi = undefined
let desired_mate_activity_imsi = undefined
let desired_mate_loudness_imsi = undefined
let desired_mate_etc_imsi = undefined

let affinity_with_human_imsi = undefined
let affinity_with_dog_imsi = undefined
let aggression_imsi = undefined
let shyness_imsi = undefined
let activity_imsi = undefined
let loudness_imsi = undefined
let etc_imsi = undefined
let setting = false

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
                        username: undefined,
                        password: undefined,
                        nickname: undefined,
                        first_address: undefined,
                        second_address: undefined,
			birth_year: undefined,
                        sex: undefined,
                        email: undefined,
			size: undefined,
			desired_mate_sex: undefined,
			desired_mate_breed: undefined,
			desired_mate_size: undefined,
			desired_mate_affinity_with_human: undefined,
			desired_mate_affinity_with_dog: undefined,
			desired_mate_shyness: undefined,
			desired_mate_activity: undefined,
			desired_mate_loudness: undefined,
			desired_mate_etc: undefined,
			affinity_with_human: undefined,
			affinity_with_dog: undefined,
			shyness: undefined,
			activity: undefined,
			loudness: undefined,
			etc: undefined,
                }
        }
        handleInputChange = (event) => {
                const target = event.target
                const value = target.type === 'checkbox' ? target.checked : target.value
                const name = target.name
		console.log(target)
                if(name == "breed")
                        breed_imsi = target.value
		else if(name == "sex")
			sex_imsi = target.value
		else if(name == "birth_year")
			birth_year_imsi = target.value
		else if(name == "size")
			size_imsi = target.value
		else if(name == "desired_mate_sex")
			desired_mate_sex_imsi = target.value
		else if(name == "desired_mate_breed")
			desired_mate_breed_imsi = target.value
		else if(name == "desired_mate_size")
			desired_mate_size_imsi = target.value
		else if(name == "desired_mate_affinity_with_human")
			desired_mate_affinity_with_human_imsi = target.value
		else if(name == "desired_mate_affinity_with_dog")
			desired_mate_affinity_with_dog_imsi = target.value
		else if(name == "desired_mate_shyness")
			desired_mate_shyness_imsi = target.value
		else if(name == "desired_mate_activity")
			desired_mate_activity_imsi = target.value
		else if(name == "desired_mate_loudness")
			desired_mate_loudness_imsi = target.value
		else if(name == "desired_mate_agression")
			desired_mate_agression_imsi = target.value
		else if(name == "desired_mate_etc")
			desired_mate_etc_imsi = target.value
		else if(name == "affinity_with_human")
                        affinity_with_human_imsi = target.value
                else if(name == "affinity_with_dog")
                        affinity_with_dog_imsi = target.value
                else if(name == "shyness")
                        shyness_imsi = target.value
                else if(name == "activity")
                        activity_imsi = target.value
                else if(name == "loudness")
                        loudness_imsi = target.value
                else if(name == "agression")
                        agression_imsi = target.value
                else if(name == "etc")
                        etc_imsi = target.value

		this.setState({
                        [name]: value
                })
        }

		render() {
			const selectedOptionsStyles = {
        			color: "#3c763d",
            			backgroundColor: "#dff0d8"
			}
        		const optionsListStyles = {
            			backgroundColor: "#dff0d8",
            			color: "#3c763d"
        		}
			const companion_id = this.props.match.params.id
			const companion_list = this.props.companion_list
			console.log(companion_id+"!!!")
			console.log(this.state)
                	const errors = this.props.errors || {}
			if(companion_list){
				const companion = companion_list[companion_id-1]
				console.log(this.state.desired_mate_breed)
				if(!setting){
					sex_imsi = companion.sex
  	                        	breed_imsi = companion.breed
					birth_year_imsi = companion.birth_year
					size_imsi = companion.size
					desired_mate_sex_imsi = companion.desired_mate.sex
					desired_mate_breed_imsi = companion.desired_mate.breed
					desired_mate_size_imsi = companion.desired_mate.size
					desired_mate_affinity_with_human_imsi = companion.desired_mate.personality.affinity_with_human
					desired_mate_affinity_with_dog_imsi = companion.desired_mate.personality.affinity_with_dog
					desired_mate_shyness_imsi = companion.desired_mate.personality.shyness
					desired_mate_activity_imsi = companion.desired_mate.personality.activity
					desired_mate_loudness_imsi = companion.desired_mate.personality.loudness
					desired_mate_aggression_imsi = companion.desired_mate.personality.aggression
					desired_mate_etc_imsi = companion.desired_mate.personality.etc

					affinity_with_human_imsi = companion.personality.affinity_with_human
                                        affinity_with_dog_imsi = companion.personality.affinity_with_dog
                                        shyness_imsi = companion.personality.shyness
                                        activity_imsi = companion.personality.activity
                                        loudness_imsi = companion.personality.loudness
                                        aggression_imsi = companion.personality.aggression
                                        etc_imsi = companion.personality.etc
					console.log(companion)
                                	setting = true
                        	}
                		return (
					<Jumbotron className="container">
	                                <h1>
        	                                VASELINE <Button size="sm" outline color="primary" onClick={()=>this.onSignoutBtnClick()}>Logout</Button>
                	                </h1>
					<CompanionBlock companion={companion} key={companion.id} />
					<Form onSubmit={this.onSubmitPassword}>
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
                                        <tr><th><center>Name</center></th><th><center>{companion.name}</center></th></tr>
					<tr><th><center>Sex</center></th><th><center>
					
					<Input type="select" name="sex" error={errors.name} onChange={this.handleInputChange} value={sex_imsi}>
					<option value='female'>암컷</option>
                                        <option value='male'>수컷</option>
					</Input></center></th></tr>
					
					<tr><th><center>BirthYear</center></th><th><center>
					<Input type="select" name="birth_year" error={errors.name} onChange={this.handleInputChange} value={birth_year_imsi}>
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
					<Input type="select"  name="breed" error={errors.name} onChange={this.handleInputChange} value={breed_imsi}>
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
					<Input type="select" name="size" error={errors.name} onChange={this.handleInputChange} value={size_imsi}>
					
					<option value="small">소형견</option>
				        <option value="medium">중형견</option>
        				<option value="latge">대형견</option>

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
					<Input type="select" name="desired_mate_sex" error={errors.name} onChange={this.handleInputChange} value={desired_mate_sex_imsi}>
                                        <option value='female'>암컷</option>
                                        <option value='male'>수컷</option>
                                        </Input></center></th></tr>
					<tr><th><center>Breed</center></th><th><center>
                                        <Input type="select"  name="desired_mate_breed" error={errors.name} onChange={this.handleInputChange} value={desired_mate_breed_imsi}>
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
                                        <Input type="select" name="desired_mate_size" error={errors.name} onChange={this.handleInputChange} value={desired_mate_size_imsi}>

                                        <option value="small">소형견</option>
                                        <option value="medium">중형견</option>
                                        <option value="latge">대형견</option>

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
					<Input type="select" name="desired_mate_affinity_with_human" error={errors.name} onChange={this.handleInputChange} value={desired_mate_affinity_with_human_imsi}>
					<option value="상관 없음">0</option>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Affinity_with_dog</center></th><th><center>
					<Input type="select" name="desired_mate_affinity_with_dog" error={errors.name} onChange={this.handleInputChange} value={desired_mate_affinity_with_dog_imsi}>
					<option value="상관 없음">0</option>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Shyness</center></th><th><center>
					<Input type="select" name="desired_mate_shyness" error={errors.name} onChange={this.handleInputChange} value={desired_mate_shyness_imsi}>
					<option value="상관 없음">0</option>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Activity</center></th><th><center>
					<Input type="select" name="desired_mate_activity" error={errors.name} onChange={this.handleInputChange} value={desired_mate_activity_imsi}>
					<option value="상관 없음">0</option>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Loudness</center></th><th><center>
					<Input type="select" name="desired_mate_loudness" error={errors.name} onChange={this.handleInputChange} value={desired_mate_loudness_imsi}>
					<option value="상관 없음">0</option>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Aggression</center></th><th><center>
					<Input type="select" name="desired_mate_aggression" error={errors.name} onChange={this.handleInputChange} value={desired_mate_aggression_imsi}>
					<option value="상관 없음">0</option>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>ETC</center></th><th><center>
					<TextInput name="desired_mate_etc" error={errors.name} onChange={this.handleInputChange} placeholder={companion.desired_mate.personality.etc}/>
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
					<Input type="select" name="affinity_with_human" error={errors.name} onChange={this.handleInputChange} value={affinity_with_human_imsi}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Affinity_with_dog</center></th><th><center>
					<Input type="select" name="affinity_with_dog" error={errors.name} onChange={this.handleInputChange} value={affinity_with_dog_imsi}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Shyness</center></th><th><center>
					<Input type="select" name="shyness" error={errors.name} onChange={this.handleInputChange} value={shyness_imsi}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Activity</center></th><th><center>
					<Input type="select" name="activity" error={errors.name} onChange={this.handleInputChange} value={activity_imsi}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Loudness</center></th><th><center>
					<Input type="select" name="loudness" error={errors.name} onChange={this.handleInputChange} value={loudness_imsi}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>Aggression</center></th><th><center>
					<Input type="select" name="aggression" error={errors.name} onChange={this.handleInputChange} value={aggression_imsi}>
					<option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
					</Input></center></th></tr>
					<tr><th><center>ETC</center></th><th><center>
					<TextInput name="etc" error={errors.name} onChange={this.handleInputChange} placeholder={companion.personality.etc}/>
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
					<TextInput name="season_start" error={errors.name} onChange={this.handleInputChange} placeholder={companion.mating_season.season_start}/></center></th></tr>
					<tr><th><center>Season End</center></th><th><center>
                                        <TextInput name="season_end" error={errors.name} onChange={this.handleInputChange} placeholder={companion.mating_season.season_end}/></center></th></tr>
                                        </tbody>
					</Table>
					<center><Button type="submit" color="danger" size="lg">
                                                Update Companion
                                        </Button></center>
                                        </CardDeck>
                                </Form>

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

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Table, Jumbotron, Alert, Card, CardDeck, Button, CardImg, CardTitle, CardText, CardBody, Form } from 'reactstrap'
import TextInput from '../../atoms/TextInput'
import { Redirect } from 'react-router-dom'

const options = [
	'서울': ['강남구','강동구','강북구','강서구','관악구','광진구','구로구','금천구','노원구','도봉구','동대문구','동작구','마포구','서대문구','서초구','성동구','성북구','송파구','양천구','영등포구','용산구','은평구','종로구','중구','중랑구'],
	'부산': ['강서구','금정구','남구','동구','동래구','부산진구','북구','사상구','사하구','서구','수영구','연제구','영도구','중구','해운대구','기장군'],
	'대구': ['남구','달서구','동구','북구','서구','수성구','중구','달성군'],
	'인천': ['계양구','남구','남동구','동구','부평구','서구','연수구','중구','강화군','옹진군'],
	'광주': ['광산구','남구','동구','북구','서구'],
	'대전': ['대덕구','동구','서구','유성구','중구'],
	'울산': ['남구','동구','북구','중구','울주군'],
	'세종': ['조치원읍', '금남면', '부강면', '소정면', '연기면', '연동면', '연서면', '장군면', '전동면', '전의면', '가람동', '한솔동', '새롬동', '나성동', '다정동', '새>롬동', '도담동', '어진동', '아름동', '종촌동', '고운동', '대평동', '반곡동', '보람동', '소담동'],
	'경기': ['고양시','과천시','광명시','광주시','구리시','군포시','김포시','남양주시','동두천시','부천시','성남시','수원시','시흥시','안산시','안성시','안양시','양주시','여주시','오산시','용인시','의왕시','의정부시','이천시','파주시','평택시','포천시','하남시','화성시','가평군','양평군','연천군'],
	'강원': ['강릉시','동해시','삼척시','속초시','원주시','춘천시','태백시','고성군','양구군','양양군','영월군','인제군','정선군','철원군','평창군','홍천군','화천군','횡성군'],
	'충북': ['제천시','청주시','충주시','괴산군','단양군','보은군','영동군','옥천군','음성군','증평군','진천군'],
	'충남': ['계룡시','공주시','논산시','당진시','보령시','서산시','아산시','천안시','금산군','부여군','서천군','예산군','청양군','태안군','홍성군'],
	'전북': ['전주시','군산시','김제시','남원시','익산시','정읍시','고창군','무주군','부안군','순창군','완주군','임실군','장수군','진안군'],
	'전남': ['광양시','나주시','목포시','순천시','여수시','강진군','고흥군','곡성군','구례군','담양군','무안군','보성군','신안군','영광군','영암군','완도군','장성군','장흥군','진도군','함평군','해남군','화순군'],
	'경북': ['경산시','경주시','구미시','김천시','문경시','상주시','안동시','영주시','영천시','포항시','고령군','군위군','봉화군','성주군','예천군','영덕군','영양군','울릉군','울진군','의성군','청도군','청송군','칠곡군'],
	'경남': ['거제시','김해시','밀양시','사천시','양산시','진주시','창원시','통영시','거창군','고성군','남해군','산청군','의령군','창녕군','하동군','함안군','함양군','합천군'],
	'제주': ['제주시','서귀포시'],
	'해외': ['해외']
]
const options2 = {
        '서울': ['강남구','강동구','강북구','강서구','관악구','광진구','구로구','금천구','노원구','도봉구','동대문구','동작구','마포구','서대문구','서초구','성동구','>성북구','송파구','양천구','영등포구','용산구','은평구','종로구','중구','중랑구'],
        '부산': ['강서구','금정구','남구','동구','동래구','부산진구','북구','사상구','사하구','서구','수영구','연제구','영도구','중구','해운대구','기장군'],
        '대구': ['남구','달서구','동구','북구','서구','수성구','중구','달성군'],
        '인천': ['계양구','남구','남동구','동구','부평구','서구','연수구','중구','강화군','옹진군'],
        '광주': ['광산구','남구','동구','북구','서구'],
        '대전': ['대덕구','동구','서구','유성구','중구'],
        '울산': ['남구','동구','북구','중구','울주군'],
        '세종': ['조치원읍', '금남면', '부강면', '소정면', '연기면', '연동면', '연서면', '장군면', '전동면', '전의면', '가람동', '한솔동', '새롬동', '나성동', '다정동', '새롬동', '도담동', '어진동', '아름동', '종촌동', '고운동', '대평동', '반곡동', '보람동', '소담동'],
        '경기': ['고양시','과천시','광명시','광주시','구리시','군포시','김포시','남양주시','동두천시','부천시','성남시','수원시','시흥시','안산시','안성시','안양시','양주시','여주시','오산시','용인시','의왕시','의정부시','이천시','파주시','평택시','포천시','하남시','화성시','가평군','양평군','연천군'],
        '강원': ['강릉시','동해시','삼척시','속초시','원주시','춘천시','태백시','고성군','양구군','양양군','영월군','인제군','정선군','철원군','평창군','홍천군','화천군','횡성군'],
        '충북': ['제천시','청주시','충주시','괴산군','단양군','보은군','영동군','옥천군','음성군','증평군','진천군'],
        '충남': ['계룡시','공주시','논산시','당진시','보령시','서산시','아산시','천안시','금산군','부여군','서천군','예산군','청양군','태안군','홍성군'],
        '전북': ['전주시','군산시','김제시','남원시','익산시','정읍시','고창군','무주군','부안군','순창군','완주군','임실군','장수군','진안군'],
        '전남': ['광양시','나주시','목포시','순천시','여수시','강진군','고흥군','곡성군','구례군','담양군','무안군','보성군','신안군','영광군','영암군','완도군','장성군','장흥군','진도군','함평군','해남군','화순군'],
        '경북': ['경산시','경주시','구미시','김천시','문경시','상주시','안동시','영주시','영천시','포항시','고령군','군위군','봉화군','성주군','예천군','영덕군','영양군','울릉군','울진군','의성군','청도군','청송군','칠곡군'],
        '경남': ['거제시','김해시','밀양시','사천시','양산시','진주시','창원시','통영시','거창군','고성군','남해군','산청군','의령군','창녕군','하동군','함안군','함양군','합천군'],
        '제주': ['제주시','서귀포시'],
        '해외': ['해외']
}

let setting = false
let gender_imsi = undefined
let first_address_imsi = undefined
let second_address_imsi = undefined
const renderOption = (item) => (<option value={item}>{item}</option>)
let firstLevelOptions = undefined
let secondLevelOptions = undefined


class AccountUser extends Component {
	onSignoutBtnClick() {
                this.props.post_signout()
        }

	componentDidMount() {
		this.props.get_user_info(this.props.user_id)
		if(this.props.user_info){
			firstLevelOptions = options.map(renderOption)
			secondLevelOptions = options2[this.props.user_info.profile.first_address].map(renderOption)
			console.log(firstLevelOptions)
			console.log(secondLevelOptions)
		}
	}
	constructor(props) {
		super(props)
		this.state = {
			username: undefined,
                	password: undefined,
                	nickname: undefined,
                	first_address: undefined,
                	second_address: undefined,
                	gender: undefined,
                	email: undefined,
			redirect: false,
		}
	}
	
        handleInputChange = (event) => {
                const target = event.target
		const value = target.type === 'checkbox' ? target.checked : target.value
                const name = target.name
		if(name == "gender")
		{
			gender_imsi = target.value
			console.log("gender_imsi")
			console.log(gender_imsi)
		}
		else if(name == "first_address")
		{
			first_address_imsi = target.value
			firstLevelOptions = options.map(renderOption)
			secondLevelOptions = options2[first_address_imsi].map(renderOption)
			second_address_imsi = options2[first_address_imsi][0]
			console.log("first_address")
			console.log(target.value)
			console.log("second_address")
			this.setState({second_address:second_address_imsi})
			console.log(second_address_imsi)
		}
		else if(name == "second_address"){
			second_address_imsi = target.value
			firstLevelOptions = options.map(renderOption)
                        secondLevelOptions = options2[first_address_imsi].map(renderOption)	
		}
		this.setState({
                        [name]: value
                })
        }
	handleFirstAddressChange(event) {
		console.log("###########")
		this.setState({first_address: event.target.value})
		first_address_imsi = event.target.value
		console.log(options2[first_address_imsi])
		second_address_imsi = options2[first_address_imsi][0]
		console.log(options2[first_address_imsi])

	}
	handleSecondAddressChange(event) {
		this.setState({second_address: event.target.value})
		second_address_imsi = event.target.value
		firstLevelOptions = options.map(renderOption)
		secondLevelOptions = options2[first_address_imsi].map(renderOption)

	}

        onSubmitPassword = (event) => {
                event.preventDefault()
		console.log("!!")
		const password_info = {
			password : this.state.password
		}
		console.log(password_info)
		for (var key in password_info){
			if(password_info[key] == undefined)
				password_info[key] = this.props.user_info[key]
		}
		console.log(password_info)
		this.setState({redirect:true})
                this.props.onSubmitPassword(password_info, this.props.user_id)
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
		console.log("^^^^^^^^^^^^^^^^")
                console.log(profile_info)
		this.setState({redirect:true})
                this.props.onSubmitProfile(profile_info, this.props.user_id)
        }
	
		render() {
                const errors_account_user_password = this.props.errors_account_user_password || {}
		const errors_account_user_profile = this.props.errors_account_user_profile || {}
		const user_info = this.props.user_info
		console.log(this.state)
		console.log("@@@@@@@@@@@@@@@@@")
		console.log(this.props.errors_account_user_profile)
		if(this.state.redirect){
			return <Redirect to='/account'/>
		}
		if(user_info){
			if(!setting){
				gender_imsi = this.props.user_info.profile.gender
				first_address_imsi = this.props.user_info.profile.first_address
				second_address_imsi = this.props.user_info.profile.second_address
                        	firstLevelOptions = options.map(renderOption)
                        	secondLevelOptions = options2[this.props.user_info.profile.first_address].map(renderOption)
				setting = true
				console.log("*****************")
				console.log(this.state)
				console.log(this.props.error_account_user_profile)
			}
			return (
                        <Jumbotron className="container">
				<h1>
                                        VASELINE <Button size="sm" outline color="primary" onClick={()=>this.onSignoutBtnClick()}>Logout</Button>
                                </h1>
				{
					errors_account_user_password.non_field_errors?
                                        	<Alert color="danger">
                                                                {errors_account_user_password.non_field_errors}
                                		</Alert>: ""
				}
				{
					errors_account_user_profile.non_field_errors?
                                                <Alert color="danger">
                                                                {errors_account_user_profile.non_field_errors}
                                                </Alert>: ""
				}
				<Form onSubmit={this.onSubmitPassword}>
                                        <CardDeck>
					<h2>User Info</h2>
                                        <Table>
                                       	<thead>
                                        <tr><th><center>#</center></th><th><center>Update</center></th></tr>
					</thead>
					<tbody>
					<tr><th><center>Username</center></th><th><center>{user_info.username}</center></th></tr>
                                        <tr><th><center>Password</center></th><th><center><TextInput name="password" error={errors_account_user_password.password} type="password" onChange={this.handleInputChange} /></center></th></tr>
					</tbody>
					<center><Button type="submit" color="danger" size="lg">Update Password</Button></center>
					</Table>
					</CardDeck>
				</Form>
				<Form onSubmit={this.onSubmitProfile}>
					<h1></h1>
					<h2>Profile</h2>
					<CardDeck>
                                        
					<Table>
                                        <thead>
                                        <tr><th><center>#</center></th><th><center>Update</center></th></tr>
                                        </thead>
                                        <tbody>
					<tr><th><center>Nickname</center></th><th><center><TextInput name="nickname" error={errors_account_user_profile.nickname} onChange={this.handleInputChange} placeholder={user_info.profile.nickname}/></center></th></tr>
					<tr><th><center>Gender</center></th><th><center>
					<Input type="select" name="gender" onChange={this.handleInputChange} value={gender_imsi}>
					<option value='female'>여성</option>
					<option value='male'>남성</option>
					</Input>
                                        </center></th></tr>
					<tr><th><center>Email</center></th><th><center><TextInput name="email" label="Email" error={errors_account_user_profile.email} onChange={this.handleInputChange} placeholder={user_info.profile.email}/></center></th></tr>
					
					<tr><th><center>거주지</center></th><th><center><div>
        				<Input type="select" name="first_address" onChange={this.handleInputChange} value={first_address_imsi}>
                                        {firstLevelOptions}
					</Input>
					<Input type="select" name="second_address" onChange={this.handleInputChange} value={second_address_imsi}>
                                        {secondLevelOptions}
					</Input>
					</div></center></th></tr>
					</tbody>
					{console.log(this.state)}
					<center><Button type="submit" color="danger" size="lg">
                                                Update Profile
                                        </Button></center>
                                        </Table>
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
                        )
                }
        }
}
export default AccountUser

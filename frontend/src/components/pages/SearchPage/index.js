import React, { Component } from 'react'
import { Badge, Alert, Container, Row, Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Form, FormGroup, Label, Input, FormText, Progress, Table } from 'reactstrap';
    import CompanionBlock from '../../atoms/CompanionBlock'

    const options = [
        '서울': ['강남구','강동구','강북구','강서구','관악구','광진구','구로구','금천구','노원구','도봉구','동대문구','동작구','마포구','서대문구','서초구','성동구','>성북구','송파구','양천구','영등포구','용산구','은평구','종로구','중구','중랑구'],
        '부산': ['강서구','금정구','남구','동구','동래구','부산진구','북구','사상구','사하구','서구','수영구','연제구','영도구','중구','해운대구','기장군'],
        '대구': ['남구','달서구','동구','북구','서구','수성구','중구','달성군'],
        '인천': ['계양구','남구','남동구','동구','부평구','서구','연수구','중구','강화군','옹진군'],
        '광주': ['광산구','남구','동구','북구','서구'],
        '대전': ['대덕구','동구','서구','유성구','중구'],
        '울산': ['남구','동구','북구','중구','울주군'],
        '세종': ['조치원읍', '금남면', '부강면', '소정면', '연기면', '연동면', '연서면', '장군면', '전동면', '전의면', '가람동', '한솔동', '새롬동', '나성동', '다정동', '새>롬동', '도담동', '어진동', '아름동', '종촌동', '고운동', '대평동', '반곡동', '보람동', '소담동'],
        '경기': ['고양시','과천시','광명시','광주시','구리시','군포시','김포시','남양주시','동두천시','부천시','성남시','수원시','시흥시','안산시','안성시','안양시','>양주시','여주시','오산시','용인시','의왕시','의정부시','이천시','파주시','평택시','포천시','하남시','화성시','가평군','양평군','연천군'],
        '강원': ['강릉시','동해시','삼척시','속초시','원주시','춘천시','태백시','고성군','양구군','양양군','영월군','인제군','정선군','철원군','평창군','홍천군','화천>군','횡성군'],
        '충북': ['제천시','청주시','충주시','괴산군','단양군','보은군','영동군','옥천군','음성군','증평군','진천군'],
        '충남': ['계룡시','공주시','논산시','당진시','보령시','서산시','아산시','천안시','금산군','부여군','서천군','예산군','청양군','태안군','홍성군'],
        '전북': ['전주시','군산시','김제시','남원시','익산시','정읍시','고창군','무주군','부안군','순창군','완주군','임실군','장수군','진안군'],
        '전남': ['광양시','나주시','목포시','순천시','여수시','강진군','고흥군','곡성군','구례군','담양군','무안군','보성군','신안군','영광군','영암군','완도군','장성>군','장흥군','진도군','함평군','해남군','화순군'],
        '경북': ['경산시','경주시','구미시','김천시','문경시','상주시','안동시','영주시','영천시','포항시','고령군','군위군','봉화군','성주군','예천군','영덕군','영양>군','울릉군','울진군','의성군','청도군','청송군','칠곡군'],
        '경남': ['거제시','김해시','밀양시','사천시','양산시','진주시','창원시','통영시','거창군','고성군','남해군','산청군','의령군','창녕군','하동군','함안군','함양>군','합천군'],
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
        '경기': ['고양시','과천시','광명시','광주시','구리시','군포시','김포시','남양주시','동두천시','부천시','성남시','수원시','시흥시','안산시','안성시','안양시','>양주시','여주시','오산시','용인시','의왕시','의정부시','이천시','파주시','평택시','포천시','하남시','화성시','가평군','양평군','연천군'],
        '강원': ['강릉시','동해시','삼척시','속초시','원주시','춘천시','태백시','고성군','양구군','양양군','영월군','인제군','정선군','철원군','평창군','홍천군','화천>군','횡성군'],
        '충북': ['제천시','청주시','충주시','괴산군','단양군','보은군','영동군','옥천군','음성군','증평군','진천군'],
        '충남': ['계룡시','공주시','논산시','당진시','보령시','서산시','아산시','천안시','금산군','부여군','서천군','예산군','청양군','태안군','홍성군'],
        '전북': ['전주시','군산시','김제시','남원시','익산시','정읍시','고창군','무주군','부안군','순창군','완주군','임실군','장수군','진안군'],
        '전남': ['광양시','나주시','목포시','순천시','여수시','강진군','고흥군','곡성군','구례군','담양군','무안군','보성군','신안군','영광군','영암군','완도군','장성>군','장흥군','진도군','함평군','해남군','화순군'],
        '경북': ['경산시','경주시','구미시','김천시','문경시','상주시','안동시','영주시','영천시','포항시','고령군','군위군','봉화군','성주군','예천군','영덕군','영양>군','울릉군','울진군','의성군','청도군','청송군','칠곡군'],
        '경남': ['거제시','김해시','밀양시','사천시','양산시','진주시','창원시','통영시','거창군','고성군','남해군','산청군','의령군','창녕군','하동군','함안군','함양>군','합천군'],
        '제주': ['제주시','서귀포시'],
        '해외': ['해외']
    }
const renderOption = (item) => (<option value={item}>{item}</option>)

class SearchPage extends Component {
        onSignoutBtnClick() {
            this.props.post_signout()
        }
        componentDidMount() {
            this.props.get_companion_list()
	    this.props.get_companion_address_list()
 	    this.props.get_user_repr(this.props.user_id)
            this.props.get_user_info(this.props.user_id)
        }
        constructor(props) {
            super(props)
            this.state = {
                setting:false,
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
                desired_mate_first_address:undefined,
                desired_mate_second_address:undefined,
		firstLevelOptions:undefined,
		secondLevelOptions:undefined,
		repr: undefined,
		companion_all_list: undefined,
                search_companion_list: undefined,
		user:undefined
            }
        }
        handleInputChange = (event) => {
            const target = event.target
            const value = target.type === 'checkbox' ? target.checked : target.value
            const name = target.name
            if(name == "desired_mate_first_address")
            {
		this.setState({
			desired_mate_second_address:options2[target.value][0],
			firstLevelOptions:options.map(renderOption),
			secondLevelOptions:options2[target.value].map(renderOption)
		})
                console.log("first_address")
                console.log(target.value)
            }
            else if(name == "desired_mate_second_address"){
		    this.setState({
			    firstLevelOptions:options.map(renderOption),
			    secondLevelOptions:options2[this.state.desired_mate_first_address].map(renderOption)
		    })
	    }
            this.setState({
                [name]: target.value
            })
        }
	onClickButton = (event) => {
                event.preventDefault()
		let result= []
		for (var key in this.state.companion_all_list)
		{
			let x = this.state.companion_all_list[key]
			if(x.breed==this.state.desired_mate_breed && x.sex==this.state.desired_mate_sex && x.first_address==this.state.desired_mate_first_address)
			{
				result.push(this.state.companion_all_list[key])
			}
		}
		let personality_result = []
		if(result.length == 0){
			this.setState({search_companion_list:result})
		}
		else{
			for(var key in result){
				let p = result[key].personality
				let dp = this.state.repr.personality
				let score = 0
				if(dp.affinity_with_human != 0)
					score += 2-Math.abs(dp.affinity_with_human-p.affinity_with_human) 
				if(dp.affinity_with_dog != 0)
                                        score += 2-Math.abs(dp.affinity_with_dog-p.affinity_with_dog) 
				if(dp.aggression != 0)
                                        score += 2-Math.abs(dp.aggression-p.aggression)
				if(dp.loudness != 0)
                                        score += 2-Math.abs(dp.loudness-p.loudness)
				if(dp.shyness != 0)
                                        score += 2-Math.abs(dp.shyness-p.shyness)
				if(dp.activity != 0)
                                        score += 2-Math.abs(dp.activity-p.activity)
				result[key].score = (parseInt)((25*score)/6)
			}
		}
		console.log("result_before_sort")
		console.log(result)
		result.sort(function(a, b){
			if(a.score > b.score)
				return -1
			if(a.score < b.score)
				return 1
			return 0})
	 	console.log("result")
		console.log(result)
                this.setState({search_companion_list:result})
        }
        search_result_atom = (companion, index, first_address, second_address, score) => {
            return (
                <Col xs="4">
                <CompanionBlock companion={companion} key={index} first_address={first_address} second_address={second_address} score={score}/><p />
                </Col>)
            }
            search_result = (companion_list) => {
		    console.log(companion_list)
                if(companion_list){
                    console.log("#########################")
                    return companion_list.map((companion, index) =>
                    this.search_result_atom(companion, index, companion_list[index].first_address, companion_list[index].second_address, companion_list[index].score))
                }
		else{
			return <div>검색 결과가 없습니다.</div>
		}
            }

            render() {
                if(this.props.companion_list && this.props.companion_address_list && this.props.user_repr) {
                    if(!this.state.setting){
			let companion_all_list = this.props.companion_list
			console.log(companion_all_list)
			for (var key in companion_all_list){
				console.log("tttttttttttttt")
				companion_all_list[key].first_address = this.props.companion_address_list[key].user.profile.first_address
				companion_all_list[key].second_address = this.props.companion_address_list[key].user.profile.second_address
				console.log(companion_all_list)
			}
			console.log(companion_all_list)
			let companion_repr = this.props.companion_list[this.props.user_repr.represent_companion-1]
			console.log("########################")
			console.log(companion_repr)
			console.log(this.props.user_repr.represent_companion)
                        this.setState({
			    setting:true,
                            desired_mate_sex: companion_repr.desired_mate.sex,
                            desired_mate_breed: companion_repr.desired_mate.breed,
                            desired_mate_size: companion_repr.desired_mate.size,
                            desired_mate_affinity_with_human: companion_repr.desired_mate.personality.affinity_with_human,
                            desired_mate_affinity_with_dog: companion_repr.desired_mate.personality.affinity_with_dog,
                            desired_mate_shyness: companion_repr.desired_mate.personality.shyness,
                            desired_mate_activity: companion_repr.desired_mate.personality.activity,
                            desired_mate_aggression: companion_repr.desired_mate.personality.aggression,
                            desired_mate_loudness: companion_repr.desired_mate.personality.loudness,
                            desired_mate_etc: companion_repr.desired_mate.personality.etc,
                            desired_mate_first_address: this.props.user_info.profile.first_address,
                            desired_mate_second_address: this.props.user_info.profile.second_address,
			    firstLevelOptions:options.map(renderOption),
		 	    secondLevelOptions:options2[this.props.user_info.profile.first_address].map(renderOption),
			    repr: this.props.companion_list[this.props.user_repr.represent_companion-1],
			    companion_all_list:companion_all_list,
		 	    user:this.props.user_info
                        })
                    }
                    console.log("state props: ")
                    console.log(this.state)
                    console.log(this.props)
                    if(this.state.repr){
                        return (
                            <div>
                            <h3><p /><center>Search <Badge color="success">New!</Badge></center></h3>
                            <Col>
                            <Alert color="success">
                            <h4 className="alert-heading">마음에 드는 짝꿍을 찾지 못하셨나요?</h4>
                            <p>
                            아직도 원하는 상대를 찾지 못하셨나요? 검색 기능을 통해 마음에 꼭 드는 상대를 찾아보세요.<br/>
                            원하는 성격, 품종, 거주 지역에 따라 더 많은 상대를 찾을 수 있습니다.</p>
                            <hr />
                            <p className="mb-0">
                            기본 검색 설정을 변경하고 싶으시다면, 개인정보 페이지에서 수정해 주세요.
                            </p>
                            </Alert>
                            </Col>
                            <Col>
                            <CardDeck>
                            <Card>
                            <CardImg top width="100%" src="http://images2.fanpop.com/image/photos/13900000/Pretty-Dog-wallpaper-dogs-13905828-500-375.jpg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle>이런 품종을 찾아요</CardTitle>
                            <CardSubtitle><b>품종별 검색</b></CardSubtitle>
                            <CardText><p />한 개 또는 여러 개의 품종을 선택할 수 있어요.
                            어떤 품종도 상관 없을 경우에는 상관없음 칸에 체크해 주세요.<p />
                            <h6><Badge color="secondary">ctrl키를 누르면서 여러 개를 한 번에 선택할 수 없어요!</Badge></h6><p/ >
                            <FormGroup onSubmit={this.onSubmit}>
                            <Input type="select" name="desired_mate_breed" onChange={this.handleInputChange} value={this.state.desired_mate_breed}>
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
                            </Input>
                            <Input type="select" name="desired_mate_size" onChange={this.handleInputChange} value={this.state.desired_mate_size}>
                            <option value="small">소형견</option>
                            <option value="medium">중형견</option>
                            <option value="large">대형견</option>
                            </Input>
                            <Input type="select" name="desired_mate_sex" onChange={this.handleInputChange} value={this.state.desired_mate_sex}>

                            <option value='female'>암컷</option>
                            <option value='male'>수컷</option>
                            </Input>
                            </FormGroup>
                            </CardText>
                            </CardBody>
                            </Card>
                            <Card>
                            <CardImg top width="100%" src="http://images2.fanpop.com/image/photos/13900000/Pretty-Dog-in-Garden-puppies-13904291-500-375.jpg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle>성격이 잘 맞는 것도 중요하죠!</CardTitle>
                            <CardSubtitle><b>성격별 검색</b></CardSubtitle>
                            <CardText>
                            <p />
                            <Progress multi>
                            <Progress bar value="15">15%</Progress>
                            <Progress bar color="success" value="30">30%</Progress>
                            <Progress bar color="info" value="25">25%</Progress>
                            <Progress bar color="warning" value="20">20%</Progress>
                            <Progress bar color="danger" value="7">?</Progress>
                            </Progress>
                            <p />
                            성격에서 중요하게 생각하는 것과 그렇지 않은 것은 무엇인가요?
                            저희가 딱 맞는 상대를 찾아드릴게요!
                            <p />
                            <Table>
                            <thead>
                            <tr>
                            <th>1에 가까움</th>
                            <th></th>
                            <th>5에 가까움</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            <td>사람은 싫어요</td>
                            <th scope="row">
                            <Input type="select" name="desired_mate_affinity_with_human" onChange={this.handleInputChange} value={this.state.desired_mate_affinity_with_human}>
                            <option value="0">상관 없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </Input>
                            </th>
                            <td>사람이 좋아요</td>
                            </tr>
                            <tr>
                            <td>강아지는 싫어</td>
                            <th scope="row">
                            <Input type="select" name="desired_mate_affinity_with_dog" onChange={this.handleInputChange} value={this.state.desired_mate_affinity_with_dog}>
                            <option value="0">상관 없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </Input>
                            </th>
                            <td>강아지가 좋아</td>
                            </tr>
                            <tr>
                            <td>수줍지 않아요</td>
                            <th scope="row">
                            <Input type="select" name="desired_mate_shyness" onChange={this.handleInputChange} value={this.state.desired_mate_shyness}>
                            <option value="0">상관없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </Input>
                            </th>
                            <td>수줍어해요</td>
                            </tr>
                            <tr>
                            <td>움직이기 싫어</td>
                            <th scope="row">
                            <Input type="select" name="desired_mate_activity" onChange={this.handleInputChange} value={this.state.desired_mate_activity}>
                            <option value="0">상관없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </Input>
                            </th>
                            <td>활동적이에요</td>
                            </tr>
                            <tr>
                            <td>짖지 않아요</td>
                            <th scope="row">
                            <Input type="select" name="desired_mate_loudness" onChange={this.handleInputChange} value={this.state.desired_mate_loudness}>
                            <option value="0">상관없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </Input>
                            </th>
                            <td>많이 짖어요</td>
                            </tr>
                            <tr>
                            <td>아주 순해요</td>
                            <th scope="row">
                            <Input type="select" name="desired_mate_aggression" onChange={this.handleInputChange} value={this.state.desired_mate_aggression}>
                            <option value="0">상관없음</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </Input>
                            </th>
                            <td>공격적이에요</td>
                            </tr>
                            </tbody>
                            </Table>

                            </CardText>
                            </CardBody>
                            </Card>
                            <Card>
                            <CardImg top width="100%" src="http://images2.fanpop.com/image/photos/13900000/Pretty-Dog-in-Garden-puppies-13904176-500-375.jpg" alt="Card image cap" />
                            <CardBody>
                            <CardTitle>가까이 사는 친구면 좋을텐데...</CardTitle>
                            <CardSubtitle><b>지역별 검색</b></CardSubtitle>
                            <CardText>
                            <p />
                            특정 지역에 살고 있는 친구를 찾으시나요? 가까운 지역을 선택하고 동네에 사는 친구를 찾아보세요.
                            <p />
                            시/도
                            <Input type="select" name="desired_mate_first_address" onChange={this.handleInputChange} value={this.state.desired_mate_first_address}>
                            {this.state.firstLevelOptions}
                            </Input><br/>
                            시/군/구
                            <Input type="select" name="desired_mate_second_address" onChange={this.handleInputChange} value={this.state.desired_mate_second_address}>
                            {this.state.secondLevelOptions}
                            </Input>
                            <div align="right">
                            <Button align="right"  onClick={this.onClickButton}>새로 검색하기</Button>
                            </div>
                            </CardText>
                            </CardBody>
                            </Card>
                            </CardDeck>
                            </Col>
                            <p />
                            <CardDeck>
                            {this.search_result(this.state.search_companion_list)}
                            </CardDeck>
                            </div>
                        )
                    }
                    else
                    {
                        return (
                            <Card>
                            <CardTitle>{1}</CardTitle>
                            <CardText>not : {2}</CardText>
                            <CardText>start : {3}</CardText>
                            </Card>
                        )
                    }
                }
                else
                {
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
        export default SearchPage

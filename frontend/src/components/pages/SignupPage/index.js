import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { PageHeader, Alert, Button, Dropdown, MenuItem, Jumbotron, InputGroup, Form, FormGroup, FormControl, ControlLabel, Container, Row, Col } from 'reactstrap'
import { options } from './address.js'

import TextInput from '../../atoms/TextInput'

const Wrapper = styled.div`
font-family: ${font('primary')};
color: ${palette('grayscale', 0)};
`

export const SignupPage = (props) => {
  /* SIGNUP POST */
  // USER info
  let username, password;
  let profile = {
    'nickname': '',
    'postal_code': 0,
    'rough_address': '서울',
    'detailed_address': '강남구',
    'age': 10,
    'gender': 'female',
    'email': '',
  };
  // COMPANION info
  let companion = {
    'name': '',
    'sex': 'male',
    'birth_year': 2018,
    'breed': 'mix',
    'size': 'small',
    'desired_mate': {
      'breed': 'mix',
      'sex': 'male',
      'size': 'small'
    },
    'personality': {
      'affinity_with_human': 0,
      'affinity_with_dog': 0,
      'shyness': 0,
      'activity': 0,
      'loudness': 0,
      'aggression': 0,
      'etc': ''
    },
    'mating_season': {
      'season_start': '',
      'season_end': ''
    }
  };

  //dynamic selectbox for address
  class MyForm extends React.Component {
    constructor(props) {
      super(props)

      this.handleFirstLevelChange = this.handleFirstLevelChange.bind(this)
      this.handleSecondLevelChange = this.handleSecondLevelChange.bind(this)

      // Prepopulate with the first item for each level
      this.state = {
        firstLevel: Object.keys(props.options)[0],
        secondLevel: Object.keys(props.options)[0][0]
      }
    }

    handleFirstLevelChange(event) {
      this.setState({firstLevel: event.target.value});
      profile.rough_address = event.target.value;
      profile.detailed_address = options[event.target.value][0];
    }

    handleSecondLevelChange(event) {
      this.setState({secondLevel: event.target.value});
      profile.second_address = event.target.value;
    }

    render() {
      const renderOption = item => <option value={item}>{item}</option>

      const firstLevelOptions = Object.keys(this.props.options).map(renderOption)
      const secondLevelOptions = this.props.options[this.state.firstLevel].map(renderOption)
      console.log(Object.keys(this.props.options).map(renderOption))
      return (
        <div>
        거주지
        <select onChange={this.handleFirstLevelChange} value={this.state.firstLevel}>
        {firstLevelOptions}
        </select>
        <select onChange={this.handleSecondLevelChange} value={this.state.secondLevel}>
        {secondLevelOptions}
        </select>
        </div>
      )
    }
  }

  const onSubmit = () => {
    /* SUBMIT TEST
    console.log("==========user==========")
    console.log(username.value);
    console.log(password.value);

    console.log("==========companion==========")
    console.log(companion.name.value);
    console.log(companion.sex);
    console.log(companion.birth_year);
    console.log(companion.breed);

    console.log("==========companion.desired==========")
    console.log(companion.desired_mate.breed);
    console.log(companion.desired_mate.sex);
    console.log(companion.desired_mate.size);

    console.log("==========companion.personality==========")
    console.log(companion.personality.affinity_with_human);
    console.log(companion.personality.affinity_with_dog);
    console.log(companion.personality.shyness);
    console.log(companion.personality.activity);
    console.log(companion.personality.loudness);
    console.log(companion.personality.aggression);
    console.log(companion.personality.etc.value);

    console.log("==========companion.mating_season==========")
    console.log(companion.mating_season.season_start.value);
    console.log(companion.mating_season.season_end.value);

    console.log("==========profile==========")
    console.log(profile.nickname.value);
    console.log(profile.postal_code);
    console.log(profile.rough_address);
    console.log(profile.detailed_address);
    console.log(profile.age.value);
    console.log(profile.gender);
    console.log(profile.email.value);
    */
    let post_input = {
      "username": username.value,
      "password": password.value,
      "companion": {
        "name": companion.name.value,
        "sex": companion.sex,
        "birth_year": companion.birth_year,
        "breed": companion.breed,
        "size": companion.size,
        "desired_mate": {
          "breed": companion.desired_mate.breed,
          "sex": companion.desired_mate.sex,
          "size": companion.desired_mate.size
        },
        "personality": {
          "affinity_with_human": companion.personality.affinity_with_human,
          "affinity_with_dog": companion.personality.affinity_with_dog,
          "shyness": companion.personality.shyness,
          "activity": companion.personality.activity,
          "loudness": companion.personality.loudness,
          "aggression": companion.personality.aggression,
          "etc": companion.personality.etc.value
        },
        "mating_season": {
          "season_start": companion.mating_season.season_start.value,
          "season_end": companion.mating_season.season_end.value
        },
        "like_sent": [],
        "like_received": [],
        "proposal_sent": [],
        "proposal_received": [],
        "message_sent": [],
        "message_received": []
      },
      "profile": {
        "nickname": profile.nickname.value,
        "postal_code": 0,
        "rough_address": profile.rough_address,
        "detailed_address": profile.detailed_address,
        "age": profile.age.value,
        "gender": profile.gender,
        "email": profile.email.value
      }
    }
    props.onPostSignup(post_input);
  };
  return (
    <div>
    <Container>
      <Jumbotron>
      <h1>Sign Up</h1>
      <p>
      회원님의 정보, 반려동물의 정보, 그리고 원하는 짝꿍의 모습을 알려 주세요.<br />
      회원가입을 완료하고 마음에 꼭 드는 강아지 짝꿍을 찾아보세요.
      </p>
      <p>
      <Button>Learn more</Button>
      </p>
      </Jumbotron>


      <b>유저 정보</b>  당신에 대해서 알려주세요.<p/>
      <Form onSubmit={onSubmit}>
        <TextInput name="id" placeholder="id"/>
        <TextInput name="password" placeholder="password"/>
        <TextInput name="nickname" placeholder="nickname"/>
        <TextInput name="email" placeholder="e-mail"/>
        나이 드랍다운
        성별 드랍다운
        주소 드랍다운<p/>

      <b>반려동물 정보</b>  여러분의 반려동물에 대해서 알려주세요.<p/>
      가장 잘 나타내는 사진 또는 동영상을 첨부해 주세요!<br/>
      <input type="file"/><br/>
      <TextInput name="companion.name" placeholder="name of your companion animal"/>


        <center><Button type="submit" color="info">다 했어요!</Button></center>
      </Form>
    </Container>



    <div><b>당신은 누구인가요?</b></div>
    아이디 <input ref={node => {username = node;}}/> <button>중복확인</button><br/>
    비밀번호 <input ref={node => {password = node;}} type="password"/><br/>
    닉네임 <input ref={node => {profile.nickname = node;}}/> <button>중복확인</button><br/>
    이메일 <input ref={node => {profile.email = node;}}/><br />
    나이
    <select onChange={(node) => { profile.age = node.target }}>
    <option value='10'>10대</option>
    <option value='20'>20대</option>
    <option value='30'>30대</option>
    <option value='40'>40대</option>
    <option value='50'>50대</option>
    <option value='60'>60대 이상</option>
    </select><br/>
    성별
    <select onChange={(node) => { profile.gender = node.target.value }}>
    <option value='female'>여성</option>
    <option value='male'>남성</option>
    </select><br/>
    <MyForm options={options} /><br/>

    <div><b>당신의 반려동물♥에 대해 소개해 주세요</b></div>
    사진이나 동영상을 첨부해 주세요!<br/>
    <input type="file"/><br/>
    반려동물 이름 <input ref={node => { companion.name = node; }}/><br/>
    성별
    <select onChange={(node) => { companion.sex = node.target.value }}>
    <option value='male'>수컷</option>
    <option value='female'>암컷</option>
    </select><br/>
    품종
    <select onChange={(node) => { companion.breed = node.target.value }}>
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
    </select><br/>
    사이즈
    <select onChange={(node) => { companion.size = node.target.value }}>
    <option value='small'>소형견</option>
    <option value='medium'>중형견</option>
    <option value='large'>대형견</option>
    </select><br/>
    출생년도
    <select onChange={(node) => { companion.birth_year = node.target.value }}>
    <option value ='2018'>2018</option>
    <option value ='2017'>2017</option>
    <option value ='2016'>2016</option>
    <option value ='2015'>2015</option>
    <option value ='2014'>2014</option>
    <option value ='2013'>2013</option>
    <option value ='2012'>2012</option>
    <option value ='2011'>2011</option>
    <option value ='2010'>2010</option>
    <option value ='2009'>2009</option>
    <option value ='2008'>2008</option>
    <option value ='2007'>2007</option>
    <option value ='2006'>2006</option>
    <option value ='2005'>2005</option>
    <option value ='2004'>2004 이전</option>
    </select><br/>
    원하는 만남 시간 <input ref={node => { companion.mating_season.season_start = node; }} type="date"/> 부터 <input ref={node => { companion.mating_season.season_end = node; }} type="date"/> 까지<br/><br/>
    <b>조금만 더 알려주세요!</b><br/>


    <table>
    <tr>
    <th>사람을 싫어해요</th>
    <th>1</th>
    <th>2</th>
    <th>3</th>
    <th>4</th>
    <th>5</th>
    <th>사람을 좋아해요</th>
    </tr>
    <tr>
    <td></td>
    <td><input onClick={node => { companion.personality.affinity_with_human = 1; }} type="radio" name="affinity_with_human"/></td>
    <td><input onClick={node => { companion.personality.affinity_with_human = 2; }} type="radio" name="affinity_with_human"/></td>
    <td><input onClick={node => { companion.personality.affinity_with_human = 3; }} type="radio" name="affinity_with_human"/></td>
    <td><input onClick={node => { companion.personality.affinity_with_human = 4; }} type="radio" name="affinity_with_human"/></td>
    <td><input onClick={node => { companion.personality.affinity_with_human = 5; }} type="radio" name="affinity_with_human"/></td>
    <td></td>
    </tr>
    </table>

    <table>
    <tr>
    <th>강아지 친구는 싫어요</th>
    <th>1</th>
    <th>2</th>
    <th>3</th>
    <th>4</th>
    <th>5</th>
    <th>강아지 친구들과 친하게 지내요</th>
    </tr>
    <tr>
    <td></td>
    <td><input onClick={node => { companion.personality.affinity_with_dog = 1; }} type="radio" name="affinity_with_dog"/></td>
    <td><input onClick={node => { companion.personality.affinity_with_dog = 2; }} type="radio" name="affinity_with_dog"/></td>
    <td><input onClick={node => { companion.personality.affinity_with_dog = 3; }} type="radio" name="affinity_with_dog"/></td>
    <td><input onClick={node => { companion.personality.affinity_with_dog = 4; }} type="radio" name="affinity_with_dog"/></td>
    <td><input onClick={node => { companion.personality.affinity_with_dog = 5; }} type="radio" name="affinity_with_dog"/></td>
    <td></td>
    </tr>
    </table>

    <table>
    <tr>
    <th>수줍어하지 않아요</th>
    <th>1</th>
    <th>2</th>
    <th>3</th>
    <th>4</th>
    <th>5</th>
    <th>수줍음이 아주 많아요</th>
    </tr>
    <tr>
    <td></td>
    <td><input onClick={node => { companion.personality.shyness = 1; }} type="radio" name="shyness"/></td>
    <td><input onClick={node => { companion.personality.shyness = 2; }} type="radio" name="shyness"/></td>
    <td><input onClick={node => { companion.personality.shyness = 3; }} type="radio" name="shyness"/></td>
    <td><input onClick={node => { companion.personality.shyness = 4; }} type="radio" name="shyness"/></td>
    <td><input onClick={node => { companion.personality.shyness = 5; }} type="radio" name="shyness"/></td>
    <td></td>
    </tr>
    </table>

    <table>
    <tr>
    <th>움직이기 싫어해요</th>
    <th>1</th>
    <th>2</th>
    <th>3</th>
    <th>4</th>
    <th>5</th>
    <th>활동적이에요</th>
    </tr>
    <tr>
    <td></td>
    <td><input onClick={node => { companion.personality.activity = 1; }} type="radio" name="activity"/></td>
    <td><input onClick={node => { companion.personality.activity = 2; }} type="radio" name="activity"/></td>
    <td><input onClick={node => { companion.personality.activity = 3; }} type="radio" name="activity"/></td>
    <td><input onClick={node => { companion.personality.activity = 4; }} type="radio" name="activity"/></td>
    <td><input onClick={node => { companion.personality.activity = 5; }} type="radio" name="activity"/></td>
    <td></td>
    </tr>
    </table>

    <table>
    <tr>
    <th>짖지 않아요</th>
    <th>1</th>
    <th>2</th>
    <th>3</th>
    <th>4</th>
    <th>5</th>
    <th>많이 짖어요</th>
    </tr>
    <tr>
    <td></td>
    <td><input onClick={node => { companion.personality.loudness = 1; }} type="radio" name="loudness"/></td>
    <td><input onClick={node => { companion.personality.loudness = 2; }} type="radio" name="loudness"/></td>
    <td><input onClick={node => { companion.personality.loudness = 3; }} type="radio" name="loudness"/></td>
    <td><input onClick={node => { companion.personality.loudness = 4; }} type="radio" name="loudness"/></td>
    <td><input onClick={node => { companion.personality.loudness = 5; }} type="radio" name="loudness"/></td>
    <td></td>
    </tr>
    </table>

    <table>
    <tr>
    <th>전혀 공격적이지 않아요</th>
    <th>1</th>
    <th>2</th>
    <th>3</th>
    <th>4</th>
    <th>5</th>
    <th>공격적인 편이에요</th>
    </tr>
    <tr>
    <td></td>
    <td><input onClick={node => { companion.personality.aggression = 1; }} type="radio" name="aggression"/></td>
    <td><input onClick={node => { companion.personality.aggression = 2; }} type="radio" name="aggression"/></td>
    <td><input onClick={node => { companion.personality.aggression = 3; }} type="radio" name="aggression"/></td>
    <td><input onClick={node => { companion.personality.aggression = 4; }} type="radio" name="aggression"/></td>
    <td><input onClick={node => { companion.personality.aggression = 5; }} type="radio" name="aggression"/></td>
    <td></td>
    </tr>
    </table>

    더 알려주고 싶은 것들은요...<br/>
    <textarea ref={node => { companion.personality.etc = node; }} cols="50" rows="5"/><br/><br/>

    <b>이런 짝꿍을 찾고 있어요!</b><br/>
    성별
    <select onChange={(node) => { companion.desired_mate.sex = node.target.value }} >
    <option value='male'>남자친구</option>
    <option value='female'>여자친구</option>
    </select><br/>
    품종

    <select onChange={(node) => { companion.desired_mate.breed = node.target.value }}>
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
    </select><br/>
    사이즈
    <select onChange={(node) => { companion.desired_mate.size = node.target.value }}>
    <option value='small'>소형견</option>
    <option value='medium'>중형견</option>
    <option value='large'>대형견</option>
    </select><br/><br/>
    <button id="submit" type="submit" onClick={onSubmit}>다 했어요♡</button>
    </div>
  )
}

export default SignupPage

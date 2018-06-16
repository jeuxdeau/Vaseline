import React from 'react'
import { Badge, Alert, Col, Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Form, FormGroup, Label, Input, FormText, Progress, Table } from 'reactstrap';

    const SearchPage = () => {
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
            <h6><Badge color="secondary">ctrl키를 누르면서 여러 개를 한 번에 선택할 수 있어요!</Badge></h6><p/ >
            <FormGroup>
            <Input type="select" name="select" id="exampleSelect" multiple>
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
        <Input type="select">
         <option>1</option>
         <option>2</option>
         <option>3</option>
         <option>4</option>
         <option>5</option>
       </Input>
      </th>
      <td>사람이 좋아요</td>
    </tr>
    <tr>
      <td>강아지는 싫어</td>
      <th scope="row">
          <Input type="select">
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
           <option>5</option>
          </Input>
      </th>
      <td>강아지가 좋아</td>
    </tr>
    <tr>
      <td>수줍지 않아요</td>
      <th scope="row">
          <Input type="select">
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
           <option>5</option>
          </Input>
      </th>
      <td>수줍어해요</td>
    </tr>
    <tr>
      <td>움직이기 싫어</td>
      <th scope="row">
          <Input type="select">
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
           <option>5</option>
          </Input>
      </th>
      <td>활동적이에요</td>
    </tr>
    <tr>
      <td>짖지 않아요</td>
      <th scope="row">
          <Input type="select">
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
           <option>5</option>
          </Input>
      </th>
      <td>많이 짖어요</td>
    </tr>
    <tr>
      <td>아주 순해요</td>
      <th scope="row">
          <Input type="select">
           <option>1</option>
           <option>2</option>
           <option>3</option>
           <option>4</option>
           <option>5</option>
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
            시/도 <Input type="select">
                <option>서울시</option>
            </Input><br/>
            시/군/구 <Input type="select">
                <option>서초구</option>
            </Input><br/>
            <div align="right">
                <Button align="right">새로 검색하기</Button>
            </div>
            </CardText>
            </CardBody>
            </Card>
            </CardDeck>
            </Col>
            </div>
        )
    }

    export default SearchPage

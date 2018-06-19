/* eslint no-console: 0 */
import React, { Component } from 'react'
import { Jumbotron, Alert, Button, Container, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class IntroPage extends Component {
  state = {
    buttondisabled: true,
  }
  handleInputChange = (event) => {
    this.setState({
      buttondisabled: !event.target.checked,
    })
  }

  render() {
    let chunsim = this.state.buttondisabled
    return (
      <div>
        <Jumbotron className="container">
          <h1>본 사이트 이용법</h1>
          <p />‘바셀린(가칭)’는 여러분들의 반려견들이 소중한 짝을 만날 수 있도록 마련된 만남의 장입니다. <br />
          마음에 드는 반려견을 발견하시면 ‘좋아요’를, 저 친구가 내 반려견의 인생의 짝이다 싶으시면 ‘프러포즈’를 보낼 수 있습니다. <br />
          상대도 프로포즈를 보낼 시 상대방의 연락처를 받아서 직접 만날 수 있습니다!<p />
        </Jumbotron>

        <Container>
          <h2>다른 반려견을 오프라인에서 만날 시 주의 사항!</h2>

          <p />‘바셀린’은 여러분들이 만날 상대방의 신원을 보장하지 않습니다. 그러므로 오프라인에서 만날 약속을 잡았을 때에는 안전을 위해 다음 수칙을 지키기를 권장합니다.<p />

          <p />1. 첫 만남은 카페와 같이 공개된 장소에서! <br />
          2. 가까운 사람에게 어디로 가는지 미리 알리세요! <br />
          3. 만남을 빌미로 반려견과 관계 없는 제안(종교, 상품 판매 등)을 하는 사람들을 주의하세요! <br />
          4. 교배 전에 반려견끼리 충분한 만남을 가지세요! <p />

          <h2>반려견이 임신했을 때 알아야 할 점!</h2>

          <p />반려견이 교배 후 1주일 후에 식사가 불규칙하거나, 평소보다 주위를 어슬렁거린다면 임신했을 확률이 있습니다. <br />
          교배 후 3-4주 시기에 병원에 가시면 초음파 검사로 임신 여부를 판단할 수 있습니다. <br />
          교배 뒤 3주 간은 목욕이나 무리한 운동을 금해 주세요. 하지만 한 달 후에는 오히려 적절한 운동을 시켜주는 것이 좋습니다.<p />

          <Alert color="warning">
            <Input type="checkbox" onChange={this.handleInputChange} />{' '}본 내용을 숙지하였고 따를 것에 동의합니다.
          </Alert>
          <Button name="button" color="danger" disabled={chunsim} size="lg" tag={Link} to="/">확인</Button>
        </Container>
      </div>
    )
  }
}

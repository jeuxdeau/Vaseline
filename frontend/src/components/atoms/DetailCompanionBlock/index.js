import React from 'react'
import { Card, Col, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText,  UncontrolledCarousel } from 'reactstrap'

const items = [
  {
    src: 'http://bestpickr.com/wp-content/uploads/Worlds-Cutest-Small-Dog-Picture.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Adorable Dog',
  },
  {
    src: 'http://dogsaholic.com/wp-content/uploads/2015/05/Boo-the-cutest-pomeranian-dog.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Cute Dog',
  },
  {
    src: 'http://bestpickr.com/wp-content/uploads/Tiny-Cute-Pom-Pom-Yawning-Like-a-Kitten.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Lovely Dog',
  },
]

export default ({ companion }) => {
  return (
    <div>
      <Col sm="10" md={{ size: 10, offset: 1 }}>
        <UncontrolledCarousel sm="6" items={items} />
        <Card>
          <CardHeader tag="h2">
            우리 {companion.name}를 소개합니다! {' '}
          </CardHeader>
          <CardBody>
            <Button color="info" size="lg"><div>나이: { 2019 - companion.birth_year}</div></Button>{' '}<br /><br />
            <Button color="info" size="lg"><div>성별: {companion.sex}</div></Button>{' '}<br /><br />
            <Button color="info" size="lg"><div>사이즈: {companion.size}</div></Button>{' '}<br /><br />
            <Button color="info" size="lg"><div>품종: {companion.breed}</div></Button>{' '}<br /><br />
            <Button color="info" size="lg"><div>이 때 만날래요: {companion.mating_season.season_start} ~ {companion.mating_season.season_start}</div></Button>

          </CardBody>
        </Card>
      </Col>
    </div>
  )
}

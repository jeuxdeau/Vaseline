import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText, Table } from 'reactstrap'

const items = [
	{
		src: 'https://www.enesco.co.uk/graphics_cache/0/2/18155-4060859-3-600.jpg',
		altText: 'Slide 1',
		caption: 'Slide 1',
		header: 'Adorable Dog'
	},
	{
		src: 'http://dogsaholic.com/wp-content/uploads/2015/05/Boo-the-cutest-pomeranian-dog.jpg',
		altText: 'Slide 2',
		caption: 'Slide 2',
		header: 'Cute Dog'
	},
	{
		src: 'https://livestock.teghakennel.com/wp-content/uploads/2015/06/What-a-lovely-Pomeranian-600x630.jpg',
		altText: 'Slide 3',
		caption: 'Slide 3',
		header: 'Lovely Dog'
	},
]

export default ({companion}) => {
	return (
		<div>
			<UncontrolledCarousel items={items} />
			<Card>
				<CardHeader>
					<h2>{companion.name}{' '}</h2>(좋아요<font color="red">♥</font> <b>{companion.like_received.length}개</b>)
				</CardHeader>
				<CardBody>
				<Table hover>
        <tbody>
          <tr>
            <th scope="row">성별</th>
            <td>{companion.sex}</td>
          </tr>
					<tr>
            <th scope="row">나이 (생년)</th>
            <td>{2019 - companion.birth_year}살 ({companion.birth_year}년생)</td>
          </tr>
          <tr>
            <th scope="row">품종</th>
            <td>{companion.size}</td>
          </tr>
          <tr>
            <th scope="row">사이즈</th>
            <td>{companion.breed}</td>
          </tr>
					<tr>
						<th scope="row">만남 기간</th>
						<td>{companion.mating_season.season_start} - {companion.mating_season.season_start}</td>
					</tr>
        </tbody>
      </Table>
			</CardBody>
			</Card>
		</div>
	)
}

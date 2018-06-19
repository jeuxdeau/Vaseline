import React from 'react'
import { Card, Col, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText,  UncontrolledCarousel } from 'reactstrap'

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
				<CardHeader tag="h2">
					{companion.name}{' '}
					<Button color="info"><div>age:{companion.age}</div></Button>{' '}
					<Button color="info"><div>sex:{companion.sex}</div></Button>{' '}
					<Button color="info"><div>size:{companion.size}</div></Button>{' '}
					<Button color="info"><div>breed:{companion.breed}</div></Button>{' '}
					<Button color="info"><div>mating season:{companion.mating_season.season_start}~{companion.mating_season.season_start}</div></Button>
				</CardHeader>
				<CardBody>
					<h2>Description</h2>
				</CardBody>
			</Card>
		</div>
	)
}

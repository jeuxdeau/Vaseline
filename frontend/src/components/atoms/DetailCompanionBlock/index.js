import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'
import { Card, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap'

const items = [
	{
		src: 'http://bestpickr.com/wp-content/uploads/Worlds-Cutest-Small-Dog-Picture.jpg',
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
		src: 'http://bestpickr.com/wp-content/uploads/Tiny-Cute-Pom-Pom-Yawning-Like-a-Kitten.jpg',
		altText: 'Slide 3',
		caption: 'Slide 3',
		header: 'Lovely Dog'
	},
]

export default ({companion}) => ({
	<UncontrolledCarousel items={items} />
	<Card>
		<CardHeader tag="h2">
			{companion.name}
			<Button color="info">age:{companion.age}</Button>
			<Button color="info">sex:{companion.sex}</Button>
			<Button color="info">size:{companion.size}</Button>
			<Button color="info">breed:{companion.breed}</Button>
			<Button color="info">personality:{companion.personality}</Button>
			<Button color="info">mating season:{companion.mating_season.season_start}~{companion.mating_season.season_start}</Button>
		</CardHeader>
		<CardBody>
		</CardBody>
	</Card>
})
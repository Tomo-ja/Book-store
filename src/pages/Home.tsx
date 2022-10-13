import React, { useContext } from 'react'
import { Link } from '@aws-amplify/ui-react'

import { BookContext } from '../context/books'

import StyledHome from '../styles/home.styles'
import StyledBook from '../styles/book.styles'

import Hero from '../components/Hero'

import sampleBookImage from '../asset/bookSample.jpg'


type Book = {
	id: string,
	image: string,
	title: string
}
const sampleFeaturedBooks: Book[] = [
	{id: '1', image: '', title: 'sample1'},
	{id: '2', image: '', title: 'sample2'},
	{id: '3', image: '', title: 'sample3'},
	{id: '4', image: '', title: 'sample4'},
	{id: '5', image: '', title: 'sample5'},
	{id: '6', image: '', title: 'sample6'},

]

const Home = () => {

	let { featured } = useContext(BookContext);

	if (featured.length === 0) {
		featured = sampleFeaturedBooks
	}


	return (
		<StyledHome>
			<Hero />
			<section>
				<div className='header-like'>
					<h3>Featured Collection</h3>
				</div>
				{featured.length === 0 ? 
				<h3>No Featured Books Right Now</h3>
				:
				<div className='books-collection'>
					{featured.map(({id, image, title}: {id: number, image: string, title: string}) => (
						<StyledBook key={id} margin='1rem 0'>
							<div className='img-wrapper'>
								<img src={image.length === 0 ? sampleBookImage : image} alt={title} />
							</div>
							<Link to={`/books/${id}`} className='btn-like'>details</Link>
						</StyledBook>
					))}
				</div>
				}
				<div>

				</div>
			</section>
		</StyledHome>
	)
}

export default Home
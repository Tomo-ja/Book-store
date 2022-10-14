import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { BookContext } from '../context/books'

import StyledHome from '../styles/home.styles'
import StyledBook from '../styles/book.styles'

import Hero from '../components/Hero'

import { Book } from '../typesLibrary'

import sampleBookImage from '../asset/bookSample.jpg'



const sampleFeaturedBooks: Book[] = [
	{id: '1', image: '', title: 'sample1', description: '', author: '', price: '0'},
	{id: '2', image: '', title: 'sample2', description: '', author: '', price: '0'},
	{id: '3', image: '', title: 'sample3', description: '', author: '', price: '0'},
	{id: '4', image: '', title: 'sample4', description: '', author: '', price: '0'},
	{id: '5', image: '', title: 'sample5', description: '', author: '', price: '0'},
	{id: '6', image: '', title: 'sample6', description: '', author: '', price: '0'},

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
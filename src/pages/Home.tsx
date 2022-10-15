import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { BookContext } from '../context/books'

import StyledHome from '../styles/home.styles'
import StyledBook from '../styles/book.styles'
import StyledBookCollection from '../styles/bookCollection.styles'

import Hero from '../components/Hero'

import { Book } from '../typesLibrary'


const Home = () => {

	const { featured } = useContext(BookContext);


	return (
		<StyledHome>
			<Hero />
			<section>
				<div className='header-like'>
					<h3>Featured Collection</h3>
				</div>
				{featured.length === 0 ? 
				<h3 className='error-message'>No Featured Books Right Now</h3>
				:
				<StyledBookCollection>
					{featured.map(({id, image, title}: {id: number, image: string, title: string}) => (
						<StyledBook key={id}>
							<div className='img-wrapper'>
								<img src={image} alt={title} />
							</div>
							<Link to={`/books/${id}`} className='btn-like'>details</Link>
						</StyledBook>
					))}
				</StyledBookCollection>
				}
				<div>

				</div>
			</section>
		</StyledHome>
	)
}

export default Home
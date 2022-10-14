import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { BookContext } from '../context/books'

import StyledBookCollection from '../styles/bookCollection.styles'

import { Book } from '../typesLibrary'

import sampleImage from '../asset/bookSample.jpg'
import StyledBook from '../styles/book.styles'

const sampleFeaturedBooks: Book[] = [
	{id: '1', image: '', title: 'sample1', description: '', author: '', price: '0', featured: false},
	{id: '2', image: '', title: 'sample2', description: '', author: '', price: '0', featured: false},
	{id: '3', image: '', title: 'sample3', description: '', author: '', price: '0', featured: false},
	{id: '4', image: '', title: 'sample4', description: '', author: '', price: '0', featured: false},
	{id: '5', image: '', title: 'sample5', description: '', author: '', price: '0', featured: false},
	{id: '6', image: '', title: 'sample6', description: '', author: '', price: '0', featured: false},
]

const Books = () => {
	
	const { books } = useContext(BookContext)

	return(
		<StyledBookCollection>
			{sampleFeaturedBooks.map(book => (
				<StyledBook key={book.id}>
					<div className='img-wrapper'>
						<img src={book.image ? book.image : sampleImage} alt="" />
					</div>
					<Link to={`books/${book.id}`} className='btn-like'>Detail</Link>
				</StyledBook>
			))}
		</StyledBookCollection>
	)

	return (
		<div>Books</div>
	)
}

export default Books
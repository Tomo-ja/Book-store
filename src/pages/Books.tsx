import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { BookContext } from '../context/books'

import StyledBookCollection from '../styles/bookCollection.styles'

import { Book } from '../typesLibrary'

import StyledBook from '../styles/book.styles'

const Books = () => {
	
	const { books } = useContext(BookContext)

	if (books.length === 0) {
		return <h3 className='error-message'>Sorry... No Books available</h3>
	}


	return(
		<StyledBookCollection>
			{books.map((book: Book) => (
				<StyledBook key={book.id}>
					<div className='img-wrapper'>
						<img src={book.image} alt="" />
					</div>
					<Link to={`books/${book.id}`} className='btn-like'>Detail</Link>
				</StyledBook>
			))}
		</StyledBookCollection>
	)
}

export default Books
import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { BookContext } from '../context/books'
import { CartContext } from '../context/cart'

import StyledBookDetail from '../styles/bookDetail'

import { Book } from '../typesLibrary'


const BookDetails = () => {

	const { id } = useParams()
	const navigation = useNavigate()
	const { books } = useContext(BookContext)
	const { addToCart } = useContext(CartContext)

	const book: Book | undefined = books.find((book: Book) => {
		return book.id === id
	})

	if (!book) {
		return <h3 className='error-message'>Sorry, we couldn't find the book</h3>
	}

	return (
		<StyledBookDetail>
			<div className='book-detail-img'>
				<img src={book.image} alt={book.title} />
			</div>
			<div className='book-details'>
				<h2>{book.title}</h2>
				<p>{book.description}</p>
				<h3>written by {book.author}</h3>
				<h4>Price - $ {book.price}</h4>
				<button
					className='btn-like'
					onClick={() => {
						addToCart({...book, id})
						navigation('/cart')
					}}
				>
					Add to Cart
				</button>
			</div>
		</StyledBookDetail>
	)
}

export default BookDetails
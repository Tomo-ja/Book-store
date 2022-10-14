import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { BookContext } from '../context/books'
import { CartContext } from '../context/cart'

import StyledBookDetail from '../styles/bookDetail'

import { Book } from '../typesLibrary'

import sampleBookImage from '../asset/bookSample.jpg'

const sampleBook: Book = {
		id: '1', 
		image: '', 
		title: 'sample1', 
		description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ducimus culpa ex aspernatur, doloremque maxime, mollitia impedit sed quod magni doloribus reiciendis laboriosam in. In illum odio amet aspernatur totam sapiente tempora labore fugiat necessitatibus, nulla, fuga veniam possimus iste.', 
		author: 'sample sample', 
		price: '300'
}


const BookDetails = () => {

	const { id } = useParams()
	const navigation = useNavigate()
	const { books } = useContext(BookContext)
	const { addToCart } = useContext(CartContext)

	let book: Book | undefined = books.find((book: Book) => {
		return book.id === id
	})

	if(!book) {
		book = sampleBook
	}


	return (
		<StyledBookDetail>
			<div className='book-detail-img'>
				<img src={sampleBookImage} alt={book.title} />
			</div>
			<div className='book-details'>
				<h2>{book.title}</h2>
				<p>{book.description}</p>
				<h3>{book.author}</h3>
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
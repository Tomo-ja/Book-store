import React, { useContext } from 'react'
import { CartContext } from '../context/cart'
import { useNavigate } from 'react-router-dom'

import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import StyledCart from '../styles/cart.styles'
import StyledCartItem from '../styles/cartItem.styles'
import { BookInCart } from '../typesLibrary'

import sampleBookImage from '../asset/bookSample.jpg'

const sampleFeaturedBooks: BookInCart[] = [
	{id: '1', image: '', title: 'sample1', description: '', author: '', price: '0', featured: false, amount: 1},
	{id: '2', image: '', title: 'sample2', description: '', author: '', price: '0', featured: false, amount: 2},
	{id: '3', image: '', title: 'sample3', description: '', author: '', price: '0', featured: false, amount: 4},
	{id: '4', image: '', title: 'sample4', description: '', author: '', price: '0', featured: false, amount: 2},
	{id: '5', image: '', title: 'sample5', description: '', author: '', price: '0', featured: false, amount: 3},
	{id: '6', image: '', title: 'sample6', description: '', author: '', price: '0', featured: false, amount: 4},
]


const Cart = () => {

	const navigation = useNavigate()
	//TODO: use real data to display
	const { cart, total, increaseAmount, decreaseAmount} = useContext(CartContext)


	return (
		<StyledCart>
			<div className='header-like'>
				<h2>My Cart</h2>
			</div>
			{sampleFeaturedBooks.length === 0 ? 
				<h3>Your cart is empty</h3>
				:
				<div className='wrapper'>
					{sampleFeaturedBooks.map((item: BookInCart) => (
					<StyledCartItem key={item.id}>
						<div className='image'>
							<img src={item.image ? item.image : sampleBookImage} alt="" />
						</div>
						<div className='details'>
							<p>{item.title}</p>
							<p>$ {item.price}</p>
							<div>
								<button onClick={()=> increaseAmount(item.id)}><FiChevronUp /></button>
								<p>{item.amount}</p>
								<button onClick={()=> decreaseAmount(item.id)}><FiChevronDown /></button>
							</div>
						</div>
					</StyledCartItem>
					))}
					<div className='details-amount'>
						<h3>Total: ${total}</h3>
					</div>
					<div>
						<button className='btn-like' onClick={() => navigation('/checkout')}>Checkout</button>
					</div>
				</div>
			}
		</StyledCart>
	)
}

export default Cart
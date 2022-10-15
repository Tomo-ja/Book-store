import React, { useContext } from 'react'
import { CartContext } from '../context/cart'
import { useNavigate } from 'react-router-dom'

import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import StyledCart from '../styles/cart.styles'
import StyledCartItem from '../styles/cartItem.styles'
import { BookInCart } from '../typesLibrary'

const Cart = () => {

	const navigation = useNavigate()
	//TODO: use real data to display
	const { cart, total, increaseAmount, decreaseAmount} = useContext(CartContext)


	return (
		<StyledCart>
			<div className='header-like'>
				<h2>My Cart</h2>
			</div>
			{cart.length === 0 ? 
				<h3 className='error-message'>Your cart is empty</h3>
				:
				<div className='wrapper'>
					{cart.map((item: BookInCart) => (
					<StyledCartItem key={item.id}>
						<div className='image'>
							<img src={item.image} alt="" />
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
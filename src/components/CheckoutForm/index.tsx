import React, { useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../../context/books";
import { CartContext } from "../../context/cart";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import StyledCheckoutForm from "./checkoutFrom.styles";
import { StripeCardElementChangeEvent } from "@stripe/stripe-js";

import { CheckoutInfo } from "../../typesLibrary";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  }
};

const CheckoutForm = () => {

	const { cart, total, clearCart } = useContext(CartContext)
	const { checkout } = useContext(BookContext)
	
	const [orderDetails, setOrderDetails] = useState<CheckoutInfo>({cart, total, address: null, token: null})
	const [error, setError] = useState<string | null | undefined>("error")
	const stripe = useStripe()
	const elements = useElements()
	const navigation = useNavigate()

	useEffect(()=> {
		if(orderDetails.token){
			checkout(orderDetails)
			clearCart()
			navigation('/')
		}
	}, [orderDetails])

	const handleAddressChange = (e: React.FormEvent<HTMLInputElement>) => {

	}

	const handleCardChange = (e: StripeCardElementChangeEvent) => {
		if(e.error) {
			setError(e.error.message)
		} else {
			setError(null)
		}
	}

	const handleSubmit = async (e: React.SyntheticEvent) => {
		e.preventDefault()
		const card = elements!.getElement(CardElement)
		const result = await stripe!.createToken(card!)
		if(result.error){
			setError(result.error.message)
		} else {
			setError(null)
			const token = result.token
			setOrderDetails(prev => {
				const newState = {...prev}
				newState.token = token.id
				return newState
			})
		}
	}

	return (
			<StyledCheckoutForm onSubmit={handleSubmit}>
				<div>
					<label htmlFor="checkout-address">Shipping Address</label>
					<input type="text" id="checkout-address" onChange={handleAddressChange}/>
				</div>
				<div>
					<label htmlFor="stripe-element">Credit or debit card</label>
					<CardElement id='stripe-element' className="card-info" options={CARD_ELEMENT_OPTIONS} onChange={handleCardChange} />
				</div>

				<div role='alert'>
					{error}
				</div>
				<button type="submit" className="btn-like">Submit Payment</button>
		</StyledCheckoutForm>
	)
}

export default CheckoutForm
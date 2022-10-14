import React from 'react'
import { Authenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from '../components/CheckoutForm';
import StyledCheckout from '../styles/checkout.styles';



const Checkout = () => {

	const stripePromise = loadStripe('pk_test_51LGt3tD8Xqz5qk8QQGq2z6shtvnQwuYjSG7xvhrB5rJZASuLwtHLkkudrsFECECxTzUZOepcaTkiRS46TSNScHmq00LGqUudvi')

	return (
		<StyledCheckout>
			<Authenticator>
				<Elements stripe={stripePromise}>
					<div>
						<h2>Time to Checkout?</h2>
						<CheckoutForm />
					</div>
				</Elements>
			</Authenticator>
		</StyledCheckout>
	)
}

export default Checkout

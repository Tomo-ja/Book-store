import React from 'react'
import { Link } from 'react-router-dom'

import StyledHeroSection from './heroSection.styles'

const Hero = () => {
	return (
		<StyledHeroSection>
			<h2>Online Book Store</h2>
			<h3>Books + Imagination = Unlimited</h3>
			<Link className='btn-like' to='/books'>View all Books</Link>
		</StyledHeroSection>
	)
}

export default Hero
import React from "react";
import { Link } from "react-router-dom";

import StyledHeader from "./header.styles";



const Header = () => {
	return (
		<StyledHeader>
			<nav>
				<h1><Link to='/'>Book Store</Link></h1>
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/books'>Books</Link></li>
					<li><Link to='/cart'>Cart</Link></li>
					<li><Link to='/checkout'>Checkout</Link></li>
				</ul>
			</nav>
		</StyledHeader>
	)
}

export default Header
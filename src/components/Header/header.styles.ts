import styled from 'styled-components'

const StyledHeader = styled.header`

	background-color: #131c27;
	color: white;

	nav{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		width: 90%;
		min-height: 10vh;
		padding: 2rem;
		margin: auto;
	}

	h1{
		flex: 2 1 10rem;
		font-weight: 400;
	}

	ul{
		display: flex;
		justify-content: space-around;
		align-items: center;
		list-style: none;
	}
	
	li{
		margin-left: 1em;
	}

`

export default StyledHeader
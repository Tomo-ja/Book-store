import styled from "styled-components";


const StyledAdmin = styled.section`

	width: 70%;
	min-width: 375px;
	margin: 5rem auto;
	text-align: center;

	.header-like{
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		padding: 3rem 0;

	}

	.button-like{
		padding: 1rem 3rem;
		background: #4c6e97;
		color: white;
		font-size: 1.5rem;
		text-transform: uppercase;
		transition: all 0.25s ease;
		cursor: pointer;

		:hover{
			background: #121c27;
		}
	}

`

export default StyledAdmin
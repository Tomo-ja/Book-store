import styled from "styled-components";


const StyledCartItem = styled.article`

	margin: 1rem 0;
	padding: 1rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1), 0px 20px 20px rgba(0, 0, 0, 0.1);


	.image{
		flex: 1 1 10rem;

		img{
			width: 10rem;
		}
	}
	
	.details{
		flex: 2 1 10rem;
		padding: 0 5rem;
		display: flex;
		align-items: center;
		justify-content: right;

		p{
			margin-inline: 1rem;
		}
	}


`
export default StyledCartItem
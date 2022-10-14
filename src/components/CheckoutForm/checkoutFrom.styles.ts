import styled from "styled-components";

const StyledCheckoutForm = styled.form`
	margin: auto;
	text-align: center;

	> div{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		margin-block: 3rem;

	}

	label{
		display: block;
		flex: 0 1 30rem;
		text-align: left;
	}

	input{
		display: block;
		font-size: 2rem;
		padding: 1rem 1.5rem;
		margin-block: 1rem;
		flex: 1 1 30rem;
	}

	.card-info{
		flex: 1 1 30rem;
	}
`

export default StyledCheckoutForm
import styled from "styled-components";

const StyledInputGroup = styled.div`

	padding: 0.7rem;

	input{
		width: 100%;
		height: 3rem;
		font-size: 1.5rem;
	}

	label{
		text-align: left;
	}
	
	textarea{
		width: 100%;
		font-size: 1.5rem;
	}

	input.checkbox{
		display: inline-block;
		margin-left: 2rem;
		width: 2rem;
		position: relative;
		top: 0.75rem;
	}
`

export default StyledInputGroup
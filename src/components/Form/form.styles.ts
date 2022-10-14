import styled from "styled-components";

const StyledForm = styled.form`

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 1px #c7c7c7 solid;
  padding: 2rem;

	.image-field{

		img{
			width: 35rem;
		}
	}

	.form-field{
		padding: 3rem;
		flex: 1 1 30rem;
		text-align: left;
	}

`
export default StyledForm
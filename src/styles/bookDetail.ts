import styled from "styled-components";

const StyledBookDetail = styled.section`
	display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 80vh;

  margin: 5rem auto;

  text-align: center;

	.book-detail-img{
		text-align: center;
		img{
			max-width: 350px;
		}
	}

	.book-details{
		display: flex;
		flex: 1 1 50rem;
		flex-direction: column;
		justify-content: space-evenly;

		height: 75%;
		padding: 0 5rem;
	}

`

export default StyledBookDetail
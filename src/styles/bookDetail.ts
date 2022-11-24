import styled from "styled-components";

const StyledBookDetail = styled.section`
	display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 90%;
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
		padding: 0 5rem;

		h2, h3, h4, p{
			margin-bottom: .5em;
		}
	}

`

export default StyledBookDetail
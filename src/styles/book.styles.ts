import styled from "styled-components";

interface IBook {
	margin?: string
}

const StyledBook = styled.article<IBook>`

	display:flex;
	flex-direction: column;
  justify-content: space-between;
  align-items: center;

	width: 22rem;
  height: 28rem;
  margin: ${props => props.margin ? props.margin : '3rem 4rem'} ;
	background: whitesmoke;
	border-top: 1px solid #efefef;

  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1), 0px 20px 20px rgba(0, 0, 0, 0.1);

	.img-wrapper{
		flex: 3 1 100rem;
		padding: 2rem 0rem;

		img{
			min-height: 10vh;
			height: 21vh;
			object-fit: cover;
		}
	}

	a{
		flex: 1 1 100rem;
		background: #55606c;
		font-size: 1.7rem;
		width: 100%;
		height: 100%;

		:hover{
			background: #343c43;
		}
	}

`

export default StyledBook
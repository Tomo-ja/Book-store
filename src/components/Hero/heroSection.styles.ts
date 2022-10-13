import styled from "styled-components";
import bcImage from '../../asset/heroBackgroundImage.jpg'

const StyledHeroSection = styled.section`
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
	min-height: 43vh;


  background: linear-gradient(rgba(0, 0, 0, 0.5), transparent), url(${bcImage});
	background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  color: white;
  text-align: center;

	h3{
		padding: 3rem;
	}
`

export default StyledHeroSection
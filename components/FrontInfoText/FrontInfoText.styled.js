import styled from "styled-components";

const SCFrontInfoText = styled.section`
	background-image: url("/images/Background.png");
	background-repeat: no-repeat;
	background-size: cover;
	box-shadow: inset 0 0 0 1000px rgba(95,145,83,.9);
	width: 40%;
	height: 100vh;
	padding: 0px 45px;	
	display: none;	

	.textFront{
		color: white;
		font-size: 16px;
	}
	.quotesIcon{
		height: 19px;
		margin-bottom: 30px;
	}
	.vectorIcon{
		height: 22px;
		margin-top: 20px;
		float: right;
	}

	@media (min-width: 1025px) {
		display: flex;
		align-items: center;		
	}

`;

export default SCFrontInfoText;

import styled from "styled-components";

const SCHomeCard = styled.div`
	display: flex;
	width: 350px;
	box-shadow: 0px 0px 13px 1px rgba(166, 166, 166, 0.2);
	border-radius: 10px;
	height: 100px;
	margin: 10px 0px 10px 0px;
	border: 1px solid transparent;
	transition: all 0.3s;

	&:hover {
		border: 1px solid var(--main-green);
		box-shadow: none;
	}

	.image-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 30%;
	}
	.text-container {
		width: 60%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.arrow-container {
        opacity: 0;
		width: 10%; 
        filter: invert(52%) sepia(9%) saturate(1852%) hue-rotate(63deg) brightness(96%) contrast(90%);
		padding-right: 20px;
		transition: opacity 0.3s;
	}

	.text-container h4 {
		font-family: inter-bold;
		font-weight: 300;
	}

	.text-container p {
		font-family: inter-light;
	}

	@media (min-width: 1025px) {
		.arrow-container {
			width: 10%;
			opacity: 1;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		
	}
`;

export default SCHomeCard;

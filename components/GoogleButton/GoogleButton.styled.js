import styled from "styled-components";

const SCGoogleButton = styled.div`
	box-shadow: 0 2px 4px 0 rgb(0 0 0 / 25%);
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 50px;
	padding: 0px 20px;
	transition: box-shadow 0.218s ease;
	cursor: pointer;

	&:hover {
		box-shadow: 0 0 3px 3px rgb(95, 145, 83, 30%);
	}

	#social-login-img {
		min-height: 20px !important;
		min-width: 20px !important;
	}
	.social-label {
		width: 90%;
		margin: auto;
		margin-left: 45px;
		color: black;
		font-size: 13px;
	}

	@media (min-width: 768px) {
		width: 280px;
		margin: auto;
		height: 35px;
	}
`;

export default SCGoogleButton;

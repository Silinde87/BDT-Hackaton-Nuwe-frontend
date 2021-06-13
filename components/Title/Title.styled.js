import styled from "styled-components";

const SCTitle = styled.div`
	max-height: 120px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin-bottom: 5px;

	h1 {
		font-size: 23px;
	}

	@media (min-width: 1025px) {
		h1 {
			font-size: 20px;
		}
        p{
            font-size: 13px;
        }
	}
`;

export default SCTitle;

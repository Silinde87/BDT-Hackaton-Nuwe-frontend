import styled from "styled-components";

const SCHomeCard = styled.div`
	display: flex;
	width: 350px;
    box-shadow: 0px 0px 13px 1px rgba(166,166,166,0.2);
    border-radius: 10px;
    height: 100px;
    margin: 10px 0px 10px 0px;
    border: 1px solid transparent;
    transition: all 0.3s;

    &:hover{
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
		width: 70%;
        display: flex;
        flex-direction: column;
		justify-content: center;		
	}

	.text-container h4 {
		font-family: inter-bold;
	}
    
    .text-container p{
        font-family: inter-light;
    }
`;

export default SCHomeCard;

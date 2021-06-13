import styled from "styled-components";

const SCButton = styled.button`
    width: 100%;
    height: 50px;
    background: var(--main-green);
    border: 0;
    border-radius: 5px;
    color: white;
    font-family: inter-regular;
    margin-top: 20px;
    font-size: 15px;
    transition: all 0.3s;
    cursor: pointer;

    &:hover{
        box-shadow: 0px 0px 3px 3px rgba(106,110,120, 0.2);
    }

    @media (min-width: 1025px) {
        height: 35px;
	}

`;

export default SCButton;
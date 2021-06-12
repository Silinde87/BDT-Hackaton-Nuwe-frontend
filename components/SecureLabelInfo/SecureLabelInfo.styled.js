import styled from "styled-components";

const SCSecureLabelInfo = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 100%;

    .lock-icon{
        filter: invert(65%) sepia(6%) saturate(835%) hue-rotate(180deg) brightness(88%) contrast(90%);
    }
    .secure-label{
        margin-left: 10px;
    }

`;


export default SCSecureLabelInfo;
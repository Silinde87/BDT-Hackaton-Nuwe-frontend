import styled from "styled-components";

const SCNavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 7px;

    .link-back{
        display: flex;
    }
    .link-back p{
        margin: auto;
        color: var(--dark-gray);
        margin-left: 10px;
    }
    .chevron-icon{
        filter: invert(65%) sepia(6%) saturate(835%) hue-rotate(180deg) brightness(88%) contrast(90%);
    }
    .step-box{        
        display: flex;
        flex-direction: column;
    }
    .step-label{
        font-size: 12px;
        align-self: flex-end;
    }
    .page-label{
        color: var(--dark-gray);
        font-size: 14px;
    }
`;


export default SCNavBar;
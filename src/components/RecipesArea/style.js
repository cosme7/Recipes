import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 50px 30px;
    background: #F2F4F1;
`;

export const AreaCards = styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: space-evenly;
    gap: 20px;

    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
`;
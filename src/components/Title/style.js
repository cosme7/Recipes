import styled from "styled-components";

export const Container = styled.h3`
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 10px;
    color: #373737;
    font-family: 'Montserrat', sans-serif;

    ::after {
        content: "";
        width: 50px;
        height: 3px;
        background: #373737;
        display: block;
        margin: 15px auto;
    }
`;
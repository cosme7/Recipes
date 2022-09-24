import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    max-width: 300px;
    background-color: #fff;
    box-shadow: 0px 0px 10px #CCC;
    transition: 0.3s all;
    cursor: pointer;

    :hover {
        transform: scale(1.05);
    }

    img {
        width: 100%;
    }

    h4 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        height: 180px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        ::before {
            content: "";
            width: 40px;
            height: 3px;
            background: #373737;
            display: block;
            margin-bottom: 20px;
        }
    }
`;
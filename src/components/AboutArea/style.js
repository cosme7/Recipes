import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;

    img {
        width: 40%;
        min-width: 440px;
    }

    .about--content {
        width: 35%;
        padding: 30px 0px;
        min-width: 320px;

        p {
            padding: 20px 5px;
            width: 100%;
            font-family: var(--ff-primary);
            font-size: 0.8rem;
        }
    }

    @media screen and (max-width: 768px){
        flex-direction: column;

        img {
            min-width: 350px;
        }

        .about--content {
            min-width: 350px;
        }
    }
`;
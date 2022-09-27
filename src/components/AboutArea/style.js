import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    img {
        width: 50%;
    }

    .about--content {
         width: 100%;
         padding: 30px 0.5rem;

        p {
            padding: 20px 5px;
            margin-inline: auto;
            max-width: 52ch;
            font-family: var(--ff-primary);
            font-size: 0.8rem;
            font-size: clamp(0.8rem, 1.2vw, 1.5rem);
        }
    }

    @media screen and (max-width: 50em){
        flex-direction: column;

        img {
            width: 100%;
        }
    }
`;
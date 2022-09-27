import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    img {
        width: 50%;
        /* min-width: 440px; */
    }

    .about--content {
         width: 100%;
         padding: 30px 0.5rem;
    //   min-width: 320px;

        p {
            padding: 20px 5px;
            margin-inline: auto;
            max-width: 52ch;
            font-family: var(--ff-primary);
            font-size: 0.8rem;
            font-size: clamp(0.8rem, 2vw, 1.2rem);
        }
    }

    @media screen and (max-width: 50em){
        flex-direction: column;

        img {
            width: 100%;
        }

        .about--content {
        //    min-width: 350px;
        }
    }
`;
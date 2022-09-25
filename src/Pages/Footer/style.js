import styled from "styled-components";

export const Container = styled.section`
    --spacer-one: 1rem;
    --spacer-two: 5rem 4.5rem;
    width: 100%;
    background-color: var(--bg-two);

    @media screen and (max-width:55em){
        --spacer-two: 5rem 0;

        nav{
            width: 100%;
            padding-inline: 0.5rem;
        }
    }
`;

export const Copyright = styled.div`
    width: 100%;
    padding: var(--spacer-one);
    background-color: var(--bg-four);
    
    p{
        width: 100%;
        font-size: clamp(0.6rem, 1vw, 1.2rem);
        font-family: var(--ff-footer);
        font-weight: var(--fw-400);
        letter-spacing: 0.2px;
        color: var(--clr-two);
        text-align: center;
        opacity: 0.5;
    }

    @media screen and (max-width:50em){
        p{
            word-wrap: break-word;
        }
    }
`;
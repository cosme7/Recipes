import styled from "styled-components";

export const Container = styled.section`
    --spacer-one: 1rem;
    --spacer-two: 5rem 4.5rem;
    width: 100%;
    background-color: var(--bg-two);

    @media screen and (max-width:50em){
        --spacer-two: 5rem 0;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    padding: var(--spacer-two);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width:55em){
        flex-flow: column-reverse;
        gap: 3rem;
    }
`;

export const Social = styled.nav`
    display: flex;
    gap: clamp(1rem, 1vw, 1.2rem);
`;

export const Copyright = styled.div`
    width: 100%;
    padding: var(--spacer-one);
    background-color: var(--bg-four);
    
    p{
        font-size: clamp(0.8rem, 1vw, 1.2rem);
        font-family: var(--ff-footer);
        font-weight: var(--fw-400);
        letter-spacing: 0.2px;
        color: var(--clr-two);
        text-align: center;
        opacity: 0.5;
    }
`;
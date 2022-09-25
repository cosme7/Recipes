import styled from "styled-components";

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

    @media screen and (max-width:55em){
        width: 100%;
        justify-content: center;
    }
`;

export const List = styled.ul`
    display: flex;
    gap: clamp(1.5rem, 1.5vw, 2rem);
    list-style: none;

    a{
        padding: 1em 2em;
        font-size: clamp(1rem, 1.3vw, 1.5rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-600);
        letter-spacing: 2px;
        color: var(--clr-one);
        text-transform: uppercase;
        text-decoration: none;
    }

    a:where(:hover, :focus){
        outline: 5px solid var(--bg-five);
    }

    @media screen and (max-width:55em){
        flex-direction: column;

        li{
            text-align: center;
            padding-block: 1rem;
        }

        a{
            outline: none;
        }

        li:where(:hover, :focus){
            background-color: var(--bg-five);
        }

        li:where(:hover, :focus) a{
            color: var(--clr-two);
        }
    }
`;

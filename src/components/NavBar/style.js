import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    gap: clamp(1rem, 1.5vw, 2rem);
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

    @media screen and (max-width:50em){
        display: none;
        /* flex-direction: column; */

        a:where(:hover, :focus){
            outline: none;
        }
    }
`;
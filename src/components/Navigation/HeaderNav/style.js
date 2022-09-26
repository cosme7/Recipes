import styled from "styled-components";

// Desktop //
export const List = styled.ul`
    display: flex;
    gap: clamp(1.5rem, 1.5vw, 2rem);
    list-style: none;

    a{
        padding: 1em 2em;
        font-size: clamp(1rem, 1.3vw, 1.5rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-400);
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
    }
`;

// Hamburger // 
export const Burger = styled.button`
    display: none;
    border: none;
    cursor: pointer;
    position: relative;
    z-index: 9999;

    @media screen and (max-width:50em){
        display: initial;
    }

    ::after,
    ::before{
        content: '';
        width: 30px;
        border: 3px solid var(--bg-five);
        display: block;
        position: absolute;
        right: 0;
        transform-origin: 25px;
        transition: 0.4s all ease-in-out;
    }

    ::before{
        transform: ${({open}) => open ? 'rotate(0)' : 'rotate(45deg)'};
        border: 3px solid ${({open}) => open ? 'var(--bg-five)' : 'var(--bg-one)'};
    }
    
    ::after{    
        bottom: 0.4em;
        transform: ${({open}) => open ? 'rotate(0)' : 'rotate(-45deg)'};
        border: 3px solid ${({open}) => open ? 'var(--bg-five)' : 'var(--bg-one)'};
    }

    span{
        display: none;
    }
`;

// Mobile Menu //
export const Mobile = styled.ul`
    width: 80%;
    padding: 1rem 0.5rem 2rem;
    border-radius: 5px;
    display: none;
    gap: clamp(1.5rem, 1.5vw, 2rem);
    list-style: none;
    background-color: var(--bg-one);
    box-shadow: 0 0 0.75em rgb(0, 0, 0, 0.2), 0 0 0 100vmax rgb(0, 0, 0, 0.5);

    @media screen and (max-width:50em){
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: ${({open}) => open ? 'scale(1,0)' : 'scale(1)'};
        transform-origin: top;
        transition: transform 0.5s ease-in-out;
        position: fixed;
        top: 5rem;
        left: 10%;
    }

    li{
        width: 100%;
        text-align: center;
        padding-block: 1rem;
    }

    li:where(:hover, :focus){
        background-color: var(--bg-five);
    }

    li:where(:hover, :focus) a{
        color: var(--clr-two);
    }

    a{
        font-size: clamp(1rem, 1.3vw, 1.5rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-400);
        letter-spacing: 2px;
        color: var(--clr-one);
        text-transform: uppercase;
        text-decoration: none;
        text-align: center;
    }
`;
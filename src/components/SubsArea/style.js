import styled from "styled-components";

export const Container = styled.section`
    --spacer: 10rem 0.5rem 11rem;
    width: 100%;
    padding: var(--spacer);
    display: grid;
    grid-auto-rows: auto;
    row-gap: clamp(0.7rem, 1vw, 2rem);
    background-color: var(--bg-three);

    @media screen and (max-width:40em){
        --spacer: 6.5rem 0.5rem;
    }

    h2{
        font-size: clamp(1.5rem, 2vw, 2rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-600);
        line-height: 1;
        letter-spacing: 2px;
        color: var(--clr-primary);
        text-transform: uppercase;
        text-align: center;
    }

    p{
        font-size: clamp(1.5rem, 2vw, 2rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-400);
        line-height: 1;
        letter-spacing: 1px;
        color: var(--clr-primary);
        text-align: center;
    }
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(1rem, 1vw, 1.5rem);

    input[type=email]{
        width: 600px;
        min-height: 80px;
        padding-inline: 2rem;
        font-size: clamp(1rem, 1.1vw, 1.2rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-600);
        background-color: var(--bg-input);
        border: none;
    }

    input[type=email]::placeholder{
        font-size: clamp(1rem, 1vw, 1.2rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-400);
        color: var(--clr-input);
    }

    input[type=button]{
        padding: 0.5em 2em;
        border: 5px solid var(--bg-five);
        font-size: clamp(1.2rem, 1.1vw, 1.2rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-600);
        letter-spacing: 1px;
        color: var(--clr-one);
        background-color: var(--bg-three);
        text-transform: uppercase;
    }

    @media screen and (max-width:40em){
        input[type=email]{
            width: 100%;
            min-height: 60px;
        }

        input[type=button]{
            width: 100%;
            padding: 1em 0;
        }
    }
`;
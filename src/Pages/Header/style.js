import styled from "styled-components";
import Background from "../../Assets/header_01.png";
import Mobile from "../../Assets/header_01_Mobile.png";

export const Container = styled.section`
    --spacer-one: 1.5rem;
    --spacer-two: 3rem;
    width: 100%;
    padding: var(--spacer-one);
    background-color: var(--bg-one);

    @media screen and (max-width:50em){
        --spacer-one: 1rem 0.5rem 0.5rem;    
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    min-height: 50vw;
    background-image: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 70%;
    display: flex;
    flex-direction: column;

    h2{ 
        margin-block: auto;
        padding-bottom: 6rem;
        font-size: clamp(2.2rem, 8vw, 10rem);
        font-family: var(--ff-primary);
        font-weight: var(--fw-600);
        letter-spacing: 5px;
        line-height: .75;
        color: var(--clr-one);
        text-transform: uppercase;
        text-align: center;
    }

    @media screen and (max-width:50em){
        --spacer-two: 2rem 0.5rem;
        min-height: 80vh;
        background-image: url(${Mobile});
        
        img{
            display: none;
        }

        h2{
            margin-block: 10rem auto;
            padding: 0;
        }
    }
`;  

export const NavWrapper = styled.div`
    width: 100%;
    padding: var(--spacer-two);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media screen and (max-width:50em){
        justify-content: flex-end;
    }
`;




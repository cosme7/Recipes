import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }


    :root{
        /* Font Color */
        --clr-one: #373737;
        --clr-two: #FFFFFF;
        --clr-input: #707070;
        /* Font-Family */
        --ff-primary: 'Montserrat', sans-serif; /* Montserrat => Hurme Geometric */
        --ff-footer: 'Roboto', sans-serif;
        /* Font Weight */
        --fw-600: 600;
        --fw-400: 400;
        /* Background Color */
        --bg-one: #FFFFFF;
        --bg-two: #F2F4F1;
        --bg-three: #DFE4DE;
        --bg-four: #446061;
        --bg-five: #373737;
        --bg-input: #EFF1EE;
    }
`;
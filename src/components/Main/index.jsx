import React from "react";
import RecipesArea from "../RecipesArea";
import AboutArea from "../AboutArea";
import { Container } from "./style";

export default function Main() {
    return(
        <Container>
            <RecipesArea/>
            <AboutArea/>
        </Container>
    )
}
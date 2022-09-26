import React from "react";
import RecipesArea from "../RecipesArea";
import AboutArea from "../AboutArea";
import SubsArea from "../SubsArea";
import { Container } from "./style";

export default function Main() {
    return(
        <Container>
            <RecipesArea/>
            <AboutArea/>
            <SubsArea />
        </Container>
    )
}
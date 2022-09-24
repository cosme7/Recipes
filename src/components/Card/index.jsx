import React from "react";
import { Container } from "./style";

export default function Card({image, title}) {
    return(
        <Container>
            <img src={image} alt={title}/>
            <h4>{title}</h4>
        </Container>
    )
}
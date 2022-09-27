import React from 'react';
import * as S from "./style"

export default function Mobile({open}) {
    return (
        <>
        <S.Mobile open={open}>
            <li><a href="#about" rel="noreferrer">About</a></li> 
            <li><a href="#recipes" rel="noreferrer">Recipes</a></li> 
            <li><a href="#subscribe" rel="noreferrer">Subscribe</a></li>  
        </S.Mobile>   
        </>
    );
}
import React from 'react';
import Menu from "./Menu"
import * as S from "./style"

export default function Navigation(){
    return (
        <>
        <nav>
        <Menu />
            <S.List>
                <li><a href="#about" rel="noreferrer">About</a></li> 
                <li><a href="#recipes" rel="noreferrer">Recipes</a></li> 
                <li><a href="#subscribe" rel="noreferrer">Subscribe</a></li> 
            </S.List>
        </nav>
        </>
    );
}
import React from 'react';
import Menu from "./Menu"
import * as S from "./style"

export default function Navigation(){
    return (
        <>
        <nav>
        <Menu />
            <S.List>
                <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">About</a></li> 
                <li><a href="https://www.youtube.com/watch?v=ZZ5LpwO-An4" target="_blank" rel="noreferrer">Recipes</a></li> 
                <li><a href="https://www.youtube.com/watch?v=HaGkk60kcjQ" target="_blank" rel="noreferrer">Subscribe</a></li> 
            </S.List>
        </nav>
        </>
    );
}
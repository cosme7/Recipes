import React from 'react';
import Instagram from "../../../Assets/footer_01.svg"
import Twitter from "../../../Assets/footer_02.svg"
import Facebook from "../../../Assets/footer_03.svg"
import Pinterest from "../../../Assets/footer_04.svg"
import * as S from "./style"

export default function index(){
    return (
        <>
        <S.Wrapper>
            <S.Social>
                <a href="https://www.youtube.com/watch?v=dv13gl0a-FA" target="_blank" rel="noreferrer"><img src={Instagram} alt="Instagram" /></a>
                <a href="https://www.youtube.com/watch?v=9jK-NcRmVcw" target="_blank" rel="noreferrer"><img src={Twitter} alt="Twitter" /></a>
                <a href="https://www.youtube.com/watch?v=nDhSMDEpeZA" target="_blank" rel="noreferrer"><img src={Facebook} alt="Facebook" /></a>
                <a href="https://www.youtube.com/watch?v=SfUUY5NpTdo" target="_blank" rel="noreferrer"><img src={Pinterest} alt="Pinterest" /></a>
            </S.Social>
            <nav>
                <S.List>
                    <li><a href="#about" rel="noreferrer">About</a></li> 
                    <li><a href="#recipes" rel="noreferrer">Recipes</a></li> 
                    <li><a href="#subscribe" rel="noreferrer">Subscribe</a></li>  
                </S.List>
            </nav>
        </S.Wrapper>   
        </>
    );
}
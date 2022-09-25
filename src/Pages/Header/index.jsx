import React from 'react';
import Logo from "../../Assets/header_00.svg"
import NavBar from '../../Components/NavBar';
import * as S from "./style"

export default function Footer() {
    return (
        <>
        <header>
            <S.Container>
                <S.Wrapper>
                    <S.NavWrapper>
                        <img src={Logo} alt="RC Logo" title="RC Logo" />
                        <S.Menu><span>Menu</span></S.Menu>
                        <NavBar />
                    </S.NavWrapper>
                     <h2>Recipes</h2>
                </S.Wrapper>
            </S.Container>
        </header>
        </>
    );
}
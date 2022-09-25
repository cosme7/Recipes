import React from 'react';
import Logo from "../../Assets/header_00.svg"
import {HeaderNav} from '../../components/Navigation/index';

import * as S from "./style"

export default function Footer() {
    return (
        <>
        <header>
            <S.Container>
                <S.Wrapper>
                    <S.NavWrapper>
                        <img src={Logo} alt="RC Logo" title="RC Logo" />
                        <HeaderNav />
                    </S.NavWrapper>
                     <h2>Recipes</h2>
                </S.Wrapper>
            </S.Container>
        </header>
        </>
    );
}
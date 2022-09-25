import React from 'react';
import Instagram from "../../Assets/footer_01.svg"
import Twitter from "../../Assets/footer_02.svg"
import Facebook from "../../Assets/footer_03.svg"
import Pinterest from "../../Assets/footer_04.svg"
import * as S from "./style"
import NavBar from "../../Components/NavBar"

export default function Footer() {
    return (
        <>
        <footer>
            <S.Container>
                <S.Wrapper>
                    <S.Social>
                        <a href="https://www.google.com.br/" target="_blank" rel="noreferrer"><img src={Instagram} alt="Instagram" /></a>
                        <a href="https://www.google.com.br/" target="_blank" rel="noreferrer"><img src={Twitter} alt="Twitter" /></a>
                        <a href="https://www.google.com.br/" target="_blank" rel="noreferrer"><img src={Facebook} alt="Facebook" /></a>
                        <a href="https://www.google.com.br/" target="_blank" rel="noreferrer"><img src={Pinterest} alt="Pinterest" /></a>
                    </S.Social>
                    <NavBar />
                </S.Wrapper>
                <S.Copyright>
                    <p>
                        Layout produzido por Vai na Web 
                        para fins exclusivamente educacionais. 
                        Referência: 
                        https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/
                    </p>
                </S.Copyright>
            </S.Container>
        </footer>
        </>
    );
}
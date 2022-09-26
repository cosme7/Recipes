import React from 'react';
import {FooterNav} from "../../Components/Navigation"
import * as S from "./style"

export default function Footer() {
    return (
        <>
        <footer>
            <S.Container>
                <FooterNav />
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
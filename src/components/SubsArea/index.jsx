import React from 'react';
import * as S from "./style"


export default function SubsArea() {
    return (
        <>
            <S.Container id='subscribe'>
                <h2>Subscribre</h2>
                <p>Sign up for newsletter</p>
                <S.Form>
                    <input type="email" name="email" placeholder='Your Email'/>
                    <input type="button" value="Submit" />
                </S.Form>
            </S.Container>
        </>
    );
}
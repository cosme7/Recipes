import React, {useState} from 'react';
import Mobile from './Mobile';
import * as S from "./style"

export default function Menu(){

    const [open, setOpen] = useState (false)

    return (
        <>
        <S.Burguer onClick={() => setOpen(!open)}><span>Menu</span></S.Burguer>
        <Mobile />
        </>
    );
}
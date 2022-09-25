import React, {useState} from 'react';
import Mobile from './Mobile';
import * as S from "./style"

export default function Menu(){

    const [open, setOpen] = useState (false)

    const toggleMenu = () => {
      setOpen (!open)
    }

    return (
        <>
        <S.Burger open={open} onClick={() => {toggleMenu()}}><span>Menu</span></S.Burger>
        <Mobile open={open} />
        </>
    );
}
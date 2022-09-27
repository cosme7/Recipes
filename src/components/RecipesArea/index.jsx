import React from "react";

import Cake from '../../Assets/main_01.png';
import Pizza from '../../Assets/main_02.png';
import Smoothie from '../../Assets/main_03.png';

import * as C from './style';
import Title from "../Title";
import Card from '../Card';


export default function RecipesArea() {
    return(
        <C.Container id="recipes">
            <Title title={`latest recipes`}/>
            <C.AreaCards>
                <Card image={Cake} title={`Red Velvet Cake`}/>
                <Card image={Pizza} title={`Margherita Pizza`}/>
                <Card image={Smoothie} title={`Peanut Smoothie`}/>
            </C.AreaCards>
        </C.Container>
    )
}
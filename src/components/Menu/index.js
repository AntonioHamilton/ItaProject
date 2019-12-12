import React from 'react';

import {ContainerMenu, Logo, NavBar, ItemMenu} from './style'

import logo from '../../assets/images/Logo.png'

const items = [
    "teste", "teste", "teste", "teste"
]

const Menu = () => (
    <ContainerMenu>
        <Logo href="/"><img src={logo} alt="logo"/></Logo>
        <NavBar>
            {items.map((item, index)=>(
                <ItemMenu width={100/items.length} key={index}>teste</ItemMenu>
            ))}
        </NavBar>
    </ContainerMenu>
)

export default Menu;
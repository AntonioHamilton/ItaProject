import React from 'react';

import {ContainerMenu, NavBar, ItemMenu, WrapIcons, Icon, Logo, Image} from './style'

import logo from '../../assets/images/Logo.png'

const items = [
    "teste", "teste", "teste", "teste"
]

const Menu = () => (
    <ContainerMenu>
        <Logo href="/" style={{height: '60%'}}><Image src={logo}/></Logo>
        <NavBar>
            {items.map((item, index)=>(
                <ItemMenu key={index}>HOME</ItemMenu>
            ))}
        </NavBar>
        <WrapIcons>
            <Icon/>
            <Icon/>
            <Icon/>
            <Icon/>
        </WrapIcons>
    </ContainerMenu>
)

export default Menu;
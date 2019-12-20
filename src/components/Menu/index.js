import React, { useState } from 'react';
import {HamburgerButton} from 'react-hamburger-button'
import {ContainerMenu, NavBar, ItemMenu, WrapIcons, Icon, Logo, Image, HamburgerStyle, WrapLogo, WrapNavBar} from './style'

import logo from '../../assets/images/Logo.png'

const origin = window.location.origin;
const local = window.location.href;

let items = []

if (window.location.href === `${origin}/admin` || window.location.href === `${origin}/admin/postar`) {
    items = [
        {name: 'ADMINISTRAR', href: '/admin'},
        {name: 'PUBLICAR', href: '/admin/postar'},
        {name: 'HOME', href: '/'},
    ]
}
else {
    items = [
        {name: 'HOME', href: '#slide'},
        {name: 'POSTAGENS', href: '#posts'},
        {name: 'LOCALIZAÇÃO', href: '#map'},
        {name: 'CONTATO', href: '#footer'},
        {name: 'LOGIN', href: '/accounts'},
    ]
}

const Menu = () => {
    
    const [enable, setEnable] = useState(false)

    return (
        <>
            <HamburgerStyle local={local} origin={origin}>
                <HamburgerButton
                    open={enable}
                    onClick = {() => setEnable(!enable)}
                    width={25}
                    height={25}
                    strokeWidth={4}
                    color='white'
                    animationDuration={0.5}
                />
            </HamburgerStyle>
            <ContainerMenu enable={enable} local={local} origin={origin}>
                <WrapLogo>
                    <Logo href="/">
                        <Image src={logo}/>
                    </Logo>
                </WrapLogo>
                <WrapNavBar enable={enable}>
                    <NavBar>
                        {items.map((item, index)=>(
                            <ItemMenu onClick = {() => setEnable(!enable)} key={index} href={`${item.href}`}>{item.name}</ItemMenu>
                        ))}
                    </NavBar>
                    <WrapIcons>
                        <Icon/>
                        <Icon/>
                        <Icon/>
                        <Icon/>
                    </WrapIcons>
                </WrapNavBar>
            </ContainerMenu>
        </>
    )
}

export default Menu;
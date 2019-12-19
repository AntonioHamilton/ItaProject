import React, { useState } from 'react';
import {HamburgerButton} from 'react-hamburger-button'
import {ContainerMenu, NavBar, ItemMenu, WrapIcons, Icon, Logo, Image, HamburgerStyle, WrapLogo, WrapNavBar} from './style'

import logo from '../../assets/images/Logo.png'

const origin = window.location.origin;

let items = []

console.log(window.location.href)
console.log(window.location.origin)

if (window.location.href == `${origin}/`) {
    items = [
        {name: 'HOME', href: '/#SlideShow'},
        {name: 'POSTAGENS', href: '/#Posts'},
        {name: 'LOCALIZAÇÃO', href: '/#Map'},
        {name: 'CONTATO', href: '/#Footer'},
        {name: 'LOGIN', href: '/admin'},
    ]
}
else {
    items = [
        {name: 'HOME', href: '/'},
        {name: 'PUBLICAR', href: '/admin/postar'},
        {name: 'POSTAGENS', href: '/admin'},
    ]
}

const Menu = () => {
    
    const [enable, setEnable] = useState(false)

    return (
        <>
            <HamburgerStyle>
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
            <ContainerMenu enable={enable}>
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
import React from 'react'
import { Container, Anchor } from './style'

const Footer = () => (
    <Container>
        <p style={{color:'white', fontSize: '12px', textAlign:'center'}}>Cléverton &copy; 2019</p>
        <p style={{color:'white', fontSize: '12px', textAlign:'center'}}>Desenvolvido por <Anchor href="https://github.com/AntonioHamilton">Antonio Hamilton</Anchor></p>
    </Container>
)

export default Footer;
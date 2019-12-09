import React from 'react'
import { TextPresH2 as Text } from '../Presentation/style'
import { Container } from './style'

const Footer = () => (
    <Container>
        <Text style={{color:'white', fontSize: '12px', textAlign:'center'}}>Cléverton &copy; 2019</Text>
        <Text style={{color:'white', fontSize: '12px', textAlign:'center'}}>Desenvolvido por Antonio Hamilton</Text>
    </Container>
)

export default Footer;
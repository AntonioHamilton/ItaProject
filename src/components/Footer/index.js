import React from 'react'
import { Container, Anchor, Text, WrapLeft, WrapRight, Wrap } from './style'

const Footer = () => (
    <Container>
        <Wrap>
            <WrapLeft> 
                <Text style={{fontSize: '18px', fontWeight: 'bold'}}>Parna</Text>
                <Text>Parque Nacional Serra de Itabaiana</Text>
                <Text>Itabaiana - Sergipe</Text>
            </WrapLeft>
            <WrapRight>
                <Text style={{backgroundColor: '#F17B2D', padding: '5px 3px 5px', marginBottom: '10px',textAlign: 'center'}}>+55 (79) 99999-9999</Text>
                <Text style={{backgroundColor: '#F17B2D', padding: '5px 3px 5px',textAlign: 'center'}}>email@contato.com.br</Text>
            </WrapRight>
        </Wrap>
        <Wrap style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize:'12px'}}>
            <Text>Cléverton &copy; 2019</Text>
            <Text Style={{marginBottom: '20px'}}>Desenvolvido por <Anchor href="https://github.com/AntonioHamilton">Antonio Hamilton</Anchor></Text>
        </Wrap>
    </Container>
)

export default Footer;
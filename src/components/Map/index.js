import React from 'react'

import {Container, Title, Frame} from './style'

import Serra from '../../assets/images/someImgs/Serra4.jpeg'

const Map = (data) => (
    <Container style={{backgroundImage:`URL(${Serra})`}} id={data.id}>
        <Title>VENHA NOS VISITAR!</Title>
        <Frame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62710.639921710266!2d-37.317251734039196!3d-10.779493452441418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70ffed0112cc8db%3A0x1d7445c62f906466!2sParque%20Nacional%20da%20Serra%20de%20Itabaiana!5e0!3m2!1spt-BR!2sbr!4v1576728141001!5m2!1spt-BR!2sbr" frameborder="0" allowfullscreen=""></Frame>
    </Container>
)

export default Map;


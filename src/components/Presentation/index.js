import React from 'react';

//Import Components
import {Container, Title, TextPresH2, InfoContainer, InfoImg} from './style.js'

//Import images
import InfoImg1 from '../../assets/images/InfoImg1.png'
import InfoImg2 from '../../assets/images/InfoImg2.png'

const informations = [
    { 
        info: 'Itabaiana é um município brasileiro do estado de Sergipe. localizado na Mesorregião do Agreste Sergipano e na Microrregião do Agreste de Itabaiana. É a quarta maior cidade de Sergipe, ficando a 54 km da capital',
        image: InfoImg1,
        top: 30,
        float: 'left',
    },
    { 
        info: 'Identificada por lei, a cidade do interior de Sergipe teria o maior número de caminhões por pessoa do Brasil',
        image: InfoImg2,
        top: 50,
        float: 'right',
    }
]

const Presentation = () => (
    <Container>
        <Title>Itabaiana como nunca vista antes!</Title>
        {informations.map((item, index)=>(
            <InfoContainer pos={item.top} float={item.float} key={index}>
                    <InfoImg src={item.image}/> 
                    <TextPresH2>
                        {item.info}
                    </TextPresH2>
            </InfoContainer>
        ))}
    </Container>
)

export default Presentation;

/*
*/
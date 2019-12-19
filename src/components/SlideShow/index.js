import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/cube-animation'

import {Container, WrapProject} from './style'

import img1 from '../../assets/images/someImgs/Serra5.png'
import img2 from '../../assets/images/someImgs/Serra6.png'
import img3 from '../../assets/images/someImgs/Serra7.png'

const Slider = () => (
    <Container>
        <WrapProject>
            <AwesomeSlider cssModule={AwesomeSliderStyles}>
                <img data-src={img1} alt="img1"/>
                <img data-src={img2} alt="img2"/>
                <img data-src={img3} alt="img3"/>
            </AwesomeSlider>
        </WrapProject>
    </Container>
)

export default Slider;
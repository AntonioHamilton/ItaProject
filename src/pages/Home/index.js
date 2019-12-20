import React from 'react'

import {Container} from './style'

import SlideShow from '../../components/SlideShow/index'
import Posts from '../../components/Posts/index'
import Footer from '../../components/Footer/index'
import Map from '../../components/Map/index';

const Home = () => (
    <>
        <Container>
            <SlideShow id="slide"/>
            <Posts id="posts"/>
            <Map id="map"/>
            <Footer id="footer"/>
        </Container>
    </>
)

export default Home;

//<Presentation/>
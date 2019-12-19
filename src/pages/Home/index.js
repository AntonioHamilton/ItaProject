import React from 'react'

import {Container} from './style'

import SlideShow from '../../components/SlideShow/index'
import Posts from '../../components/Posts/index'
import Footer from '../../components/Footer/index'
import Map from '../../components/Map/index';

const Home = () => (
    <Container>
        <SlideShow/>
        <Posts/>
        <Map/>
        <Footer/>
    </Container>
)

export default Home;

//<Presentation/>
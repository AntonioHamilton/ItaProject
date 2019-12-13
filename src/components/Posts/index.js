import React, {Component} from 'react';

import api from '../../services/api'

import {Container, WrapPost, Image, WrapText, Text, Cards} from './style'

export default class Posts extends Component {

    state = {
        feed: [],
        pictures: []
    }

    async componentDidMount () {
        const response = await api.get('posts');
        this.setState({feed: response.data});
    }

    render () {
        return (
            <Container>
                <Cards>
                {this.state.feed.map((item, index)=>(
                    <WrapPost key={index}>
                        <Image src={`data:image/jpeg;base64,${item.image}`}/>
                        <WrapText>
                            <Text style={{fontWeight: 100, fontSize: '15px'}}>Autor: {item.author}</Text>
                            <Text>{item.title}</Text>
                        </WrapText>
                    </WrapPost>
                ))}
                </Cards>
            </Container>
        )
    }
}

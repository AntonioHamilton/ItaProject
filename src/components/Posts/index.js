import React, {Component} from 'react';

import api from '../../services/api'

import {Container, WrapPost, Image, WrapText, Text, Cards, Publish, PostImage, PostText, ButtonClose, PostTitle} from './style'

export default class Posts extends Component {
    state = {
        feed: [],
        display: '',
        index: 0,
        newPost: {}
    }

    async componentDidMount () {
        const response = await api.get('posts');

        this.setState({feed: response.data});
    }

    handleClick = async e => {
        await this.setState({index: e.target.dataset.index})
        const newPost = {
            title: this.state.feed[this.state.index].title,
            image: this.state.feed[this.state.index].image,
            description: this.state.feed[this.state.index].description,
        }
        this.setState({newPost: newPost});
        this.setState({display: 'true'});
    }

    render () {
        return (
            <>
                <Text style={{alignSelf: 'center'}}>POSTAGENS</Text>
                <Container display={this.state.display} id={this.props.id}>
                    <Publish className="OpenPost" show={this.state.display}>
                        <ButtonClose onClick={() => this.setState({display: ''})}><img src="https://img.icons8.com/plasticine/40/000000/back.png"/></ButtonClose>
                        <PostTitle style={{paddingBottom:'0px'}}>{this.state.newPost.title}</PostTitle>
                        <PostImage src={`data:image/jpeg;base64,${this.state.newPost.image}`}/>
                        <PostText>{this.state.newPost.description}</PostText>
                    </Publish>
                    <Cards>
                    {this.state.feed.map((item, index)=>(
                        <WrapPost key={index}>
                            <Image src={`data:image/jpeg;base64,${item.image}`} data-index={index} onClick={this.handleClick}/>
                            <WrapText>
                                <Text style={{fontWeight: 100, fontSize: '15px'}}>Autor: {item.author}</Text>
                                <Text>{item.title}</Text>
                            </WrapText>
                        </WrapPost>
                    ))}
                    </Cards>
                </Container>
            </>
        )
    }
}

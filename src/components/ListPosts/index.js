import React from 'react'
import { useEffect, useState } from 'react';
import api from '../../services/api'

import {Container, List, Image, Text, Button, WrapPost} from './style'

const ListPost = () => {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        (async () => {
            const response = await api.get('posts');
            setPosts(response.data);
        })()
    }, [])

    const deletePost = (e) => {
        api.delete(`posts/${e.target.dataset.id}`)
    }

    const editPost = (e) => {
        console.log(e.target.dataset.id)
    }

    return (
        <Container>
            <Text style={{marginLeft: '69.5vh', fontWeight: 900, fontSize: 'x-large'}}>TODAS AS POSTAGENS</Text>
            <List>
                {posts.map((item, index)=>(
                    <WrapPost  key={index}>
                        <Image src={`data:image/jpeg;base64,${item.image}`}/>
                        <Text>{item.title}</Text>
                        <Button onClick={deletePost} data-id={item._id}>X</Button>
                        <Button onClick={editPost} data-id={item._id}>EDIT</Button>
                    </WrapPost>
                ))}
            </List>
        </Container>
    )
}

export default ListPost;
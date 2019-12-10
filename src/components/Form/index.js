import React from 'react'
import {Container} from '../Presentation/style'
import {InputForm, InputDescription, PostForm} from './style'

const Form = () => (
    <Container style={{marginTop:"20px"}}>
        <PostForm>
            <InputForm type="file" />
            <InputForm type="text" placeholder="Title"/>
            <InputDescription type="text" placeholder="Description"/>
            <InputForm type="text" placeholder="Author"/>
        </PostForm>
    </Container>
)

export default Form;
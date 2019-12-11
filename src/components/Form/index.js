import React from 'react'
import {Container} from '../Presentation/style'
import {InputForm, InputDescription, PostForm, ButtonForm} from './style'

const Form = () => {

    return (
        <Container style={{marginTop:"20px"}}>
            <PostForm>
                <ButtonForm>Inserir foto</ButtonForm>
                <InputForm type="file"/>
                <InputForm type="text" placeholder="Title" style={{fontSize:"40px"}} />
                <InputDescription type="text" placeholder="Description"/>
                <InputForm type="text" placeholder="Author"/>
            </PostForm>
        </Container>
    )
}
    

export default Form;
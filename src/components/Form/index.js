import React, { useState } from 'react'
import {Container, InputForm, InputDescription, PostForm, ButtonForm} from './style'
import api from '../../services/api'

import background from '../../assets/images/PublishBackground.png'

const Form = () => {
    
    const [Info, setInfo] = useState({
        File: null,
        Title: '',
        Description: '',
        Author: '',
    })

    const [fileName, setFileName] = useState('')

    const handleForm = async (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append('image', Info.File);
        data.append('title', Info.Title);
        data.append('description', Info.Description);
        data.append('author', Info.Author);

        await api.post('posts', data);

        window.location.href = `${window.location.origin}/admin`
    }

    const handleImage = (e) => {
        e.preventDefault();
        const newInfo = Info;
        newInfo[e.target.name] = e.target.files[0];
        setInfo(newInfo);
        setFileName(newInfo.File.name)
    }

    const handleChange = (e) => {
        const newInfo = Info;
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    return (
        <Container style={{marginTop:"0px", backgroundColor:'none', backgroundImage:`URL(${background})`, height: '100%'}} form='true'>
            <PostForm>
                <ButtonForm onClick={(e)=>{e.preventDefault()}}>Inserir foto</ButtonForm>
                <InputForm name="File" type="file" onChange={handleImage} />
                <p style = {{marginTop: '-15px', marginBottom: '10px', color:'White'}}>{fileName ? fileName : 'Escolha um arquivo'}</p>
                <InputForm name="Title" type="text" placeholder="Título" style={{fontSize:"40px"}} onChange={handleChange} />
                <InputDescription name="Description" type="text" placeholder="Resumo" wrap="hard" onChange={handleChange}/>
                <InputForm name="Author" type="text" placeholder="Autor do texto" onChange={handleChange}/>
                <ButtonForm style={{width: "150px"}} onClick={handleForm}>Publicar</ButtonForm>
            </PostForm>
        </Container>
    )
}
    

export default Form;
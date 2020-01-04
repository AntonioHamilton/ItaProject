import React, { useState } from 'react';
import api from '../../services/api'

import {Container, WrapLogin, WrapSign, Sign, Sign2, WrapForm, WrapInput, Input, Button, Text, Logo, Image} from './style'
import background from '../../assets/images/someImgs/background.jpg'
import logo from '../../assets/images/Logo.png'

const Accounts = () => {
    const Inputs = [
        {name: "USERNAME", type: "text", placehold: "usuário"},
        {name: "PASSWORD", type: "password", placehold: "senha"},
    ]

    const ButtonName = ['Entrar', 'Cadastrar']

    const [SignIn, setSignIn] = useState(true)
    const [form, setForm] = useState([{
        username: '',
        password: ''
    }])

    const HandleChange = (e) => {
        let newForm = form;
        newForm[e.target.name.toLowerCase()] = e.target.value
        setForm(newForm);
        console.log(form);
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        if (SignIn === true) {
	        api.post('login', {login: form.username, password: form.password})
	        .then((response)=> {
	            window.location.href = `${window.location.origin}/admin`
	        })
	        .catch((err) => console.log(err))	
        } else {
        	api.post('user', {login: form.username, password: form.password})
	        .then((response)=> {
	            window.location.href = `${window.location.origin}/admin`
	        })
	        .catch((err) => console.log(err))
        }
        
    }

    return (
        <Container>
            <WrapLogin background={background}>
                <Logo href='/'><Image src={logo}/></Logo>
                <WrapSign>
                    <Sign className="entrar" SignIn={SignIn} onClick={()=>setSignIn(true)}>Entrar</Sign>
                    <Sign2 className="cadastrar" SignIn={SignIn} onClick={()=>setSignIn(false)}>Cadastrar</Sign2>
                </WrapSign>
                <WrapForm onSubmit={HandleSubmit}>
                    {Inputs.map((item, index)=>
                        (
                            <WrapInput key={index}>
                                <Text>{item.name}</Text>
                                <Input name={item.name} placeholder={item.placehold} type={item.type} onChange={HandleChange}/>
                            </WrapInput>
                        )
                    )}
                    <Button>{SignIn === true ? ButtonName[0] : ButtonName[1]}</Button>
                </WrapForm>
            </WrapLogin>
        </Container>
    )
}

export default Accounts;

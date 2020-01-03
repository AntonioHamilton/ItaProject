import styled from 'styled-components'

export const Container = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(to right, #8e9eab, #eef2f3);
    color: #f4f4f4;
`

export const WrapLogin = styled.div `
    width: 60vh;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    background-image: URL(${({background}) => background});
    background-repeat: no-repeat;
    background-size:cover;
    box-shadow: 10px 10px 20px black;
`

export const WrapSign = styled.div `
    display: flex;
    margin-bottom: 40px;
    align-self: self-start;
    margin-left: 6.4vh;
    @media(max-height: 620px) {
        margin-bottom: 0px;
    }
`

export const Sign = styled.a `
    cursor: pointer;
    transition: all 1s linear;
    margin: 20px 20px;
    font-size: 20px;
    font-weight: bolder;
    outline: none;
    text-decoration: ${({SignIn}) => SignIn === true ? 'underline' : 'none'};
`


export const Sign2 = styled.a `
    cursor: pointer;
    transition: all 1s linear;
    margin: 20px 20px;
    font-size: 20px;
    font-weight: bolder;
    outline: none;
    text-decoration: ${({SignIn}) => SignIn === false ? 'underline' : 'none'};
`

export const WrapForm = styled.form `
    text-align: center;
    margin-bottom: 135px;
    @media(max-height: 850px) {
        margin-bottom: 80px;
    }
    @media(max-height: 675px) {
        margin-bottom: 50px;
    }
`

export const WrapInput = styled.div `
    margin: 10px auto;
`

export const Input = styled.input `
    border: none;
    padding: 10px;
    border-radius: 200px;
    width: 70%;
    opacity: 0.5;
    font-size: 14px;
    margin-bottom: 10px;
`

export const Text = styled.p `
    font-size: 15px;
    font-weight: bolder;
    margin-bottom: 5px;
    margin-left: 9vh;
    text-align: start;
`

export const Button = styled.button `
    outline: none;
    border: none;
    border-radius: 200px;
    font-size: 20px;
    background-color: #383cc1;
    color: white;
    padding: 5px;
    width: 74%;
    margin-top: 40px;
    cursor: pointer;
    box-shadow: 2px 3px 1px #2c31de;
    :hover {
        background-color: #2c31de;
    }
    :active {
        position:relative;
        top:1px;
    }
`

export const Logo = styled.a `
    display: flex;
    align-self: center;
    margin-bottom: 100px;
    @media(max-height: 850px) {
        margin-bottom: 0px;
    }
`

export const Image = styled.img `

`
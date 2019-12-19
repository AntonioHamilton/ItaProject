import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    height: 100%;
    height: ${({form})=> form ? '900px' : '100%'};
    margin-top: 40px;
    @media(max-width: 850px) {
        margin-top: 50px;
        height: auto;
        width: auto;
    }
`

export const InputForm = styled.input `
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    color: #000000;
    padding: ${({name}) => name === 'Title' ? '10px' : '10px'};
    border: none;
    height: ${({type})=> type === 'file' ? '35px' : '30px'};
    outline: none;
    font-family: unset;
    font-size: 18px;
    margin-bottom: ${({type})=> type === 'file' ? '0' : '0px'};
    width: ${({type})=> type === 'file' ? '67' : '95'}%;
    font-family: medium-content-title-font, Georgia, Cambria,"Times New Roman",Times, serif;
    position: ${({type})=> type === 'file' ? 'absolute' : 'relative'};
    top: ${({type})=> type === 'file' ? '9px' : '0'};
    opacity: ${({type})=> type === 'file' ? 0 : 1};
    cursor: ${({type})=> type === 'file' ? 'pointer' : 'auto'};
    align-self: center;
    @media(max-width: 600px) {
        top: ${({type})=> type === 'file' ? '104px' : '0'};
        padding: 0px;
        width: ${({type})=> type === 'file' ? '100' : '95'}%;
    }
`

export const ButtonForm = styled.button `
    padding: 10px;
    font-size: 18px;
    background-color: #3498db;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    margin: 20px 0px 20px 0px;
    padding: 6px 20px;
    width: 96.5%;
    outline: none;
    border: none;
`

export const InputDescription = styled.textarea `
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    color: #000000;
    border: none;
    min-height: 60%;
    width: 95%;
    min-width: 95%;
    font-family: unset;
    font-size: 19px;
    outline: none;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 10px;
    height: auto;
    resize: none;
    cursor: auto;
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: #000000;
        border-radius: 50px;
    }
    ::-webkit-scrollbar-track {
        background: #fff;
    }
    @media(max-width: 850px){
        min-height: 500px;
    }
    @media(max-width: 600px) {
        padding: 0px;
    }
    font-family: medium-content-title-font,Georgia,Cambria,"Times New Roman",Times,serif;
`

export const PostForm = styled.form `
    display: flex;
    flex-direction: column;
    text-align: -webkit-center;
    align-self: center;
    width: 70%;
    height: 100%;
    font-family: unset;
    outline: none;
    font-family: medium-content-title-font,Georgia,Cambria,"Times New Roman",Times,serif;
    @media(max-width: 600px) {
        width: 95%;
    }
    @media(max-width: 600px) {
        width: 100%;
    }
`
import styled from 'styled-components';

export const InputForm = styled.input `
    border: none;
    height: 30px;
    outline: none;
    font-family: unset;
    font-size: 18px;
    margin-bottom: 10px;
    width: 100%;
    font-family: medium-content-title-font, Georgia, Cambria,"Times New Roman",Times, serif;
    position: ${({type})=> type === 'file' ? 'absolute' : 'relative'};
    top: ${({type})=> type === 'file' ? '32px' : '0'};
    opacity: ${({type})=> type === 'file' ? 0 : 1};
    cursor: ${({type})=> type === 'file' ? 'pointer' : 'auto'};
`

export const ButtonForm = styled.button `
    font-size: 18px;
    background-color: #3498db;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    margin: 20px 0px 50px 0px;
    padding: 6px 20px;
    width: 100%;
`

export const InputDescription = styled.textarea `
    border: none;
    min-height: 70%;
    width: 100%;
    min-width: 100%;
    font-family: unset;
    font-size: 19px;
    outline: none;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 0;
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
`
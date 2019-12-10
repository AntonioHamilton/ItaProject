import styled from 'styled-components';

export const InputForm = styled.input `
    border: none;
    height: 30px;
    outline: none;
    font-family: unset;
    font-size: 18px;
    margin-bottom: 5px;
    width: 100%;
`

export const InputDescription = styled.textarea `
    border: none;
    min-height: 80%;
    width: 100%;
    min-width: 100%;
    font-family: unset;
    font-size: 19px;
    outline: none;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 0;
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
`
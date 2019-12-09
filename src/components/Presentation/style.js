import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    height: 100%;
    margin-top: 40px;
    @media(max-width: 850px) {
        margin-top: 50px;
        height: auto;
        width: auto;
    }
`

export const ImgPres = styled.img `
    width: 100%;
    height: 100%;
    opacity: 1;
    position: absolute;
`

export const InfoContainer = styled.div `
    align-items: center;
    display: flex;
    position: relative;
    width: 70%;
    height: auto;
    margin-bottom: 5%;
    align-self: center;
    justify-content: center;
    @media (max-width: 1360px) {
        width: 100%;
        margin-left: 0px;
        justify-content: center;
    }
    @media (max-width: 850px) {
        height: auto;
        flex-direction: column;
        width: 100%;
    }
`

export const InfoImg = styled.img `
    height: 200px;
    width: 300px;
    border-radius: 300px;
    @media (max-width: 850px) {
        height: 50%;
        width: 50%;
        margin-bottom: 15px;
    }
`

export const Title = styled.h1 `
    position: relative;
    color: black;
    width: 100%;
    font-size: 50px;
    text-align: -webkit-center;
    margin-bottom: 50px;
    @media (max-width: 850px) {
        font-size: 30px;
        margin-bottom: 20px;
    }
`

export const TextPresH2 = styled.h2 `
    margin-left: 2%;
    color: black;
    width: 50%;
    text-align: justify;
    @media (max-width: 850px) {
        font-size: 18px;
        width: 80%
    }
`
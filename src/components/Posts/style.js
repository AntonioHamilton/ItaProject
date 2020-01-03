import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
`

export const Cards = styled.div `
    width: 80%;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    margin-bottom: 20px;
    @media(max-width: 1250px) {
        grid-template-columns: repeat(3, 33%);
    }
    @media(max-width: 1000px) {
        grid-template-columns: repeat(2, 50%);
    }
    @media(max-width: 750px) {
        grid-template-columns: repeat(1, 100%);
    }
    @media(max-width: 350px) {
        width: 100%;
    }
`

export const WrapPost = styled.div `
    padding: 25px 0px;
    background-color: white;
`

export const Image = styled.img `
    transition: all 1s;
    margin-bottom: 5px;
    height: 210px;
    width: 200px;
    :hover {
        transform: translate(5px, 5px);
        border-style: solid;
        box-shadow: 2px 1px 1px black; 
    }
`

export const WrapText = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 210px;
    margin-left: auto;
    margin-right: auto;
`

export const Text = styled.h1 `
    max-width: 210px;
`

export const Publish = styled.div `
    overflow: scroll;
    display: ${({show}) => show ? 'flex' : 'none'};
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    background-color: black;
    color: white;
    z-index: 2000;
    padding: 50px 0px;
    left: 0;
    background: #e2e0d8;

    color: black;
`

export const PostImage = styled.img `
    width: auto;
    height: 85%;
    align-self: center;
    @media (max-width: 800px) {
        width:  100%;
        height: auto;
    }
`
export const PostTitle = styled.h1 `
    margin: 20px 5%;
    font-size: 50px;
    @media(max-width: 800px) {
        padding-bottom: 0px;
        background: rgba(0, 0, 0, 0.4);
        left: 0;
        margin: 0;
        font-size: 20px;
        width: 100%;
        padding-left: 5px;
        color: white;
        font-weight: 100;
    }
`

export const PostText = styled.p `
    font-size: 20px;
    padding: 10px 200px 300px;
    margin: 0px 5%;
    text-align: left;
    @media(max-width: 1400px) {
        padding: 10px 50px 300px;
    }
    @media(max-width: 800px) {
        font-size: 17px;
        padding: 10px 0px 300px;
        margin: 0px 1%;
    }
    @media(max-width: 500px) {
        font-size: 14px;
    }
`

export const ButtonClose = styled.button `
    position: fixed;
    width: auto;
    height: auto;
    left: 5px;
    top: 10px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    transition: all .2s;
    :hover {
        transform: translateX(10px);
    }
    :active {
        transform: translateX(10px);
    }
`
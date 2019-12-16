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
    @media(max-width: 1100px) {
        grid-template-columns: repeat(3, 33%);
    }
    @media(max-width: 850px) {
        grid-template-columns: repeat(2, 50%);
    }
    @media(max-width: 550px) {
        grid-template-columns: repeat(1, 100%);
    }
    @media(max-width: 350px) {
        width: 100%;
    }
`

export const WrapPost = styled.div `
    padding: 20px 0px;
`

export const Image = styled.img `
    transition: all 1s;
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
    z-index: 20;
    padding: 20px;
`

export const PostImage = styled.img `
    width: auto;
    height: 85%;
    align-self: center;
    @media (max-width: 800px) {
        width:  50%;
        height: auto;
    }
`

export const PostText = styled.h1 `
    padding-bottom: 300px;
    padding-top: 50px;
    margin: 0px 5%;
`

export const ButtonClose = styled.button `
    position: fixed;
    width: 20px;
    height: 20px;
    left: 5%;
`
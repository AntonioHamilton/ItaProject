import styled from 'styled-components';

export const Container = styled.div `

`

export const List = styled.div `
    margin: 30px 0px 10px 0px;
    @media(max-width: 850px) {
        margin: 60px 0px 10px 0px;
    }
    @media(max-width: 600px) {
        margin: 90px 0px 10px 0px;
    }
`

export const WrapPost = styled.div `
    display: flex;
    height: 100px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    justify-content: start;
    margin-left: 70vh;
    border-radius: 200px;
`

export const Image = styled.img `
    height: 100px;
    width: 100px;
    margin-right: 20px;
`

export const Text = styled.p `
    margin-right: 20px;
`

export const Button = styled.button `
    margin-right: 10px;

`
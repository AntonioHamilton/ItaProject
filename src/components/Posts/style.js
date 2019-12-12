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
`

export const WrapPost = styled.div `
    padding: 20px 0px;
`

export const Image = styled.img `
    transition: all 1s;
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
    
`

export const Text = styled.h1 `
    max-width: 250px;
`
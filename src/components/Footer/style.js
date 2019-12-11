import styled from 'styled-components'

export const Container = styled.div `
    height: 100px;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Anchor = styled.a `
    text-decoration: none; 
    color: white;
    :hover {
        text-decoration: underline; 
        color: blueviolet;
    }
`
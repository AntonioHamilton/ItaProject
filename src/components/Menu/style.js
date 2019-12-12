import styled from 'styled-components'

export const ContainerMenu = styled.div `
    background-color: #FF914D;
    display: flex;
    align-items: center;
`

export const Logo = styled.a `
    padding: 10px;
    height: auto;
    margin-left: 5%;
    margin-right: 40%;
`


export const NavBar = styled.div `
    display: flex;
    height: auto;
    width: 40%;
    justify-content: space-between;
`

export const ItemMenu = styled.a `
    padding-top: 3%;
    padding-bottom: 3%;
    width: ${({width}) => width}%;
    justify-content: center;
    font-size: 20px;
    display: flex;
    align-items: center;
    transition: all 0.5s;
    border-left-style: solid;
    height: 100%;
    border-color: rgba(0, 0, 0, 1);
    :hover {
        font-size: 25px;
        color: white;
    }
`
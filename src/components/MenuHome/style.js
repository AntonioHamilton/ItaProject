import styled from 'styled-components'

export const ContainerMenu = styled.div `
    background-color: #F17B2D;
    display: flex;
    width: 200px;
    height: 100vh;
    position: sticky;
    top: 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(max-width: 550px) {
        display:none;
    }
`

export const Logo = styled.a `
    height: auto;
`


export const NavBar = styled.div `
    flex-direction: column;
    align-content: center;
    width: 150px;
    height: 50%;
    display: flex;
    height: auto;
    width: 40%;
    justify-content: space-between;
`

export const ItemMenu = styled.a `
    color: white;
    padding-top: 3%;
    padding-bottom: 3%;
    justify-content: center;
    line-height: 2.1rem;
    font-size: 1.0rem;
    height: 2.5rem;
    font-weight: bolder;
    display: flex;
    align-items: center;
    transition: all 0.5s;
    height: 100%;
    border-color: rgba(0, 0, 0, 1);
    cursor: pointer;
    :hover {
        background-color: black;
        font-size: 15px;
        color: #F17B2D;
    }
`

export const WrapIcons = styled.div `
    display: flex;
    margin-top: 20px;
`

export const Icon = styled.img `
    border-radius: 300px;
    margin: 0px 3px;
    width: 28px;
    height: 28px;
    background-color: white;
`

export const Image = styled.img `

`
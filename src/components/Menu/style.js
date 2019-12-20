import styled from 'styled-components'

export const ContainerMenu = styled.div `
    background-color: #F17B2D;
    display: ${({local, origin}) => `${local}` === `${origin}/accounts` ? 'none' : 'flex'};
    width: 200px;
    height: 100vh;
    position: sticky;
    top: 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(max-width: 550px) {
        flex-direction: row;
        height: 10vh;
        width: 100%;
        z-index: 20;
    }
    @media(max-height: 600px) {
        height: 70px;
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
    width: 100%;
    justify-content: space-between;
    @media(max-width: 550px) {
        margin-top: 118vh;
    }
`

export const ItemMenu = styled.a `
    text-decoration: none;
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
    @media(max-width: 550px) {
        align-self:center;
    }
`

export const Icon = styled.img `
    border-radius: 300px;
    margin: 0px 3px;
    width: 28px;
    height: 28px;
    background-color: white;
`

export const Image = styled.img `
    @media(max-width: 550px) {
        width: 15vh;
        margin: 20px 0px;
        height: 100px;
        width: 100px;
    }
`

export const HamburgerStyle = styled.div `
    display:none;
    @media (max-width: 550px) {
        display: ${({local, origin}) => `${local}` === `${origin}/accounts` ? 'none' : 'flex'};
        position: fixed;
        top: 0;
        left: 6px;
        padding: 10px;
        z-index: 40;
        margin: 15px 0px;
    }
`

export const WrapLogo = styled.div `
    margin-top: -100px;
    height: 60%;
    @media (max-height: 500px) {
        height: auto;
        margin-top: -50px;
    }
`

export const WrapNavBar = styled.div `
    text-align: -webkit-center;
    position: relative;
    @media (max-width: 550px) {
        position: absolute; 
        display: flex;
        flex-direction: column;
        background-color: #F17B2D;
        left: ${({enable}) => enable ? 0 : -600}px;
        width: 100%;
        height: 200vh;
        transition: .5s linear;
    }
`
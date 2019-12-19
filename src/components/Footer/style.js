import styled from 'styled-components'

export const Container = styled.div `
    height: auto;
    background-color: #333333;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const Anchor = styled.a `
    text-decoration: none; 
    color: white;
    :hover {
        text-decoration: underline; 
        color: blueviolet;
    }
`

export const WrapLeft = styled.div `
    width: 74%;
    margin-left: 50px;
    margin-right: 20px;
    @media(max-width: 600px) {
        margin-left: 0
    }
`

export const WrapRight = styled.div `
    margin-right: 50px;
    @media(max-width: 600px) {
        margin: 0
    }
`

export const Text = styled.p `
    color:'white'; 
    font-size: '15px';
    text-align:'center';
`

export const Wrap = styled.div `
    margin: 20px 0px;
    display: flex;
    width: 100%;
    align-items: center;
    place-content: space-between;
`
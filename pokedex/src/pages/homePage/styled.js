import styled from 'styled-components'

const HeaderContainer = styled.div`
display: flex;
background-color: black;
padding: 10px;
box-shadow: 2px 3px 3px rgba(0,0,0, 0.4);
margin-bottom: 10px;
`
const LogoPokemon = styled.img`
max-width: 100%;
width: 200px;
cursor: pointer;

`

const DivContainer = styled.div`

width: 57.5%;
display: flex;
justify-content: space-between;
align-items: center;
`


export {
    HeaderContainer,
    LogoPokemon,
    DivContainer
   
}
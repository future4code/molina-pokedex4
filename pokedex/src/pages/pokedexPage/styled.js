import styled from 'styled-components'

const HeaderContainer = styled.div`
display: flex;
background-color: black;
padding: 10px;
box-shadow: 2px 3px 3px rgba(0,0,0, 0.4);
margin-bottom: 10px;
`

const ContainerConteudo = styled.div`
  max-width: 100%;
  width: 1120px;
  margin: 0 auto;

  h1{
    margin: 60px 0 20px 0;
    color: white;
  }
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

const DivCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`


export {
    HeaderContainer,
    LogoPokemon,
    DivContainer,
    ContainerConteudo,
    DivCards   
}
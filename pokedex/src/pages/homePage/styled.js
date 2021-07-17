import styled from "styled-components";

const ContainerConteudo = styled.div`
  max-width: 100%;
  width: 1160px;
  margin: 0 auto;

  h1{
    margin: 60px 0 20px 0;
    color: white;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  background-color: #0a0a0a;
  padding: 15px;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.4);
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

const DivCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px ;
`

export { ContainerConteudo, HeaderContainer, LogoPokemon, DivContainer, DivCards };

import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background-color: #202020;
`
export const LogoPokemon = styled.img`
    width: 150px;
    margin-left: 30px;
    
`
export const ButtonTeste = styled.button`
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: #F1362F;
  overflow: hidden;
  transition: color 0.4s ease-in-out;
  margin-right: 30px;

::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 100%;
  left: 100%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #3cefff;
  transform-origin: center;
  transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

:hover {
  cursor: pointer;
  color: #F1362F;
}

:hover::before {
  transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
}
`




import React from 'react'
import {HeaderContainer, LogoPokemon} from './styled'
import Botão from '../button/Button'
import { useHistory } from 'react-router'

const Header = () => {
    return (
        <HeaderContainer>
            <LogoPokemon src='https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1' alt='Logo-Pokemon' />  
            <Botão texto='Ir para pkedex' />
        </HeaderContainer>
    )
}

export default Header

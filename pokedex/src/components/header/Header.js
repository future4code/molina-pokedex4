import React from 'react'
import {HeaderContainer, LogoPokemon} from './styled'
import {useHistory} from 'react-router-dom'

const Header = () => {

    const history = useHistory()

    const irParaHome = () => {
        history.push('/')
    }
    return (
        <HeaderContainer>
            <LogoPokemon onClick={irParaHome} src='https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1' alt='Logo-Pokemon' />  
            
        </HeaderContainer>
    )
}

export default Header

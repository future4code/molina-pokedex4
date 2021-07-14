import React from 'react'
import Footer from '../../components/footer/Footer'
import {useHistory} from 'react-router-dom'
import { HeaderContainer, LogoPokemon, DivContainer } from './styled'
import Botão from '../../components/botao/Botao'

const HomePage = () => {

    const history = useHistory()

    const irParaPokedex = () =>{
        history.push('/pokedex')
    }

    return (
        <div>
               <HeaderContainer>
                <DivContainer>
                    <Botão onClick={irParaPokedex} nome="Ir para Pokedex" />
                    <LogoPokemon src='https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1' alt='Logo-Pokemon' />
                </DivContainer>

            </HeaderContainer>
            
            <h1>Home</h1>
            <Footer/>
        </div>
    )
}

export default HomePage

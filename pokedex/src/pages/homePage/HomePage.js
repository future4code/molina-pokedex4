import React, { useContext } from 'react'
import Footer from '../../components/footer/Footer'
import {useHistory} from 'react-router-dom'
import { HeaderContainer, LogoPokemon, DivContainer, DivCards } from './styled'
import {GlobalStateContext} from '../../global/GlobalStateContext'
import Botão from '../../components/botao/Botao'
import PokeCard from '../../components/pokecard/PokeCard'

const HomePage = () => {

    const history = useHistory()

    const irParaPokedex = () =>{
        history.push('/pokedex')
    }

    const pokemons = useContext(GlobalStateContext)

    console.log('estado', pokemons)

    return (
        <div>
            <HeaderContainer>
                <DivContainer>
                    <Botão onClick={irParaPokedex} nome="Ir para Pokedex" />
                    <LogoPokemon src='https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1' alt='Logo-Pokemon' />
                </DivContainer>
            </HeaderContainer>
            
            <h1>Lista de Pokemons</h1>
            <DivCards>
                {pokemons.pokemons.map(({id, name})=>{
                    return(
                        <PokeCard
                            name={name}
                            id={id}

                        />
                    )
                })}
            </DivCards>
            <Footer/>
        </div>
    )
}

export default HomePage

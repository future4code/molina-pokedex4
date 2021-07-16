import React, { useContext } from 'react'
import Footer from '../../components/footer/Footer'
import { useHistory } from 'react-router-dom'
import Botão from '../../components/botao/Botao'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import PokeCard from '../../components/pokecard/PokeCard'
import { HeaderContainer, LogoPokemon, DivContainer, ContainerConteudo, DivCards } from './styled'


const PokedexPage = () => {

    const pokemons = useContext(GlobalStateContext)

    const history = useHistory()

    const irParaHome = () => {
        history.push('/')
    }

    const pokedex = pokemons.pokedex

    /* console.log('POKEDEX', pokedex) */

    return (
        <div>

            <HeaderContainer>
                <DivContainer>
                    <Botão onClick={irParaHome} nome="Voltar para Home" />
                    <LogoPokemon src='https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1' alt='Logo-Pokemon' />
                </DivContainer>

            </HeaderContainer>

            <ContainerConteudo>
                <h1>Pokedex</h1>
                <DivCards>
                    {pokedex.map((pokemon) => {
                        return <PokeCard
                            key={pokemon.id}
                            nome={pokemon.name}
                            imagem={pokemon.sprites.front_default}
                            tipo={pokemon.types.map((tipo, index) => {
                                return (
                                    <span key={index}> -{tipo.type.name}</span>
                                )
                            })}

                        />
                    })}


                </DivCards>
            </ContainerConteudo>
            <Footer />
        </div>
    )
}

export default PokedexPage

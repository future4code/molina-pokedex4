import React, { useContext } from 'react'
import Footer from '../../components/footer/Footer'
import { useHistory } from 'react-router-dom'
import { ContainerConteudo, HeaderContainer, LogoPokemon, DivContainer, DivCards } from './styled'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import Botão from '../../components/botao/Botao'
import PokeCard from '../../components/pokecard/PokeCard'

const HomePage = () => {
    const history = useHistory()
    const global = useContext(GlobalStateContext)
   
    const irParaPokedex = () => {
        history.push('/pokedex')
    }

    const addPokedex = ((pokemon) => {
        alert(`${pokemon.name} adicionado a pokedex!`)
        global.setPokedex([...global.pokedex, pokemon])
    })

    const detalhes = (pokeNome) => {
        history.push(`/details/${pokeNome}`)
    }

    const pokemonsFiltrados = global.pokemons.filter((pokemon) => {
        const pokedex = global.pokedex.find((pokemonEscolhido) => {
            if (pokemon.id === pokemonEscolhido.id) {
                return true
            } else {
                return false
            }
        })

        if (pokedex) {
            return false
        } else {
            return true
        }
    })


    return (
        <div>
            <HeaderContainer>
                <DivContainer>
                    <div>
                        <Botão onClick={irParaPokedex} nome="Ir para Pokedex" />
                    </div>
                    <LogoPokemon src='https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1' alt='Logo-Pokemon' />
                </DivContainer>
            </HeaderContainer>
            <ContainerConteudo>
                <h1>Lista de Pokemons</h1>
                <DivCards>
                    {pokemonsFiltrados.map((pokemon) => {
                        return (
                            <PokeCard
                                key={pokemon.id}
                                nome={pokemon.name}
                                id={pokemon.id}
                                imagem={pokemon.sprites.front_default}
                                tipo={pokemon.types.map((tipo, index) => {
                                    return (
                                        <span key={index}> -{tipo.type.name}</span>
                                    )
                                })}
                                nomeBotaoEsquerdo="+ pokedex"
                                onClickPokedex={() => addPokedex(pokemon)}
                                onClickDetalhes={() => detalhes(pokemon.name)}
                            />
                        )
                    })}
                </DivCards>
            </ContainerConteudo>
            <Footer />
        </div>
    )
}
export default HomePage
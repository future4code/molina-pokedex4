import React, { useContext, useEffect, /* useState */ } from 'react'
import Footer from '../../components/footer/Footer'
import { useHistory } from 'react-router-dom'
import { ContainerConteudo, HeaderContainer, LogoPokemon, DivContainer, DivCards } from './styled'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import Botão from '../../components/botao/Botao'
import PokeCard from '../../components/pokecard/PokeCard'

const HomePage = () => {

    const history = useHistory()

    const irParaPokedex = () => {
        history.push('/pokedex')
    }

    const pokemons = useContext(GlobalStateContext)

    /* const pokemon = pokemons.pokemons
    const pokedex = pokemons.pokedex
 */

    console.log('POKEMONS', pokemons.pokemons)

    console.log('POKEDEX', pokemons.pokedex)

    /*  useEffect(()=>{
         const pokemonsFiltrados = pokemons.pokemons.filter((pokemon) =>{
             return pokemon.pokemons !== pokemon.pokedex
             
         })
         
         
     }, [pokemons.pokedex]) */


    const addPokedex = ((pokemon) => {
        alert(`${pokemon.name} adicionado a pokedex!`)
        pokemons.setPokedex([...pokemons.pokedex, pokemon])
        /* pokemons.setPokemons([...pokemons.pokemons, pokemons.pokemons.filter((pokemon) => {
            return pokemon.pokemons !== pokemon.pokedex

        }) ]) */

        /* const indice = pokemons.pokemons.indexOf(pokemon.name) 
        const pokemonRemovidoHome = pokemons.pokemons.splice(pokemon.id, 1)
       
       console.log('POKEMON REMOVIDO', pokemonRemovidoHome)  */


    })


  /*   const pokemonsFiltrados = pokemons.pokemons.filter((pokemon) => {
        const pokedex = pokemons.pokedex.find((pokemonEscolhido) => {
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

    }) */



    return (
        <div>
            <HeaderContainer>
                <DivContainer>
                    <Botão onClick={irParaPokedex} nome="Ir para Pokedex" />
                    <LogoPokemon src='https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1' alt='Logo-Pokemon' />
                </DivContainer>
            </HeaderContainer>

            <ContainerConteudo>
                <h1>Lista de Pokemons</h1>
                <DivCards>
                    {pokemons.pokemons.map((pokemon) => {
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
                                hp={pokemon.stats[0].base_stat}
                                att={pokemon.stats[1].base_stat}
                                def={pokemon.stats[2].base_stat}
                                nomeBotaoEsquerdo="+ pokedex"
                                onClickPokedex={() => addPokedex(pokemon)}
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

import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import {useHistory} from 'react-router-dom'
import { ContainerConteudo, HeaderContainer, LogoPokemon, DivContainer, DivCards } from './styled'
import {GlobalStateContext} from '../../global/GlobalStateContext'
import Botão from '../../components/botao/Botao'
import PokeCard from '../../components/pokecard/PokeCard'

const HomePage = () => {

   const history = useHistory()
   const pokemons = useContext(GlobalStateContext)
      
    const irParaPokedex = () =>{
        history.push('/pokedex')
    }


    const addPokedex = (()=>{
        alert('Adicionado')
      
    const pokemons = useContext(GlobalStateContext)
    
    
     console.log('POKEDEX', pokemons.pokedex) 

    const addPokedex = ((pokemon)=>{
        alert(`${pokemon.name} adicionado a pokedex!`)
        pokemons.setPokedex([...pokemons.pokedex, pokemon]) 
        
    })

    const detalhes = (pokeNome) =>{
        history.push(`/details/${pokeNome}`)
        console.log(pokeNome)
    }

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
                    {pokemons.pokemons.map((pokemon)=>{
                        return(
                            <PokeCard
                                key={pokemon.id}
                                nome={pokemon.name}
                                id={pokemon.id}
                                imagem={pokemon.sprites.front_default}
                                tipo={pokemon.types.map((tipo, index)=>{
                                    return(
                                       <span key={index}> -{tipo.type.name}</span> 
                                    )
                                } )}

                                onClickPokedex={addPokedex}
                                onClickDetalhes={()=>detalhes(pokemon.name)}

                            />
                        )
                    })}
                </DivCards>
            </ContainerConteudo>
            <Footer/>
        </div>
    )
}

export default HomePage

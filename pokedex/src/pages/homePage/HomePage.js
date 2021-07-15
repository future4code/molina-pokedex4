import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import {useHistory} from 'react-router-dom'
import { ContainerConteudo, HeaderContainer, LogoPokemon, DivContainer, DivCards } from './styled'
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
            
            <ContainerConteudo>
                <h1>Lista de Pokemons</h1>
                <DivCards>
                    {pokemons.pokemons.map(({name,id, sprites, types, stats})=>{
                        return(
                            <PokeCard
                                nome={name}
                                id={id}
                                imagem={sprites.front_default}
                                //tipo={types.map((tipo, index)=>{
                                //    return(
                                //       <p key={index}>{tipo.type}</p> 
                                //    )
                                //} )}
                                hp={stats[0].base_stat}
                                att={stats[1].base_stat}
                                def={stats[2].base_stat}

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

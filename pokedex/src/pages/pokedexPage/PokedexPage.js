import React, { useContext, useEffect } from 'react'
import Footer from '../../components/footer/Footer'
import { useHistory } from 'react-router-dom'
import Botão from '../../components/botao/Botao'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import PokeCard from '../../components/pokecard/PokeCard'
import { HeaderContainer, LogoPokemon, DivContainer, ContainerConteudo, DivCards, PokedexVazia, Titulo } from './styled'


const PokedexPage = () => {

    const pokemons = useContext(GlobalStateContext)

    const history = useHistory()

    const irParaHome = () => {
        history.push('/')
    }

    
    
    console.log('Pokedex', pokemons.pokedex)

    
    const removePokemon = (index) => {
        let novaPokedex = [...pokemons.pokedex]
        novaPokedex.splice(index, 1)

        pokemons.setPokedex(novaPokedex)

    }
   
       

    return (
        <div>

            <HeaderContainer>
                <DivContainer>
                    <Botão onClick={irParaHome} nome="Voltar para Home" />
                    <LogoPokemon src='https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1' alt='Logo-Pokemon' />
                </DivContainer>

            </HeaderContainer>

            <ContainerConteudo>
                <Titulo>Pokedex</Titulo>
                <DivCards>
                    {pokemons.pokedex.length > 0 ? 
                    pokemons.pokedex.map((pokemon, index) => {
                        return <PokeCard
                            key={pokemon.id}
                            nome={pokemon.name}
                            imagem={pokemon.sprites.front_default}
                            tipo={pokemon.types.map((tipo, index) => {
                                return (
                                    <span key={index}> -{tipo.type.name}</span>
                                )
                            })}
                            nomeBotaoEsquerdo="Remover"
                            onClickPokedex={() => removePokemon(index)}

                        />
                    })

               : <PokedexVazia><h2>Nenhum pokemon foi adicionado a pokedex.</h2>
               <img src='https://www.pngall.com/wp-content/uploads/5/Cute-Pikachu-PNG-Clipart.png'/>
               </PokedexVazia> }


                </DivCards>
            </ContainerConteudo>
            <Footer />
        </div>
    )
}

export default PokedexPage
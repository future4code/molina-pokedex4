import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import {Botão, BotãoDiv} from './styled'
import {useHistory} from 'react-router-dom'

const PokedexPage = () => {

    const history = useHistory()

    const irParaHome = () => {
        history.push('/')
    }

    return (
        <div>
            <Header/>
            <BotãoDiv>
            <Botão onClick={irParaHome}>Ir Para Home</Botão>
            </BotãoDiv>
            <h1>Pokedex</h1>
            <Footer/>
        </div>
    )
}

export default PokedexPage

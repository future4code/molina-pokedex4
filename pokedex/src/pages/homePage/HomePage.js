import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import {useHistory} from 'react-router-dom'
import {Botão, BotãoDiv} from './styled'

const HomePage = () => {

    const history = useHistory()

    const irParaPokedex = () =>{
        history.push('/pokedex')
    }

    return (
        <div>
            <Header/>
            <BotãoDiv>
            <Botão onClick={irParaPokedex}>Ir para pokedex</Botão>
            </BotãoDiv>
            <h1>Home</h1>
            <Footer/>
        </div>
    )
}

export default HomePage

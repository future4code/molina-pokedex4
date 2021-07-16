import React from 'react'
import Footer from '../../components/footer/Footer'
import { HeaderContainer, LogoPokemon, DivContainer, ContainerConteudo } from './styled'
import Botão from '../../components/botao/Botao'
import {useHistory, useParams} from 'react-router-dom'
import axios from 'axios'

const DetailsPage = () => {
    const history = useHistory()
    const [pokeDetalhes, setPokeDetalhes] = React.useState()
    const {pokeNome} = useParams()
    
    React.useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNome}`)
        .then((res)=>{
            setPokeDetalhes(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[])

    return (
        <div>
            <HeaderContainer>
                <DivContainer>
                    <Botão onClick={()=>history.goBack()} nome="Voltar para Home" />
                    <LogoPokemon src='https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1' alt='Logo-Pokemon' />
                </DivContainer>
            </HeaderContainer>
           
            <ContainerConteudo>
                
                
            </ContainerConteudo>
            <Footer/>
        </div>
    )
}

export default DetailsPage

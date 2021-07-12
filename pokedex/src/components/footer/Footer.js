import React from 'react'
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineFacebook, AiFillTwitterSquare } from 'react-icons/ai'
import { FooterDiv, SobreDiv, Logo, Pokebola, Icone, RedeSocial, SiteDiv, StyledDiv } from './styled'





const Footer = () => {
    return (
        <FooterDiv>

            <SobreDiv>
                <Logo src={"https://bit.ly/3wD8P6d"} />

                <h3>Pokedex</h3>
                <p>Pokedex desenvolvida por: Igor Artagnan, João Pedro Lopes Rodrigues, Larissa Menezes e Raphael Nicolini da Silva, utilizando a API pública <a href={"https://pokeapi.co/"} target={'_blank'}>PokéAPI</a>.
                </p>

            </SobreDiv>
            <SiteDiv>
                <a href={"https://www.pokemon.com/br/"} target={'_blank'}> <Pokebola src={"https://bit.ly/2T5Y1jf"} /> </a>
                <h3>Site oficial</h3>

            </SiteDiv>




            <StyledDiv>
            <div>

                <h3>Nossas redes sociais</h3>

            </div>
            <RedeSocial>
                <Icone><AiOutlineInstagram /></Icone>
                <Icone><AiOutlineYoutube /></Icone>
                <Icone><AiOutlineFacebook /></Icone>
                <Icone><AiFillTwitterSquare /></Icone>

            </RedeSocial>

            </StyledDiv>


        </FooterDiv>
    )
}

export default Footer

import React from 'react'
import { Card, BgCor, DivNome, Nome, DivImg, Info, Tipo, DivHabilidades, Habilidades, DivBotao} from './styled'
import Botao from '../botao/Botao'

const PokeCard = () => {
    return (
        <div>
            <Card>
                <BgCor></BgCor>
                <DivImg>
                    <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png' alt='imagem do pokemon'/>
                </DivImg>
                
                <DivNome>
                    <Nome>Anna Marie</Nome>
                    <h6>#1</h6>
                </DivNome>
                
                <Info>
                    <Tipo>
                        <h5>Tipo</h5>
                        <p>Agua</p>
                    </Tipo>

                    <DivHabilidades>
                        <h5>Skills</h5>
                        <Habilidades>
                            <h5>HP <span>60</span></h5>
                            <h5>Att <span>70</span></h5>
                            <h5>Def <span>80</span></h5>
                        </Habilidades>
                    </DivHabilidades>
                </Info>

                <DivBotao>
                    <Botao
                        nome='+ Pokedex'
                    />
                    <Botao
                        nome='Detalhes'
                    />
                </DivBotao>
            </Card>
        </div>
    )
}

export default PokeCard

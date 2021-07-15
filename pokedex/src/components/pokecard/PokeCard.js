import React from 'react'
import { Card, BgCor, DivNome, Nome, DivImg, Info, Tipo, DivHabilidades, Habilidades, DivBotao} from './styled'
import Botao from '../botao/Botao'

const PokeCard = (props) => {
    return (
        <div>
            <Card>
                <BgCor></BgCor>
                <DivImg>
                    <img src={props.imagem} alt='imagem do pokemon'/>
                </DivImg>
                
                <DivNome>
                    <Nome>{props.nome}</Nome>
                    <h6>#{props.id}</h6>
                </DivNome>
                
                <Info>
                    <Tipo>
                        <h5>Tipo</h5>
                        <p>{props.tipo}</p>
                    </Tipo>

                    <DivHabilidades>
                        <h5>Skills</h5>
                        <Habilidades>
                            <h5>HP <span>{props.hp}</span></h5>
                            <h5>Att <span>{props.att}</span></h5>
                            <h5>Def <span>{props.def}</span></h5>
                        </Habilidades>
                    </DivHabilidades>
                </Info>

                <DivBotao>
                    <Botao
                        nome='+ Pokedex'
                        onClick={props.onClickPokedex}
                    />
                    <Botao
                        nome='Detalhes'
                        onClick={props.onClickDetalhes}
                    />
                </DivBotao>
            </Card>
        </div>
    )
}

export default PokeCard

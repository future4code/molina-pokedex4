import React from 'react'
import {BotãoEstilizado} from './styled'


const  Botao = (props) => {

    return <div>
        <BotãoEstilizado onClick={props.onClick}>{props.nome}</BotãoEstilizado>
        </div>

}

export default Botao
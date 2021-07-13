import React from 'react'
import {Botão} from './styled'

const Button = (props) => {

    const irPara = () => {
        console.log('certo')
    }

    return (
        <div>
            <Botão onClick={irPara}>{props.nome}</Botão>
        </div>
    )
}

export default Button

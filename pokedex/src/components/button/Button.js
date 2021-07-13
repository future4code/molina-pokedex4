import React from 'react'
import {Botão} from './styled'

const Button = (props) => {
    return (
        <div>
            <Botão>{props.nome}</Botão>
        </div>
    )
}

export default Button

import React from 'react'
import {Botão} from './styled'

const Button = (props) => {
    return (
        <div>
            <Botão onClick={props.onClick}>{props.texto}</Botão>
        </div>
    )
}

export default Button

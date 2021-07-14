import React, { useState, useEffect } from 'react'
import { GlobalStateContext } from './GlobalStateContext'
import axios from 'axios'

const GlobalState = (props) => {

    const [pokeNome, setPokeNome] = useState([])

useEffect(()=>{

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=51&offset=')
            .then((response) => {
                setPokeNome(response.data)

            })
            .catch((error) => {
                alert(error)
            })
   

}, [])
    
        

    return <GlobalStateContext.Provider value={pokeNome}>
        {props.children}
    </GlobalStateContext.Provider>

}

export default GlobalState
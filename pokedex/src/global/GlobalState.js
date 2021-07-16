import React, { useState, useEffect } from 'react'
import { GlobalStateContext } from './GlobalStateContext'
import axios from 'axios'

const GlobalState = (props) => {

    const [pokemons, setPokemons] = useState([])
   // const [tipos, setTipos] = useState([])
    useEffect(() => {
        // axios.get('https://pokeapi.co/api/v2/pokemon?limit=51&offset=')
        //     .then((response) => {
        //         setPokeNome(response.data.results)
        //     })
        //     .catch((error) => {
        //         alert(error)
        //     })
        
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=')
            .then((res) => {
                getPokemonDetail(res.data.results)
            })
            .catch((err) => { alert(err) })

            //setTipos(pokemons.types)
            //console.log(tipos)
    }, [])
       
        const getPokemonDetail = (array) => {
            for (let item of array) {
                axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
                    .then((res) => {
                        setPokemons((pokemons => [...pokemons, res.data]))
                    }).catch((err) => { alert(err) })
            }
        }

    // const getPokemonList = async () => {
    //     const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20%27')
    //     const names = await res.data.results

    //     const getPokemonDetail = async (array) => {
    //         for (let item of array) {
    //             const res = await axios.get(https://pokeapi.co/api/v2/pokemon/${item.name})
    //                 setPokemonDetailList((receivedInfo => [...receivedInfo, res.data]))
    //         }
    //     }
    //     getPokemonDetail(names)
    // }



    return <GlobalStateContext.Provider value={{ pokemons, setPokemons, /*tipos*/ }}>
        {props.children}
    </GlobalStateContext.Provider>

}

export default GlobalState
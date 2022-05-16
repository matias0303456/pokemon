import { useEffect, useState } from "react"

import pokemonService from "../services/pokemonService"

const usePokemons = () => {
  
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        pokemonService.getPokemons().then(data => setPokemons(data.results))
    }, [])

    return pokemons 
}

export default usePokemons
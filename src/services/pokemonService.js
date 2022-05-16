import urls from "../utilities/urls"

const pokemonService = {

    getPokemons: async () => {
        const res = await fetch(urls.pokemon + '/pokemon/?limit=152', {
            method: 'GET'
        })
        return res.json()
    }

}

export default pokemonService
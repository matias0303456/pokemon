import usePokemons from '../../../hooks/usePokemons'
import '../../../styles/pages/home/components/pokeList.css'
import { open } from '../../../utilities/modalMethods'

const PokeList = () => {

  const pokemons = usePokemons()

  return (

    <ul>
      {pokemons.map((poke, pokeIdx) => {
        return (
          <li key={pokeIdx} onClick={() => open('pokeProfile')}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIdx + 1}.png`}
              alt={`Frente de ${poke.name}`}
            />
            {/* <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokeIdx + 1}.png`}
              alt={`Dorso de ${poke.name}`}
            /> */}
            <p >
              {poke.name}
            </p>
          </li>
        )
      })}
    </ul>

  )
}

export default PokeList
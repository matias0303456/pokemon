import usePokemons from '../../../hooks/usePokemons'
import '../../../styles/pages/home/components/pokeList.css'
import { open } from '../../../utilities/modalMethods'

const PokeList = ({
  setPokeId,
  setSelectedPoke
}) => {

  const pokemons = usePokemons()

  return (

    <ul>
      {pokemons.map((poke, pokeIdx) => {
        return (
          <li key={pokeIdx} onClick={() => {
            setPokeId(pokeIdx + 1)
            setSelectedPoke(poke)
            open('pokeProfile')
          }}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeIdx + 1}.png`}
              alt={`Frente de ${poke.name}`}
            />
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
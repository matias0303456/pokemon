import { close } from "../../../utilities/modalMethods"
import '../../../styles/pages/home/components/pokeProfile.css'
import { useContext } from "react"
import UserContext from "../../../contexts/UserContext"
import favoriteService from "../../../services/favoriteService"

const PokeProfile = ({
    pokeId,
    selectedPoke
}) => {

    const { user } = useContext(UserContext)

    const saveFavorite = () => {
        favoriteService.saveFavorite({
            userId: user.id,
            pokemonId: pokeId
        })
            .then(res => console.log(res))
    }

    return (
        <dialog id='pokeProfile'>

            <h3>{selectedPoke.name}</h3>

            <button type="button" onClick={() => saveFavorite()}>Marcar como favorito</button>

            <button type="button">Eliminar de favoritos</button>

            {pokeId !== null &&
                <div>
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`}
                        alt={`Frente de ${selectedPoke.name}`}
                    />
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokeId}.png`}
                        alt={`Dorso de ${selectedPoke.name}`}
                    />
                </div>
            }

            <button
                type='button'
                onClick={() => close('pokeProfile')}
            >
                Cerrar
            </button>

        </dialog>
    )
}

export default PokeProfile
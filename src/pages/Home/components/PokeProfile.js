import { close } from "../../../utilities/modalMethods"
import '../../../styles/pages/home/components/pokeProfile.css'

const PokeProfile = () => {
    return (
        <dialog id='pokeProfile'>

            <h3>nombre del pokemon</h3>

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
import { useContext } from "react"

import UserContext from '../../contexts/UserContext'
import authService from "../../services/authService"
import { close } from "../../utilities/modalMethods"

export default function Register() {

    const { user, setUser } = useContext(UserContext)

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        authService.register(user).then(finnishProcess())
    }

    const finnishProcess = () => {
        setUser({})
        document.getElementById('registerForm').reset()
        close('registerModal')
    }

    return (
        <dialog id="registerModal">
            <form id="registerForm" onChange={e => handleChange(e)} onSubmit={e => handleSubmit(e)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="nickname">Usuario</label>
                    <input type="text" name="nickname" />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" />
                </div>
                <div>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
            <button
                type="button"
                onClick={() => finnishProcess()}
            >
                Cerrar
            </button>
        </dialog>
    )
}
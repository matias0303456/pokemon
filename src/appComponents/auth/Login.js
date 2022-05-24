import { useContext, useState } from "react"

import UserContext from '../../contexts/UserContext'
import authService from "../../services/authService"
import { close } from "../../utilities/modalMethods"

export default function Login() {

    const { setUser } = useContext(UserContext)

    const [auth, setAuth] = useState({})

    const handleChange = e => {
        setAuth({
            ...auth,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        authService.login(auth)
            .then(res => {
                localStorage.setItem('user', JSON.stringify(res.user))
                setUser(res.user)
                finnishProcess()
            })
    }

    const finnishProcess = () => {
        document.getElementById('loginForm').reset()
        close('loginModal')
    }

    return (
        <dialog id="loginModal">
            <form id="loginForm" onChange={e => handleChange(e)} onSubmit={e => handleSubmit(e)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
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
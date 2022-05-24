import '../../styles/appComponents/layout/header.css'
import Register from '../auth/Register'
import Login from '../auth/Login'
import { open } from '../../utilities/modalMethods'
import { useContext } from 'react'
import UserContext from '../../contexts/UserContext'

const Header = () => {

  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <header>
        <h1>Pokémon</h1>
        <nav>
          <ul>
            {user !== null &&
              <li>
                <span>
                  Mis favoritos
                </span>
              </li>
            }
            {user !== null &&
              <li>
                Hola {user.nickname}
              </li>
            }
          </ul>
          <div>
            {user === null ?
              <>
                <button
                  type='button'
                  onClick={() => open('registerModal')}
                >
                  Registrarse
                </button>
                <button
                  type='button'
                  onClick={() => open('loginModal')}
                >
                  Iniciar sesión
                </button>
              </> :
              <button
                type='button'
                onClick={() => {
                  setUser(null)
                  localStorage.clear()
                }}
              >
                Salir
              </button>
            }
          </div>
        </nav>
      </header>
      <Register />
      <Login />
    </>
  )
}

export default Header
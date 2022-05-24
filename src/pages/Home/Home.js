import React, { useState } from 'react'

import Header from '../../appComponents/layout/Header'
import '../../styles/pages/home/home.css'
import PokeList from './components/PokeList'
import PokeProfile from './components/PokeProfile'

const Home = () => {

    const [pokeId, setPokeId] = useState(null)
    const [selectedPoke, setSelectedPoke] = useState({})

    return (
        <>
            <Header />

            <PokeList
                setPokeId={setPokeId}
                setSelectedPoke={setSelectedPoke}
            />

            <PokeProfile
                pokeId={pokeId}
                selectedPoke={selectedPoke}
            />
        </>
    )
}

export default Home
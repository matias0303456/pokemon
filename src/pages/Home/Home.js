import React from 'react'

import Header from '../../appComponents/layout/Header'
import '../../styles/pages/home/home.css'
import PokeList from './components/PokeList'
import PokeProfile from './components/PokeProfile'

const Home = () => {

    return (
        <>
            <Header />

            <PokeList />

            <PokeProfile />
        </>
    )
}

export default Home
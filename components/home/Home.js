import React from 'react'
import {View} from 'react-native'
import CardsPokedex from './CardsPokedex'
import pokemons from '../../helpers/Pokemons.js'
const Home = () => {

    const list = pokemons.results
    .map(elemento => (
        <CardsPokedex nome = {elemento.name} id={elemento.id} urlImage = {elemento.image}/>
    ))

    return(
        <View>  
            {list}
        </View>
    )
}

export default Home;
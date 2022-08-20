import React from 'react'
import { PokemonCard } from '../PokemonCard/PokemonCard.component';

import './PokemonList.scss'


export const PokemonList = ({ pokemons }:any) => {
  return (
    <div className='pokemon-list'>
      {
        pokemons?.map(({name, sprites, types, id, favorite}:any) => {
          return <PokemonCard
            name={name}
            img={sprites.front_default}
            types={types}
            id={id}
            favorite={favorite}
            key={name}
          />
        })
      }
    </div>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill('')
}

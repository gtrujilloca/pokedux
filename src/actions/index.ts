import { PokemonActions } from './IPokemonActions';
import { Types } from "./types";
import { getRequestAPI } from '../api/index';
import { CancelTokenSource } from "axios";


export const setPokemons = (payload:any): PokemonActions =>  ({
  type: Types.SET_POKEMONS,
  payload
})

export const setLoading = (payload:any): PokemonActions => ({
  type: Types.SET_LOADING,
  payload
})

export const setFavorite = (payload:any): PokemonActions => ({
  type: Types.SET_FAVORITE,
  payload
})

export const getPokemonsWithDetails = (pokemons:any[] = [], cancelToken: CancelTokenSource) => async(dispatch:any) => {

  const pokemonDetails = await Promise.allSettled(
    pokemons.map((pokemon:any) => getRequestAPI(pokemon.url, cancelToken))
  )

  const filteredData: any[] = []

  pokemonDetails.forEach((p:any) => {
    if(p.status === "fulfilled")
       filteredData.push(p.value)
  })

  dispatch(setPokemons(filteredData))
}
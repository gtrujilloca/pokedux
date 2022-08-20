import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CancelTokenSource } from 'axios';
import { getRequestAPI } from '../api/index';
import { setLoading } from './ui';

const initialState = {
  pokemons: []
}

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (cancelToken: CancelTokenSource, { dispatch }) => {
    //dispatch loader

    dispatch(setLoading(true));
    const response = await getRequestAPI('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',cancelToken)
    const pokemonRes = response?.results;


    const pokemonDetails = await Promise.allSettled(
      pokemonRes.map((pokemon:any) => getRequestAPI(pokemon.url, cancelToken))
    )

    const filteredData: any[] = []

    pokemonDetails.forEach((p:any) => {
      if(p.status === "fulfilled")
        filteredData.push(p.value)
    })

    dispatch(setPokemons(filteredData));
    dispatch(setLoading(false));
  }
)

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload
    },
    setFavorite: (state:any, action) => {
      const pokemonIndex = state.pokemons.findIndex((pk:any) => pk.id === action.payload)

      if(pokemonIndex >= 0) {
        const isFavorite = state.pokemons[pokemonIndex]?.favorite
        state.pokemons[pokemonIndex].favorite = !isFavorite;
      }
    }
  }
})

export const { setPokemons, setFavorite } = dataSlice.actions;

export default dataSlice.reducer;
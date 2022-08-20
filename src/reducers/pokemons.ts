import { fromJS, setIn } from "immutable";
import { PokemonActions } from "../actions/IPokemonActions"
import { Types } from "../actions/types"
import Immutable from 'immutable';


const initialState = fromJS({
  pokemons: [],
})

export const pokemonsReducer = (state:Immutable.Collection<any,any> = initialState, action:PokemonActions) => {

  switch(action.type){
    case Types.SET_POKEMONS:
      return setIn(state, ['pokemons'], fromJS(action.payload))

    case Types.SET_FAVORITE:
      const pokemonIndex = state.get('pokemons').findIndex((pk:any) => pk.get('id') === action.payload)
      const isFavorite = state.getIn(['pokemons', pokemonIndex, 'favorite'])

      return setIn(state, ['pokemons', pokemonIndex, 'favorite'], !isFavorite);

    default:
      return state;
  }
}
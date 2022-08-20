import { fromJS, setIn } from "immutable";
import { PokemonActions } from "../actions/IPokemonActions"
import { Types } from "../actions/types"
import Immutable from 'immutable';


const initialState = fromJS({
  loading: false
})

export const uiReducer = (state:Immutable.Collection<any,any> = initialState, action:PokemonActions) => {

  switch(action.type){

    case Types.SET_LOADING:
      return setIn(state, ['loading'], fromJS(action.payload))

    default:
      return state;
  }
}
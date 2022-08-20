import {
  combineReducers
} from 'redux';
import uiReducer from '../slices/ui';
import dataReducer from '../slices/data';


export const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer
})
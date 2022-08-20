import { useEffect } from 'react'
import axios, { CancelTokenSource } from 'axios';

import { Col, Spin } from 'antd'

import logo from './assets/logo.svg';

import { Search } from './components/Searcher/Search.component';
import { PokemonList } from './components/PokemonList/PokemonList.component';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import './App.css'
import { fetchPokemonsWithDetails } from './slices/data';

function App() {

  const pokemons = useSelector((state:any) =>
    state.data.pokemons,
    shallowEqual
  )
  const loading = useSelector((state:any) =>
    state.ui.loading
  )


  const dispatch = useDispatch();

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch(fetchPokemonsWithDetails(cancelToken))

    return () => {
      cancelToken.cancel();
    }
  }, [])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <figure className='logo'>
          <img src={logo} alt="logo" />
        </figure>
      </Col>
      <Col span={8} offset={8}>
        <Search />
      </Col>
      {
        loading
        ? (
            <Col offset={0}>
              <Spin spinning size='large' />
            </Col>
          )
        : (<PokemonList pokemons={pokemons}/>)
      }
    </div>
  )
}


export default App

import React from 'react'
import { Input } from 'antd'
import { useDispatch } from 'react-redux';
import { setFilter } from '../../slices/data';

export const Search = () => {

  const dispatch = useDispatch();

  const handleSearch = (e:any) => {
    dispatch(setFilter(e.target.value))
  }

  return (
    <Input.Search placeholder='Search...' className='searcher' onChange={handleSearch}/>
  )
}

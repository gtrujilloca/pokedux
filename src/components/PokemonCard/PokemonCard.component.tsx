import React from 'react'
import { useDispatch } from 'react-redux';
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import { StarButton } from '../StarButton/StarButton.component'
import { setFavorite } from '../../slices/data';


const joinAbilities = (types:any[]) => {
  return types.map(type => type.type.name).join(', ')
}

export const PokemonCard = ({name, img, types, id, favorite}:any) => {

  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(setFavorite(id));
  }

  return (
    <Card
      title={name}
      cover={<img src={img} alt={name}/>}
      extra={<StarButton isFavorite={favorite} onClick={handleFavorite}/>}
    >
      <Meta description={joinAbilities(types)}/>
    </Card>
  )
}

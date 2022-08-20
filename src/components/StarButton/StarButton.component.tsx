import React, { MouseEventHandler } from 'react'
import { Button } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';

interface IStar {
  isFavorite: boolean;
  onClick: MouseEventHandler
}
export const StarButton = ({ isFavorite, onClick }:IStar) => {

  const Icon = isFavorite ? StarFilled : StarOutlined
  return (
    <Button icon={<Icon />} onClick={onClick}>

    </Button>
  )
}

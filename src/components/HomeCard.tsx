import React from 'react'
import { Link } from 'react-router-dom'

interface CardData {
  
}

type TState = {stores: TStore[]; greeeting: string}
type TStoresProps = {users: TStore[] | undefined}
type TStore = {
  name: string,
  address: string,
  type: string
}



export interface IHomeCardProps {
  name: string,
  address: string,
  type: string,
};

export const HomeCard: React.FunctionComponent<IHomeCardProps> = (store: TStore, key: number) => {
  
  const {name, address, type} = store

  return (
    <div className='card-home'>
      <img src="./img/icon-es.png" alt="Establecimiento" />
      <div>
        <h2>{name}</h2>
        <h4>{type}</h4>
        <p>{address}</p>
      </div>
    </div>
  )
}


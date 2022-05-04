import React from 'react'
import { Link } from 'react-router-dom'

interface CardData {
  
}

type TState = {stores: TStore[]; greeeting: string}
type TStoresProps = {users: TStore[] | undefined}
type TStore = {
  id: string;
  name?: string,
  address?: string,
  type?: string,
  images?: string[]
}



export interface IHomeCardProps {
  id: string;
  name?: string,
  address?: string,
  type?: string,
  images?: string[];
};

export const HomeCard: React.FunctionComponent<IHomeCardProps | undefined> = (store: TStore, key: number) => {
  
  const {id,name, address, type, images} = store

  return (
    <Link to={`/store/${id}`} className='card-home'>
      <img src={images && images[0]? images[0] : "/img/icon-es.png"} alt="Establecimiento" />
      <div>
        <h2>{name}</h2>
        <h4>{type}</h4>
        <p>{address}</p>
      </div>
      <button><i className='bx bx-heart'></i></button>
    </Link>
  )
}


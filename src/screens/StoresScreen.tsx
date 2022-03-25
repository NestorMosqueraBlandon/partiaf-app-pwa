import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/header/Header'
import { HomeCard } from '../components/HomeCard'

export interface IStoreScreenProps {};

export const StoreScreen: React.FunctionComponent<IStoreScreenProps> = (props) => {
  return (
    <div className='background'>
      <Header />
      <div className="sub-header">
        <button><i className='bx bx-filter' ></i> Filtrar</button>
        <button> Cambiar categoria</button>
      </div>

      <HomeCard />
    </div>
  )
}


import React from 'react'
import { Link } from 'react-router-dom'

export interface IHomeCardProps {};

export const HomeCard: React.FunctionComponent<IHomeCardProps> = (props) => {
  return (
    <div className='card-home'>
      <img src="./img/icon-es.png" alt="Establecimiento" />
      <div>
        <h2>Bar la 70</h2>
        <h4>Medellin</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim reiciendis repudiandae.</p>
      </div>
    </div>
  )
}


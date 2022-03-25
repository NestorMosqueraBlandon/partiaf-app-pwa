import React from 'react'
import { Link } from 'react-router-dom'

export interface IHomeScreenProps {};

export const HomeScreen: React.FunctionComponent<IHomeScreenProps> = (props) => {
  return (
    <div className='background'>
      <img className='home-ground' src="./img/ground-partiaf.svg" alt="" />
      <div className="home-container">
        <img className='logo' src="./img/logo/logo-partiaf-secondary.svg" alt="" />
        <img className='user-img' src="./img/user-avatar-filled.svg" alt="" />

        <div className="home-buttons">
          <Link to='/login' className='btn-principal-link'>Iniciar sesion</Link>
          <Link to='/register' className='btn-secondary-link'>Crear usuario</Link>
        </div>
      </div>
    </div>
  )
}


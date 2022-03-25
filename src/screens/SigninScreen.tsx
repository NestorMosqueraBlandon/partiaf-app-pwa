import React from 'react'
import { Link } from 'react-router-dom'

export interface ISigninScreenProps {};

export const SigninScreen: React.FunctionComponent<ISigninScreenProps> = (props) => {
  return (
    <div className='background'>
      <img className='home-ground' src="./img/ground-partiaf.svg" alt="" />
      <div className="home-container">
        <img className='logo' src="./img/logo/logo-partiaf-secondary.svg" alt="" />
        <img className='user-img' src="./img/user-avatar-filled.svg" alt="" />
        <form action="">
          <input type="text" placeholder='Usuario' />
          <input type="text" placeholder='Contrasena' />
        </form>
        <div className="home-buttons">
          <Link to="/homepage" className='btn-principal-link'>ENTRAR</Link>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

export default function HomeScreen() {
  return (
    <div className='background'>
      <img className='home-ground' src="./img/ground-partiaf.svg" alt="" />
      <div className="home-container">
        <img className='logo' src="./img/logo/logo-partiaf-secondary.svg" alt="" />
        <img className='user-img' src="./img/user-avatar-filled.svg" alt="" />

        <div className="home-buttons">
          <button className='btn-principal'>Iniciar sesion</button>
          <button className='btn-secondary'>Crear usuario</button>
        </div>
      </div>
    </div>
  )
}

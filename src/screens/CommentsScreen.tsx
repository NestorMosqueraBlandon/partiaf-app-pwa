import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const GenderScreen = () => {
  
  return (
    <div className='comments-screen'>
        <header>
        <Link to="/register">
            <i className='bx bx-x'></i>
            </Link>
            <p>
                Generos
            </p>
            <span><i className='bx bx-x'></i></span>
        </header>
        <div className='search-gender'>
        <i className='bx bx-search' ></i>
        <input type="text" placeholder='Busca tu genero' />
        </div>

        <ul className="gender-list">
            <li>Agender</li>
            <li>Androgyne</li>
            <li>Androgynous</li>
            <li>Bigender</li>
            <li>Cis</li>
            <li>Enby</li>
            <li>F2M</li>
            <li>FTM</li>
            <li>Female to Male</li>
            <li>Female to male trans man</li>
            <li>Female to male transgender man</li>
            <li>Female to male transsexual man</li>
            <li>Gender Fluid</li>
            <li>Gender Nonconfirming</li>
            <li>Gender Questioning</li>
            <li>Gender Variant</li>
            <li>Gender neutral</li>
            <li>Genderqueer</li>
            <li>M2F</li>
            <li>MTF</li>




        </ul>
    </div>
  )
}

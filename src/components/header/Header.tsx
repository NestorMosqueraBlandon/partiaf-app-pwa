import React from 'react'
import { Link } from 'react-router-dom'

export interface IHeaderProps {};

export const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header className='header'>
      <span>

      <button>
        <i className='bx bx-menu'></i>
      </button>
      <button></button> 
      </span>
      <img src="./img/logo/logo-partiaf-secondary.svg" alt="Logo" />
      <span>
        <button><i className='bx bx-search' ></i></button>
        <button><i className='bx bxs-user-circle' ></i></button>
      </span>
    
    </header>
  )
}


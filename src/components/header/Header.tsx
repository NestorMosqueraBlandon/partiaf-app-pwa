import React from 'react'
import { Link } from 'react-router-dom'

export interface IHeaderProps {};

export const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header className='header'>
    
      <img src="/img/logo/logo-partiaf-secondary.svg" alt="Logo" />
      <span>
        <button className='header-coin'><i className='bx bx-coin-stack' ></i> 50,000</button>
      </span>
    
    </header>
  )
}


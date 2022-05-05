import React from 'react'
import { Link } from 'react-router-dom'

const BottonMenu = () => {
  return (
    <div className='bottom-menu'>
      <Link to="/">
      <i className='bx bx-home-alt-2' ></i>
      </Link>
      <Link to="/">
        <i className='bx bx-search' ></i>
      </Link>
      <Link to="/">
        <i className='bx bx-camera' ></i>
      </Link>
      <Link to="/">
      <i className='bx bx-color' ></i>
      </Link>
      <Link to="/" className='botton-user'>
        <img src="/user-p.jpg" alt="" />
      </Link>
      
    </div>
  )
}

export default BottonMenu

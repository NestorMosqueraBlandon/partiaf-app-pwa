import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const BottonMenu = () => {

  const userSignin = useSelector((state: any) => state.userSignin);
  const {userInfo} = userSignin;

  console.log(userInfo)

  return (
    <div className='bottom-menu'>
      <Link to="/">
      <i className='bx bx-home-alt-2' ></i>
      </Link>
      <Link to="/">
        <i className='bx bx-search' ></i>
      </Link>
      <Link to="/shared">
        <i className='bx bx-camera' ></i>
      </Link>
      <Link to="/">
        <img className='partiaf-loog-menu' src="/logopartiaf.svg" alt="" />
      </Link>
      <Link to="/profile" className='botton-user'>
        <img src={userInfo.image} alt="" />
      </Link>
      
    </div>
  )
}

export default BottonMenu

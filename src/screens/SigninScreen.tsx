import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { signin } from '../actions/userActions';

export interface ISigninScreenProps {};

export const SigninScreen: React.FunctionComponent<ISigninScreenProps> = (props) => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((state: any) => state.userSignin);
  const {userInfo} = userSignin;

  const dispatch = useDispatch();

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(signin(username, password) as any)
  }

  const navigate = useNavigate();

  useEffect(() => {
    if(userInfo){
        navigate('/'); 
    }
  }, [userInfo])
  

  return (
    <div className='background'>
      <img className='home-ground' src="./img/ground-partiaf.svg" alt="" />
      <div className="home-container">
        <img className='logo' src="./img/logo/logo-partiaf-secondary.svg" alt="" />
        <img className='user-img' src="./img/user-avatar-filled.svg" alt="" />
        <form action="">
          <input type="text" placeholder='Usuario'    value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder='Contrasena' value={password} onChange={(e) => setPassword(e.target.value)} />
        </form>
        <div className="home-buttons">
          <button className='btn-principal' onClick={(e) => submitHandler(e)}>ENTRAR</button>
        </div>
      </div>
    </div>
  )
}

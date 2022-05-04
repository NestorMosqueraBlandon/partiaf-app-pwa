import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../actions/userActions';

export interface ISigninScreenProps { };

export const SignupScreen: React.FunctionComponent<ISigninScreenProps> = (props) => {
  
  const [name, setName] = useState("");
  const [lastname, setLastame] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const userSignin = useSelector((state: any) => state.userSignin);
  const {userInfo} = userSignin;

  const dispatch = useDispatch();

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(signup({name, lastname, email, username, mobile, password}) as any)
  }

  const navigate = useNavigate();

  console.log(userInfo)
  useEffect(() => {
    if(userInfo){
        navigate('/homepage'); 
    }
  }, [userInfo])
  
  return (
    <div className='background'>
      <div className="home-container signup-screen">
        <img className='logo' src="./img/logo/logo-partiaf-secondary.svg" alt="" />
        <form>
          <input type="text" placeholder='Nombre'   value={name}  onChange={(e) => setName        (e.target.value)}  />
          <input type="text" placeholder='Apellido' value={lastname}  onChange={(e) => setLastame (e.target.value)}  />
          <input type="text" placeholder='Correo'   value={email}  onChange={(e) => setEmail      (e.target.value)}  />
          <input type="text" placeholder='Usuario'  value={username}  onChange={(e) => setUsername(e.target.value)}  />
          <input type="text" placeholder='Movil'    value={mobile}  onChange={(e) => setMobile    (e.target.value)}  />
          <label htmlFor="" className='left-label'>Crea una contrasena</label>
          <input type="password" placeholder='Contrasena' value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" placeholder='Confirmar contrasena' />
          <div className="checks">
            <label htmlFor="">
              <input type="radio" name="gender" id="gender" />
              <p>
                Masculino
              </p>
            </label>
            <label htmlFor="">

              <input type="radio" name="gender" id="gender" />
              <p>

                Femenino
              </p>
            </label>
            <label htmlFor="">

              <input type="radio" name="gender" id="gender" />
              <p>
                Otro
              </p>
            </label>
          </div>
          <div className="home-buttons">
            <button className='btn-principal' onClick={(e) => submitHandler(e) }>Siguiente</button>
          </div>

          <div className="checks">

            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              <p>
                Acepto los terminos y condiciones

              </p>
            </label>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              <p>

                Soy mayor de edad
              </p>
            </label>
          </div>
        </form>
      </div>

      <p className='left-label'>Ya tienes una cuenta, deseas <strong>Iniciar sesion?</strong></p>
    </div>
  )
}

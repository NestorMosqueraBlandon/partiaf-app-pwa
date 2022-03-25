import React from 'react'

export interface ISigninScreenProps { };

export const SignupScreen: React.FunctionComponent<ISigninScreenProps> = (props) => {
  return (
    <div className='background'>
      <div className="home-container signup-screen">
        <img className='logo' src="./img/logo/logo-partiaf-secondary.svg" alt="" />
        <form action="">
          <input type="text" placeholder='Nombre' />
          <input type="text" placeholder='Apellido' />
          <input type="text" placeholder='Correo' />
          <input type="text" placeholder='Usuario' />
          <input type="text" placeholder='Movil' />
          <label htmlFor="" className='left-label'>Crea una contrasena</label>
          <input type="text" placeholder='Contrasena' />
          <input type="text" placeholder='Confirmar contrasena' />
          <label htmlFor="Genero"></label>
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
            <button className='btn-principal'>Siguiente</button>
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

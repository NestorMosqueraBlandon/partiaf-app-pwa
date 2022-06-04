import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../actions/userActions";
export interface ISigninScreenProps {}

export const SigninScreen: React.FunctionComponent<ISigninScreenProps> = (
  props
) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((state: any) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(signin(username, password) as any);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  return (
    <div className="background login">
      {/* <img className='home-ground' src="./img/ground-partiaf.svg" alt="" /> */}
      <div className="home-container">
        <img
          className="logo"
          src="./img/logo/logo-partiaf-secondary.svg"
          alt=""
        />
        <p className="login-copy">Fiestas y mas.</p>
        {/* <img className='user-img' src="./img/user-avatar-filled.svg" alt="" /> */}
        <form action="" autoComplete="off">
          <div className="input-form">
            <i className="bx bx-user"></i>
            <input
              className="input-login"
              type="text"
              placeholder="Usuario"
              autoComplete="false"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-form">
            <i className="bx bx-lock-alt"></i>
            <input
              className="input-login"
              type="password"
              placeholder="Contrasena"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link to="/">Olvidaste tu contrasena?</Link>
        </form>
        <div className="home-buttons">
          <button className="btn-principal" onClick={(e) => submitHandler(e)}>
            ENTRAR
          </button>
        </div>
        <Link to="/register">
          No tienes una cuenta? <span>Registrate</span>{" "}
        </Link>
      </div>
    </div>
  );
};

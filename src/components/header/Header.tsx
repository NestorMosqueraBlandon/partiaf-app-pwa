import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export interface IHeaderProps {}

export const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const userSignin = useSelector((state: any) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <header className="header">
      <img src="/img/logo/logo-partiaf-secondary.svg" alt="Logo" />
      <span>
        <Link to="/qr">
          <i className="bx bx-qr-scan"></i>
        </Link>
        <Link to="/profile" className="header-user-image">
        <img src={userInfo.image} alt="" />
      </Link>
        {/* <button>
          <i className='bx bx-chat' ></i>
        </button> */}
        {/* <button className='header-coin'><i className='bx bx-coin-stack' ></i> 50,000</button> */}
      </span>
    </header>
  );
};

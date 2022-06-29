import React from "react";
import { Link } from "react-router-dom";

export interface IHeaderProps {}

export const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header className="header">
      <img src="/img/logo/logo-partiaf-secondary.svg" alt="Logo" />
      <span>
        <Link to="/qr">
          <i className="bx bx-qr-scan"></i>
        </Link>
        {/* <button>
          <i className='bx bx-chat' ></i>
        </button> */}
        {/* <button className='header-coin'><i className='bx bx-coin-stack' ></i> 50,000</button> */}
      </span>
    </header>
  );
};

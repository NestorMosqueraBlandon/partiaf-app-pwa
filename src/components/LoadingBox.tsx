import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LoadingBox = () => {
  const userSignin = useSelector((state: any) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <div className="loading">
        <div className="loading-box">

        </div>
        <p>Cargando...</p>
    </div>
  );
};

export default LoadingBox;

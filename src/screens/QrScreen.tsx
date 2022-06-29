import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { reduceEachTrailingCommentRange } from "typescript";
import BottonMenu from "../components/BottonMenu";
import { Header } from "../components/header/Header";
import { HomeCard } from "../components/HomeCard";
import { storeListReducer } from "../reducers/storeReducers";
import { DivisaFormater } from "../utils/divisaFormater";

export const QrScreen: React.FunctionComponent = (props) => {
  const userSignin = useSelector((state: any) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <>
      <div className="background data-container">
        <Header />
        <Link to="/" className="back-btn-link">
          <i className="bx bx-left-arrow-alt"></i>{" "}
        </Link>

        <div className="qr-screen">
          <div className="info-user">
            <img src={userInfo.image} alt="" />
            <h3>
              {userInfo.name} {userInfo.lastname}
            </h3>
            <Link to="verify-user">Verificar usuario</Link>
          </div>

          <QRCode value="user" />

          <BottonMenu />
        </div>
      </div>
    </>
  );
};

import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import BottonMenu from "../components/BottonMenu";
import { Header } from "../components/header/Header";

const SharedScreen = () => {
  const userSignin = useSelector((state: any) => state.userSignin);
  const { userInfo } = userSignin;

  const webRef = useRef(null);

  return (
    <div>
      <Header />
      <Webcam ref={webRef} />

      {/* <BottonMenu /> */}
    </div>
  );
};

export default SharedScreen;

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { reduceEachTrailingCommentRange } from 'typescript';
import BottonMenu from '../components/BottonMenu';
import { Header } from '../components/header/Header'
import { HomeCard } from '../components/HomeCard'
import { storeListReducer } from '../reducers/storeReducers';
import { DivisaFormater } from '../utils/divisaFormater';

export const CreditsScreen: React.FunctionComponent = (props) => {
  
  return (
    <>
    <div className='background data-container'>
      <Header />

      <div className='main-credits'>
          <h4>Balance</h4>
          <div className="balance-card">
            <h2>{DivisaFormater(0)} <img src="./coin.png" alt="" /></h2>
          </div>
          <h4 className='m-top'>Historico</h4>
          <div className="balance-card">
              <p>Actualmente no tienes compras.</p>
          </div>
          <h4 className='m-top'>Informacion</h4>
          <p>Sobre tus creditos</p>
          <div className="balance-card">
              <div className="info-card">
              <i className='bx bx-dollar-circle'></i>
                <div>
                    <h4>Que son tus creditos?</h4>
                    <p>Detalle de creditos</p>
                </div>
              </div>
              <div className="info-card">
              <i className='bx bx-support'></i>
                <div>
                    <h4>Soporte</h4>
                    <p>Obten ayuda sobre tu creditos</p>
                </div>
              </div>
          </div>
      </div>
      <BottonMenu />
    </div>
    </>

  )
}


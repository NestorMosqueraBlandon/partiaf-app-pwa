import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { reduceEachTrailingCommentRange } from 'typescript';
import { Header } from '../components/header/Header'
import { HomeCard } from '../components/HomeCard'
import { storeListReducer } from '../reducers/storeReducers';

export interface IBussinessScreenProps {};

interface IData {
  name?: string;
  address?: string;
  type?: string;
}
export const BussinessScreen: React.FunctionComponent<IBussinessScreenProps> = (props) => {
  
  return (
    <>
    <div className='background data-container'>
      <Header />
      <img src="" alt="" />
      <div className="event__data">
          <h2>Concierto ParTiaF</h2>
          <div className="card__event">
              
          </div>
      </div>
    </div>
    </>

  )
}


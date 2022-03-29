import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { reduceEachTrailingCommentRange } from 'typescript';
import { Header } from '../components/header/Header'
import { HomeCard } from '../components/HomeCard'
import { storeListReducer } from '../reducers/storeReducers';

interface StoresResults {
  results: Result;
  info:    Info;
}

interface Info {
  seed:    string;
  results: number;
  page:    number;
  version: string;
}

interface Result {
  name: string;
  type: string;
  nit: number;
  password: string;
  mobile: number;
  employes:       number;
  address: string;
  totalLimit:      string;
}


export interface IStoreScreenProps {};

const getData = async (endpoint: string) => {
  const response = await fetch(endpoint);
  const data: StoresResults = await response.json();
  return data
}

type TState = {stores: TStore[]; greeeting: string}
type TStoresProps = {users: TStore[] | undefined}
type TStore = {
  name: string,
  address: string,
  type: string
}


export const StoreScreen: React.FunctionComponent<IStoreScreenProps> = (props) => {
  
  const [state, setState] = useState({
    stores: [],
    greeting: "Feching data"
  });

  const [data, setData] = useState([]);

  const fechStores = async () => {
    const storesData = await getData('https://partiaf-api.herokuapp.com/api/v1/stores/listall')
    const stores = storesData
    return setState({...state, ...stores})
  }


  const {greeting, stores} = state;

  console.log(stores.length)


  function apiFetch<T>(url: string): Promise<T> {
    return fetch(url)
    .then(response => {
      if(!response.ok){
        throw new Error(response.statusText)
      }
      return response.json();
    })
  } 

  const hasStores = data.length > 0


  useEffect(() => {
    apiFetch<any>('https://partiaf-api.herokuapp.com/api/v1/stores/listall')
    .then((response) => {
      setData(response)
      console.log(data)
    })
    fechStores()
  },[stores, hasStores])



  console.log(hasStores)

  return (
    <div className='background data-container'>
      <Header />
      <div className="sub-header">
        <button><i className='bx bx-filter' ></i> Filtrar</button>
        <button> Cambiar categoria</button>
      </div>
      <div className="data-container">

      {hasStores? (
      <>
      {data.map(({name,address,type}) => (
        <HomeCard name={name} address={address} type={type} />
      ))}
      </>
      )
      :
      <h2>Cargando</h2>
      }
      </div>


    </div>
  )
}


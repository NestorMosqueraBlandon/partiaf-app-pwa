import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { reduceEachTrailingCommentRange } from 'typescript';
import { Header } from '../components/header/Header'
import { HomeCard } from '../components/HomeCard'

export interface IStoreScreenProps {};

interface IData {
  _id: string;
  name?: string;
  address?: string;
  type?: string;
  images: string[];
}
export const StoresScreen: React.FunctionComponent<IStoreScreenProps> = (props) => {
  
  const [data, setData] = useState<IData[] | undefined>();

  const [openCategories, setOpenCategories] = useState(false);
  const [category, setCategory] = useState("");

  const setCategoryElements = (name: string) => {
    setCategory(name)
    setOpenCategories(false);
  }
  function apiFetch<T>(url: string): Promise<T> {
    return fetch(url)
    .then(response => {
      if(!response.ok){
        throw new Error(response.statusText)
      }
      return response.json();
    })
  } 

  let hasStores = false
  if(data){
    hasStores = data.length > 0 
  }


  useEffect(() => {
    apiFetch<IData[]>('https://partiaf-api.herokuapp.com/api/v1/stores/listall')
    .then((response) => {
      setData(response)
    })
  },[hasStores])

  console.log(data)

  return (
    <>
    <div className='background data-container'>
      <Header />
      <div className="sub-header">
        <button><i className='bx bx-filter' ></i> Filtrar</button>
        <button onClick={() => setOpenCategories(true)}> Cambiar categoria</button>
      </div>
      <div className="data-container">

      {hasStores? (
      <>
      {data?.filter(({type}) => type?.includes(category))
      .map(({_id, images, name,address,type}, index) => (
        <HomeCard key={index} id={_id} name={name} images={images} address={address} type={type} />
      ))}
      </>
      )
      :
      <h2>Cargando</h2>
      }
      </div>
    </div>

    <div className={openCategories? "categories active" : "categories"}>
      <div className="category__header">
      <p>Selecciona una categoria</p>
        <button onClick={() => setOpenCategories(false)}>Cerrar</button>
      </div>

      <ul>
      <li><button onClick={()   => setCategoryElements('')} >Todo</button></li>
        <li><button onClick={() => setCategoryElements('Bar')} >Bares</button></li>
        <li><button onClick={() => setCategoryElements('Discoteca')} >Discotecas</button></li>
        <li><button onClick={() => setCategoryElements('Gastrobar')} >Gastrobares</button></li>
      </ul>
    </div>
    </>

  )
}

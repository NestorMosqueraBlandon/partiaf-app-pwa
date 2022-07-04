import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { reduceEachTrailingCommentRange } from "typescript";
import BottonMenu from "../components/BottonMenu";
import { Header } from "../components/header/Header";
import { HomeCard } from "../components/HomeCard";
import LoadingBox from "../components/LoadingBox";
import Skeleton from 'react-loading-skeleton';
import CardSkeleton from "../components/CardSkeleton";

export interface IStoreScreenProps {}

interface IData {
  _id: string;
  name?: string;
  address?: string;
  type?: string;
  photos: string[];
}
export const StoresScreen: React.FunctionComponent<IStoreScreenProps> = (
  props
) => {
  const [data, setData] = useState<IData[] | undefined>();

  const [openCategories, setOpenCategories] = useState(false);
  const [category, setCategory] = useState("");

  const setCategoryElements = (name: string) => {
    setCategory(name);
  };
  function apiFetch<T>(url: string): Promise<T> {
    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }

  let hasStores = false;
  if (data) {
    hasStores = data.length > 0;
  }

  useEffect(() => {
    apiFetch<IData[]>(
      "https://partiaf-api-recache.herokuapp.com/api/v2/stores"
    ).then((response) => {
      setData(response);
      console.log(response)
    });
  }, [hasStores]);

  const [search, setSearch] = useState("");

  return (
    <>
      <div className="background data-container">
        <Header />

        <div className="search-form">
          <i className="bx bx-search"></i>
          <input
            type="text"
            className="search-input"
            value={search}
            onChange={(e: any) => setSearch(e.target.value)}
            placeholder="A donde quires ir?"
          />
        </div>
        <div className="store-categories">
          <button className={category == ""? "active" : ""} onClick={() => setCategory("")}>Todo</button>
          <button className={category == "Bar"? "active" : ""} onClick={() => setCategory("Bar")}>Bares</button>
          <button className={category == "Discoteca"? "active" : ""} onClick={() => setCategory("Discoteca")}>Discotecas</button>
          <button className={category == "Gastrobar"? "active" : ""} onClick={() => setCategory("Gastrobar")}>Gastrobares</button>
        </div>
        {/* <div className="sub-header">
        <button><i className='bx bx-filter' ></i> Filtrar</button>
        <button onClick={() => setOpenCategories(true)}> Cambiar categoria</button>
      </div> */}
        <div className="stores-list-container">

          {!hasStores && <CardSkeleton />}
          {!hasStores && <CardSkeleton />}
          {!hasStores && <CardSkeleton />}
              {hasStores && data
                ?.filter(({ name }) =>
                  name?.toLowerCase().includes(search.toLowerCase())
                )
                .filter(({ type }) => type?.includes(category))
                .map(({ _id, photos, name, address, type }, index) => (
                  <HomeCard
                    key={index}
                    id={_id}
                    name={name}
                    images={photos}
                    address={address}
                    type={type}
                  />
                ))}
        </div>
      </div>

      <BottonMenu />
    </>
  );
};

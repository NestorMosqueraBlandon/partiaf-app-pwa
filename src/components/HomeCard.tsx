import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper";

import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';

interface CardData { }

type TState = { stores: TStore[]; greeeting: string };
type TStoresProps = { users: TStore[] | undefined };
type TStore = {
  id: string;
  name?: string;
  address?: string;
  type?: string;
  images?: string[];
};

export interface IHomeCardProps {
  id: string;
  name?: string;
  address?: string;
  type?: string;
  images?: string[];
}

export const HomeCard: React.FunctionComponent<IHomeCardProps | undefined> = (
  store: TStore,
  key: number
) => {
  const { id, name, address, type, images } = store;

  images?.map(image => console.log(image))

  return (
    <Link to={`/store/${id}`} className="card-home">
      <Swiper
        effect="fade"
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {images?.map((image) => (
          <SwiperSlide key={image}>
            <img
              src={image}
              alt="Establecimiento"
            />
          </SwiperSlide>
        ))}

        {images == undefined || images?.length <= 0 && <img src="/img/icon-es.png" />}
      </Swiper>

      <div>
        <h2>{name || <Skeleton /> }</h2>
        <h4>{type || <Skeleton />}</h4>
      </div>
      <button>
        <i className="bx bx-heart"></i>
      </button>
    </Link>
  );
};

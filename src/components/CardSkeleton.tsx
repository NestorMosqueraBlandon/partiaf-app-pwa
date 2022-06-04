import React from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css'

const CardSkeleton = () => {

  return (
    <div className="card-skeleton">
        <div className="image">
            <Skeleton height={300} />
        </div>
        <div><Skeleton  /></div>
        <div><Skeleton  /></div>
    </div>
  );
};

export default CardSkeleton;

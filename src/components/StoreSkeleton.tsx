import React from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css'

const StoreSkeleton = () => {

    return (
        <div className="store-skeleton">
            <div className="image">
                <Skeleton className="m-1" height={250} />
            </div>
            
            <div><Skeleton width={150} /></div>
             <div><Skeleton width={130} /></div>
            <div className="m-1"> <Skeleton width={100} /></div>
            
            <div className="m-1"><Skeleton /></div>
            
            <div><Skeleton height={80} /></div>
            <div className="m-1"> </div>
            <div><Skeleton /></div>
            <div className="m-1"></div>

            <div><Skeleton height={40} /></div>
            <div><Skeleton height={40} /></div>
            <div><Skeleton height={40} /></div>
            <div><Skeleton height={40} /></div>
            <div><Skeleton height={40} /></div>

        </div>
    );
};

export default StoreSkeleton;

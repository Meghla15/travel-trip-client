import React from 'react';

const AllTouristSpotCard = ({addedSpot}) => {
    const {photo, spotName, averageCost, totalVisiterPerYear, travelTime,seasonality} = addedSpot || {};
    console.log(addedSpot)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
          
      <figure><img src={photo} alt="Photo" /> </figure>
      <div className="card-body bg-slate-100">
        <h2 className="card-title text-xl text-violet-900">{spotName} </h2>
        <p>{averageCost}</p>
        <p>{totalVisiterPerYear}</p>
        <p>{travelTime}</p>
        <p>{seasonality}</p>
        <div className="card-actions">
        <button className='btn btn-primary w-full'>View Details</button>
        </div>
      </div>
    </div>
   
    );
};

export default AllTouristSpotCard;
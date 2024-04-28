import { Link } from "react-router-dom";


const AllTouristSpotCard = ({addedSpot}) => {
    const {_id,photo, spotName, averageCost, totalVisiter, travelTime,seasonality, countryName} = addedSpot || {};
    // console.log(addedSpot)
    return (
        <Link to={`/view-details/${_id}`}>
        <div className="card w-96 bg-base-100 shadow-xl">
          
          <figure><img src={photo} alt="Photo" /> </figure>
          <div className="card-body bg-slate-100">
            <h2 className="card-title text-xl text-violet-900">{spotName},{countryName} </h2>
            <p className="font-semibold">Average Cost : {averageCost} Taka</p>
            <p className="font-semibold">Total Visiter Per Year : {totalVisiter}</p>
            <p className="font-semibold">Travel Time : {travelTime} Days</p>
            <p className="font-semibold">Seasonality : {seasonality}</p>
            <div className="card-actions">
            <button className='btn btn-primary w-full'>View Details</button>
            </div>
          </div>
        </div>
        </Link>
   
    );
};

export default AllTouristSpotCard;
import { useLoaderData } from "react-router-dom";
import AllTouristSpotCard from "./AllTouristSpotCard/AllTouristSpotCard";


const AllTouristSpot = () => {
    const addedSpots = useLoaderData();
    console.log(addedSpots)
  return (
    <div className="mb-40">
        <h1>All Tourist Spot</h1>
      <div className="mx-auto container mb-6">
        <details className="dropdown">
          <summary className="m-1 btn">Choose Your Destination</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li><a>Bangladesh</a></li>
            <li><a>Thailand</a></li>
            <li><a>Indonesia</a></li>
            <li><a>Malaysia</a></li>
            <li><a>Vietnam</a></li>
            <li><a>Combodia</a></li>
          </ul>
        </details>
      </div>
       
      <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 lg:mt-10 mt-6  ' data-aos ="fade-up" >
        {
               addedSpots.map(addedSpot =><AllTouristSpotCard
                key={addedSpot._id}
                addedSpot={addedSpot}
               ></AllTouristSpotCard>)
      
      }
        
           

        </div>
    </div>
  );
};

export default AllTouristSpot;

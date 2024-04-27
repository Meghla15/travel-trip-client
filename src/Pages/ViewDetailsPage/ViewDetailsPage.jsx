import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

const ViewDetailsPage = () => {
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  const addedSpots = useLoaderData();
  console.log(addedSpots);

  useEffect(() => {
    if (addedSpots) {
      const singleData = addedSpots.find((item) => item._id == id);

      setSingleData(singleData);
      console.log(singleData);
    }
  }, [addedSpots, id]);
 

  const {
    photo,
    spotName,
    countryName,
    location,
    description,
    travelTime,
    averageCost,
    totalVisiter,
    seasonality,
  } = singleData || {};
  

  return (
    <div className="hero min-h-screen container mx-auto rounded-2xl bg-base-200 mb-40">
      <div className="hero-content flex-col lg:flex-row">
        <img src={photo} className="w-[50%] rounded-lg shadow-2xl" />
        <div className="">
          <h1 className="text-2xl font-neon font-semibold mb-2">
            Spot Name :<span className="font-extrabold font-neon ">{spotName}</span>
          </h1>
          <h1 className="text-2xl font-neon font-bold">
            Country Name :<span className="font-extrabold font-neon ">{countryName}</span>
          </h1>

          <p> <span className="py-6 text-xl font-semibold">Description: </span>{description}</p>

          <div className="flex lg:flex-row flex-col gap-4 mt-3">
            <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-orange-600"
              >
                <path
                  fill-rule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className="font-semibold text-neon">
                <span className="font-semibold">Location: </span>
                {location}
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="font-bold">Total Visiter: {totalVisiter} </p>
            <p className="font-bold">Seasonality: {seasonality} </p>
          </div>
          <p className="font-bold">Travel Time: {travelTime} </p>

          <p className="font-semibold font-neon text-2xl mt-3">
            Price :
            <span className="font-neon font-extrabold ">
             
              {averageCost}Taka
            </span>
          </p>

          <Link to="/">
            <a href="#_" className=" mt-2 relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-green-500"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">Back to Home</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsPage;

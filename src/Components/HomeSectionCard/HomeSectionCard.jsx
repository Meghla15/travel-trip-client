
import { Link } from 'react-router-dom';

const HomeSectionCard = ({addedSpot}) => {
    const {_id,photo, spotName, countryName,location} = addedSpot || {}
    console.log(addedSpot)
    return (
      <Link to={`/view-details/${_id}`}>
        <div className="card w-96 bg-base-100 shadow-xl">
          
      <figure><img src={photo} alt="Photo" /> </figure>
      <div className="card-body bg-slate-100">
        <h2 className="card-title text-xl text-violet-900">
          {spotName},{countryName}
          
          
        </h2>
        <p>Location :{location}</p>
        <div className="card-actions">
        <button className='btn btn-primary w-full'>View Details</button>
        </div>
      </div>
    </div></Link>
    );
};

export default HomeSectionCard;
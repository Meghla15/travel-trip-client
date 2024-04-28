import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import { Link } from "react-router-dom";
import {  toast } from 'react-toastify';


const ListedCard = () => {
  const {user} =UseAuth() || {};
  const [item, setItem] = useState([]);
  const [control, setControl] = useState(false);
  // console.log(user)
  
    useEffect(()=>{
      fetch (`http://localhost:5000/listedItem/${user?.email}`)
      .then (res => res.json())
      .then (data =>{
        setItem(data);
      });
    },[user,control]);
    // console.log(user)
   
    const handleDelete = (id) =>{
      fetch(`http://localhost:5000/delete/${id}`,{
        method:"DELETE",

      })
      .then(res => res.json())
      .then (data =>{
        if (data.deletedCount > 0) {
          setControl (!control)
			toast.error("Delete Successfully")

        }
      })
    }
    

    return (
      <>
      {
        item?.map(p => (
        <>
        <div className="overflow-x-auto container mx-auto bg-gray-50  rounded-2xl p-3">
<table className="table">
  {/* head */}
  <thead>
    <tr>
      <th>No.</th>
      <th>Spot Name</th>
      <th>Location</th>
      <th>Travel Time</th>
      <th>Price</th>
      <th>Update Now</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {/* row 1 */}
    <tr>
      <th>{p.index}</th>
      <td>{p.spotName}</td>
      <td>{p.location}</td>
      <td>{p.travelTime} Days</td>
      <td>{p.averageCost} Taka</td>
      <td><Link to={`/update/${p._id}`}><button className="btn btn-accent">Update</button></Link></td>
      <td><button onClick={()=>handleDelete(p._id)} className="btn btn-error">Delete</button></td>
    </tr>
  </tbody>
</table>
</div>

        
        </>
        ))
      }
      
      </>
    
    );
   
    
};

export default ListedCard;
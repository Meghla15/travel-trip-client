import { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import { Link } from "react-router-dom";
// import {  toast } from 'react-toastify';
import Swal from "sweetalert2";


const ListedCard = () => {
  const {user} =UseAuth() || {};
  const [item, setItem] = useState([]);
  const [control, setControl] = useState(false);
  // console.log(user)
  
    useEffect(()=>{
      fetch (`https://travel-tour-server-ebon.vercel.app/listedItem/${user?.email}`)
      .then (res => res.json())
      .then (data =>{
        setItem(data);
      });
    },[user,control]);
    // console.log(user)
   
    const handleDelete = (id) =>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          
            
          fetch(`https://travel-tour-server-ebon.vercel.app/delete/${id}`,{
        method:"DELETE",

      })
      .then(res => res.json())
      .then (data =>{
        if (data.deletedCount > 0) {
          setControl (!control)
          Swal.fire({
            title: "Deleted!",
            text: "Your Listed Spot has been deleted.",
            icon: "success"
          });

        }
     
      })


        }
      });
      
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
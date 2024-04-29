import {  toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const UpdatePage = () => {
    const {id}  = useParams();
    // console.log(id)
    

    const handleUpdate =event =>{
        event.preventDefault() 
        const form = event.target;
        const photo = form.photo.value;
        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const description = form.description.value;
        const travelTime = form.travelTime.value;
        const averageCost = form.averageCost.value;
        const totalVisiter = form.totalVisiter.value;
        const seasonality = form.seasonality.value;

        const updateData ={photo,spotName,countryName,location,description,travelTime,averageCost,totalVisiter,seasonality} || {}
        // console.log(updateData)

		fetch(`https://travel-tour-server-ebon.vercel.app/updatePage/${id}`,{
			method : "PUT",
			headers:{
				'content-type':'application/json'},
				 body : JSON.stringify(updateData)
		})
         .then (res => res.json())
		 .then(data =>{
			toast.success("Data Update Successfully")
			console.log(data)
		 })
		
    }
	




   
    return (
        <div className='border w-2/3 container mx-auto bg-gray-100 mt-14 mb-48'>
            <h1 className='text-center font-bold text-3xl p-4'>Update Tourist Spot</h1>


            <section className="p-6  text-gray-900">
	<form onSubmit={handleUpdate} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			
			<div className="grid grid-cols-8 gap-4 col-span-full lg:col-span-4">
				
				<div className="col-span-full sm:col-span-4">
                <label className="text-xm font-semibold">PhotoURL</label>
					<input name="photo" type="text" placeholder="PhotoURL" className=" p-2 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-4">
                <label  className="text-xm font-semibold">Tourist Spot Name</label>
					<input name="spotName" type="text" placeholder="Tourist Spot Name" className=" p-2 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-4">
                <label  className="text-xm font-semibold">Country Name</label>
					<input name="countryName" type="text" placeholder="Country name" className=" p-2 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-4">
                <label  className="text-xm font-semibold">Location</label>
					<input name="location" type="text" placeholder="location" className=" p-2 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>


				<div className="col-span-full">
					<label className="text-xm font-semibold">Description</label>
					<input name="description" type="text" placeholder="description" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm font-semibold">Travel Time</label>
					<input name="travelTime" type="text" placeholder="Travel time" className="w-full p-2  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-xm font-semibold">Average Cost</label>
					<input name="averageCost" type="text" placeholder="Average Cost" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-xm font-semibold">Total Visiter Per Year</label>
					<input name="totalVisiter" type="text" placeholder="Total Visiter Per Year" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label className="text-xm font-semibold">Seasonality</label>
					<input name="seasonality" type="text" placeholder="Seasonality" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
				</div>
                
			</div>
		</fieldset>
		<button className='w-full btn btn-accent font-semibold p-3 rounded-2xl' type="submit" value='add'>Update</button>
	</form>
</section>
        </div>
    );
};

export default UpdatePage;
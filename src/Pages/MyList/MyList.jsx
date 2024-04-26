import { useLoaderData } from "react-router-dom";
import ListedCard from "../../Components/ListedCard/ListedCard";

const MyList = () => {
    const addedSpots = useLoaderData()
    
    return (
        <div>
           <h1>this is my list and this is also a privet route</h1> 
           <h1>Location: {addedSpots?.length}</h1>
           {
            addedSpots?.map(addedSpot => <ListedCard key={addedSpot._id}
            addedSpot ={addedSpot}></ListedCard>)
           }
           
        </div>
    );
};

export default MyList;
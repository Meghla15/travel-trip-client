import { useLoaderData } from "react-router-dom";
import ListedCard from "../../Components/ListedCard/ListedCard";

const MyList = () => {
    
    const addedSpots = useLoaderData()
    console.log(addedSpots)
    
    return (
        <div>
          
           <div className="mt-14 mb-24">
          
           <ListedCard></ListedCard>
           </div>
           
        </div>
    );
};

export default MyList;
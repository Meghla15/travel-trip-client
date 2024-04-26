import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import AllTouristSpot from "../Pages/All Tourist Spot/AllTouristSpot";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";
import MyList from "../Pages/MyList/MyList";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
         errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('http://localhost:5000/AddedSpot')
            },
            
            {
                path:'/allTouristSpot',
                element:<AllTouristSpot></AllTouristSpot>
            },
            {
                path:'/addTouristSpot',
                element:<AddTouristSpot></AddTouristSpot>
            },
            {
                path:'/myList',
                element:<MyList></MyList>,
                loader:() => fetch('http://localhost:5000/AddedSpot')
            },

        ]
    }
])

export default Router;
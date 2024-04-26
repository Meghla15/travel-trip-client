import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import AllTouristSpot from "../Pages/All Tourist Spot/AllTouristSpot";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";
import MyList from "../Pages/MyList/MyList";
import ViewDetailsPage from "../Pages/ViewDetailsPage/ViewDetailsPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

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
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/view-details/:id',
                element:<ViewDetailsPage></ViewDetailsPage>
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
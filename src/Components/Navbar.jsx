import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';
const Navbar = () => {
  const { logout, user } = UseAuth();
    const links = (
        <>
          <li className="font-semibold">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="font-semibold">
            <NavLink to="/allTouristSpot">All Tourist Spot</NavLink>
          </li>
          <li className="font-semibold">
            <NavLink to="/addTouristSpot">Add Tourist Spot</NavLink>
          </li>
          <li className="font-semibold">
            <NavLink to="/myList">My List</NavLink>
          </li>
         
        </>
      );
    return (
        <div className="navbar bg-blue-100 rounded-2xl px-4 container mx-auto mb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold text-blue-700">
          
         Tourist Trip
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        
     



        {user ? (
          <div className="dropdown dropdown-left flex">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt=''
                  src={
                    user?.photoURL ||
                    "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p className="font-neon ">
                  {user.displayName}
                </p>
              </li>
              
            </ul>
             <button
              onClick={logout}
              className="btn btn-primary font-neon font-bold"
            >
              Logout
            </button>
           
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary font-neon font-bold">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
    );
};

export default Navbar;<h1>this is navbar</h1>
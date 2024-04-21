/** @format */

import logoImage from "../../images/finallogo2.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { BsMinecart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineContactMail } from "react-icons/md";
import { LuContact2 } from "react-icons/lu";
import { PiUsersBold } from "react-icons/pi";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

let Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  
  const { loginWithRedirect , user , logout , isAuthenticated} = useAuth0();
  // console.log(isAuthenticated);

    const [isHovered , setIsHovered] = useState(false);

  return (
    <header className="flex items-center w-[100vw] sm:px-6 md:px-14 lg:px-32 min-[460px]:px-4 min-[300px]:px-2 justify-between min-[300px]:h-14 min-[460px]:h-16 sm:h-20 md:h-24 shadow-lg ">
      <Link to="/">
        <img className="mr-6 sm:w-12 md:w-[4.5rem] lg:w-20 min-[460px]:w-[3rem] min-[300px]:w-[2.5rem]" src={logoImage} alt="logo" />
      </Link>
      <ul className="flex gap-12 md:text-lg sm:text-[1rem] sm:gap-9 min-[460px]:text-[0.8rem] min-[300px]:text-[0.6rem] min-[300px]:gap-3 min-[460px]:gap-4">
        {/* <li className="navItem">{onlineStatus ? "🟢 You are Online" : "🔴 You are Offline"}</li> */}
        <li className="navItem hover:text-orange-400">
          <Link to="/about">
            <span className = "flex items-center justify-center gap-2">
              <PiUsersBold className="w-5 h-5 min-[460px]:w-4 min-[460px]:h-4 min-[300px]:w-[0.85rem] min-[300px]:h-[0.85rem]"/>
              <h2>About</h2>
            </span>
          </Link>
        </li>
        <li className="navItem hover:text-orange-400">
          <Link to="/contact">
          <span className = "flex items-center justify-center gap-2">
            <LuContact2 className="w-5 h-5 min-[460px]:w-4 min-[460px]:h-4 min-[300px]:w-[0.85rem] min-[300px]:h-[0.85rem]"/> <h2>Contact</h2>
            </span>
          </Link>
        </li>
        {!isAuthenticated ?  (<li className="navItem hover:text-orange-400">
          <button onClick={() => loginWithRedirect()}>
          <span className = "flex items-center justify-center gap-2">
            <FaRegUser className="w-5 h-5 min-[460px]:w-4 min-[460px]:h-4 min-[300px]:w-[0.85rem] min-[300px]:h-[0.85rem]"/>
            <h2>Login</h2>
           </span>
          </button>
        </li>) : (<li className="navItem hover:text-orange-400">
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}}>
          <span className = "flex items-center justify-center gap-2">
            <FaRegUser className="w-5 h-5 min-[460px]:w-4 min-[460px]:h-4 min-[300px]:w-[0.85rem] min-[300px]:h-[0.85rem]"/>
            {isAuthenticated && isHovered ? (<h2>Logout</h2>) : (<h2>{user.name}</h2>)}
            
           </span>
          </button>
        </li>)}

        <li>
          <Link to="/cart" className="relative hover:text-orange-400">
          <span className = "flex items-center justify-center min-[550px]:gap-2 min-[300px]:gap-0">
            <BsMinecart className="w-5 h-5 mr-2 min-[460px]:w-4 min-[460px]:h-4 min-[300px]:w-[0.85rem] min-[300px]:h-[0.85rem]" />
            <p className="absolute min-[550px]:left-3 min-[550px]:bottom-3 min-[300px]:left-2 min-[300px]:bottom-2 min-[300px]:w-3 min-[300px]:h-3 min-[300px]:text-[0.6rem] bg-orange-400 min-[550px]:w-5 flex justify-center items-center min-[550px]:h-5 rounded-2xl min-[550px]:text-base text-white">
              {cartItems.length}
            </p>
            
            <h2>Cart</h2>
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

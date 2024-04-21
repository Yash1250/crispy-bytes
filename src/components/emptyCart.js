import Fridge from "../../images/fridge2.jpeg"
import { Link } from "react-router-dom";

const EmptyCart = ()=>{
    return(
        <>
        <div className="flex flex-col items-center justify-center w-full h-[88vh] gap-3">
        <img className="w-80 rounded-lg" src={Fridge}/>
        <h1 className="font-bold text-xl text-gray-800">Cart is empty</h1>
        <p className="text-gray-800 font-normal text-center">You can go to home page to view more restaurants</p>
        <Link to="/"> <button className="cursor-pointer bg-orange-600 text-white rounded-lg p-3 text-lg font-bold mt-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-300">Restaurants Near You</button></Link>
        </div>
        </>
    ) 
   
}

export default EmptyCart;
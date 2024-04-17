/** @format */

import { clearCart } from "../utils/cartSlice";
import CategoryItems from "./CategoryItems";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "./emptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const clearCartHandelar = () => {
    dispatch(clearCart());
  };
  let totalPrice = cartItems.reduce((acc, curr) => {
    price = curr?.card?.info?.price
      ? curr?.card?.info?.price
      : curr?.card?.info?.defaultPrice;
    acc += price;
    return acc;
  }, 0);
  return (
    <>
    {!cartItems.length ? (<EmptyCart/>) : ( 
       <div className="flex gap-16 bg-gray-200 min-h-[84vh]">
        <div className="w-6/12 ml-40">
          <div className="mx-auto my-4 bg-white w-12/12 p-4 shadow-lg">
            <div className="text-center">
              <h2 className="font-bold text-xl">Items Details</h2>
            </div>

            <CategoryItems items={cartItems} parent="Cart" />
          </div>
        </div>
        <div>
          <div className="w-80 mr-40 ">
            <div className="mx-auto my-4 bg-white w-12/12 p-4 shadow-lg flex flex-col justify-center items-center gap-8">
              <h2 className="font-bold text-xl">Price Details</h2>
              <div className="w-full text-center ">
                <p className="font-medium text-lg text-gray-700 mb-4">
                  Total Items - {cartItems.length}
                </p>
                <p className="font-medium text-lg text-gray-700">
                  {" "}
                  Total Amount - ₹{totalPrice / 100}
                </p>
              </div>
              <div>
                <button
                  onClick={clearCartHandelar}
                  className="bg-red-600 w-28 p-3 text-base font-bold text-white rounded-lg shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300">
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>)}
    
    </>
  );
};

export default Cart;

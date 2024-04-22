    /** @format */

    import { clearCart } from "../utils/cartSlice";
    import CategoryItems from "./CategoryItems";
    import { useDispatch, useSelector } from "react-redux";
    import EmptyCart from "./emptyCart";

    const Cart = () => {
      const cartItems = useSelector((store) => store.cart.items);
      const dispatch = useDispatch();
      const clearCartHandelar = () => {
        dispatch(clearCart());
      };
      let totalPrice = cartItems.reduce((acc, curr) => {
        let price = curr?.card?.info?.price ? curr?.card?.info?.price : curr?.card?.info?.defaultPrice;
        acc += price;
        return acc;
      }, 0);
      
      return (
        <>
        {!cartItems.length ? (<EmptyCart/>) : ( 
          <div className="flex gap-16 bg-gray-200 min-h-[84vh] overflow-hidden justify-center max-[990px]:gap-4">
            <div className="w-6/12 max-[990px]:w-[29rem] max-[730px]:w-72 max-[476px]:w-56">
              <div className="mx-auto my-4 bg-white w-[34rem] p-4 shadow-lg max-[990px]:w-[29rem] max-[730px]:w-72 max-[476px]:w-56">
                <div className="text-center">
                  <h2 className="font-bold text-xl max-[460px]:text-[1rem]">Items Details</h2>
                </div>

                <CategoryItems items={cartItems} parent="Cart" />
              </div>
            </div>
            <div className="w-[20rem] max-[990px]:w-60 max-[730px]:w-40 max-[476px]:w-32">
              <div className="w-80 max-[990px]:w-56 max-[730px]:w-40 max-[476px]:w-32">
                <div className="mx-auto my-4 bg-white w-12/12 p-4 shadow-lg flex flex-col justify-center items-center gap-8 max-[990px]:w-56 max-[730px]:w-40 max-[476px]:w-32">
                  <h2 className="font-bold text-xl max-[476px]:text-center max-[476px]:text-base">Price Details</h2>
                  <div className="w-full text-center max-[476px]:text-[0.8rem] ">
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
                      className="bg-red-600 w-28 p-3 text-base font-bold text-white rounded-lg shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 max-[476px]:text-[0.8rem] max-[476px]:p-[0.8rem] max-[476px]:w-24">
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

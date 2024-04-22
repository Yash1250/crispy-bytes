/** @format */

import { IMG_URL } from "../utils/config";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const CategoryItems = ({ items , parent}) => {
  // let {name,price,description} = items[0]?.card?.info;
  // console.log(name,price,description);
  // console.log(items);

  const dispatch = useDispatch();


  const addItemsToCartHandeler = (item) => {
    dispatch(addItem(item));
  };
  const removeItemsFromCartHandeler = (index) =>{
    dispatch(removeItem(index));
  }
  return (
    <div>
      {items.map((item , index) => {
        let { name, price, description, id, defaultPrice, imageId } =
          item?.card?.info;
        return (
          <div
            className="border-b-2 border-gray-600 py-6 text-left flex items-center "
            key={index}>
            <div className="w-9/12">
              <h1 className="font-bold text-gray-700">{name}</h1>
              <p className="text-gray-700">
                ₹{price ? price / 100 : defaultPrice / 100}
              </p>
              {!(parent == "Cart") && ( <div className="font-normal text-base text-gray-600">
                {description}
              </div>)}
             
            </div>
            <div className="w-44 pl-4 relative">
              <img
                className="w-36 h-36 rounded-lg shadow-lg"
                src={IMG_URL + imageId}
              />
              {parent == "Cart" ? (<h2
                onClick={() => removeItemsFromCartHandeler(index)}
                className="cursor-pointer absolute bg-white text-red-600 font-bold m-2 p-1 w-28 text-center shadow-xl rounded-lg top-[7.3rem] left-6 hover:text-orange-600 max-[730px]:w-[5.3rem] max-[476px]:w-[3.8rem] max-[476px]:text-[0.7rem] max-[476px]:p-[0.4rem]">
                REMOVE
              </h2>) :  (<h2
                onClick={() => addItemsToCartHandeler(item)}
                className="cursor-pointer absolute bg-white text-green-600 font-bold m-2 p-1 w-28 text-center shadow-xl rounded-lg top-[7.3rem] left-6 hover:text-orange-600 max-[520px]:w-[5.3rem]">
                ADD
              </h2>)}
              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryItems;

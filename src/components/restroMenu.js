/** @format */

import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";
import MenuItem from "./MenuItem";
import { useState } from "react";
import { IMG_URL } from "../utils/config";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RestroMenu = () => {
  const { resId } = useParams();

  let cartItems = useSelector((store) => store?.cart?.items);

  const [showIndex, setShowIndex] = useState(0);

  const restroMenuData = useRestroMenu(resId);

  if (!restroMenuData) return <Shimmer />;

  let {
    areaName,
    avgRating,
    name,
    cuisines,
    cloudinaryImageId,
    costForTwoMessage,
    totalRatings,
  } = restroMenuData[2]?.card?.card?.info;

  let menu = restroMenuData[4]?.groupedCard?.cardGroupMap?.REGULAR ? restroMenuData[4]?.groupedCard?.cardGroupMap?.REGULAR : restroMenuData[5]?.groupedCard?.cardGroupMap?.REGULAR;
 let correctMenu =
    menu?.cards[1]?.card?.card?.itemCards == undefined
      ? menu?.cards[4]?.card?.card?.itemCards
      : menu?.cards[1]?.card?.card?.itemCards;

  let data =
  menu?.cards.filter(
      (card) =>
        card?.card?.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <>
      <div className="text-center font-medium text-lg p-4 relative">
        <h1 className="font-bold text-2xl m-4">{name}</h1>
        <h3 className="text-orange-500">{cuisines.join(", ")}</h3>
        <h3>
          <span className="text-md">⭐</span>
          {avgRating} ({totalRatings}+ ratings) | {costForTwoMessage}
        </h3>
        <h3>Outlet - {areaName}</h3>
        <div>
          {data.map((item, index) => {
            return (
              <MenuItem
                key={item?.card?.card?.title}
                data={item?.card?.card}
                showItems={index == showIndex && true}
                setShowIndex={() => {
                  setShowIndex(
                    showIndex == null || showIndex != index ? index : null
                  );
                }}
              />
            );
          })}
        </div>
        <div className="flex w-80 absolute right-0 top-[8vh] bg-white shadow-lg rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-300 duration-300 max-[980px]:hidden">
          <div className="w-2 bg-orange-600"></div>
          <div className="flex items-center px-2 py-3 justify-center">
            <img
              className="w-12 h-12 object-cover rounded-full"
              src={IMG_URL + cloudinaryImageId}
            />
            <div className="mx-3">
              <h2 className="text-xl font-semibold text-gray-800 overflow-hidden truncate w-60">
                {name}
              </h2>
              <Link to="/cart"><p className="text-gray-600 cursor-pointer hover:text-white">
                {cartItems.length} Item Added in Cart
              </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestroMenu;

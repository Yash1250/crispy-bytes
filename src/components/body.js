/** @format */

import { useEffect, useState } from "react";
import { IMG_URL } from "../utils/config";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { RESTRO_LIST_API } from "../utils/config";
import RestrountCard from "./RestrountCard";
import { IoSearch } from "react-icons/io5";

let Body = () => {
  //   console.log("hello world");
  let [inputValue, setInputValue] = useState("");
  let [newRestroList, setNewRestroList] = useState([]);
  let [restroListAPI, setRestroListAPI] = useState([]);
  let [showNoRestroFound, setShowNoRestroFound] = useState(true);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      let data = await fetch(RESTRO_LIST_API);
      if (!data.ok) {
        throw new Error(`Failed to fetch data from API: ${data.statusText}`);
      }
      let json = await data.json();
      if (
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      ) {
        setNewRestroList(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setRestroListAPI(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } else {
        setNewRestroList(
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setRestroListAPI(
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      }
    } catch (error) {
      console.log("Error fetching data:", error);
      // You can set state or perform other error handling actions here
    }
  };
  
  function filterTopRestro(newRestroList) {
    return newRestroList.filter((elem) => {
      return elem.info.avgRating >= 4;
    });
  }

  function filteredRestroList(newRestroList, inputValue) {
    return newRestroList.filter((obj) => {
      return obj.info.name.toLowerCase().includes(inputValue.toLowerCase());
    });
  }

  // console.log(newRestroList)

  if (newRestroList.length == 0) {
    return <Shimmer />;
  }
  return (
    <>
      <div className="mb-10 flex flex-col items-center min-h-[88vh]">
        <div className="flex justify-center mt-6 max-[539px]:w-80 max-[539px]:h-10">
          
          <div className="mr-6 w-96 flex border-orange-600 border-solid border-2 rounded-md overflow-hidden">
            <input
              className=" px-4 py-2 w-60 rounded-lg focus:outline-none flex-1 max-[539px]:w-40"
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              type="text"
              placeholder="Search a restaurant you want"
              value={inputValue}
            />
            <button
              onClick={() => {
                let newList = filteredRestroList(restroListAPI, inputValue);
                if (newList.length > 0) {
                  setNewRestroList(newList);
                  setShowNoRestroFound(true);
                } else {
                  setShowNoRestroFound(false);
                }
              }}
              className="px-4 py-2 bg-orange-600 text-white ">
              <IoSearch />
            </button>
          </div>
          <div className=" bg-orange-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-gray-400 max-[539px]:text-xs max-[539px]:flex max-[539px]:items-center">
            <button
              onClick={() => {
                setNewRestroList(filterTopRestro(newRestroList));
              }}
              className="topRatedRestro">
              Top Rated
            </button>
          </div>
        </div>
        {!showNoRestroFound ? (
          <h1>No Restro Found...</h1>
        ) : (
          <main className="flex flex-wrap mt-6 gap-7 justify-center min-[860px]:px-4 min-[1100px]:px-32 ">
            {newRestroList.map((elem) => {
              return (
                <Link key={elem.info.id} to={`/restro/${elem.info.id}`}>
                  <RestrountCard {...elem.info} />
                </Link>
              );
            })}
          </main>
        )}
      </div>
    </>
  );
};

export default Body;

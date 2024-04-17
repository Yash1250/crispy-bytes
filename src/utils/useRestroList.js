import { useState, useEffect } from "react";
import { RESTRO_LIST_API } from "./config";
const useRestroList = ()=>{
    let [newRestroList, setNewRestroList] = useState([]);
    let [restroListAPI, setRestroListAPI] = useState([]);
    useEffect(() => {
        fetchApi();
      }, []);
    
      const fetchApi = async () => {
        let data = await fetch(RESTRO_LIST_API);
        let json = await data.json();
        setNewRestroList(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setRestroListAPI(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      };
    return [newRestroList , restroListAPI];
}

export default useRestroList;
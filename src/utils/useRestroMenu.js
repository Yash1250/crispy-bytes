import { useEffect,useState } from "react";
import { RESTRO_MENU_API } from "./config";

const useRestroMenu = (resId)=>{
    const [restroMenuData , setRestroMenuData] = useState(null);

    useEffect(()=>{
        fetchRestroMenu();
    }, []);

    const fetchRestroMenu = async () => {
        try {
          let data = await fetch(RESTRO_MENU_API + resId);
          if (!data.ok) {
            throw new Error(`Failed to fetch data from API: ${data.statusText}`);
          }
          let json = await data.json();
          setRestroMenuData(json.data.cards);
        } catch (error) {
          console.log("Error fetching restaurant menu:", error);
          setRestroMenuData(null);
        }
      };
      


    return restroMenuData;
}

export default useRestroMenu;
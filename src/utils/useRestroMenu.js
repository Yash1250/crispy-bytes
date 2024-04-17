import { useEffect,useState } from "react";
import { RESTRO_MENU_API } from "./config";

const useRestroMenu = (resId)=>{
    const [restroMenuData , setRestroMenuData] = useState(null);

    useEffect(()=>{
        fetchRestroMenu();
    }, []);

    const fetchRestroMenu = async ()=>{
        let data = await fetch(RESTRO_MENU_API + resId);
        let json = await data.json();
        setRestroMenuData(json.data.cards);
    }


    return restroMenuData;
}

export default useRestroMenu;
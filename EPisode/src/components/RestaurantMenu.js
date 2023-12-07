import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo,setresInfo] = useState(null);
    const {resId}= useParams();


    useEffect(() => {
        fetchMenu();
        // console.log(resInfo[0]?.info)
    }, []);
    
    const fetchMenu = async () => {
        console.log("menu called below")
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        

        setresInfo(json.data);
    
    };

    if (resInfo === null) return <Shimmer/>;
    // console.log(resInfo)

    const {cuisines,costForTwo,name} = resInfo?.cards[0]?.card?.card?.info;
    console.log(resInfo);

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);


    
    return (
        <div className="menu">
            <h1>{name}</h1>
          
            <p>{cuisines.join(" , ")} - {costForTwo} </p>

            <h2>Menu</h2>
            
            <ul>
                {itemCards.map((item) => (
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name} -{" Rs."} 
                        {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice} 
                    </li>
               ))}
              
            </ul>
        </div>
    )
}

export default RestaurantMenu;
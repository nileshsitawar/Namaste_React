
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ShimmerRes from "./ShimmerRes";
import ShimmerMenuRes from "./ShimmerMenuRes";

import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react";

const RestaurantMenu = () => {

    const {resId}= useParams();
    const resInfo = useRestaurantMenu(resId);
    
    const [showIndex,setShowIndex] = useState(null);


    if (resInfo === null) return <ShimmerMenuRes/>;
    // console.log(resInfo)

    const {cuisines,costForTwo,name,imageId} = resInfo?.cards[0]?.card?.card?.info;
    // console.log(resInfo);

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories =
     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
        c.card?.["card"]?.["@type"] =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        // console.log(categories);
    
    return (
        <div className="text-center">
            <h1 className="font-bold m-10 text-2xl">{name}</h1>
          
            <p className="font-bold text-lg">{cuisines.join(" , ")} - {costForTwo} 
            </p>

           {/* categories accordions */}
           
           {
            categories.map((category,index)=>(
            <RestaurantCategory 
               key={category?.card?.title}
               data={category?.card?.card}
               showItems = {index==showIndex ? true : false} 
               setShowIndex = {()=> setShowIndex(index)} 
               />
            
            ))}


        </div>
    )
}

export default RestaurantMenu;














// div inside code for data show
{/* <ul >
                    <div className="">
                        {itemCards.map((item) => (
                                <li  className="flex w-full h-50" key={item?.card?.info?.id}>
                                    <div className=" bg-gray-50 ml-6 " >
                                        <li className="font-bold">{item?.card?.info?.name}</li> 
                                       <li>-{" Rs."} {item?.card?.info?.price/100|| item?.card?.info?.defaultPrice} </li>
                                       <li className="w-96 h-40">{item?.card?.info?.description}</li>
                                    </div>



                                    <div>
                                        <li><img className="w-28 h-20" alt="itemimg"
                                        src={MENU_ITEMS_I+item?.card?.info?.imageId}
                                        /></li>
                                    </div>
                                    
                                  

                                </li> */
                            /* ))}
                    </div> *

{/*               
            </ul> */}

// aapla data.data = data ahe actual chya hot but now its sorted 

import { useState } from "react";
import ItemList from "./ItemList"

const RestaurantCategory = ({data , showItems,setShowIndex}) =>{
    // const [showItems,setShowItems] = useState(false);
    const handleClick = ()=>{
        setShowIndex();
    };
 
    return (
        <div>
            {/* {header} */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg">
                <div className=" flex justify-between cursor-pointer " onClick={handleClick}>
                    <span className="font-bolt text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>⬇️</span>
                </div>
                  {/* {Accordion Body} */}  
                {showItems && <ItemList items={data.itemCards} />}
            </div>
           
        </div>
    );
};
export default RestaurantCategory;
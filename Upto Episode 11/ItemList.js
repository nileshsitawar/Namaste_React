import { CDN_URL } from "../utils/constants";
const ItemList = ({items}) =>{
 
    return (
        <div>
            {items.map((item)=> (
             <div 
                key={item.card.info.id} 
                 className="w-9/12 p-2 m-2 border-gray-200 border-b-2 text-left">
                <div className="py-2 flex justify-between">
                    <div>
                        <span className="font-bold">{item.card.info.name}</span>
                           <p className="font-mono font-extrabold">Rs  -{item.card.info.price/100}</p>
                    </div>
                    <div className="w-3/12">
                        <div className="absolute">
                        <button className=" rounded-lg mx-6 p-2 bg-red-950 text-white shadow-lg ">
                            Add+
                        </button>

                        </div>
                        <img className="rounded-lg"
                        alt="item-card"
                        src={ CDN_URL+ item.card.info.imageId}/>
                        
                        
                    </div>
                    
                

                </div>
                <p className="text-xs ">{item.card.info.description}</p>
             </div>
             ))
             }
        </div>
    )
    
}

export default ItemList;
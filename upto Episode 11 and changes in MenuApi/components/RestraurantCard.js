import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard =(props) => {
    const {resdata} = props;
    const {loggedInUser} = useContext(UserContext);
    // assigning the parameters to resdata?.data this is chain
    const {name,avgRating,cuisines,deliveryTime,costForTwo} = resdata?.info
    return (
      <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300'>
        <img className="rounded-lg"
        alt="res-card" 
        src={ CDN_URL+ resdata?.info?.cloudinaryImageId}
        />
      
        <h3 className="font-bold py-1 text-lg">{name}</h3>
        <h3 >{cuisines.join(",")}</h3>
        <h3>{avgRating}</h3>
        <h3>{costForTwo}</h3>
        <h3>{deliveryTime}</h3>
        <h3>User: {loggedInUser} </h3>
      
      </div>
    );
  };

  // higher order component
  // input - RestaurantCard==> RestaurantCardPromoted
  export const withPromotedLabel = (RestaurantCard) =>{
    return () =>{
      return (
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }
export default RestaurantCard;
import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props) => {
    const {resdata} = props;
    // assigning the parameters to resdata?.data this is chain
    const {name,avgRating,cuisines,deliveryTime,costForTwo} = resdata?.info
    return (
      <div className='res-card'>
        <img alt="res-card" src={ CDN_URL+ resdata?.info?.cloudinaryImageId}
        />
      
        <h3>{name}</h3>
        <h3>{cuisines.join(",")}</h3>
        <h3>{avgRating}</h3>
        <h3>{costForTwo}</h3>
        <h3>{deliveryTime}</h3>
      
      </div>
    );
  };

export default RestaurantCard;
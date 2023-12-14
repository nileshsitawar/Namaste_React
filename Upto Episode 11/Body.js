import RestaurantCard ,{ withPromotedLabel} from "./RestraurantCard.js";
import { useEffect, useState , useContext } from "react";
import ShimmerRes from "./ShimmerRes.js"
import resList from "../utils/mockData";
import Shimmer from "./Shimmer.js";
import {Link} from "react-router-dom";

import UserContext from "../utils/UserContext.js";
// here we are using resList so we r having reslis here BUT THIS IS NOT A GOOD PRACTICE TO WRITE HARDCORE DATA IN COMPONENTS PUT THE URLS AND LOGO AND HARDCODE DATA IN UTILS(UT) Component


const Body = () =>{
  // console.log("componet rendered")

  const [Lisofres, setLisofres] = useState([]);
  const [filteredres,setfilteredres] = useState([]);

  const [searchText,setsearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // console.log(Lisofres)
  
 

  
  useEffect(() => {
    // console.log("useEffect called")
    fetchdata();
    }, []);
    // console.log("")

  const  fetchdata = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97194000&lng=77.59369000&page_type=DESKTOP_WEB_LISTING");

    json = await data.json();
    setLisofres(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredres(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


  };

  const {loggedInUser,setUserName} = useContext(UserContext);
  if (Lisofres.length == 0) {
    return <ShimmerRes/>
  }
  // console.log(Lisofres)
   

    // state variable -Super poweful vaiable make make it we use HOOKS

  return (
    <div className='body'>
      <div className='filter flex'>
        <div className="search m-4 p-4">
          <input type="text" 
          className=" w-60 h-7 px-1 py-1 bg-gray-300 m-4 rounded-lg shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={searchText} 
          onChange={(e)=>{
            setsearchText(e.target.value);
            
          }}
          />

          {}
          
          <button  
             className="px-4 py-1 bg-yellow-300  rounded-lg shadow-app"
             onClick={()=>{
              // console.log(searchText);
              const filderedRestraunt = Lisofres.filter(
                (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredres(filderedRestraunt);
            }}
            >
              Search
          </button>
        </div>
        <div className="m-4 p-2 flex items-center">
          < button 
              className="px-4 py-2px-4 py-1 bg-pink-400 m-4 rounded-lg shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              onClick={()=> {
                const filterdata = Lisofres.filter(
                    (res)=> res.info.avgRating > 4
                     
                );
                setfilteredres(filterdata);
            }}
            
            >
              Top Rated Resaurants
            </button>
            <div className="search m-4 p-4 flex items-center">
                  <label> UserName: </label>
                  <input
                    className="w-25 h-6 border-black p-2"
                    value = {loggedInUser}
                    
                    onChange= {(e)=>  setUserName(e.target.value) 
                      
                      
                      }

                  
                    
                     
                  />
              </div>

        </div>
      </div>
      <div className='flex flex-wrap'>
        {
          filteredres.map((res) => (
          <Link
           key={res.info.id}
            to={"restaurants/"+res.info.id}
            >
              {/* {If the restaurant is promoted then add a promoted label to it} */
              res.info?.promoted? (<RestaurantCardPromoted resdata ={res}/>) 
              : (<RestaurantCard  resdata ={res} />)
      
              }
              
              
            </Link>
            
          ))
        }
      </div>
    </div>
    
  )




};

export default Body;
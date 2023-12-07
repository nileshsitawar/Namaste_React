import RestaurantCard from "./RestraurantCard.js";
import { useEffect, useState } from "react";

import resList from "../utils/mockData";
import Shimmer from "./Shimmer.js";
import {Link} from "react-router-dom";
// here we are using resList so we r having reslis here BUT THIS IS NOT A GOOD PRACTICE TO WRITE HARDCORE DATA IN COMPONENTS PUT THE URLS AND LOGO AND HARDCODE DATA IN UTILS(UT) Component


const Body = () =>{
  console.log("componet rendered")

  const [Lisofres, setLisofres] = useState([]);
  const [filteredres,setfilteredres] = useState([]);

  const [searchText,setsearchText] = useState("");
  
  async function data_fetch(){

    

  }
  data_fetch();

  
  useEffect(() => {
    console.log("useEffect called")
    fetchdata();
    }, []);
    console.log("body called")

  const  fetchdata = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.8973944&lng=78.0880129&page_type=DESKTOP_WEB_LISTING");

    json = await data.json();
    setLisofres(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredres(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


  };

  if (Lisofres.length == 0) {
    return <Shimmer/>
  }

    // state variable -Super poweful vaiable make make it we use HOOKS

  return (
    <div className='body'>
      <div className='filter'>Search
        <div className="search">
          <input type="text" 
          className="search-box"
          value={searchText} 
          onChange={(e)=>{
            setsearchText(e.target.value);
            
          }}
          />
          
          <button
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
          < button 
            className="filter-btn" 
            onClick={()=> {
              const filterdata = Lisofres.filter(
                  (res)=> res.info.avgRating > 4
              );
              setfilteredres(filterdata);
          }}
          
          >
            Top Rated Resaurants
          </button>
      </div>
      <div className='res-container'>
        {
          filteredres.map((res) => (
          <Link key={res.info.id} to={"restaurants/"+res.info.id}><RestaurantCard  resdata ={res}/></Link>
          ))
        }
      </div>
    </div>
    
  )




};

export default Body;
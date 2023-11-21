import RestaurantCard from "./RestraurantCard.js";
import { useEffect, useState } from "react";

import resList from "../utils/mockData";
import Shimmer from "./Shimmer.js";
// here we are using resList so we r having reslis here BUT THIS IS NOT A GOOD PRACTICE TO WRITE HARDCORE DATA IN COMPONENTS PUT THE URLS AND LOGO AND HARDCODE DATA IN UTILS(UT) Component



const Body = () =>{
  console.log("componet rendered")

  const [Lisofres, setLisofres] = useState([]);
  const [filteredres,setfilteredres] = useState([]);

  const [searchText,setsearchText] = useState("");

  
  useEffect(() => {
    console.log("useEffect called")
    fetchdata();
    }, []);
    console.log("body called")

  const fetchdata = () => {
    setLisofres(resList);
    setfilteredres(resList);


  };

  if (resList.length == 0) {
    return <h1>Loading??</h1>
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
                (res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase())
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
                  (res)=> res.data.avgRating > 4
              );
              setfilteredres(filterdata);
          }}
          
          >
            Top Rated Resaurants
          </button>
      </div>
      <div className='res-container'>
        {
          filteredres.map((res) => (<RestaurantCard key={res.data.id} resdata ={res}/>))
        }
      </div>
    </div>
    
  )




};

export default Body;
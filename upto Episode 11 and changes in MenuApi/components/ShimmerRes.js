

const mapped = Array.from({length:12}).map((el,i)=>{
    return (<div key={i} ><div className="shimmer-card h-[200px] w-[200px] bg-gray-300 ml-4 mt-5 p-3 border-spacing-1 "></div> 
    <div className="w-44 h-6  bg-gray-300  mt-3 ml-4 p-3 border-spacing-1 rounded-sm"></div>
    <div className="w-40 h-6  bg-gray-300  mt-3 ml-4 p-3 border-spacing-1 rounded-sm"></div>
        <div className="flex">
            <div className="w-36 h-6  bg-gray-300  mt-3 ml-4 p-3 border-spacing-1 rounded-sm"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300  mt-3 ml-2 p-3"></div>
            </div></div>)
})

const ShimmerRes = ()=>{
    return (

        <div className="res-container flex flex-wrap space-x-20 justify-evenly" >
            
            {mapped}
                    
                
           

        </div>

        

    )
}
export default ShimmerRes;
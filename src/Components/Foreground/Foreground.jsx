import React, { useRef, useState } from "react";
import Card from "../Card/Card";


const Foreground = () => {

    const ref = useRef(null)

    const data = [
        {
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            tagdetails:"Office"
        
        },

    ]

  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">

            <Card data={data} reference={ref}/>
      {/* {
        data.map((item,index)=>{
           return <Card key={index} data={item} reference={ref}/>
        })
      } */}
        
      </div>
    </>
  );
};

export default Foreground;

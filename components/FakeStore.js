"use client";

import { useEffect, useState } from "react";

export default function(){

    const [fetchdata,setfetchData] = useState([]);

    useEffect(()=>{
        (async ()=>{
            try {
            const response = await fetch("https://fakestoreapi.com/products",{method:"GET"});
            const data = await response.json();
            setfetchData(data);
            } catch (error) {
                console.log(error);
            }

        })()
    },[])

    if(fetchdata.length){
        return <div className="flex flex-col items-center justify-center">{fetchdata.map((item)=>{
            return <div key={item.id} className="flex flex-col items-center justify-center my-4">
                <div className="bg-blue-500/100 p-3 rounded-xl text-white m-2">{item.title}</div>
                <img src={item.image} alt="fake-store-image" width={130} height={130}/>
                <div>Rs {item.price}</div>
                <div className="flex gap-3">
                <button className="btn btn-primary">Add Me</button>
                <button className="btn btn-accent">Add Me</button>
                <button className="btn btn-outline">Add Me</button>
                <button className="btn btn-secondary">Add Me</button>
                <button className="btn btn-primary">Add Me</button>
                </div>
            </div>
        })}</div>
    }
    else{
        return <span className="loading loading-spinner loading-lg"></span>
    }
}
"use client";

import { useEffect, useState } from "react";

export default function(){

    const [fetchdata,setfetchData] = useState([]);

    useEffect(()=>{
        (async ()=>{
            try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setfetchData(data);
            } catch (error) {
                console.log(error);
            }

        })()
    },[])

    if(fetchdata.length){
        return fetchdata.map((item)=>{
            return <div key={item.id}>
                <div>{item.title}</div>
                <img src={item.image} alt="fake-store-image" width={130} height={130}/>
                <div>{item.price}</div>
            </div>
        })
    }
    else{
        return <>Loading...</>
    }
}
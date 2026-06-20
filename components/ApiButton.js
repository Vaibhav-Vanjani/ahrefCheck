"use client";

export default function(){

    async function apiHandler(){
            const response = await fetch('http://localhost:3000/api/hello');
            const data = await response.json();
            console.log(data);
            alert(data.message);
    }

    return <>
        <button onClick={apiHandler}>Click Me</button>
    </>
}
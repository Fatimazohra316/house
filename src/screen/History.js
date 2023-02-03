import axios from "axios";
import React, { useEffect, useState } from "react";


function History() {
    const [dat,setData] = useState([])

    const getData = ()=>{
        axios.post("http://cleaningapp.8tkt.com/public/api/getbooking?email=test@gmail.com").then((success)=>{
            setData(success.data.data)
            console.log(success.data.data);
        })
    }
    useEffect(()=>{
        getData();
    },[])
    return (
        <div>
            
        </div>
    )
}



export default History;
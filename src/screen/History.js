import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import image2 from "../images/hand.png"
import image1 from "../images/historical.png"
import image3 from "../images/washrooms.png"

let item ; 
function History() {
   const[item,setItem] = useState([])
   const[datas,setData] = useState("")
  
   const url = "http://cleaningapp.8tkt.com/public/api/getbooking"
   useEffect(()=>{
    
      const fetchData = () => {
      const data = new FormData
       data.append("email" ,"test@gmail.com" )
         fetch(url,{
            method : "POST",
            body : data
         })
         .then(response => response.json())
         .then((res) => {
            // console.log(res.data);
            const data = res.data;
         //   item = data
         setItem(data)
         //   console.log(item);
             
         });
     };


    
     fetchData();
   //   getData();
     console.log(item);
 },[]);

    return (
      <div>
          <div className="container">
        <div><p className="historical"><img src={image1} /><span className="cleaning">History</span></p></div>
        <div className="buttonPart">
            <button className="btn pending">Pending</button>
            <button className="btn completed">Completed</button>
            {/* <p>{email}</p> */}

        </div>
        <div className="serviceName">
         <div><img src={image2}/><span className="names">Service Name</span></div>
         <div className="bookingId">
            <p>Booking Id</p>
            <p>Date</p>
            <p>Time</p>
            <p>Status</p>
            <p>Total Price</p>
         </div>
        </div>
        <div>
        {item ? item.map((e,i) => {
                  return (
                     <div className="serviceNames">
                     <div><img src={image3}/><span className="nam">Service Name</span></div>
                     <div className="booking">
                        <p>{e.id}</p>
                        <p>{e.booking_date}</p>
                        <p>{e.booking_time}</p>
                        <p className="btn btn-warning">Pending</p>
                        <p>{e.booking_total_price}</p>
                     </div>
                    </div>
                  )
               }): null}
        </div>
 
    </div>
          
       
      </div>
    )
}



export default History;

// map in react js?
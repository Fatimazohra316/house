import React, { useEffect, useState } from "react";
import image1 from "../images/calender.png"
import image2 from "../images/location.png"
import image4 from "../images/dottedline.png"
import image5 from "../images/washrooms.png"
import { LocalHospital } from "@mui/icons-material";

function Booking(){
    const [number,setNumber] = useState(0);
    const [no,setNo] = useState(1)
    // let number ;
    // let no = 0 

    function increment(){
    setNo(no + 1)
    setNumber(no)
    console.log(number);
    //    no = no + 1
    //    number = no 
       
    //    alert("1")
     }
     function decrement(){
        setNo(no-1)
        setNumber(no)
        console.log(number);
        // alert("2")
        
     }
    // console.log(no);
    return(
        <div className="container">
            <div className="onePart">
                <div><button className="ones">1</button>
                 <p className="serviceText">Service Info</p>
                </div>
                <div className="dottedLine"><img src={image4}/></div>
                <div><button className="two">2</button>
                <p className="serviceText">Book Service</p></div>
                <div className="dottedLine"><img src={image4}/></div>
                <div><button className="two">3</button>
                <p className="serviceText">Booking confirmed</p></div>
                
            </div>
            <div className="stepOne">
                <div>
                   <div>
                   <p className="deliveryDate">Enter your Delivery Date :</p>
                   <div className="calenderDiv"><img className="calender" src={image1}/><input placeholder="Enter Date" className="calenderInput"/></div>
                   </div>
                   <div className="deliveryCalender">
                   <p className="deliveryDate">Enter your Delivery Time :</p>
                   <div className="calenderDiv"><img className="calender" src={image1}/><input placeholder="Enter Time" className="calenderInput"/></div>
                   </div>
                   
                </div>
                <div>
                   <div>
                   <p className="deliveryDate">Enter your Number :</p>
                   <div className="calenderDiv"> <input placeholder="+21-000000000" className="calenderInput"/></div>
                   </div>
                   <div className="deliveryCalender">
                   <p className="deliveryDates">Your Address : <span className="current">Use Current Location</span></p>
                   <div className="calenderDiv"><img className="calender" src={image2}/><input placeholder="Enter Your Address" className="calenderInput"/></div>
                   </div>
                   
                </div>
                
            </div>
            <div className="stepTwo">
                <div>
                   <div>
                   <p className="deliveryDate">Service Quantity :</p>
                   <div className="incrementDiv"><img src={image5}/>
                   <div className="decrement">
                   <button onClick={decrement} className="increment">-</button>
                   <p>{number}</p>
                   <button onClick={increment} className="increment">+</button>
                   </div>
                   
                   </div>

                   </div>

                   <div className="deliveryCalender">
                   <p className="deliveryDate">Enter your Delivery Time :</p>
                   <div className="calenderDiv"><img className="calender" src={image1}/><input placeholder="Enter Time" className="calenderInput"/></div>
                   </div>
                   
                </div>
                <div>
                   <div>
                   <p className="deliveryDate">Enter your Number :</p>
                   <div className="calenderDiv"> <input placeholder="+21-000000000" className="calenderInput"/></div>
                   </div>
                   <div className="deliveryCalender">
                   <p className="deliveryDates">Your Address : <span className="current">Use Current Location</span></p>
                   <div className="calenderDiv"><img className="calender" src={image2}/><input placeholder="Enter Your Address" className="calenderInput"/></div>
                   </div>
                   
                </div>
                
            </div>
            <input type="checkbox" checked class="checkbox-round" />

        </div>
    )
}


export default Booking;
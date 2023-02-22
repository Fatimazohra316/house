import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from '../images/justin.png'


function Setting() {
    const navigate = useNavigate()
    function moveToProfile(){
        navigate("/profile")
    }
    return (
        <div className="container">
               <div>
                        <div onClick={moveToProfile} className="priceDiv">
                          <div className="profileDiv">
                          <img src={image1}/>  
                          <p className="details">My Details</p>
                          </div>
                        </div>
                    </div> 
               <div>
                        <div onClick={moveToProfile} className="priceDiv">
                          <div className="profileDiv">
                          <img src={image1}/>  
                          <p className="details">My Details</p>
                          </div>
                        </div>
                    </div> 
        </div>
    )
}



export default Setting;
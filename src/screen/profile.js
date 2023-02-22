import React from "react";
import image1 from '../images/justin.png'



function Profile(){
    return(
        <div className="container">
               <div  className="detailDiv">
                          <div className="profilesDiv">
                          <img src={image1}/>  
                          <p className="details">My Details</p>
                          </div>
                </div>
            <div className="informationDiv">
              <div>
               <div>
               <p className="emailAddress">Email Address</p>
               <div className="emailDiv">
                   
                    <input placeholder="Enter your Email"/>
                </div>
               </div>
               <div>
               <p className="emailAddress"> Address</p>
               <div className="emailDiv">
                   
                    <input placeholder="Enter your Address"/>
                </div>
               </div>
              </div>
              <div>
              <div>
               <p className="emailAddress">UserName</p>
               <div className="emailDiv">
                   
                    <input placeholder="Enter your Username"/>
                </div>
               </div>
              <div>
               <p className="emailAddress">City</p>
               <div className="emailDiv">
                   
                    <input placeholder="Enter your City"/>
                </div>
               </div>
              </div>
            </div>
            <div>
                <button  className="nextButton">Update</button>
            </div>
        </div>
    )
}


export default Profile;
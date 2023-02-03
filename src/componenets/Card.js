import React from "react";
import image1 from "../images/washroom.png"

function Card(props) {
    const {description , src} = props
    return (
      <div>
        <div className="card-body">
        <div className="cardHalfPart">
         <img src={image1}/>
            
        </div>
        <div>Washroom</div>
       </div>
      </div>
    )

}
export default Card;
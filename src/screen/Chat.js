import React, { useState } from "react";
import image1 from "../images/chats.png"
import image2 from "../images/sweep.png"
import image3 from "../images/searchs.png"
import image4 from "../images/dot.png"
import image5 from "../images/sweepicon.png"
import image6 from "../images/tick.png"
import image7 from "../images/sendButton.png"
import axios from "axios";

function Chat() {
    const [message,setMessage] = useState("");
    const [ourmessage,setOurMessage] = useState([])
     function addMessage(){
        const data = new FormData
        data.append("email","test@gmail.com")
        data.append("message",message)
        fetch("https://cleaningapp.8tkt.com/public/api/sendmessage",{
            method : "POST" ,
            body : data
        }).then((response) => response.json())
        .then((data) => {
        //   console.log(data);
                     
          
        })

       fetch("http://cleaningapp.8tkt.com/public/api/getmessages",{
        method : "POST",
        body : data
       }).then((response)=>response.json()).then((data)=>{
        // console.log(data);
        setOurMessage(data.data)

        console.log(ourmessage);
        
       })
     }

    return (
        <div className="container mb-5">
            <div><p className="historical"><img src={image1} /><span className="cleaning">Chat Support</span></p></div>
            <div className="rectangleBox">
                <div><img className="sweep" src={image2} /> <span className="support">HOUSE SWEEPER SUPPORT</span></div>
                <div><img src={image4} /></div>
            </div>
            <div className="btnDiv"><button className="btn todayButton">Today</button></div>
            <div>
            <div>
                <div className="chatBubble">
                    <div>
                        <img className="image5" src={image5} />
                    </div>
                    <div class="talk-bubble tri-right round btm-left">
                        <div class="talktext">
                            <p>Hello</p>
                        </div>

                    </div>

                </div>
                <div className="time">6:31 PM</div>

            </div>
            <div>
                <div className="chatBubble">
                    <div>
                        <img className="image5" src={image5} />
                    </div>
                    <div class="talk-bubble tri-right round btm-left">
                        <div class="talktext">
                            <p>Are you Available</p>
                        </div>
                    </div>
                </div>
                <div className="time">6:31 PM</div>
            </div>
            <div>
                <div className="chatBubble">
                    <div>
                        <img className="image5" src={image5} />
                    </div>
                    <div class="talk-bubble tri-right round btm-left">
                        <div class="talktext">
                            <p> We are here, to Inform you that
                                your report is Registered.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="time">6:31 PM</div>
            </div>
          <div>
            
          <div>
                {ourmessage.map((element,index)=>{
                    return (
                        <div className="bubbleDiv">
                            <div className="chatBubbles">
                                <div className="talk-bubbles round tri-right btm-right">
                                    <div className="talktexts">
                                        <p key={index}>{element.message}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    
                })}
            </div>
          </div>
           
            </div>
            <div className="messagess">
                <input onChange={(e)=>setMessage(e.target.value)} placeholder="Write your message" className="messageDiv"/>
                <img onClick={addMessage} src={image7}/>
            </div>
        </div>

    )
}



export default Chat;
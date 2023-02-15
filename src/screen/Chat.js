import React from "react";
import image1 from "../images/chats.png"
import image2 from "../images/sweep.png"
import image3 from "../images/searchs.png"
import image4 from "../images/dot.png"
import image5 from "../images/sweepicon.png"
import image6 from "../images/tick.png"

function Chat() {
    return (
        <div className="container">
            <div><p className="historical"><img src={image1} /><span className="cleaning">Chat Support</span></p></div>
            <div className="rectangleBox">
                <div><img className="sweep" src={image2} /> <span className="support">HOUSE SWEEPER SUPPORT</span></div>
                <div><img src={image4} /></div>
            </div>
            <div className="btnDiv"><button className="btn todayButton">Today</button></div>
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
                <div className="chatBubbles">
                    <div class="talk-bubbles round tri-right btm-right">
                        <div class="talktexts">
                            <p>Yes, thank you</p>
                        </div>
                    </div>
                </div>
                <div className="time">6:31 PM <img src={image6}/></div>
            </div>
        </div>

    )
}



export default Chat;
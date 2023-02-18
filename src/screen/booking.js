import React, { useEffect, useState } from "react";
import image1 from "../images/calender.png"
import image2 from "../images/location.png"
import image4 from "../images/dottedline.png"
import image5 from "../images/washrooms.png"
import image6 from "../images/check.png"
import { useRef } from "react";

function Booking() {
    const [count, setCount] = useState(0)
   const ref = useRef(null)
   const refr = useRef(null)
   const refe = useRef(null)
   useEffect(() => {
    // The DOM element is accessible here.
    console.log(ref.current);
    console.log(refr.current);
    console.log(refe.current);
  }, []);
   
    return (
        <div className="container">
            <div className="onePart">
                <div><button className="ones">1</button>
                    <p className="serviceText">Service Info</p>
                </div>
                <div className="dottedLine"><img src={image4} /></div>
                <div><button className="two">2</button>
                    <p className="serviceText">Book Service</p></div>
                <div className="dottedLine"><img src={image4} /></div>
                <div><button className="two">3</button>
                    <p className="serviceText">Booking confirmed</p></div>

            </div>
            <div ref={ref} id="stepOne">
                <div>
                    <div>
                        <p className="deliveryDate">Enter your Delivery Date :</p>
                        <div className="calenderDiv"><img className="calender" src={image1} /><input placeholder="Enter Date" className="calenderInput" /></div>
                    </div>
                    <div className="deliveryCalender">
                        <p className="deliveryDate">Enter your Delivery Time :</p>
                        <div className="calenderDiv"><img className="calender" src={image1} /><input placeholder="Enter Time" className="calenderInput" /></div>
                    </div>

                </div>
                <div>
                    <div>
                        <p className="deliveryDate">Enter your Number :</p>
                        <div className="calenderDiv"> <input placeholder="+21-000000000" className="calenderInput" /></div>
                    </div>
                    <div className="deliveryCalender">
                        <p className="deliveryDates">Your Address : <span className="current">Use Current Location</span></p>
                        <div className="calenderDiv"><img className="calender" src={image2} /><input placeholder="Enter Your Address" className="calenderInput" /></div>
                    </div>

                </div>

            </div>
            <div  ref={refr} id="stepTwo">
                <div>
                    <div>
                        <p className="deliveryDate">Service Quantity :</p>
                        <div className="incrementDiv"><img src={image5} />
                            <div className="decrement">
                                <button onClick={() => setCount(count - 1)} className="increment">-</button>
                                <p>{count}</p>
                                <button onClick={() => setCount(count + 1)} className="increment">+</button>
                            </div>

                        </div>

                    </div>

                    <div className="deliveryCalender">
                        <p className="deliveryDate">Enter your Delivery Time :</p>


                        <div>
                            <div className="contains">
                                <div>
                                    <div class="radio">
                                        <input type="radio" checked value="Male" name='gender' id='male' />
                                        <label for="male"></label>
                                    </div>
                                </div>
                                <div class="right">Cash on Delivery</div>
                            </div>


                            <div className="contains">
                                <div >
                                    <div class="radio">
                                        <input type="radio" value="Female" checked name='gender' id='female' />
                                        <label for="female"></label>
                                    </div>
                                </div>
                                <div class="right">Credit Card <span>(Coming soon)</span></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div>
                        <p className="deliveryDate">Price details  :</p>
                        <div className="calenderDiv"> <input placeholder="Enter Coupon Code" className="calenderInput text-center" /></div>
                    </div>
                    <div className="deliveryCalender">
                        <div className="priceDiv">
                            <p>Price : 50$</p>
                            <p>Quantity : 2</p>
                            <p className="fw-bold">Total Amount : 100$</p>
                        </div>
                    </div>

                </div>

            </div>
            <div  ref={refe} id="stepThree">
                <div className="bookingConfirmed">
                    <div><img className="check" src={image6} /></div>
                    <p className="confirmBooking">Confirm Booking</p>
                    <p className="confirmBooking2">Are you sure you want to confirm
                        the booking</p>

                </div>

            </div>

            <div>
                <button  className="nextButton">Next</button>
            </div>


        </div>
    )
}


export default Booking;
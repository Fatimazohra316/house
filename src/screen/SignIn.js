import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../images/housebubble.png"


function SignIn() {


    const navigate = useNavigate()
    return (
        <div>
            <div className='signUp container'>
                <div>
                    <p className='hello'>Hello <span className='user'>User!</span></p>
                    <p className="quality">Your Quality Cleaning service will be done
                        in the best way with us.</p>
                    <p className='better'>SignIn to get the Service Now.</p>
                    <div><input className='name' placeholder='Enter Your Email Address' /></div>
                    <div><input className='name' placeholder='Password' /></div>
                    <div><button className='signUpBtn'>Sign In</button></div>
                    <p className='account'>Already have an Account? <span onClick={()=>navigate("/")} className='signIn'> Sign Up</span></p>
                </div>
                <div>
                    <img className="houseBubble" src={image1} />
                </div>

            </div>

        </div>
    )
}


export default SignIn;
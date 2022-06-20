import React, {useState} from "react";
import { Link } from "react-router-dom";

function Landing(){
    const [user,setUser]=useState(JSON.parse(localStorage.getItem("user")));
    return(
        <div className="landing">
            <button ><Link  to="/">Log out</Link></button>
            <div className="table-of info">
                {user.map((user, index)=>{
                    return(
                        <div className="table">
                            <span>name:<p>erfergdgfd</p></span>
                            <span>surname:<p>{user.surname}</p></span>
                            <span>Email:<p>{user.email}</p></span>
                            <span>contactNo:<p>{user.phone}</p></span>
                            <span>Time:<p>{user.date}</p></span>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
export default Landing;
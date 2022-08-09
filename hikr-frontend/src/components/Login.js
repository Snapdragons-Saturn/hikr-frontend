import { useEffect, useState } from "react";
import {Routes, Route, Link} from "react-router-dom"
import SignIn from "./Sign-In";
import SignUp from "./Sign-Up"

function Login (){
    return(
        <div className="loginPage">
            <Link className= "signInLink" to='/Sign-In'>
                <h1>Sign-In</h1>
            </Link>
            <Link className="signUpLink" to='/Sign-Up'>
                <h1>Sign-Up</h1>
            </Link>
            

        <Routes>
            <Route path='/Sign-In' element={<SignIn />} />
            <Route path="/Sign-Up" element={<SignUp />} />
        </Routes>
        </div>
        
    );
}

export default Login





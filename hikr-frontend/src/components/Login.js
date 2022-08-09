import { useEffect, useState } from "react";
import {Routes, Route, Link} from "react-router-dom"


function Login (){


    
    return(
        <div className="loginPage">


            <Link className="signUpLink" to='/Sign-Up'>
                <h1>Sign-Up</h1>
            </Link>
        
        </div>
        
    );
}

export default Login





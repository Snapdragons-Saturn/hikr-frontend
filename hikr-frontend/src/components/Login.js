import { useEffect, useState } from "react";
import {Routes, Route, Link} from "react-router-dom"
import { WindMillLoading } from 'react-loadingg';


function Login (){
//first add declare state for errors and submits
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setTimeout(() => setLoading(false), 500)
      }, [])


 // this function allows the error message to return as JSX
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
        <div className='error'>{errorMessages.message}</div>
    )


  
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
  
  };


    return(
        <div>
        {loading === true ? <div><WindMillLoading height="large"/></div> :
        <div className="login-Form">
            <div className="titleLogin">Sign In</div>
            <div className="login-form">
                    {isSubmitted ? <div>User is successfully logged in</div> : Login}
                </div>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                    <label>Username</label>
                    <input type='text' name='username' required />
                    {renderErrorMessage('uname')}
                </div>
                <div classname='input-container'>
                    <label>Password</label>
                    <input type='password' name='password' required />
                    {renderErrorMessage('password')}
                </div>
                <div className='button-container'>
                    <input type='submit'/> 
                    
                </div>
            </form>
            <Link className="signUpLink2" to='/Sign-Up'>
                <h1>Sign-Up</h1>
            </Link>
        
        </div>
        }
        </div>        
    );
}

export default Login





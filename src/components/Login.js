import { useEffect, useState } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import axios from 'axios';
var qs = require('qs');

function Login() {

  const initialSignIn = {
    username: ' ',
    password: ' '
  }

  //first add declare state for errors and submits
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [signIn, setSignIn] = useState(initialSignIn)



  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  // this function allows the error message to return as JSX
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const handleChange = (event) => {
    setSignIn({ ...signIn, [event.target.id]: event.target.value });
  };



  const handleSubmit = (event) => {
    event.preventDefault();



    const data = qs.stringify({
      'email': `${signIn.username}`,
      'password': `${signIn.password}`
    });

    const config = {
      method: 'post',
      url: 'https://desolate-ocean-19551.herokuapp.com/api/user/signin',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });


    //end of kick
  };

  return (
    <div>
      {loading === true ? (
        <div>
          {/* <WindMillLoading height="large" /> */}
        </div>
      ) : (
        <div className="login-Form">
          <div className="titleLogin">Sign In</div>
          <div className="login-form">
            {isSubmitted ? <div>User is successfully logged in</div> : Login}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username</label>
              <input
                id="username"
                onChange={handleChange}
                type="text"
                name="username"
                required
              />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password</label>
              <input
                id="password"
                onChange={handleChange}
                type="password"
                name="password"
                required
              />
              {renderErrorMessage("password")}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
          <Link className="signUpLink2" to="/Sign-Up">
            <h1>Sign-Up</h1>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Login
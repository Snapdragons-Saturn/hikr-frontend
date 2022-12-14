import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom'
import {Rings} from 'react-loader-spinner'

const Hikes = () => {
    const {region, _id} = useParams()
    const [hike, setHike] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
      }, [])

    useEffect(() => {
        axios.get(`https://desolate-ocean-19551.herokuapp.com/api/hikes/${_id}`).then((res) => {
            console.log(res.data)
            setHike(res.data);
        });
      }, []);
    

      return (
        <>
          {loading === true ? (
            <div>
             <div className='loading-icon'><Rings Audio color="#B2AC88" height={80} width={80}/></div>
            </div>
          ) : (
            <div>
              <div className="hikePageImgDiv">
              <h1 className="hikePageTitle">{hike.hikeName}</h1>
                <img className="hikePageImg" src={hike.img_url} alt="" />
              </div>
              <div className="hikeDiv">
                <p className="hikeParagraph">
                  State: {hike.stateAbb}
                  <br></br>
                  <br></br>
                  Hike Difficulty: {hike.hikeDiff}
                  <br></br>
                  <br></br>
                  Hike Length: {hike.hikeLen}
                  <br></br>
                  <br></br>
                  Hike Terrain: {hike.hikeTerrain}
                </p>
                <div className="hikeEditLinkDiv">
                <Link
                  className="hikeEditLink"
                  to={"/edithike/" + hike._id}
                >
                  {" "}
                  Edit Hike{" "}
                </Link>
                </div>
              </div>
            </div>
          )}
        </>
      );
    };

export default Hikes;

//at the top right, we'll have a button for login
//the login button will bring us to a userLogin component 
//--this component will contain username and password forms
//--at the bottom of this form, there should be a button to submit, as well as a button that says "sign up"
//the signup button should take the user to a sign up page, with a similar form as the userLogin page, but for creating a new user 
//when either the new user or the sign up forms are submitted, then they will link to the user component, where a user can find hike info that they've saved


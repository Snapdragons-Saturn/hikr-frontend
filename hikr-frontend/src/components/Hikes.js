import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom'
import { WindMillLoading } from 'react-loadingg';

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
        {loading === true ?  <div><WindMillLoading/></div> :
        <div>
            <h1>{hike.hikeName}</h1>
            <Link to = {"/edithike/" + region + '/' + hike._id}> Edit Hike </Link>
            <p>
                State: {hike.stateAbb}
                Hike Difficulty: {hike.hikeDiff}
                Hike Length: {hike.hikeLen}
                Hike Terrain: {hike.hikeTerrain}
            </p>
            <img src={hike.img_url} alt =''/>
            </div>
        }
        </> 
    );
};

export default Hikes;
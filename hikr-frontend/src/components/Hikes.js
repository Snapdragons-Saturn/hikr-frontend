import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom'

const Hikes = () => {
    const {_id} = useParams()
    const [region, setRegion] = useState([])

    useEffect(() => {
        axios.get(`https://desolate-ocean-19551.herokuapp.com/api/hikes/${_id}`).then((res) => {
            console.log(res.data)
            setRegion(res.data);
        });
      }, []);
    

    return (
        <div>
            <h1>{region.hikeName}</h1>
            <img src={region.img_url} alt =''/>
            <p>
                State: {region.stateAbb}
                Hike Difficulty: {region.hikeDiff}
                Hike Length: {region.hikeLen}
                Hike Terrain: {region.hikeTerrain}
            </p>
            <Link to = {"/edithike" + region._id}> Edit Hike </Link>
        </div>
    );
};

export default Hikes;
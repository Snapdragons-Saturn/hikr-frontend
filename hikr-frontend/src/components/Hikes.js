import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom'

const Hikes = () => {
    const {_id} = useParams()
    const [region, setRegion] = useState()

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
                state: {region.stateAbb}
                hike difficulty: {region.hikeDiff}
                hike length: {region.hikeLen}
                hike terrain: {region.hikeTerrain}
            </p>
            <Link to = {"/edithike" + region.hikeName}> Edit Hike </Link>
        </div>
    );
};

export default Hikes;
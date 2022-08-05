import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom'

const Hikes = () => {
    const {hikeName} = useParams()
    const [region, setRegion] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8080/api/hikes`).then((res) => {
            console.log(res)
            setRegion(res);
        });
      }, []);
    

    return (
        <div>
            <h1>{region.hikeName}</h1>
            <img src={region.img_url} alt =''/>
            <p>
                region: {region.region}
                state: {region.stateAbb}
                hike difficulty: {region.hikeDiff}
                hike length: {region.hikeLen}
                hike terrain: {region.hikeTerrain}
            </p>
            <Link to = {"/edithike" + {hikeName}}> Edit Hike </Link>
        </div>
    );
};

export default Hikes;
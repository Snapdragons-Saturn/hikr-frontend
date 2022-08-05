import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom'

const Hikes = () => {
    const {hikename} = useParams()
    const [region, setRegion] = useState()

    //get by id
    useEffect(() => {
        axios.get(``).then((res) => {
          setRegion(res.data);
        });
      }, [hikename]);
    
    
    return (
        <div>
            <h1>{hikename}</h1>
            <img src={region.img_url} alt =''/>
            <p>
                region: {region.region}
                state: {region.stateAbb}
                hike difficulty: {region.hikeDiff}
                hike length: {region.hikeLen}
                hike terrain: {region.hikeTerrain}
            </p>
            <Link to = "/edithike"> Edit Hike </Link>
        </div>
    );
};

export default Hikes;
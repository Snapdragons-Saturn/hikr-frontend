import React, {useEffect, useState} from 'react';
import axios from 'axios';

const AddHike = () => {
    const [hike, setHike] = useState([])

    const addHikes = () => {
        axios.post(`https://desolate-ocean-19551.herokuapp.com/api/hikes/`).then((res) => {
          console.log(res.data)
            setHike(res.data);
          });
      }

    return (
        <div>
            
        </div>
    );
};

export default AddHike;
import React, { useState, useEffect } from "react";
import axios from "axios";
import {  useNavigate, useParams } from "react-router-dom"

const EditHike = () => {
  const [region, setRegion] = useState([]);
  const [hike, setHike] = useState([])
  const {_id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://desolate-ocean-19551.herokuapp.com/api/hikes/${_id}`).then((res) => {
      console.log(res.data)
      setHike(res.data);
    });
  }, []);

  const handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`https://desolate-ocean-19551.herokuapp.com/api/hikes/${_id}`, region).then(() => {
        navigate('/region/' + hike.region)
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`https://desolate-ocean-19551.herokuapp.com/api/hikes/${_id}`, region).then(() => {
      navigate(`/hike/${_id}`)
    })
    
  };

  const handleChange = (event) => {
    setRegion({ ...region, [event.target.id]: event.target.value });
  };

  console.log(region)

  return <div>
    <h2>Editing {hike.hikeName}</h2>
    <form onSumbit={handleSubmit}>
        <label>State: </label>
        <input 
        id = "stateAbb"
        type="text"
        defaultValue={hike.stateAbb}
        onChange={handleChange}>
        </input>
        <label>Hike Name: </label>
        <input
        id = "hikeName" 
        type="text"
        defaultValue={hike.hikeName}
        onChange={handleChange}>
        </input>
        <label>Hike Difficulty: </label>
        <input 
        id="hikeDiff"
        type="text"
        defaultValue={hike.hikeDiff}
        onChange={handleChange}>
        </input>

        <label>Hike Distance: </label>
        <input 
        id="hikeLen"
        type="text"
        defaultValue={hike.hikeLen}
        onChange={handleChange}>
        </input>

        <label>Hike Terrain: </label>
        <input 
        id="hikeTerrain"
        type="text"
        defaultValue={hike.hikeTerrain}
        onChange={handleChange}>
        </input>


        <label>Hike Description: </label>
        <input 
        id="hikeDesc"
        type="text"
        defaultValue={hike.hikeDesc}
        onChange={handleChange}>
        </input>
    </form>
    <button onClick={handleDelete}>Delete Hike</button>
  </div>;
};

export default EditHike;

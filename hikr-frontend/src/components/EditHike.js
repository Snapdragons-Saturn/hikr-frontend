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
    axios.put(`https://desolate-ocean-19551.herokuapp.com/api/hikes/${_id}`, region);
  };

  const handleChange = (event) => {
    setRegion({ ...region, [event.target.id]: event.target.value });
  };

  console.log(region)

  return <div>
    <h2>Editing {hike.hikeName}</h2>
    <form onSumbit={handleSubmit}>
        <label></label>
        <input onChange={handleChange}></input>
    </form>
    <button onClick={handleDelete}>Delete Hike</button>
  </div>;
};

export default EditHike;

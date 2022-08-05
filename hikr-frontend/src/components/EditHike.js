import React, { useState, useEffect } from "react";
import axios from "axios";
import {  useNavigate, useParams } from "react-router-dom"

const EditHike = () => {
  const [region, setRegion] = useState();
  const [hike, setHike] = useState()
  const {hikeName} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(``).then((res) => {
      setHike(res.data);
    });
  }, [hikeName]);

  const handleDelete = (event) => {
    event.preventDefault();
    axios.delete(``, region).then(() => {
        navigate('/region/' + hike.region)
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(``, region);
  };

  const handleChange = (event) => {
    setRegion({ ...region, [event.target.id]: event.target.value });
  };

  return <div>
    <h2>Editing {hikeName}</h2>
    <form onSumbit={handleSubmit}>
        <label></label>
        <input> onChange={handleChange}</input>
    </form>
    <button onClick={handleDelete}></button>
  </div>;
};

export default EditHike;

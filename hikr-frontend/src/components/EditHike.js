import { useState } from "react";
import axios from "axios";

const EditHike = () => {
  const [region, setRegion] = useState();

  const handleDelete = (event) => {
    event.preventDefault();
    axios.delete(``, region);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(``, region);
  };

  const handleChange = (event) => {
    setRegion({ ...region, [event.target.id]: event.target.value });
  };

  return <div>
    
  </div>;
};

export default EditHike;

import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const AddHike = () => {
    const [region, setRegion] = useState([])
    const navigate = useNavigate()


    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post(`https://desolate-ocean-19551.herokuapp.com/api/hikes/`, region)
      .then((res) => {
        console.log(res.data)
        navigate(`/hike/${res.data._id}`)
      })
    };

    const handleChange = (event) => {
      setRegion({ ...region, [event.target.id]: event.target.value });
    };

    console.log(region)

    return (
      <div>
      <h2>Add a New Hike!</h2>
      <form onSubmit={handleSubmit}>
          <label>State: </label>
          <select 
          id = "stateAbb"
          type="text"
          onChange={handleChange}>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut </option>
          <option value="DE">Deleware</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconson</option>
          <option value="WY">Wyoming</option>
          </select>
          <label>Hike Name: </label>
          <input
          id = "hikeName" 
          type="text"
          onChange={handleChange}>
          </input>
          <label>Hike Difficulty: </label>
          <select
          id="hikeDiff"
          type="text"
          onChange={handleChange}>
          <option value = "Very Easy">Very Easy</option>
          <option value = "Easy">Easy</option>
          <option value = "Medium">Medium</option>
          <option value = "Hard">Hard</option>
          <option value = "Very Hard">Very Hard</option>
          </select>
  
          <label>Hike Distance: </label>
          <input 
          id="hikeLen"
          type="text"
          onChange={handleChange}>
          </input>
  
          <label>Hike Terrain: </label>
          <input 
          id="hikeTerrain"
          type="text"
          onChange={handleChange}>
          </input>
  
  
          <label>Hike Description: </label>
          <input 
          id="hikeDesc"
          type="text"
          onChange={handleChange}>
          </input>

          <label>Image URL: </label>
        <input 
        id="img_url"
        type="text"
        onChange={handleChange}>
        </input>
          <button type="submit">Create Hike</button>
      </form>
    </div>
    );
};

export default AddHike;

//add it, then do a get request getting it, then navigate to it
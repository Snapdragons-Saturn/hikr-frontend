import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Region = () => {
  const { name } = useParams;
  const [region, setRegion] = useState();
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    axios.get(``).then((res) => {
      setRegion(res.data);
    });
  }, [name]);

  const showEdit = () => {
    setEdit(false);
  };

  const showRegions = () => {
    setEdit(true);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    axios.delete(``, region);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(``, region);
  };

  let regionList = region.map((e) => {
    return (
        //display region info below
      <div className="regionMap" key="">
        {e.name}
        {}
        <img src="" alt="" />
        <button onClick = {showEdit}>Edit Hike</button>
      </div>
    );
  });
  // eslint-disable-next-line no-lone-blocks
  {
    edit ? (<div>{regionList}</div> 
    ) : ( 
    <div>
        
    </div>
    )
  }
};
export default Region;

//ok, what do I do here?
//need to grab the hikes from the database and set them to state
//for each one need to create a div with a description of the hike, possibly a picture?
//each one needs to have an edit button, when the edit button is clicked it brings up the edit page
//the edit page will have a button that allows users to delete the hike, and a form to edit a specific portion of the hike
//the bottom of the page will have a link that brings people to a add hike page
